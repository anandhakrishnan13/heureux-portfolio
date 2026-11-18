import { Calendar, MapPin } from "lucide-react";

import { BulletList, MetaItem, Section, SectionHeading, TagList } from "@/components/section-parts";
import { Badge } from "@/components/ui/badge";
import { experience as job, sectionCopy, tenureLabel } from "@/lib/content";

const section = sectionCopy.experience;

type JobProject = (typeof job.projects)[keyof typeof job.projects];

function ProjectBlock({
  name,
  project,
  wide,
}: {
  name: string;
  project: JobProject;
  wide: boolean;
}) {
  return (
    <div
      className={`rounded-lg border border-border/60 bg-background/40 p-5 ${
        wide ? "md:col-span-2" : ""
      }`}
    >
      <h4 className="text-sm font-semibold text-cyan">{name}</h4>
      <div className="mt-3">
        <TagList tags={project.stack} />
      </div>
      <BulletList
        items={project.highlights}
        className={wide ? "mt-4 md:columns-2 md:gap-x-8" : "mt-4 space-y-2"}
        itemClassName={wide ? "mb-2 break-inside-avoid" : undefined}
      />
    </div>
  );
}

export function Experience() {
  const projects = Object.entries(job.projects);
  const firstIsWide = projects.length % 2 === 1;

  return (
    <Section id="experience" label={section.sectionLabel}>
      <SectionHeading section={section} spaced />

      <div className="mt-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 items-center rounded bg-white px-2 py-0.5">
                <img src="/flo.svg" alt={job.company} className="h-4 w-auto" />
              </div>
              <h3 className="text-xl font-semibold">{job.company}</h3>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <MetaItem icon={MapPin}>{job.location}</MetaItem>
              <MetaItem icon={Calendar}>{job.period}</MetaItem>
            </div>
          </div>
          <Badge
            variant="outline"
            className="border border-cyan/30 bg-cyan/5 px-3 py-1.5 text-xs font-normal text-cyan"
          >
            {job.role}
          </Badge>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {Object.entries(section.stats).map(([label, value]) => (
            <div key={label} className="rounded-lg border border-border bg-background/40 p-4">
              <div className="text-2xl font-bold text-cyan">
                {value === null ? tenureLabel(job.start) : value}
              </div>
              <div className="mt-1 text-left font-meta text-meta text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projects.map(([name, project], i) => (
            <ProjectBlock key={name} name={name} project={project} wide={firstIsWide && i === 0} />
          ))}
        </div>
      </div>
    </Section>
  );
}
