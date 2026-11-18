import { useEffect } from "react";
import { SECTION_IDS, type SectionId } from "@/lib/sections";

/** Only the active section stays sharp; its immediate neighbours get the `blur-next` class. */
export function useSectionFocus(active: SectionId) {
  useEffect(() => {
    const activeIndex = SECTION_IDS.indexOf(active);
    SECTION_IDS.forEach((id, index) => {
      document
        .getElementById(id)
        ?.classList.toggle("blur-next", Math.abs(index - activeIndex) === 1);
    });
  }, [active]);
}
