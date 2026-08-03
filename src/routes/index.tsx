import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  TrendingUp,
  Zap,
  Cpu,
  Code2,
  Database,
  Cloud,
  Layers,
  GitBranch,
  ChevronRight,
  MapPin,
  Calendar,
  ExternalLink,
  Heart,
} from "lucide-react";
import { NavDock } from "@/components/nav-dock";
import { Typewriter } from "@/components/typewriter";

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
      <span className="h-px w-8 bg-border" />
      <span>{name}</span>
    </div>
  );
}

function SectionHeading({ section, className }: { section: Section; className?: string }) {
  const parts = section.heading.split(section.highlight);
  return (
    <h2 className={className ?? "font-mono-display text-4xl font-bold tracking-tight md:text-5xl"}>
      {parts[0]}
      <span className="text-cyan">{section.highlight}</span>
      {parts[1]}
    </h2>
  );
}

function Line({ p, cmd }: { p: string; cmd: string }) {
  return (
    <div className="flex gap-2 text-muted-foreground">
      <span className="text-cyan">{p}</span>
      <span className="text-foreground">{cmd}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="relative">
      <NavDock />
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
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  const hero = data.hero;
  return (
    <section id="hero" className="snap-section relative justify-center px-6">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel index="01" name={hero.sectionLabel} />
        </motion.div>

        <div className="grid grid-cols-hero md:items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="card-glow mb-6 inline-block overflow-hidden rounded-full p-1"
            >
              <img
                src={hero.photo}
                alt={hero.photoAlt}
                className="size-48 rounded-full object-cover md:size-56"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 flex min-h-[1.5em] items-center gap-2 font-mono-display text-4xl font-bold leading-tight tracking-tight md:text-6xl"
            >
              <span className="text-muted-foreground text-2xl md:text-4xl">$ </span>
              <Typewriter
                className="text-foreground"
                words={[hero.name]}
              />
            </motion.h1>
            <p className="mt-2 font-mono-display text-lg font-normal text-muted-foreground md:text-xl">
              {hero.role}
            </p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-xl text-justify text-base text-muted-foreground md:text-lg"
            >
              {hero.bio}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <div className="card-glow scanline overflow-hidden">
              <div className="flex items-center justify-between border-b border-border/60 bg-surface-2/60 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-destructive/70" />
                  <span className="size-2.5 rounded-full bg-term-amber/80" />
                  <span className="size-2.5 rounded-full bg-term-green/80" />
                </div>
                <ChevronRight className="size-3 text-muted-foreground" />
              </div>
              <div className="space-y-2.5 p-5 font-mono-display text-terminal leading-relaxed">
                <Line p="$" cmd="cat profile.json" />
                <pre className="rounded-md bg-background/60 p-3 text-xs text-foreground/90">
                  {JSON.stringify(
                    {
                      focus: hero.profileFocus,
                      experience: hero.experience,
                      shipped: hero.shipped,
                      target: hero.target,
                    },
                    null,
                    2,
                  )}
                </pre>
                <Line p="$" cmd="git log --oneline -3" />
                <div className="space-y-1 pl-2 text-muted-foreground">
                  {Object.entries(hero.gitLog).map(([hash, msg]) => (
                    <div key={hash}>
                      <span className="text-term-amber">{hash}</span> {msg}
                    </div>
                  ))}
                </div>
                <Line p="$" cmd="status" />
                <div className="flex items-center gap-2 pl-2 text-term-green">
                  <span className="size-1.5 rounded-full bg-term-green shadow-dot" />
                  {hero.status}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-4 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 font-mono-display text-sm font-medium text-cyan-foreground shadow-glow-cta transition hover:brightness-110"
              >
                {hero.cta}
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href={hero.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 font-mono-display text-sm text-foreground transition hover:border-cyan/40 hover:text-cyan"
              >
                <Linkedin className="size-4" />
                {hero.linkedinLabel}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- STACK -------------------- */

function Stack() {
  const section = data.sections.stack;
  const icons = {
    Frontend: Code2,
    Backend: Database,
    Infrastructure: Cloud,
  } as const;
  return (
    <section id="stack" className="snap-section relative justify-center bg-surface px-6">
      <div className="mx-auto w-full max-w-6xl">
        <SectionLabel index="02" name={section.sectionLabel} />
        <SectionHeading section={section} />
        <p className="mt-2 max-w-md text-justify text-sm text-muted-foreground">
          {section.subtitle}
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {(Object.keys(data.stack) as Array<keyof typeof data.stack>).map((layer, idx) => {
            const Icon = icons[layer];
            return (
              <motion.div
                key={layer}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.08 }}
                className="card-glow card-glow-hover p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 place-items-center rounded-md bg-cyan/10 text-cyan ring-1 ring-cyan/30">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className="font-meta text-meta text-muted-foreground">
                        layer.0{idx + 1}
                      </div>
                      <div className="font-mono-display text-base font-semibold">{layer}</div>
                    </div>
                  </div>
                  <Layers className="size-4 text-muted-foreground" />
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {Object.entries(data.stack[layer]).map(([name, icon]) => {
                    const SkillIcon = icon ? iconMap[icon] : null;
                    return (
                      <span
                        key={name}
                        className="inline-flex items-center gap-1.5 rounded-md bg-background/60 px-3 py-1.5 font-mono-display text-xs text-foreground ring-1 ring-border"
                      >
                        {SkillIcon && <SkillIcon className="size-4" />}
                        {name}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {Object.entries(section.stats).map(([label, key]) => (
            <div key={label} className="rounded-lg border border-border bg-background/40 p-4">
              <div className="font-mono-display text-2xl font-bold text-cyan">
                {key === null ? getExperienceLabel() : key}
              </div>
              <div className="mt-1 text-justify font-meta text-meta text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROJECTS -------------------- */

function Projects() {
  const section = data.sections.projects;
  const activeProjects = data.projects.filter((p) => !p.archived);
  const archivedProjects = data.projects.filter((p) => p.archived);

  return (
    <section id="projects" className="snap-section relative justify-center px-6">
      <div className="mx-auto w-full max-w-6xl py-10">
        <SectionLabel index="04" name={section.sectionLabel} />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading section={section} />
          <a
            href={section.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono-display text-xs text-muted-foreground hover:text-cyan transition"
          >
            <GitBranch className="size-3.5" />
            {section.allReposLabel}
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {activeProjects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06 }}
              className="card-glow card-glow-hover group relative p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-meta text-meta text-muted-foreground">
                    <span className="text-cyan">{p.id}</span>
                    <span className="h-px w-4 bg-border" />
                    <span>{p.role}</span>
                  </div>
                  <h3 className="mt-2 font-mono-display text-2xl font-semibold">{p.name}</h3>
                </div>
                <div className="rounded-md border border-term-green/30 bg-term-green/5 px-2.5 py-1.5 text-right shrink-0">
                  <div className="font-mono-display text-base font-bold text-term-green leading-none">
                    {p.metric}
                  </div>
                  <div className="font-meta text-tag text-term-green/80 mt-0.5">
                    {p.metricLabel}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-justify text-sm text-muted-foreground">{p.action}</p>

              <div className="mt-4 flex items-center gap-2 font-mono-display text-xs text-term-green">
                <TrendingUp className="size-3.5 shrink-0" />
                {p.impact}
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-background/60 px-2 py-1 font-meta text-tag text-muted-foreground ring-1 ring-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-mono-display text-xs text-cyan opacity-0 transition group-hover:opacity-100"
                >
                  {section.sourceLabel}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- EXPERIENCE -------------------- */

function Experience() {
  const section = data.sections.experience;
  return (
    <section id="experience" className="snap-section relative justify-center bg-surface px-6">
      <div className="mx-auto w-full max-w-6xl py-10">
        <SectionLabel index="03" name={section.sectionLabel} />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <SectionHeading section={section} />
        </div>

        <div className="mt-8 card-glow p-6">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border/60 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <img src="/flo.svg" alt="Flo Sleep Solutions" className="h-5 w-auto" />
                <h3 className="font-mono-display text-xl font-semibold">
                  {data.experience.company}
                </h3>
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
            <span className="rounded-md border border-cyan/30 bg-cyan/5 px-3 py-1.5 font-mono-display text-xs text-cyan">
              {data.experience.role}
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {Object.entries(data.experience.projects).map(([name, proj]) => (
              <div key={name} className="rounded-lg border border-border/60 bg-background/40 p-5">
                <h4 className="font-mono-display text-sm font-semibold text-cyan">{name}</h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-background/60 px-2 py-1 font-meta text-tag text-muted-foreground ring-1 ring-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2">
                  {proj.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-justify text-xs text-muted-foreground leading-relaxed"
                    >
                      <span className="mt-1 size-1 shrink-0 rounded-full bg-cyan/60" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
    <section id="volunteer" className="snap-section relative justify-center px-6">
      <div className="mx-auto w-full max-w-6xl py-10">
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
              className="card-glow card-glow-hover p-6"
            >
              <div className="flex items-start gap-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-md bg-rose-500/10 text-rose-500 ring-1 ring-rose-500/30">
                  <Heart className="size-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-mono-display text-base font-semibold">{v.organization}</h3>
                  <p className="mt-1 text-justify text-sm text-muted-foreground">{v.role}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    {v.period}
                  </span>
                  <ul className="mt-4 space-y-2">
                    {v.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-justify text-xs text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-1 size-1 shrink-0 rounded-full bg-rose-500/60" />
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
    <section id="education" className="snap-section relative justify-center px-6">
      <div className="mx-auto w-full max-w-6xl py-10">
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
              className="card-glow card-glow-hover p-6"
            >
              <div className="flex items-start gap-3">
                <div className="grid size-9 shrink-0 place-items-center rounded-md bg-term-green/10 text-term-green ring-1 ring-term-green/30">
                  <ExternalLink className="size-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-mono-display text-base font-semibold">{edu.school}</h3>
                  <p className="mt-1 text-justify text-sm text-muted-foreground">{edu.degree}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-md border border-term-green/30 bg-term-green/5 px-2 py-1 font-mono-display text-term-green">
                      {edu.score}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="size-3" />
                      {edu.period}
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
    <section id="contact" className="snap-section relative justify-center bg-surface px-6">
      <div className="mx-auto w-full max-w-4xl py-10 text-center">
        <SectionLabel index="07" name={section.sectionLabel} />

        <h2 className="mt-8 font-mono-display text-5xl font-bold tracking-tight md:text-6xl">
          <span className="text-cyan">{section.highlight}</span>
          {section.heading.replace(section.highlight, "")}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-justify text-base text-muted-foreground">
          {section.subtitle}
        </p>

        <div className="mx-auto mt-8 max-w-xl card-glow p-1.5 text-left">
          <div className="rounded-md bg-background/60 p-5 font-mono-display text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-term-green">~</span>
              <span className="text-cyan">$</span>
              <span>{section.ssh}</span>
            </div>
            <div className="mt-3 space-y-1.5 pl-5 text-xs text-muted-foreground">
              {section.features.map((f) => (
                <div key={f}>
                  <span className="text-term-green">✓</span> {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${section.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 font-mono-display text-sm font-medium text-cyan-foreground shadow-glow-cta transition hover:brightness-110"
          >
            <Mail className="size-4" />
            {section.email}
          </a>
          <a
            href={section.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/40 px-4 py-3 font-mono-display text-sm hover:border-cyan/40 hover:text-cyan transition"
          >
            <Linkedin className="size-4" /> {section.linkedinLabel}
          </a>
          <a
            href={section.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/40 px-4 py-3 font-mono-display text-sm hover:border-cyan/40 hover:text-cyan transition"
          >
            <Github className="size-4" /> {section.githubLabel}
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 font-meta text-meta text-muted-foreground">
          <Zap className="size-3 text-cyan" />
          <span>{data.footer}</span>
          <span className="h-px w-8 bg-border" />
          <Cpu className="size-3" />
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
