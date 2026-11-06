import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Download } from "lucide-react";

import { ResumeDocument } from "@/components/resume-document";
import data from "@/data/index.json";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: `${data.hero.name} — Resume` },
      { name: "description", content: data.meta.description },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 print:min-h-0">
      <div className="mx-auto flex max-w-[52rem] flex-wrap items-center justify-between gap-3 px-6 pt-6 print:hidden">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition hover:text-neutral-900"
        >
          <ArrowLeft className="size-3.5" />
          Back to portfolio
        </a>
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-1.5 rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900"
        >
          <Download className="size-3.5" />
          Download PDF
        </a>
      </div>

      <ResumeDocument className="mx-auto max-w-[52rem] px-6 pt-8 pb-16 print:px-0 print:pt-0 print:pb-0" />
    </main>
  );
}
