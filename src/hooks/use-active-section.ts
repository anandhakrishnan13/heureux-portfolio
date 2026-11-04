import { useEffect, useState } from "react";

/** Sections in document order. Shared by the page focus effect and the nav dock. */
export const SECTION_IDS = [
  "hero",
  "stack",
  "experience",
  "projects",
  "education",
  "volunteer",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

const PIVOT = 0.35;

/**
 * The section being read is the one under the upper third of the viewport.
 * At the bottom of the page the last section wins, since it can never reach the pivot.
 */
function readActiveSection(): SectionId {
  const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(
    (el): el is HTMLElement => el !== null,
  );
  if (!els.length) return SECTION_IDS[0];

  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) return SECTION_IDS[SECTION_IDS.length - 1];

  const pivot = window.scrollY + window.innerHeight * PIVOT;
  let index = 0;
  for (let i = 0; i < els.length; i++) {
    if (els[i].getBoundingClientRect().top + window.scrollY <= pivot) index = i;
  }
  return SECTION_IDS[index];
}

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>(SECTION_IDS[0]);

  useEffect(() => {
    const apply = () => setActive(readActiveSection());

    // Sections change height as fonts and images load, so re-evaluate on layout changes too.
    const observer = new ResizeObserver(apply);
    observer.observe(document.body);

    apply();
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    window.addEventListener("load", apply);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
      window.removeEventListener("load", apply);
    };
  }, []);

  return active;
}
