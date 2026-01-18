import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function Home() {
  return (
    <div className="divide-y divide-border/60">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
