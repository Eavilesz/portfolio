import Link from "next/link";
import { useTranslations } from "next-intl";

const projectKeys = ["picselectr", "aiChat"] as const;

const projectLinks: Record<(typeof projectKeys)[number], string> = {
  picselectr: "https://github.com/Eavilesz/picselectr#picselectr",
  aiChat: "https://github.com/Eavilesz/portfolio#ernesto-avil%C3%A9s--portfolio",
};

export default function WorkTeaser() {
  const t = useTranslations("work");

  return (
    <section id="work" className="px-6 pt-5 pb-24 md:px-8">
      <div className="mx-auto max-w-295">
        <div className="mb-4.5 flex items-baseline justify-between">
          <h2 className="text-[1.4rem] font-[650] tracking-[-0.01em]">
            {t("heading")}
          </h2>
          <Link href="/projects" className="text-[13.5px] font-semibold text-accent-2 whitespace-nowrap">
            {t("viewAll")}
          </Link>
        </div>

        <div className="mt-4.5 grid grid-cols-1 gap-4.5 md:grid-cols-2">
          {projectKeys.map((key) => {
            const href = projectLinks[key];
            const isExternal = href.startsWith("http");
            return (
            <Link
              key={key}
              href={href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
            >
              <span className="font-mono text-[10.5px] tracking-[0.06em] text-accent-2 uppercase">
                {t(`items.${key}.tag`)}
              </span>
              <h3 className="mt-2.5 mb-2 text-[15.5px] font-semibold tracking-[-0.01em]">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate">
                {t(`items.${key}.description`)}
              </p>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
