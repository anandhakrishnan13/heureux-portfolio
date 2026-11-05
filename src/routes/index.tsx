import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, MotionConfig } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code2,
  Database,
  Cloud,
  Server,
  Wrench,
  Layers,
  MapPin,
  Calendar,
  Heart,
  GraduationCap,
} from "lucide-react";
import { NavDock } from "@/components/nav-dock";
import { SECTION_IDS, useActiveSection } from "@/hooks/use-active-section";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import data from "@/data/index.json";
import iconMap from "@/data/icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: data.meta.title },
      {
        name: "description",
        content: data.meta.description,
      },
    ],
  }),
  component: Index,
});

type Section = {
  sectionLabel: string;
  heading: string;
  highlight: string;
};

/* Shared class recipes for the shadcn primitives used across sections. */
const ctaPrimary =
  "h-auto gap-2 rounded-lg bg-cyan px-5 py-3 text-sm font-medium text-cyan-foreground transition hover:bg-cyan hover:brightness-110";
const ctaSecondary =
  "h-auto gap-2 rounded-lg border-border bg-surface/60 px-5 py-3 text-sm font-normal text-foreground shadow-none transition hover:border-cyan/40 hover:bg-surface/60 hover:text-cyan";
const chip = "border-0 px-3 py-1.5 text-xs font-normal ring-1 ring-border";
const tag =
  "border-0 px-2 py-1 font-meta text-[length:var(--text-tag)] font-normal ring-1 ring-border";

function getExperienceLabel(): string {
  const start = new Date("2025-08-01");
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem > 0 ? `${years} yr ${rem} mo` : `${years} yr`;
}

function SectionLabel({ index, name }: { index: string; name: string }) {
  return (
    <div className="flex items-center gap-3 font-meta text-meta text-muted-foreground">
      <span className="text-cyan">{index}</span>
      <Separator className="h-px w-8 bg-border" />
      <span>{name}</span>
    </div>
  );
}

function SectionHeading({ section, className }: { section: Section; className?: string }) {
  const parts = section.heading.split(section.highlight);
  return (
    <h2 className={className ?? "text-3xl font-bold tracking-tight md:text-5xl"}>
      {parts[0]}
      <span className="text-cyan">{section.highlight}</span>
      {parts[1]}
    </h2>
  );
}

function Index() {
  const active = useActiveSection();

  // Only the active section stays sharp; its immediate neighbours blur.
  useEffect(() => {
    const activeIndex = SECTION_IDS.indexOf(active);
    SECTION_IDS.forEach((id, index) => {
      document
        .getElementById(id)
        ?.classList.toggle("blur-next", Math.abs(index - activeIndex) === 1);
    });
  }, [active]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <NavDock active={active} />
        <main className="scroll-smooth">
          <Hero />
          <Stack />
          <Experience />
          <Projects />
          <Education />
          <Volunteer />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  const hero = data.hero;
  return (
    <section id="hero" className="snap-section relative px-6 py-18">
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="min-w-0">
          <SectionLabel index="01" name={hero.sectionLabel} />

          <h1
            className="anim-rise mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            {hero.name}
          </h1>

          <p
            className="anim-rise mt-3 text-lg font-medium text-cyan md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            {hero.role}
          </p>

          <p
            className="anim-rise mt-5 max-w-2xl text-left hyphens-auto text-pretty [hyphenate-limit-chars:10_4_4] text-base text-muted-foreground md:text-justify"
            style={{ animationDelay: "0.3s" }}
          >
            {hero.bio}
          </p>

          <div className="anim-rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.4s" }}>
            <Button asChild className={ctaPrimary}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {hero.cta}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className={ctaSecondary}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {hero.contactCta}
              </a>
            </Button>
          </div>
        </div>

        <div className="anim-right order-first md:order-none" style={{ animationDelay: "0.2s" }}>
          <img
            src={hero.photo}
            alt={hero.photoAlt}
            width={256}
            height={256}
            className="size-40 rounded-full border border-border object-cover md:size-64"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- STACK -------------------- */

function Stack() {
  const section = data.sections.stack;
  const layerIcons: Record<string, typeof Code2> = {
    Frontend: Code2,
    Backend: Server,
    Data: Database,
    Tools: Wrench,
    Infrastructure: Cloud,
  };
  return (
    <section id="stack" className="snap-section relative px-6 py-18">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <SectionLabel index="02" name={section.sectionLabel} />
        <SectionHeading section={section} />
        <p className="mt-2 max-w-lg text-balance text-left md:text-justify text-sm text-muted-foreground">
          {section.subtitle}
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {(Object.keys(data.stack) as Array<keyof typeof data.stack>).map((layer, idx) => {
            const Icon = layerIcons[layer] ?? Layers;
            return (
              <motion.div
                key={layer}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.08 }}
                className="panel panel-hover p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="grid size-9 place-items-center rounded-md bg-cyan/10 text-cyan ring-1 ring-cyan/30">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <div className="font-meta text-meta text-muted-foreground">0{idx + 1}</div>
                    <div className="text-base font-semibold">{layer}</div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-3">
                  {Object.entries(data.stack[layer]).map(([name, icon]) => {
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROJECTS -------------------- */

function Projects() {
  const section = data.sections.projects;
  const projects = data.projects;

  return (
    <section id="projects" className="snap-section relative px-6 py-18">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <SectionLabel index="04" name={section.sectionLabel} />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading section={section} />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => {
            const wide = i === projects.length - 1 && projects.length % 2 === 1;
            const sourceLink = (
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${section.sourceLabel} for ${p.name}`}
                title={`Open ${section.sourceLabel}`}
                className="relative mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition before:absolute before:-inset-2 before:content-[''] hover:border-cyan/40 hover:text-cyan"
              >
                <ArrowUpRight className="size-3.5" />
              </a>
            );

            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06 }}
                className={`panel panel-hover group relative flex flex-col p-6 ${
                  wide ? "md:col-span-2" : ""
                }`}
              >
                <div className={wide ? "md:flex md:items-start md:gap-12" : "flex flex-1 flex-col"}>
                  <div className={wide ? "md:min-w-0 md:flex-1" : ""}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-meta text-meta text-cyan">{p.id}</div>
                        <h3 className="mt-2 text-2xl font-semibold">{p.name}</h3>
                      </div>
                      {!wide && sourceLink}
                    </div>

                    <p className="mt-4 text-left hyphens-auto text-pretty [hyphenate-limit-chars:10_4_4] text-sm text-muted-foreground">
                      {p.action}
                    </p>
                  </div>

                  <div
                    className={
                      wide
                        ? "mt-5 flex flex-col justify-center gap-4 md:mt-0 md:w-[320px] md:shrink-0 md:self-stretch md:border-l md:border-border/60 md:pl-8"
                        : "mt-auto flex flex-wrap items-center gap-3 border-t border-border/60 pt-4"
                    }
                  >
                    <div className={wide ? "flex items-start justify-between gap-3" : "contents"}>
                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <Badge
                            key={s}
                            variant="outline"
                            className={`${tag} bg-background/60 text-muted-foreground`}
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
                      {wide && sourceLink}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- EXPERIENCE -------------------- */

function Experience() {
  const section = data.sections.experience;
  return (
    <section id="experience" className="snap-section relative px-6 py-18">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <SectionLabel index="03" name={section.sectionLabel} />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading section={section} />
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="flex h-7 items-center rounded bg-white px-2 py-0.5">
                  <img src="/flo.svg" alt="Flo Mattress" className="h-4 w-auto" />
                </div>
                <h3 className="text-xl font-semibold">{data.experience.company}</h3>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="size-3" />
                  {data.experience.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {data.experience.period}
                </span>
              </div>
            </div>
            <Badge
              variant="outline"
              className="border border-cyan/30 bg-cyan/5 px-3 py-1.5 text-xs font-normal text-cyan"
            >
              {data.experience.role}
            </Badge>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {Object.entries(section.stats).map(([label, key]) => (
              <div key={label} className="rounded-lg border border-border bg-background/40 p-4">
                <div className="text-2xl font-bold text-cyan">
                  {key === null ? getExperienceLabel() : key}
                </div>
                <div className="mt-1 text-left font-meta text-meta text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {Object.entries(data.experience.projects).map(([name, proj], idx, all) => {
              const wide = idx === 0 && all.length % 2 === 1;
              return (
                <div
                  key={name}
                  className={`rounded-lg border border-border/60 bg-background/40 p-5 ${
                    wide ? "md:col-span-2" : ""
                  }`}
                >
                  <h4 className="text-sm font-semibold text-cyan">{name}</h4>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {proj.stack.map((s) => (
                      <Badge
                        key={s}
                        variant="outline"
                        className={`${tag} bg-background/60 text-muted-foreground`}
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <ul className={wide ? "mt-4 md:columns-2 md:gap-x-8" : "mt-4 space-y-2"}>
                    {proj.highlights.map((h, i) => (
                      <li
                        key={i}
                        className={`flex gap-2 text-left hyphens-auto text-pretty [hyphenate-limit-chars:10_4_4] text-xs leading-relaxed text-muted-foreground md:text-justify ${
                          wide ? "mb-2 break-inside-avoid" : ""
                        }`}
                      >
                        <span className="mt-1 size-1 shrink-0 rounded-full bg-cyan/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- VOLUNTEER -------------------- */

function Volunteer() {
  const section = data.sections.volunteer;
  return (
    <section id="volunteer" className="snap-section relative px-6 py-18">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <SectionLabel index="06" name={section.sectionLabel} />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading section={section} />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {data.volunteer.map((v, i) => (
            <motion.div
              key={v.organization}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="panel panel-hover p-6"
            >
              <div className="flex items-start gap-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-md bg-cyan/10 text-cyan ring-1 ring-cyan/30">
                  <Heart className="size-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">{v.organization}</h3>
                  <p className="mt-1 text-left text-sm text-muted-foreground">{v.role}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    {v.period}
                  </span>
                  <ul className="mt-4 space-y-2">
                    {v.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-left hyphens-auto text-pretty [hyphenate-limit-chars:10_4_4] text-xs leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1 size-1 shrink-0 rounded-full bg-cyan/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- EDUCATION -------------------- */

function Education() {
  const section = data.sections.education;
  return (
    <section id="education" className="snap-section relative px-6 py-18">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <SectionLabel index="05" name={section.sectionLabel} />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading section={section} />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {data.education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="panel panel-hover p-6"
            >
              <div className="flex items-start gap-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-md bg-cyan/10 text-cyan ring-1 ring-cyan/30">
                  <GraduationCap className="size-4" />
                </div>
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
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="size-3" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="size-3" />
                      {edu.location}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CONTACT -------------------- */

function Contact() {
  const section = data.sections.contact;
  return (
    <section id="contact" className="snap-section relative px-6 pt-18 pb-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col text-center">
        <SectionLabel index="07" name={section.sectionLabel} />

        <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-6xl">
          {section.heading.split(section.highlight)[0]}
          <span className="text-cyan">{section.highlight}</span>
          {section.heading.split(section.highlight)[1]}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-center text-base text-muted-foreground">
          {section.subtitle}
        </p>

        <div className="mx-auto mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center gap-3 max-w-md sm:max-w-none">
          <Button asChild className={ctaPrimary}>
            <a href={`mailto:${section.email}`}>
              <Mail className="size-4" />
              {section.email}
            </a>
          </Button>
          <Button asChild variant="outline" className={ctaSecondary}>
            <a href={section.phoneHref}>
              <Phone className="size-4" /> {section.phoneLabel}
            </a>
          </Button>
          <Button asChild variant="outline" className={ctaSecondary}>
            <a href={section.linkedinUrl} target="_blank" rel="noreferrer">
              <Linkedin className="size-4" /> {section.linkedinLabel}
            </a>
          </Button>
          <Button asChild variant="outline" className={ctaSecondary}>
            <a href={section.githubUrl} target="_blank" rel="noreferrer">
              <Github className="size-4" /> {section.githubLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
