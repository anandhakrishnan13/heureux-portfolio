import { ArrowUpRight, Download, FileText } from "lucide-react";

import { SectionLabel } from "@/components/section-parts";
import { Button } from "@/components/ui/button";
import { RESUME_PDF_URL } from "@/lib/constants";
import { hero } from "@/lib/content";
import { ctaPrimary, ctaSecondary, prose } from "@/lib/recipes";
import { cn, scrollToSection } from "@/lib/utils";

/** Staggered CSS entrance so the hero never waits on hydration. */
const rise = (delay: number) => ({ animationDelay: `${delay}s` });

export function Hero({
  resumeOpen,
  onToggleResume,
}: {
  resumeOpen: boolean;
  onToggleResume: () => void;
}) {
  return (
    <section id="hero" className="snap-section relative px-6 py-18">
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="min-w-0">
          <SectionLabel id="hero" name={hero.sectionLabel} />

          <h1
            className="anim-rise mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
            style={rise(0.1)}
          >
            {hero.name}
          </h1>

          <p className="anim-rise mt-3 text-lg font-medium text-cyan md:text-xl" style={rise(0.2)}>
            {hero.role}
          </p>

          <p
            className={`anim-rise mt-5 max-w-2xl text-base text-muted-foreground ${prose}`}
            style={rise(0.3)}
          >
            {hero.bio}
          </p>

          <div
            className="anim-rise mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
            style={rise(0.4)}
          >
            <Button asChild className={cn(ctaPrimary, "col-span-2 sm:col-auto")}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                {hero.cta}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className={cn(ctaSecondary, "order-last col-span-2 sm:order-none sm:col-auto")}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                {hero.contactCta}
              </a>
            </Button>
            <Button
              type="button"
              variant="outline"
              className={ctaSecondary}
              onClick={onToggleResume}
              aria-expanded={resumeOpen}
            >
              <FileText className="size-4" />
              View resume
            </Button>
            <Button asChild variant="outline" className={ctaSecondary}>
              <a href={RESUME_PDF_URL} download>
                <Download className="size-4" />
                Download resume
              </a>
            </Button>
          </div>
        </div>

        <div className="anim-right order-first md:order-none" style={rise(0.2)}>
          <img
            src={hero.photo}
            alt={hero.photoAlt}
            width={256}
            height={256}
            className="size-28 rounded-full border border-border object-cover sm:size-40 md:size-64"
          />
        </div>
      </div>
    </section>
  );
}
