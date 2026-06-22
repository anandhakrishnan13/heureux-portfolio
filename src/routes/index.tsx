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
  Building2,
  MapPin,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { NavDock } from "@/components/nav-dock";
import { Typewriter } from "@/components/typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anandhakrishnan Nair — Full Stack Developer" },
      { name: "description", content: "Full Stack Developer building supply chain and CRM systems. Production experience with measurable impact." },
    ],
  }),
  component: Index,
});

const stack = {
  Frontend: [
    { name: "React / Next.js", level: 88 },
    { name: "TypeScript", level: 82 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Redux Toolkit", level: 68 },
  ],
  Backend: [
    { name: "Node.js / Express.js", level: 85 },
    { name: "Python / Go", level: 62 },
    { name: "PostgreSQL / MongoDB", level: 78 },
    { name: "Redis / BullMQ", level: 70 },
  ],
  Infrastructure: [
    { name: "Docker", level: 68 },
    { name: "Supabase", level: 72 },
    { name: "REST APIs / OAuth", level: 82 },
    { name: "Git / Linux", level: 78 },
  ],
};

const projects = [
  {
    id: "001",
    name: "Smart Bookmark",
    role: "Solo Developer",
    action: "Architected an AI-powered bookmark manager with semantic search and cross-device sync.",
    impact: "95% retrieval accuracy over 1000+ bookmarks",
    metric: "95%",
    metricLabel: "accuracy",
    stack: ["Next.js", "Supabase", "Gemini API", "Jina AI", "TypeScript"],
    href: "https://github.com/anandhakrishnan13",
  },
  {
    id: "002",
    name: "Academia",
    role: "Full Stack Developer",
    action: "Designed a multi-role student management system with 3-tier RBAC.",
    impact: "500+ concurrent users across admin, teacher, and student portals",
    metric: "500+",
    metricLabel: "users",
    stack: ["Flutter", "Node.js", "Express.js", "SQLite", "REST APIs"],
    href: "https://github.com/anandhakrishnan13/academia",
  },
  {
    id: "003",
    name: "E-Commerce Admin Panel",
    role: "Full Stack Developer",
    action: "Built a full-featured admin dashboard for product, order, and inventory management.",
    impact: "Reduced manual operations by 60% with centralized management",
    metric: "−60%",
    metricLabel: "ops",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    href: "https://github.com/anandhakrishnan13",
  },
  {
    id: "004",
    name: "Job Portal",
    role: "Full Stack Developer",
    action: "Developed a dual-role job listing and application platform.",
    impact: "Connected 200+ employers with candidates through smart filtering",
    metric: "200+",
    metricLabel: "employers",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    href: "https://github.com/anandhakrishnan13/jobportal",
  },
];

const experience = {
  company: "Flo Sleep Solutions Pvt Ltd",
  role: "Full Stack Developer",
  location: "Andheri, Mumbai",
  period: "August 2025 \u2014 Present",
  projects: [
    {
      name: "Flo-Bridge CRM",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Shadcn"],
      highlights: [
        "End-to-end development of a production MERN application managing supply chain operations — inventory, production planning, and outward logistics — used daily by cross-functional business teams.",
        "Achieved 100% inventory accuracy through QR-based inward entry, tracking raw materials at unit level, eliminating manual reconciliation and stockout delays.",
        "Built a production planning module handling 250–400 orders daily per facility, syncing from Unicommerce in real time with automated escalation prioritization.",
      ],
    },
    {
      name: "Flo-Bridge 2.0",
      stack: ["Next.js", "Express.js", "BullMQ", "MongoDB", "Tailwind CSS"],
      highlights: [
        "Migrated monolithic MERN architecture to microservices, separating CRM and Supply Chain into independent services for independent scaling and reduced server load.",
        "Built a replenishment intelligence module syncing 500+ SKUs across 3 warehouses via a daily Unicommerce API worker with configurable buffer norms and vendor mappings.",
        "Developed SKU-level 90-day trend analytics with a 6-state health classification and facility heatmap for real-time stock movement visibility.",
        "Engineered a reorder suggestion engine triggering at 66% buffer threshold with automated MOQ recommendations from historical trend analysis.",
      ],
    },
  ],
};

const education = [
  {
    school: "Manipal University Jaipur",
    degree: "Master of Computer Applications (MCA)",
    score: "SGPA: 8.70",
    period: "2024 \u2014 Present",
  },
  {
    school: "Keraleeya Samajam's Model College, Dombivli",
    degree: "Bachelor of Science in Information Technology",
    score: "Percentage: 80.2%",
    period: "2021 \u2014 2024",
  },
];

function SectionLabel({ index, name }: { index: string; name: string }) {
  return (
    <div className="flex items-center gap-3 font-meta text-[10px] text-muted-foreground">
      <span className="text-cyan">{index}</span>
      <span className="h-px w-8 bg-border" />
      <span>{name}</span>
    </div>
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
      <main
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
        style={{ scrollSnapType: "y mandatory" }}
      >
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  return (
    <section id="hero" className="snap-section relative justify-center px-6">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel index="00" name="init.session" />
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="font-mono-display text-sm text-muted-foreground"
            >
              <span className="text-term-green">~/portfolio</span>
              <span className="text-cyan"> $ </span>
              <span>whoami --role=fullstack</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 font-mono-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
            >
              Building <span className="text-cyan">scalable systems</span>
              <br />
              that ship <span className="text-term-green">measurable impact</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
            >
              I&apos;m Anandhakrishnan — a full-stack developer architecting
              production supply chain and CRM systems. MERN monoliths and Next.js
              microservices. Metric-driven, focused on the boring parts that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex items-center gap-3 font-mono-display text-sm"
            >
              <span className="text-muted-foreground">$ run</span>
              <Typewriter
                className="text-foreground"
                words={[
                  "build.supply_chain_systems()",
                  "ship.production_features()",
                  "reduce.order_latency()",
                  "manage.500_plus_skus()",
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 font-mono-display text-sm font-medium text-cyan-foreground shadow-[0_0_28px_-6px_var(--cyan)] transition hover:brightness-110"
              >
                View My Work
                <ArrowUpRight className="size-4" />
              </a>
              <a
                href="https://linkedin.com/in/anandhakrishnan13"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 font-mono-display text-sm text-foreground transition hover:border-cyan/40 hover:text-cyan"
              >
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="card-glow scanline overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-border/60 bg-surface-2/60 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-term-amber/80" />
                <span className="size-2.5 rounded-full bg-term-green/80" />
              </div>
              <span className="font-meta text-[10px] text-muted-foreground">~/anand — zsh</span>
              <ChevronRight className="size-3 text-muted-foreground" />
            </div>
            <div className="space-y-2.5 p-5 font-mono-display text-[13px] leading-relaxed">
              <Line p="$" cmd="cat profile.json" />
              <pre className="rounded-md bg-background/60 p-3 text-xs text-foreground/90">
{`{
  "role": "Full Stack Developer",
  "focus": ["supply-chain", "CRM", "DX"],
  "experience": "~1 yr production",
  "shipped": "4 production projects",
  "target": "senior-track growth"
}`}
              </pre>
              <Line p="$" cmd="git log --oneline -3" />
              <div className="space-y-1 pl-2 text-muted-foreground">
                <div><span className="text-term-amber">a4f12c1</span> feat: replenishment engine (500+ SKUs)</div>
                <div><span className="text-term-amber">9b22e80</span> perf: cut order latency by 40%</div>
                <div><span className="text-term-amber">3e1d4aa</span> infra: microservices migration</div>
              </div>
              <Line p="$" cmd="status" />
              <div className="flex items-center gap-2 pl-2 text-term-green">
                <span className="size-1.5 rounded-full bg-term-green shadow-[0_0_8px_var(--term-green)]" />
                online · building production systems
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- STACK -------------------- */

function Stack() {
  const icons = { Frontend: Code2, Backend: Database, Infrastructure: Cloud } as const;
  return (
    <section
      id="stack"
      className="snap-section relative justify-center px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="mx-auto w-full max-w-6xl py-24">
        <SectionLabel index="01" name="stack.manifest" />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-mono-display text-4xl font-bold tracking-tight md:text-5xl">
            The toolkit, <span className="text-cyan">grouped by layer</span>.
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Production stack — chosen, deployed, and iterated under real load
            across MERN monoliths and Next.js microservices.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {(Object.keys(stack) as Array<keyof typeof stack>).map((layer, idx) => {
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
                      <div className="font-meta text-[10px] text-muted-foreground">layer.0{idx + 1}</div>
                      <div className="font-mono-display text-base font-semibold">{layer}</div>
                    </div>
                  </div>
                  <Layers className="size-4 text-muted-foreground" />
                </div>

                <ul className="mt-6 space-y-3.5">
                  {stack[layer].map((t) => (
                    <li key={t.name}>
                      <div className="flex items-center justify-between font-mono-display text-xs">
                        <span className="text-foreground">{t.name}</span>
                        <span className="font-meta text-[10px] text-term-green">{t.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-background/60">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${t.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan/70 to-cyan shadow-[0_0_8px_var(--cyan)]"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { k: "11 mo", v: "production exp" },
            { k: "500+", v: "SKUs managed" },
            { k: "\u221240%", v: "best latency win" },
            { k: "100%", v: "inventory accuracy" },
          ].map((s) => (
            <div key={s.v} className="rounded-lg border border-border bg-background/40 p-4">
              <div className="font-mono-display text-2xl font-bold text-cyan">{s.k}</div>
              <div className="mt-1 font-meta text-[10px] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- PROJECTS -------------------- */

function Projects() {
  return (
    <section id="projects" className="snap-section relative justify-center px-6">
      <div className="mx-auto w-full max-w-6xl py-24">
        <SectionLabel index="02" name="projects.log" />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-mono-display text-4xl font-bold tracking-tight md:text-5xl">
            Action <span className="text-muted-foreground">\u2192</span>{" "}
            <span className="text-term-green">impact</span>.
          </h2>
          <a
            href="https://github.com/anandhakrishnan13"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono-display text-xs text-muted-foreground hover:text-cyan transition"
          >
            <GitBranch className="size-3.5" />
            all repos
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
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
                  <div className="flex items-center gap-2 font-meta text-[10px] text-muted-foreground">
                    <span className="text-cyan">{p.id}</span>
                    <span className="h-px w-4 bg-border" />
                    <span>{p.role}</span>
                  </div>
                  <h3 className="mt-2 font-mono-display text-2xl font-semibold">
                    {p.name}
                  </h3>
                </div>
                <div className="rounded-md border border-term-green/30 bg-term-green/5 px-2.5 py-1.5 text-right shrink-0">
                  <div className="font-mono-display text-base font-bold text-term-green leading-none">
                    {p.metric}
                  </div>
                  <div className="font-meta text-[9px] text-term-green/80 mt-0.5">
                    {p.metricLabel}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{p.action}</p>

              <div className="mt-4 flex items-center gap-2 font-mono-display text-xs text-term-green">
                <TrendingUp className="size-3.5 shrink-0" />
                {p.impact}
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-background/60 px-2 py-1 font-meta text-[9px] text-muted-foreground ring-1 ring-border"
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
                  source<ArrowUpRight className="size-3.5" />
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
  return (
    <section
      id="experience"
      className="snap-section relative justify-center px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="mx-auto w-full max-w-6xl py-24">
        <SectionLabel index="03" name="experience.sh" />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-mono-display text-4xl font-bold tracking-tight md:text-5xl">
            Production <span className="text-cyan">experience</span>.
          </h2>
        </div>

        <div className="mt-8 card-glow p-6">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border/60 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <Building2 className="size-4 text-cyan" />
                <h3 className="font-mono-display text-xl font-semibold">{experience.company}</h3>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="size-3" />
                  {experience.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="size-3" />
                  {experience.period}
                </span>
              </div>
            </div>
            <span className="rounded-md border border-cyan/30 bg-cyan/5 px-3 py-1.5 font-mono-display text-xs text-cyan">
              {experience.role}
            </span>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {experience.projects.map((proj, idx) => (
              <div key={idx} className="rounded-lg border border-border/60 bg-background/40 p-5">
                <h4 className="font-mono-display text-sm font-semibold text-cyan">{proj.name}</h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {proj.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-background/60 px-2 py-1 font-meta text-[9px] text-muted-foreground ring-1 ring-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="mt-4 space-y-2">
                  {proj.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
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

/* -------------------- EDUCATION -------------------- */

function Education() {
  return (
    <section id="education" className="snap-section relative justify-center px-6">
      <div className="mx-auto w-full max-w-6xl py-24">
        <SectionLabel index="04" name="education.txt" />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-mono-display text-4xl font-bold tracking-tight md:text-5xl">
            Academic <span className="text-cyan">background</span>.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {education.map((edu, i) => (
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
                  <p className="mt-1 text-sm text-muted-foreground">{edu.degree}</p>
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
  return (
    <section
      id="contact"
      className="snap-section relative justify-center px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="mx-auto w-full max-w-4xl py-24 text-center">
        <SectionLabel index="05" name="connect.handshake" />

        <h2 className="mt-8 font-mono-display text-5xl font-bold tracking-tight md:text-6xl">
          Got a system worth <span className="text-cyan">building</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
          I&apos;m currently open to full-time opportunities and interesting
          projects. Let&apos;s talk about what you&apos;re shipping next.
        </p>

        <div className="mx-auto mt-10 max-w-xl card-glow p-1.5 text-left">
          <div className="rounded-md bg-background/60 p-5 font-mono-display text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-term-green">~</span>
              <span className="text-cyan">$</span>
              <span>ssh anand@portfolio.dev</span>
            </div>
            <div className="mt-3 space-y-1.5 pl-5 text-xs text-muted-foreground">
              <div><span className="text-term-green">\u2713</span> response time &lt; 24h</div>
              <div><span className="text-term-green">\u2713</span> timezone flexible (IST)</div>
              <div><span className="text-term-green">\u2713</span> open to remote</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:anandhakrishnannair13@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan px-5 py-3 font-mono-display text-sm font-medium text-cyan-foreground shadow-[0_0_28px_-6px_var(--cyan)] transition hover:brightness-110"
          >
            <Mail className="size-4" />
            anandhakrishnannair13@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/anandhakrishnan13"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/40 px-4 py-3 font-mono-display text-sm hover:border-cyan/40 hover:text-cyan transition"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a
            href="https://github.com/anandhakrishnan13"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/40 px-4 py-3 font-mono-display text-sm hover:border-cyan/40 hover:text-cyan transition"
          >
            <Github className="size-4" /> GitHub
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 font-meta text-[10px] text-muted-foreground">
          <Zap className="size-3 text-cyan" />
          <span>anand-portfolio v1.0</span>
          <span className="h-px w-8 bg-border" />
          <Cpu className="size-3" />
          <span>\u00a9 {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
