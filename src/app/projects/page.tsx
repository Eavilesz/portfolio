import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("projects");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

const projectKeys = ["picselectr", "aiChat"] as const;

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const tWork = useTranslations("work");

  return (
    <main className="px-6 pt-16 pb-24 md:px-8">
      <div className="mx-auto max-w-295">
        <span className="mb-4 block font-mono text-xs tracking-[0.09em] text-accent-2 uppercase">
          {t("kicker")}
        </span>
        <h1 className="mb-3 text-[2rem] font-[650] tracking-[-0.02em] text-balance md:text-[2.5rem]">
          {t("title")}
        </h1>
        <p className="mb-12 max-w-115 text-lg leading-relaxed text-slate">
          {t("description")}
        </p>

        <div className="grid grid-cols-1 gap-4.5 md:grid-cols-2">
          {projectKeys.map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-line bg-surface p-5"
            >
              <span className="font-mono text-[10.5px] tracking-[0.06em] text-accent-2 uppercase">
                {tWork(`items.${key}.tag`)}
              </span>
              <h2 className="mt-2.5 mb-2 text-[15.5px] font-semibold tracking-[-0.01em]">
                {tWork(`items.${key}.title`)}
              </h2>
              <p className="text-[13px] leading-relaxed text-slate">
                {tWork(`items.${key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
