import { Calendar, Heart } from "lucide-react";

import { BulletList, IconTile, Reveal, Section, SectionHeading } from "@/components/section-parts";
import { sectionCopy, volunteer } from "@/lib/content";

/** Hidden by default. Bring it back by removing "volunteer" from DISABLED in use-active-section.ts. */
export function Volunteer() {
  const section = sectionCopy.volunteer;

  return (
    <Section id="volunteer" label={section.sectionLabel}>
      <SectionHeading section={section} spaced />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {volunteer.map((v, i) => (
          <Reveal key={v.organization} delay={i * 0.1} className="panel panel-hover p-6">
            <div className="flex items-start gap-3">
              <IconTile icon={Heart} />
              <div className="min-w-0">
                <h3 className="text-base font-semibold">{v.organization}</h3>
                <p className="mt-1 text-left text-sm text-muted-foreground">{v.role}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="size-3" />
                  {v.period}
                </span>
                <BulletList items={v.highlights} className="mt-4 space-y-2" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
