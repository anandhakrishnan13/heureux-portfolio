import { ArrowUpRight, Globe } from "lucide-react";

import { Reveal, Section, SectionHeading, TagList } from "@/components/section-parts";
import { projects, sectionCopy } from "@/lib/content";
import { iconLink, prose } from "@/lib/recipes";
import type { Project } from "@/data/types";

const section = sectionCopy.projects;

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-1 flex shrink-0 items-center gap-2">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${section.liveLabel} for ${project.name}`}
          title={`Open ${section.liveLabel}`}
          className={iconLink}
        >
          <Globe className="size-3.5" />
        </a>
      )}
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${section.sourceLabel} for ${project.name}`}
        title={`Open ${section.sourceLabel}`}
        className={iconLink}
      >
        <ArrowUpRight className="size-3.5" />
      </a>
    </div>
  );
}

/**
 * A "wide" card spans both columns (used for an odd last project) and moves
 * the tags and links into a side column instead of the footer.
 */
function ProjectCard({ project, index, wide }: { project: Project; index: number; wide: boolean }) {
  const links = <ProjectLinks project={project} />;

  return (
    <Reveal
      as="article"
      delay={index * 0.06}
      amount={0.2}
      className={`panel panel-hover group relative flex flex-col p-6 ${wide ? "md:col-span-2" : ""}`}
    >
      <div className={wide ? "md:flex md:items-start md:gap-12" : "flex flex-1 flex-col"}>
        <div className={wide ? "md:min-w-0 md:flex-1" : "pb-5"}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="font-meta text-meta text-cyan">{project.id}</div>
              <h3 className="mt-2 text-2xl font-semibold">{project.name}</h3>
            </div>
            {!wide && links}
          </div>

          <p className={`mt-4 text-sm text-muted-foreground ${prose}`}>{project.action}</p>
        </div>

        <div
          className={
            wide
              ? "mt-5 flex flex-col justify-center gap-4 md:mt-0 md:w-[320px] md:shrink-0 md:self-stretch md:border-l md:border-border/60 md:pl-8"
              : "mt-auto flex flex-wrap items-center gap-3 border-t border-border/60 pt-4"
          }
        >
          <div className={wide ? "flex items-start justify-between gap-3" : "contents"}>
            <TagList tags={project.stack} />
            {wide && links}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const lastIsOdd = projects.length % 2 === 1;

  return (
    <Section id="projects" label={section.sectionLabel}>
      <SectionHeading section={section} spaced />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            wide={lastIsOdd && i === projects.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
