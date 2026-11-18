import type { ComponentType, ReactNode } from "react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { prose, tag } from "@/lib/recipes";
import { sectionNumber, type SectionId } from "@/lib/sections";
import { cn } from "@/lib/utils";

/* Small building blocks shared by every section of the page. */

/** Page-width section wrapper with the numbered label ("03 ── EXPERIENCE") on top. */
export function Section({
  id,
  label,
  className,
  innerClassName,
  children,
}: {
  id: SectionId;
  label: string;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("snap-section relative px-6 py-18", className)}>
      <div className={cn("mx-auto flex w-full max-w-6xl flex-col", innerClassName)}>
        <SectionLabel id={id} name={label} />
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({ id, name }: { id: SectionId; name: string }) {
  return (
    <div className="flex items-center gap-3 font-meta text-meta text-muted-foreground">
      <span className="text-cyan">{sectionNumber(id)}</span>
      <Separator className="h-px w-8 bg-border" />
      <span>{name}</span>
    </div>
  );
}

/** Heading with one highlighted word. `highlight` must appear inside `heading`. */
export function SectionHeading({
  section,
  spaced,
  className = "text-3xl md:text-5xl",
}: {
  section: { heading: string; highlight: string };
  /** Adds the standard gap below the label. */
  spaced?: boolean;
  className?: string;
}) {
  const [before, after] = section.heading.split(section.highlight);
  return (
    <h2 className={cn("font-bold tracking-tight", spaced && "mt-6", className)}>
      {before}
      <span className="text-cyan">{section.highlight}</span>
      {after}
    </h2>
  );
}

/** Fades and rises into view once. Use `delay` to stagger siblings. */
export function Reveal({
  as = "div",
  delay = 0,
  amount = 0.3,
  className,
  children,
}: {
  as?: "div" | "article";
  delay?: number;
  amount?: number;
  className?: string;
  children: ReactNode;
}) {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

/** Rounded square holding a section icon. */
export function IconTile({ icon: Icon }: { icon: ComponentType<{ className?: string }> }) {
  return (
    <div className="grid size-9 shrink-0 place-items-center rounded-md bg-cyan/10 text-cyan ring-1 ring-cyan/30">
      <Icon className="size-4" />
    </div>
  );
}

export function BulletList({
  items,
  className,
  itemClassName,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
}) {
  return (
    <ul className={className}>
      {items.map((text) => (
        <li
          key={text}
          className={cn(
            prose,
            "flex gap-2 text-xs leading-relaxed text-muted-foreground",
            itemClassName,
          )}
        >
          <span className="mt-1 size-1 shrink-0 rounded-full bg-cyan/60" />
          {text}
        </li>
      ))}
    </ul>
  );
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <Badge
          key={t}
          variant="outline"
          className={`${tag} bg-background/60 text-muted-foreground`}
        >
          {t}
        </Badge>
      ))}
    </div>
  );
}

/** Small muted icon + text pair ("📅 Aug 2025", "📍 Mumbai"). */
export function MetaItem({
  icon: Icon,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <span className="flex items-center gap-1 text-muted-foreground">
      <Icon className="size-3" />
      {children}
    </span>
  );
}
