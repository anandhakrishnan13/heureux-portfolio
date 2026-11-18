/** Every section the page knows about, in document order. */
const ALL_SECTIONS = [
  "hero",
  "stack",
  "experience",
  "projects",
  "education",
  "volunteer",
  "contact",
] as const;

export type SectionId = (typeof ALL_SECTIONS)[number];

/** Sections that are built but hidden. Remove an id here to bring its section back. */
const DISABLED: readonly SectionId[] = ["volunteer"];

/** Sections that are rendered, in order. Drives the page, the nav dock and the focus effect. */
export const SECTION_IDS: readonly SectionId[] = ALL_SECTIONS.filter(
  (id) => !DISABLED.includes(id),
);

/** "01", "02", ... for a rendered section, so labels renumber when sections are toggled. */
export function sectionNumber(id: SectionId): string {
  return String(SECTION_IDS.indexOf(id) + 1).padStart(2, "0");
}
