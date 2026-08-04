import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Terminal, Boxes, FolderGit2, Briefcase, GraduationCap, Heart, Send } from "lucide-react";

const items = [
  { id: "hero", label: "init", icon: Terminal },
  { id: "stack", label: "stack", icon: Boxes },
  { id: "experience", label: "exp", icon: Briefcase },
  { id: "projects", label: "proj", icon: FolderGit2 },
  { id: "education", label: "edu", icon: GraduationCap },
  { id: "volunteer", label: "vol", icon: Heart },
  { id: "contact", label: "contact", icon: Send },
];

export function NavDock() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
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
      <div className="glass-dock flex max-w-[calc(100vw-1.5rem)] items-center gap-1 overflow-x-auto rounded-lg p-1.5">
        <div className="hidden items-center gap-2 border-r border-border/60 px-3 py-1.5 font-meta text-meta text-muted-foreground lg:flex">
          <span className="size-1.5 rounded-full bg-term-green shadow-dot" />
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
              <span className="hidden font-meta text-meta opacity-50 sm:inline">0{i + 1}</span>
              <Icon className="size-3.5" strokeWidth={2} />
              <span className="hidden lg:inline">{it.label}</span>
              {isActive && (
                <span className="absolute inset-0 -z-10 rounded-md bg-cyan/10 ring-1 ring-cyan/30 shadow-glow-active" />
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
          className="ml-1 hidden items-center gap-2 rounded-md bg-cyan px-3 py-2 font-mono-display text-xs font-medium text-cyan-foreground shadow-nav-cta hover:brightness-110 transition xl:inline-flex"
        >
          hire_me<span className="opacity-60">()</span>
        </Link>
      </div>
    </nav>
  );
}
