import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <span className="rounded-full border px-3 py-1">MERN Instructor</span>
          <span className="rounded-full border px-3 py-1">
            Frontend Engineer
          </span>
          <span className="rounded-full border px-3 py-1">AI‑Ready UI</span>
        </div>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Ernesto Aviles
          <span className="block text-muted-foreground">
            Frontend Engineer (React/Next.js)
          </span>
        </h1>

        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          I build fast, accessible, production‑quality web experiences and teach
          the MERN stack. Focused on elegant UI, strong DX, and AI‑ready
          interfaces that help products scale.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="#contact">Contact</Link>
          </Button>
          <Link
            href="/resume.pdf"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Download Resume
          </Link>
        </div>

        <p className="text-sm text-muted-foreground">
          React · Next.js · TypeScript · UI Systems · API Integration
        </p>
      </div>
    </section>
  );
}
