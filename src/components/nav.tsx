import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-295 items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span className="flex h-6.5 w-6.5 items-center justify-center rounded-[7px] bg-accent font-mono text-[11px] font-bold text-accent-ink">
            EA
          </span>
          Ernesto Avilés
        </Link>

        <nav className="hidden items-center gap-7 text-[13.5px] text-slate md:flex">
          <Link href="/#chat" className="transition-colors hover:text-ink">
            Ask the AI
          </Link>
          <Link href="/projects" className="transition-colors hover:text-ink">
            Work
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-ink">
            Contact
          </Link>
        </nav>

        <a
          href="/Ernesto Aviles - Resume.pdf"
          download="Ernesto Aviles - Resume.pdf"
          className="rounded-full border border-line-strong px-3.5 py-2 text-[13px] font-semibold text-ink"
        >
          Résumé ↗
        </a>
      </div>
    </header>
  );
}
