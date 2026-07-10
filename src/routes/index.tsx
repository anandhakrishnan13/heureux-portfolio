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
  Heart,
} from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiBun,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiDocker,
  SiSupabase,
  SiGit,
  SiLinux,
  SiGooglegemini,
} from "react-icons/si";
import { NavDock } from "@/components/nav-dock";
import { Typewriter } from "@/components/typewriter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anandhakrishnan Nair — Full Stack Developer" },
      {
        name: "description",
        content:
          "Full Stack Developer building supply chain and CRM systems. Production experience with measurable impact.",
      },
    ],
  }),
  component: Index,
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiBun,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiMysql,
  SiDocker,
  SiSupabase,
  SiGit,
  SiLinux,
  SiGooglegemini,
};

const stack = {
  Frontend: [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Redux Toolkit", icon: "SiRedux" },
    { name: "Shadcn", icon: "SiShadcnui" },
  ],
  Backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "Bun", icon: "SiBun" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Redis", icon: "SiRedis" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "BullMQ", icon: null },
    { name: "WebSockets", icon: null },
  ],
  Infrastructure: [
    { name: "Docker", icon: "SiDocker" },
    { name: "Supabase", icon: "SiSupabase" },
    { name: "Git", icon: "SiGit" },
    { name: "Linux", icon: "SiLinux" },
    { name: "Google Gemini", icon: "SiGooglegemini" },
    { name: "OAuth", icon: null },
    { name: "REST APIs", icon: null },
  ],
};

const projects = [
  {
    id: "001",
    name: "Smart Bookmark",
    role: "Solo Developer",
    action:
      "A bookmark manager that syncs across your devices. Uses Google Gemini so you can search your bookmarks with plain English queries. Jina AI scrapes pages into clean text before indexing. Has collections, favourites, and a trash bin with 30-day recovery.",
    impact: "AI-powered semantic search with Google Gemini integration",
    metric: "AI",
    metricLabel: "Integrated",
    stack: ["Next.js", "Supabase", "Gemini API", "Jina AI", "TypeScript"],
    href: "https://github.com/anandhakrishnan13",
  },
  {
    id: "002",
    name: "Academia",
    role: "Full Stack Developer",
    action:
      "A student management system with separate portals for admins, teachers, and students. Handles attendance, timetables, and results through a Flutter frontend backed by Node.js.",
    impact: "Serves admins, teachers, and students through role-based portals",
    metric: "3-tier",
    metricLabel: "RBAC",
    stack: ["Flutter", "Node.js", "Express.js", "SQLite", "REST APIs"],
    href: "https://github.com/anandhakrishnan13/academia",
  },
  {
    id: "003",
    name: "E-Commerce Admin Panel",
    role: "Full Stack Developer",
    action:
      "Built a full-featured admin dashboard for product, order, and inventory management.",
    impact: "Reduced manual operations by 60% with centralized management",
    metric: "-60%",
    metricLabel: "ops",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    href: "https://github.com/anandhakrishnan13",
    archived: true,
  },
  {
    id: "004",
    name: "Job Portal",
    role: "Full Stack Developer",
    action:
      "Developed a dual-role job listing and application platform with smart filtering.",
    impact: "Connected 200+ employers with candidates through smart filtering",
    metric: "200+",
    metricLabel: "employers",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    href: "https://github.com/anandhakrishnan13/jobportal",
    archived: true,
  },
];

const experience = {
  company: "Flo Sleep Solutions Pvt Ltd",
  role: "Full Stack Developer",
  location: "Andheri, Mumbai",
  period: "August 2025 - Present",
  projects: [
    {
      name: "Flo-Bridge CRM",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Shadcn"],
      highlights: [
        "Built a MERN application for supply chain operations. Used daily across 7 facilities by teams handling inventory, planning, and logistics.",
        "Built an inventory management system achieving 100% accuracy through QR-based inward entry. Tracks raw materials at unit level, logging consumption automatically. For example, scanning a 150m fabric roll and logging the remaining 100m after cutting 50m eliminates stockouts and manual reconciliation.",
        "Developed a production planning module handling 3-4 daily batches of 250-400 orders per batch across 4 facilities. Synced from Unicommerce in real time, organized by marketplace, escalation level, and Shopify channel, each sorted by fulfilment TAT to prioritise urgent orders.",
        "Automated MRP label generation and raw material lists by batch grouping 200-400+ orders across 4 production facilities, replacing manual planning and cutting preparation time for production runs.",
      ],
    },
    {
      name: "Flo-Bridge 2.0",
      stack: ["Next.js", "Express.js", "BullMQ", "MongoDB", "Tailwind CSS"],
      highlights: [
        "Moved to microservices with Next.js, bringing Planning, QC, Picklist, and Dispatch into one data model. Cut MongoDB load and cleaned up duplicate logic across 7 facilities.",
        "Built an automated QC-to-Picklist pipeline with multi-stage quality checks tracking raw material consumption per order. Auto-marks orders as packed in Unicommerce, then scans MRP labels to batch and mark them Ready-to-Ship, eliminating manual RTS and factory-level inaccuracies.",
        "Built BullMQ workers for automated daily order ingestion from Unicommerce, order escalation triggers, consumption scanning to track raw material usage per order, and automatic order swapping to matching SKU or measurement on cancellation.",
        "Developed a Replenishment module syncing 2,000+ SKUs across 3 third-party logistics facilities via a daily Unicommerce API worker. Teams can set buffer levels, minimum order quantities, and vendor preferences per product to plan their restocking.",
        "Built an analytics dashboard with 90-day SKU health graphs across 6 stock levels and a facility heatmap tracking day-to-day inventory trends across 3 third-party logistics facilities.",
        "Auto-suggests reorders when stock hits 66% of the buffer level and the quantity meets the minimum order. Tells you whether a product is slow because nobody wants it or because you have too much from a vendor.",
      ],
    },
  ],
};

const education = [
  {
    school: "Manipal University Jaipur",
    degree: "Master of Computer Applications (MCA)",
    score: "SGPA: 8.70",
    period: "2024 - Present",
  },
  {
    school: "Keraleeya Samajam's Model College, Dombivli",
    degree: "Bachelor of Science in Information Technology",
    score: "Percentage: 80.2%",
    period: "2021 - 2024",
  },
];

const volunteer = [
  {
    organization: "Melam 2.0 - Nair Welfare Association",
    role: "Material Coordinator & Score Management Volunteer",
    period: "March 2026",
    highlights: [
      "Managed material requirements and procurement for a 16-team tournament, ensuring all equipment and supplies arrived on schedule.",
      "Maintained score cards and managed real-time score display on CricHeroes throughout the tournament.",
    ],
  },
  {
    organization: "Yuva Jagraan 2.0 - Samanwaya Charitable Association",
    role: "Time Coordinator & Crowd Management Volunteer",
    period: "January 2026",
    highlights: [
      "Managed event timelines and volunteer coordination for Career Walkthrough and Mental Wellness sessions with 200+ students across concurrent tracks.",
      "Oversaw crowd flow, enforced safety protocols, and verified venue and speaker readiness across all event stages.",
      "Served as central point of contact for real-time issue resolution during event operations.",
    ],
  },
];

function getExperienceLabel(): string {
  const start = new Date("2025-08-01");
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (months < 12) return `${months} mo`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem > 0 ? `${years} yr ${rem} mo` : `${years} yr`;
}

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
        className="scroll-smooth"
      >
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Education />
        <Volunteer />
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
          <SectionLabel index="01" name="init.session" />
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

            {/*
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
            */}

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 font-mono-display text-4xl font-bold leading-tight tracking-tight md:text-6xl"
            >
              Anandhakrishnan Nair
              <span className="mt-2 block text-lg font-normal text-muted-foreground md:text-xl">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
            >
              I build supply chain and CRM systems. Shipped an ERP used across
              7 facilities handling over a thousand orders a day, with live
              inventory tracking and auto-replenishment for 2,000+ products.
              Pursuing my MCA at Manipal and volunteering on the side.
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
                  "manage.multi_facility_ops()",
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
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
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
            className="flex flex-col gap-6"
          >
            <div className="card-glow mx-auto overflow-hidden rounded-full p-1">
              <img
                src="/me.png"
                alt="Anandhakrishnan Nair"
                className="size-48 rounded-full object-cover md:size-56"
              />
            </div>

            <div className="card-glow scanline overflow-hidden">
            <div className="flex items-center justify-between border-b border-border/60 bg-surface-2/60 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-destructive/70" />
                <span className="size-2.5 rounded-full bg-term-amber/80" />
                <span className="size-2.5 rounded-full bg-term-green/80" />
              </div>
              <span className="font-meta text-[10px] text-muted-foreground">
                ~/anand zsh
              </span>
              <ChevronRight className="size-3 text-muted-foreground" />
            </div>
            <div className="space-y-2.5 p-5 font-mono-display text-[13px] leading-relaxed">
              <Line p="$" cmd="cat profile.json" />
              <pre className="rounded-md bg-background/60 p-3 text-xs text-foreground/90">
{`{
  "role": "Full Stack Developer",
  "focus": ["supply-chain", "CRM", "DX"],
  "experience": "~1 yr production",
  "shipped": "9 production systems",
  "target": "senior-track growth"
}`}
              </pre>
              <Line p="$" cmd="git log --oneline -3" />
              <div className="space-y-1 pl-2 text-muted-foreground">
                <div>
                  <span className="text-term-amber">a4f12c1</span> feat:
                  automated supply chain replenishment (2K+ SKUs)
                </div>
                <div>
                  <span className="text-term-amber">9b22e80</span> feat:
                  supply chain workflow automation
                </div>
                <div>
                  <span className="text-term-amber">3e1d4aa</span> feat:
                  achieved 100% inventory accuracy via QR tracking
                </div>
              </div>
              <Line p="$" cmd="status" />
              <div className="flex items-center gap-2 pl-2 text-term-green">
                <span className="size-1.5 rounded-full bg-term-green shadow-[0_0_8px_var(--term-green)]" />
                online building production systems
              </div>
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
  const icons = {
    Frontend: Code2,
    Backend: Database,
    Infrastructure: Cloud,
  } as const;
  return (
    <section
      id="stack"
      className="snap-section relative justify-center px-6"
      style={{ background: "var(--surface)" }}
    >
      <div className="mx-auto w-full max-w-6xl py-24">
        <SectionLabel index="02" name="stack.manifest" />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-mono-display text-4xl font-bold tracking-tight md:text-5xl">
            The toolkit, <span className="text-cyan">grouped by layer</span>.
          </h2>
          <p className="max-w-md text-sm text-muted-foreground">
            Tools I actually use in production across MERN and Next.js apps.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {(Object.keys(stack) as Array<keyof typeof stack>).map(
            (layer, idx) => {
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
                        <div className="font-meta text-[10px] text-muted-foreground">
                          layer.0{idx + 1}
                        </div>
                        <div className="font-mono-display text-base font-semibold">
                          {layer}
                        </div>
                      </div>
                    </div>
                    <Layers className="size-4 text-muted-foreground" />
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {stack[layer].map((t) => {
                      const SkillIcon = t.icon
                        ? iconMap[t.icon]
                        : null;
                      return (
                        <span
                          key={t.name}
                          className="inline-flex items-center gap-1.5 rounded-md bg-background/60 px-3 py-1.5 font-mono-display text-xs text-foreground ring-1 ring-border"
                        >
                          {SkillIcon && <SkillIcon className="size-4" />}
                          {t.name}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            }
          )}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[
            { k: getExperienceLabel(), v: "production exp" },
            { k: "2,000+", v: "SKUs managed" },
            { k: "20+", v: "raw materials per SKU" },
            { k: "100%", v: "inventory accuracy" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-lg border border-border bg-background/40 p-4"
            >
              <div className="font-mono-display text-2xl font-bold text-cyan">
                {s.k}
              </div>
              <div className="mt-1 font-meta text-[10px] text-muted-foreground">
                {s.v}
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
  const activeProjects = projects.filter((p) => !p.archived);
  const archivedProjects = projects.filter((p) => p.archived);

  return (
    <section id="projects" className="snap-section relative justify-center px-6">
      <div className="mx-auto w-full max-w-6xl py-24">
        <SectionLabel index="03" name="projects.log" />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-mono-display text-4xl font-bold tracking-tight md:text-5xl">
            Action <span className="text-muted-foreground">→</span>{" "}
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
                  source
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/*
        {archivedProjects.length > 0 && (
          <div className="mt-12">
            <details className="group">
              <summary className="flex cursor-pointer items-center gap-2 font-mono-display text-sm text-muted-foreground hover:text-foreground transition">
                <ChevronRight className="size-4 transition group-open:rotate-90" />
                Archive ({archivedProjects.length} projects)
              </summary>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {archivedProjects.map((p, i) => (
                  <motion.article
                    key={p.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.06 }}
                    className="card-glow card-glow-hover group relative p-6 opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 font-meta text-[10px] text-muted-foreground">
                          <span className="text-cyan">{p.id}</span>
                          <span className="h-px w-4 bg-border" />
                          <span>{p.role}</span>
                        </div>
                        <h3 className="mt-2 font-mono-display text-xl font-semibold">
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

                    <p className="mt-4 text-sm text-muted-foreground">
                      {p.action}
                    </p>

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
                        source
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </details>
          </div>
        )}
        */}
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
        <SectionLabel index="04" name="experience.sh" />
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
                <h3 className="font-mono-display text-xl font-semibold">
                  {experience.company}
                </h3>
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
              <div
                key={idx}
                className="rounded-lg border border-border/60 bg-background/40 p-5"
              >
                <h4 className="font-mono-display text-sm font-semibold text-cyan">
                  {proj.name}
                </h4>
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
                    <li
                      key={i}
                      className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
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
  return (
    <section id="volunteer" className="snap-section relative justify-center px-6">
      <div className="mx-auto w-full max-w-6xl py-24">
        <SectionLabel index="06" name="volunteer.log" />
        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-mono-display text-4xl font-bold tracking-tight md:text-5xl">
            Giving <span className="text-cyan">back</span>.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {volunteer.map((v, i) => (
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
                  <h3 className="font-mono-display text-base font-semibold">
                    {v.organization}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {v.role}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    {v.period}
                  </span>
                  <ul className="mt-4 space-y-2">
                    {v.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
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
  return (
    <section id="education" className="snap-section relative justify-center px-6">
      <div className="mx-auto w-full max-w-6xl py-24">
        <SectionLabel index="05" name="education.txt" />
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
                  <h3 className="font-mono-display text-base font-semibold">
                    {edu.school}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {edu.degree}
                  </p>
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
        <SectionLabel index="07" name="connect.handshake" />

        <h2 className="mt-8 font-mono-display text-5xl font-bold tracking-tight md:text-6xl">
          Got a system worth <span className="text-cyan">building</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
          Looking for full-time work and interesting projects. Let's talk.
        </p>

        <div className="mx-auto mt-10 max-w-xl card-glow p-1.5 text-left">
          <div className="rounded-md bg-background/60 p-5 font-mono-display text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-term-green">~</span>
              <span className="text-cyan">$</span>
              <span>ssh anand@portfolio.dev</span>
            </div>
            <div className="mt-3 space-y-1.5 pl-5 text-xs text-muted-foreground">
              <div>
                <span className="text-term-green">✓</span> response time less
                than 24h
              </div>
              <div>
                <span className="text-term-green">✓</span> timezone flexible
                (IST)
              </div>
              <div>
                <span className="text-term-green">✓</span> open to remote
              </div>
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
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}
