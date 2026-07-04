"use client";

import { useState, type FormEvent } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, isTextUIPart, type UIMessage } from "ai";

const initialMessages: UIMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    parts: [
      {
        type: "text",
        text: "Ask me anything about Ernesto's experience, stack, or projects.",
      },
    ],
  },
];

function messageText(message: UIMessage) {
  return message.parts
    .filter(isTextUIPart)
    .map((part) => part.text)
    .join("");
}

export default function ChatSection() {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    messages: initialMessages,
  });

  const isBusy = status === "submitted" || status === "streaming";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || isBusy) return;
    sendMessage({ text: input });
    setInput("");
  }

  return (
    <section id="chat" className="px-6 pt-5 pb-22 md:px-8">
      <div className="mx-auto max-w-295">
        <div className="mb-4.5 flex items-baseline justify-between">
          <h2 className="text-[1.4rem] font-[650] tracking-[-0.01em]">
            Ask about my work
          </h2>
          <span className="text-[13.5px] text-slate">
            Answers grounded in my résumé &amp; project notes
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_60px_-25px_rgba(10,15,30,0.35)] dark:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between border-b border-line bg-surface-2 px-5.5 py-4">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 ring-3 ring-emerald-500/20" />
              <div>
                <div className="text-sm font-semibold">Ernesto&apos;s AI</div>
                <div className="mt-0.5 text-xs text-slate">
                  Grounded in this site&apos;s content only
                </div>
              </div>
            </div>
            <span className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[11px] text-slate">
              open-source model
            </span>
          </div>

          <div className="flex min-h-55 flex-col gap-4 px-5.5 py-6.5">
            {messages.map((message) => {
              const text = messageText(message);
              if (!text) return null;

              return (
                <div
                  key={message.id}
                  className={
                    message.role === "user" ? "flex justify-end" : "flex justify-start"
                  }
                >
                  <div
                    className={
                      message.role === "user"
                        ? "max-w-[72%] rounded-xl rounded-br-[3px] border border-line bg-user-bubble px-3.75 py-3 text-sm leading-[1.55]"
                        : "max-w-[72%] rounded-xl rounded-bl-[3px] border border-line bg-surface-2 px-3.75 py-3 text-sm leading-[1.55]"
                    }
                  >
                    {text}
                  </div>
                </div>
              );
            })}

            {isBusy && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-xl rounded-bl-[3px] border border-line bg-surface-2 px-3.75 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-soft [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-soft [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-soft" />
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2.5 border-t border-line px-4.5 py-3.5"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isBusy}
              placeholder="Ask about a project, my stack, or how I work…"
              className="flex-1 rounded-[10px] border border-line-strong bg-bg px-3.5 py-2.75 font-mono text-[13.5px] text-ink placeholder:text-slate-soft focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={isBusy || !input.trim()}
              aria-label="Send"
              className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-[10px] bg-accent text-accent-ink disabled:opacity-50"
            >
              ↑
            </button>
          </form>
        </div>
        <p className="mt-3.5 font-mono text-[11.5px] text-slate-soft">
          runs on an open-source model via OpenRouter · grounded in the info above
        </p>
      </div>
    </section>
  );
}
