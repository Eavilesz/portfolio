import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Ernesto",
  description: "Selected projects — placeholder content, case studies coming soon.",
};

const projects = [
  {
    tag: "AI Automation",
    title: "Ticket Triage System",
    description:
      "An AI-powered system that classifies and routes support tickets, cutting response time by 40%.",
  },
  {
    tag: "AI Search",
    title: "DocQL",
    description:
      "A chat-based query layer over internal docs, grounded with citations back to source.",
  },
  {
    tag: "Full-stack",
    title: "PixelForge",
    description:
      "A full-stack SaaS for on-demand image pipelines, from queueing to billing.",
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
          Placeholder projects for now — full case studies are on the way.
        </p>

        <div className="grid grid-cols-1 gap-4.5 md:grid-cols-3">
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
