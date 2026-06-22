import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Terminal, Boxes, FolderGit2, Briefcase, GraduationCap, Send } from "lucide-react";

const items = [
  { id: "hero", label: "init", icon: Terminal },
  { id: "stack", label: "stack", icon: Boxes },
  { id: "projects", label: "work", icon: FolderGit2 },
  { id: "experience", label: "exp", icon: Briefcase },
  { id: "education", label: "edu", icon: GraduationCap },
  { id: "contact", label: "contact", icon: Send },
];

export function NavDock() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.5 }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="glass-dock flex items-center gap-1 rounded-lg p-1.5">
        <div className="flex items-center gap-2 px-3 py-1.5 font-meta text-[10px] text-muted-foreground border-r border-border/60">
          <span className="size-1.5 rounded-full bg-term-green shadow-[0_0_8px_var(--term-green)]" />
          <span>anand@portfolio</span>
        </div>
        {items.map((it, i) => {
          const Icon = it.icon;
          const isActive = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className={`group relative flex items-center gap-2 rounded-md px-3 py-2 font-mono-display text-xs transition-colors ${
                isActive
                  ? "text-cyan"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="font-meta text-[10px] opacity-50">0{i + 1}</span>
              <Icon className="size-3.5" strokeWidth={2} />
              <span className="hidden sm:inline">{it.label}</span>
              {isActive && (
                <span className="absolute inset-0 -z-10 rounded-md bg-cyan/10 ring-1 ring-cyan/30 shadow-[0_0_16px_-2px_var(--cyan)]" />
              )}
            </button>
          );
        })}
        <Link
          to="/"
          hash="contact"
          onClick={(e) => {
            e.preventDefault();
            go("contact");
          }}
          className="ml-1 hidden md:inline-flex items-center gap-2 rounded-md bg-cyan px-3 py-2 font-mono-display text-xs font-medium text-cyan-foreground shadow-[0_0_20px_-4px_var(--cyan)] hover:brightness-110 transition"
        >
          hire_me<span className="opacity-60">()</span>
        </Link>
      </div>
    </nav>
  );
}
