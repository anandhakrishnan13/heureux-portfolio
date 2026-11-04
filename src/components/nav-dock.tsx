import { useEffect, useState } from "react";
import {
  Terminal,
  Boxes,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Heart,
  Send,
  Menu,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const activeItem = items.find((i) => i.id === active) ?? items[0];
  const ActiveIcon = activeItem.icon;

  return (
    <TooltipProvider delayDuration={200}>
      {/* Wide viewports: unchanged floating dock, with real tooltips on hover. */}
      <nav
        aria-label="Sections"
        className="fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 md:block"
      >
        <div className="glass-dock flex max-w-[calc(100vw-1.5rem)] items-center gap-1 overflow-x-auto rounded-lg p-1.5">
          <div className="hidden items-center gap-2 border-r border-border/60 px-3 py-1.5 font-meta text-meta text-muted-foreground lg:flex">
            <span className="size-1.5 rounded-full bg-term-green shadow-dot" />
            <span>anand@portfolio</span>
          </div>
          {items.map((it, i) => {
            const Icon = it.icon;
            const isActive = active === it.id;
            return (
              <Tooltip key={it.id}>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => go(it.id)}
                    aria-label={it.label}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative h-auto gap-2 rounded-md px-3 py-2 font-mono-display text-xs font-normal [&_svg]:size-3.5 ${
                      isActive ? "text-cyan" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="hidden font-meta text-meta opacity-50 sm:inline">
                      0{i + 1}
                    </span>
                    <Icon className="size-3.5" strokeWidth={2} />
                    <span className="hidden lg:inline">{it.label}</span>
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-md bg-cyan/10 ring-1 ring-cyan/30 shadow-glow-active" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" className="font-mono-display">
                  {it.label}
                </TooltipContent>
              </Tooltip>
            );
          })}
          <Button
            asChild
            className="ml-1 hidden h-auto gap-2 rounded-md bg-cyan px-3 py-2 font-mono-display text-xs font-medium text-cyan-foreground shadow-nav-cta transition hover:bg-cyan hover:brightness-110 xl:inline-flex"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                go("contact");
              }}
            >
              hire_me<span className="opacity-60">()</span>
            </a>
          </Button>
        </div>
      </nav>

      {/* Narrow viewports: compact bar + bottom sheet with labelled, 44px+ targets. */}
      <nav aria-label="Sections" className="fixed inset-x-3 bottom-4 z-50 md:hidden">
        <div className="glass-dock flex items-center gap-1 rounded-lg p-1.5">
          <span className="flex min-w-0 flex-1 items-center gap-2 px-2.5 font-meta text-meta text-muted-foreground">
            <span className="size-1.5 shrink-0 rounded-full bg-term-green shadow-dot" />
            <ActiveIcon className="size-3.5 shrink-0" strokeWidth={2} />
            <span className="truncate">{activeItem.label}</span>
          </span>
          <Button
            asChild
            className="h-11 shrink-0 gap-2 rounded-md bg-cyan px-3 font-mono-display text-xs font-medium text-cyan-foreground shadow-nav-cta hover:bg-cyan"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                go("contact");
              }}
            >
              hire_me<span className="opacity-60">()</span>
            </a>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                aria-label="Open section menu"
                className="size-11 shrink-0 rounded-md text-muted-foreground hover:text-foreground"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="bottom"
              className="glass-dock rounded-t-xl border-cyan/12 px-4 pt-4 pb-6"
            >
              <SheetHeader className="p-0 text-left">
                <SheetTitle className="font-meta text-meta text-muted-foreground">
                  Sections
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Jump to a section of the portfolio.
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="mt-3 h-[min(58svh,24rem)]">
                <ul className="space-y-1 pr-3">
                  {items.map((it, i) => {
                    const Icon = it.icon;
                    const isActive = active === it.id;
                    return (
                      <li key={it.id}>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => go(it.id)}
                          aria-current={isActive ? "true" : undefined}
                          className={`h-12 w-full justify-start gap-3 rounded-lg px-3 font-mono-display text-sm font-normal ${
                            isActive
                              ? "bg-cyan/10 text-cyan ring-1 ring-cyan/30"
                              : "text-muted-foreground"
                          }`}
                        >
                          <span className="font-meta text-meta opacity-50">0{i + 1}</span>
                          <Icon className="size-4" strokeWidth={2} />
                          <span className="flex-1 text-left">{it.label}</span>
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
              <Separator className="my-4 bg-border/60" />
              <Button
                asChild
                className="h-12 w-full gap-2 rounded-lg bg-cyan font-mono-display text-sm font-medium text-cyan-foreground shadow-nav-cta hover:bg-cyan"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    go("contact");
                  }}
                >
                  hire_me<span className="opacity-60">()</span>
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </TooltipProvider>
  );
}
