import { Calendar, GraduationCap, MapPin } from "lucide-react";

import { IconTile, MetaItem, Reveal, Section, SectionHeading } from "@/components/section-parts";
import { Badge } from "@/components/ui/badge";
import { education, sectionCopy } from "@/lib/content";

export function Education() {
  const section = sectionCopy.education;

  return (
    <Section id="education" label={section.sectionLabel}>
      <SectionHeading section={section} spaced />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 0.1} className="panel panel-hover p-6">
            <div className="flex items-start gap-3">
              <IconTile icon={GraduationCap} />
              <div className="min-w-0">
                <h3 className="text-base font-semibold">{edu.school}</h3>
                <p className="mt-1 text-left text-sm text-muted-foreground">{edu.degree}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                  <Badge
                    variant="outline"
                    className="border border-border/60 bg-background/60 px-2 py-1 text-[length:var(--text-tag)] font-normal text-muted-foreground"
                  >
                    {edu.score}
                  </Badge>
                  <MetaItem icon={Calendar}>{edu.period}</MetaItem>
                  <MetaItem icon={MapPin}>{edu.location}</MetaItem>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
