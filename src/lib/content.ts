import data from "@/data/index.json";
import type { Project } from "@/data/types";

/**
 * Typed access to src/data/index.json. Components import from here instead of
 * reaching into the raw JSON, so the shape of the content lives in one place.
 */

export const siteMeta = data.meta;
export const hero = data.hero;
export const sectionCopy = data.sections;
export const stack = data.stack;
export const projects: Project[] = data.projects;
export const experience = data.experience;
export const education = data.education;
export const volunteer = data.volunteer;

export type ContactLink = {
  kind: "email" | "phone" | "linkedin" | "github";
  label: string;
  href: string;
  external?: boolean;
};

const contactCopy = data.sections.contact;

/** Contact channels, shared by the Contact section and the resume header. */
export const contactLinks: ContactLink[] = [
  { kind: "email", label: contactCopy.email, href: `mailto:${contactCopy.email}` },
  { kind: "phone", label: contactCopy.phoneLabel, href: contactCopy.phoneHref },
  {
    kind: "linkedin",
    label: contactCopy.linkedinLabel,
    href: contactCopy.linkedinUrl,
    external: true,
  },
  {
    kind: "github",
    label: contactCopy.githubLabel,
    href: contactCopy.githubUrl,
    external: true,
  },
];

/** "1 yr 3 mo" style tenure since an ISO start date. */
export function tenureLabel(start: string): string {
  const from = new Date(start);
  const now = new Date();
  const months = (now.getFullYear() - from.getFullYear()) * 12 + (now.getMonth() - from.getMonth());
  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem > 0 ? `${years} yr ${rem} mo` : `${years} yr`;
}
