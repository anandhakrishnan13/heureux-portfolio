import { Cloud, Code2, Database, Layers, Server, Wrench, type LucideIcon } from "lucide-react";

import { IconTile, Reveal, Section, SectionHeading } from "@/components/section-parts";
import { Badge } from "@/components/ui/badge";
import { chip } from "@/lib/recipes";
import { sectionCopy, stack } from "@/lib/content";
import iconMap from "@/data/icons";

const LAYER_ICONS: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Data: Database,
  Tools: Wrench,
  Infrastructure: Cloud,
};

type Layer = keyof typeof stack;

export function Stack() {
  const section = sectionCopy.stack;
  const layers = Object.keys(stack) as Layer[];

  return (
    <Section id="stack" label={section.sectionLabel}>
      <SectionHeading section={section} />
      <p className="mt-2 max-w-lg text-balance text-left text-sm text-muted-foreground">
        {section.subtitle}
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {layers.map((layer, idx) => (
          <Reveal key={layer} delay={idx * 0.08} className="panel panel-hover p-6">
            <div className="flex items-center gap-3">
              <IconTile icon={LAYER_ICONS[layer] ?? Layers} />
              <div>
                <div className="font-meta text-meta text-muted-foreground">0{idx + 1}</div>
                <div className="text-base font-semibold">{layer}</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3">
              {Object.entries(stack[layer]).map(([name, icon]) => {
                const SkillIcon = icon ? iconMap[icon] : null;
                return (
                  <Badge
                    key={name}
                    variant="outline"
                    className={`${chip} w-full justify-start gap-2 bg-background/60 text-foreground`}
                  >
                    {SkillIcon ? <SkillIcon className="size-4" /> : <span className="size-4" />}
                    {name}
                  </Badge>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
