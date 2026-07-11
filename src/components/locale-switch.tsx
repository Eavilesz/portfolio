"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { setLocale } from "@/i18n/actions";
import { locales } from "@/i18n/config";

export default function LocaleSwitch() {
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex items-center rounded-full border border-line p-0.5 font-mono text-[11px]">
      {locales.map((candidate) => (
        <button
          key={candidate}
          type="button"
          disabled={isPending || candidate === locale}
          aria-pressed={candidate === locale}
          onClick={() => startTransition(() => setLocale(candidate))}
          className={
            candidate === locale
              ? "rounded-full bg-chip-bg px-2 py-1 font-semibold text-ink"
              : "rounded-full px-2 py-1 text-slate transition-colors hover:text-ink disabled:opacity-60"
          }
        >
          {candidate.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
