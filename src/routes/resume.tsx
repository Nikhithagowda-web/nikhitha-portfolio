import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink, FileText } from "lucide-react";

import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";

const resumeUrl = "/Nikhitha_Software_Developer.pdf";
const resumeFileName = "Nikhitha_Software_Developer.pdf";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      {
        title: "Resume — Nikhitha K P | Java Full Stack Developer",
      },
      {
        name: "description",
        content: "View or download the resume of Nikhitha K P, Java Full Stack Developer.",
      },
    ],
  }),
  component: Resume,
});

function Resume() {
  return (
    <>
      <PageHeader
        label="Resume"
        title={
          <>
            My <span className="text-gradient">resume</span>
          </>
        }
        description="A one-page summary of my education, projects, technical skills and experience."
      />

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="glass flex flex-col gap-5 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex items-center gap-4">
            <div className="bg-brand grid size-12 place-items-center rounded-2xl">
              <FileText className="size-6 text-foreground" />
            </div>

            <div>
              <p className="font-semibold">Nikhitha_Software_Developer(1).pdf</p>
              <p className="text-sm text-muted-foreground">PDF · 1 page · Updated 2026</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="glass" size="lg" className="rounded-full">
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                <ExternalLink />
                Open in new tab
              </a>
            </Button>

            <Button asChild variant="hero" size="lg" className="rounded-full">
              <a href={resumeUrl} download={resumeFileName}>
                <Download />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        <div className="glass mt-6 overflow-hidden rounded-3xl p-2">
          <iframe
            src={`${resumeUrl}#view=FitH`}
            title="Nikhitha K P Resume"
            className="h-[80vh] min-h-[560px] w-full rounded-2xl bg-secondary"
          />
        </div>
      </section>
    </>
  );
}
