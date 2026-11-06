import { useEffect } from "react";
import { Download, X } from "lucide-react";

import { ResumeDocument } from "@/components/resume-document";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

type ResumePanelProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Resume as a left-hand split pane on wide screens (the portfolio shifts right by
 * `--resume-w`) and as a left sheet on narrow screens.
 */
export function ResumePanel({ open, onClose }: ResumePanelProps) {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const actions = (
    <div className="flex items-center gap-2">
      <a
        href="/resume.pdf"
        download
        className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
      >
        <Download className="size-3.5" />
        Download PDF
      </a>
      <Button
        type="button"
        variant="ghost"
        onClick={onClose}
        aria-label="Close resume"
        className="size-8 rounded-md text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
      >
        <X className="size-4" />
      </Button>
    </div>
  );

  return (
    <>
      <aside
        aria-label="Resume"
        aria-hidden={!open}
        inert={!open}
        className="fixed inset-y-0 left-0 z-40 hidden w-[var(--resume-w)] overflow-y-auto overscroll-contain border-r border-neutral-300 bg-white text-neutral-900 shadow-[2px_0_28px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out md:block print:hidden"
        style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-neutral-200 bg-white/95 px-6 py-3 backdrop-blur">
          <span className="font-meta text-meta text-neutral-500">Resume</span>
          {actions}
        </div>
        <ResumeDocument className="px-7 pt-7 pb-14" />
      </aside>

      {isMobile && (
        <Sheet open={open} onOpenChange={(next) => !next && onClose()}>
          <SheetContent
            side="left"
            aria-describedby={undefined}
            onOpenAutoFocus={(event) => {
              event.preventDefault();
              (event.currentTarget as HTMLElement | null)?.focus();
            }}
            className="w-[94vw] max-w-md gap-0 overflow-y-auto overscroll-contain border-neutral-300 bg-white p-0 text-neutral-900 outline-none [&>button]:hidden"
          >
            <SheetTitle className="sr-only">Resume</SheetTitle>
            <SheetDescription className="sr-only">Resume of the portfolio owner</SheetDescription>
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-neutral-200 bg-white/95 px-5 py-3 backdrop-blur">
              <span className="font-meta text-meta text-neutral-500">Resume</span>
              {actions}
            </div>
            <ResumeDocument className="px-5 pt-6 pb-12" />
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
