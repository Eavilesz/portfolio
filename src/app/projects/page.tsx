import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Ernesto",
  description: "Selected projects — real, shipped work, with more case studies on the way.",
};

const projects = [
  {
    tag: "Full-stack",
    title: "Picselectr",
    description:
      "A photo-selection tool for photographers — clients pick their event photos via a PIN-protected link. Live with a real studio's clients.",
  },
  {
    tag: "Applied AI",
    title: "This portfolio's AI chat",
    description:
      "The chat on this site, grounded strictly in my résumé data — a working example of the applied-AI integration work I do, not just a claim.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="px-6 pt-16 pb-24 md:px-8">
      <div className="mx-auto max-w-295">
        <span className="mb-4 block font-mono text-xs tracking-[0.09em] text-accent-2 uppercase">
          Selected work
        </span>
        <h1 className="mb-3 text-[2rem] font-[650] tracking-[-0.02em] text-balance md:text-[2.5rem]">
          A few things I&apos;ve built.
        </h1>
        <p className="mb-12 max-w-115 text-lg leading-relaxed text-slate">
          Real, shipped work — full case studies are on the way.
        </p>

        <div className="grid grid-cols-1 gap-4.5 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-line bg-surface p-5"
            >
              <span className="font-mono text-[10.5px] tracking-[0.06em] text-accent-2 uppercase">
                {project.tag}
              </span>
              <h2 className="mt-2.5 mb-2 text-[15.5px] font-semibold tracking-[-0.01em]">
                {project.title}
              </h2>
              <p className="text-[13px] leading-relaxed text-slate">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
