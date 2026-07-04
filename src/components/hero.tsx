const stack = ["Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-18">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -inset-x-[10%] h-120"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 60% 100% at 30% 20%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 100% at 30% 20%, black 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-295 px-6 md:px-8">
        <div className="max-w-165">
          <span className="mb-4.5 block font-mono text-xs tracking-[0.09em] text-accent uppercase">
            AI Enablement Engineer
          </span>
          <h1 className="mb-5 text-[2.3rem] leading-[1.08] font-[650] tracking-[-0.025em] text-balance md:text-6xl">
            I connect language models to systems that actually ship.
          </h1>
          <p className="mb-8 max-w-115 text-lg leading-relaxed text-slate">
            Full-stack engineer by background, now building toward the
            unglamorous work that makes AI useful in production — the
            tooling, integrations, and workflows that connect models to real
            systems.
          </p>

          <div className="mb-8.5 flex flex-wrap items-center gap-3.5">
            <a
              href="#chat"
              className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-3 text-[14.5px] font-semibold text-accent-ink"
            >
              Chat with my AI ↓
            </a>
            <a
              href="/projects"
              className="rounded-[10px] border border-line-strong px-4.5 py-3 text-[14.5px] font-semibold text-ink"
            >
              See projects →
            </a>
          </div>

          <ul className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-chip-bg px-2.5 py-1.5 font-mono text-[11.5px] text-slate"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
