import * as React from "react";
import { NavBar } from "../components/sections/NavagationMenu";
import { IntroSection } from "../components/sections/IntroSection";
import { ExperienceSection } from "../components/sections/Experience";
import { ProjectsSection } from "../components/sections/Projects";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />
      <IntroSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
