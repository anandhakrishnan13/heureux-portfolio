import { useState, type CSSProperties, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { MotionConfig } from "motion/react";

import { NavDock } from "@/components/nav-dock";
import { ResumePanel } from "@/components/resume-panel";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Volunteer } from "@/components/sections/volunteer";
import { useActiveSection } from "@/hooks/use-active-section";
import { useSectionFocus } from "@/hooks/use-section-focus";
import { RESUME_PANEL_WIDTH } from "@/lib/constants";
import { siteMeta } from "@/lib/content";
import { SECTION_IDS, type SectionId } from "@/lib/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: siteMeta.title }, { name: "description", content: siteMeta.description }],
  }),
  component: Index,
});

function Index() {
  const active = useActiveSection();
  const [resumeOpen, setResumeOpen] = useState(false);
  useSectionFocus(active);

  // Which sections render, and in what order, is decided by SECTION_IDS.
  const sections: Record<SectionId, ReactNode> = {
    hero: <Hero resumeOpen={resumeOpen} onToggleResume={() => setResumeOpen((v) => !v)} />,
    stack: <Stack />,
    experience: <Experience />,
    projects: <Projects />,
    education: <Education />,
    volunteer: <Volunteer />,
    contact: <Contact />,
  };

  return (
    <MotionConfig reducedMotion="user">
      <div
        className="relative"
        style={{ "--resume-w": resumeOpen ? RESUME_PANEL_WIDTH : "0px" } as CSSProperties}
      >
        <ResumePanel open={resumeOpen} onClose={() => setResumeOpen(false)} />
        <NavDock active={active} />
        <main className="scroll-smooth transition-[margin] duration-300 ease-out md:ml-[var(--resume-w)]">
          {SECTION_IDS.map((id) => (
            <div key={id} className="contents">
              {sections[id]}
            </div>
          ))}
        </main>
      </div>
    </MotionConfig>
  );
}
