import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import {
  streamText,
  convertToModelMessages,
  isTextUIPart,
  type UIMessage,
} from "ai";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const maxDuration = 30;

const openrouter = createOpenAICompatible({
  name: "openrouter",
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const MODEL = "anthropic/claude-haiku-5.5";

// The full history is re-sent (and billed) on every request, so keep it bounded.
const MAX_MESSAGES = 20;
const MAX_USER_CHARS = 500;

function json(body: unknown, status: number, headers?: HeadersInit) {
  return Response.json(body, { status, headers });
}

export async function POST(req: Request) {
  const limit = await checkRateLimit(getClientIp(req));
  if (!limit.ok) {
    return json({ error: "rate_limited" }, 429, {
      "Retry-After": String(limit.retryAfter),
    });
  }

  const { messages, locale }: { messages: UIMessage[]; locale?: string } =
    await req.json();

  const lastUserText = messages
    .findLast((m) => m.role === "user")
    ?.parts.filter(isTextUIPart)
    .map((p) => p.text)
    .join("");

  if (messages.length > MAX_MESSAGES || (lastUserText?.length ?? 0) > MAX_USER_CHARS) {
    return json({ error: "message_too_long" }, 400);
  }

  const profile = await readFile(
    path.join(process.cwd(), "content", "profile.md"),
    "utf-8",
  );

  const result = streamText({
    model: openrouter(MODEL),
    temperature: 0.3,
    maxOutputTokens: 600,
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
