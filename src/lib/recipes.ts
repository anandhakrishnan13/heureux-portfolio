/* Shared class recipes for the shadcn primitives used across sections. */

export const ctaPrimary =
  "h-auto justify-center gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-medium text-cyan-foreground transition hover:bg-cyan hover:brightness-110";

export const ctaSecondary =
  "h-auto justify-center gap-2 rounded-lg border-border bg-surface/60 px-5 py-3 text-sm font-normal text-foreground shadow-none transition hover:border-cyan/40 hover:bg-surface/60 hover:text-cyan";

/** Skill chips in the Stack section. */
export const chip = "border-0 px-3 py-1.5 text-xs font-normal ring-1 ring-border";

/** Small monospace-style tech tags on project and experience cards. */
export const tag =
  "border-0 px-2 py-1 font-meta text-[length:var(--text-tag)] font-normal ring-1 ring-border";

/** Icon-only square link button on project cards. */
export const iconLink =
  "relative inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition before:absolute before:-inset-2 before:content-[''] hover:border-cyan/40 hover:text-cyan";

/** Left-aligned, hyphenated body copy used for long descriptions. */
export const prose = "text-left hyphens-auto text-pretty [hyphenate-limit-chars:10_4_4]";
