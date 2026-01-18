import Link from "next/link";

import { Button } from "@/components/ui/button";
import { featuredProjects } from "@/content/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="flex flex-col gap-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A small selection focused on impact, performance, and product
              value.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="flex h-full flex-col gap-4 rounded-2xl border p-5"
            >
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </div>

              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Role:</span>{" "}
                  {project.role}
                </p>
                <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                  {project.impact.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <Link href={project.links.live}>Live</Link>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href={project.links.code}>Code</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
