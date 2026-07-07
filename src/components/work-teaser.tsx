import Link from "next/link";

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

export default function WorkTeaser() {
  return (
    <section id="work" className="px-6 pt-5 pb-24 md:px-8">
      <div className="mx-auto max-w-295">
        <div className="mb-4.5 flex items-baseline justify-between">
          <h2 className="text-[1.4rem] font-[650] tracking-[-0.01em]">
            Selected work
          </h2>
          <Link href="/projects" className="text-[13.5px] font-semibold text-accent-2 whitespace-nowrap">
            View all projects →
          </Link>
        </div>

        <div className="mt-4.5 grid grid-cols-1 gap-4.5 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              href="/projects"
              className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong"
            >
              <span className="font-mono text-[10.5px] tracking-[0.06em] text-accent-2 uppercase">
                {project.tag}
              </span>
              <h3 className="mt-2.5 mb-2 text-[15.5px] font-semibold tracking-[-0.01em]">
                {project.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-slate">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
