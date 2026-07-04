export default function ChatSection() {
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
            <div className="flex justify-end">
              <div className="max-w-[72%] rounded-xl rounded-br-[3px] border border-line bg-user-bubble px-3.75 py-3 text-sm leading-[1.55]">
                What&apos;s your experience shipping AI features to
                production, not just prototypes?
              </div>
            </div>
            <div className="flex justify-start">
              <div className="max-w-[72%] rounded-xl rounded-bl-[3px] border border-line bg-surface-2 px-3.75 py-3 text-sm leading-[1.55]">
                I&apos;ve taken LLM-backed features end-to-end — from prompt
                design to shipping and monitoring in production. Most
                recently, an AI-powered ticket triage system that cut
                first-response time by 40%.
                <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg border border-line-strong px-2.5 py-1.5 font-mono text-xs text-accent">
                  → Ticket Triage System
                </span>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[72%] rounded-xl rounded-br-[3px] border border-line bg-user-bubble px-3.75 py-3 text-sm leading-[1.55]">
                Nice — what&apos;s your full-stack background look like?
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 border-t border-line px-4.5 py-3.5">
            <div className="flex-1 rounded-[10px] border border-line-strong bg-bg px-3.5 py-2.75 font-mono text-[13.5px] text-slate-soft">
              Ask about a project, my stack, or how I work…
            </div>
            <div
              aria-hidden
              className="flex h-9.5 w-9.5 flex-shrink-0 items-center justify-center rounded-[10px] bg-accent text-accent-ink"
            >
              ↑
            </div>
          </div>
        </div>
        <p className="mt-3.5 font-mono text-[11.5px] text-slate-soft">
          runs on an open-source model · no data leaves this session
        </p>
      </div>
    </section>
  );
}
