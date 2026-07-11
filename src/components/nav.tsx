import Link from "next/link";
import { useTranslations } from "next-intl";
import LocaleSwitch from "@/components/locale-switch";

export default function Nav() {
  const t = useTranslations("nav");

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
            {t("askAi")}
          </Link>
          <Link href="/projects" className="transition-colors hover:text-ink">
            {t("work")}
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-ink">
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitch />
          <a
            href="/Ernesto Aviles - Resume.pdf"
            download="Ernesto Aviles - Resume.pdf"
            className="flex items-center gap-1.5 rounded-full border border-line-strong px-3.5 py-2 text-[13px] font-semibold text-ink"
          >
            {t("resume")}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="shrink-0"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
