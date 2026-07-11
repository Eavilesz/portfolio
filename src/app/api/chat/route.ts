import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const maxDuration = 30;

const openrouter = createOpenAICompatible({
  name: "openrouter",
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const MODEL = "openai/gpt-oss-20b:free";

export async function POST(req: Request) {
  const { messages, locale }: { messages: UIMessage[]; locale?: string } =
    await req.json();

  const profile = await readFile(
    path.join(process.cwd(), "content", "profile.md"),
    "utf-8",
  );

  const result = streamText({
    model: openrouter(MODEL),
    temperature: 0.3,
    system: [
      "You are Ernesto's AI, embedded on his portfolio site to answer questions from recruiters and hiring managers about his work and experience.",
      "Answer only using the information below. If something isn't covered, say you don't have that information rather than guessing or making it up.",
      "Keep answers concise and conversational, like a knowledgeable colleague, not a résumé readout.",
      "If asked about anything unrelated to Ernesto's professional background, politely decline and steer back to his work.",
      locale === "es"
        ? "The visitor is browsing the site in Spanish. Respond in Spanish unless they write to you in another language."
        : "Respond in the language the visitor writes in.",
      "",
      "--- ERNESTO'S INFO ---",
      profile,
    ].join("\n"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
