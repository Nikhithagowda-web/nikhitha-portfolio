import { ArrowUpRight, Check, TerminalSquare } from "lucide-react";

import { GithubIcon } from "@/components/site/icons";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/portfolio";

export function ProjectCard({ project, index, detailed = false }: { project: Project; index: number; detailed?: boolean }) {
  return (
    <article className="glass gradient-border group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glow">
      <div className="bg-brand pointer-events-none absolute -right-20 -top-20 size-56 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />

      <div className="relative flex items-start justify-between gap-4">
        <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, "0")}</span>
        <span className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground">{project.period}</span>
      </div>

      <p className="relative mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{project.tagline}</p>
      <h3 className="relative mt-2 text-xl font-semibold leading-snug transition-colors group-hover:text-primary sm:text-2xl">
        {project.title}
      </h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      {detailed && (
        <ul className="relative mt-5 space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-foreground/85">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <ul className="relative mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[11px] text-foreground/80">
            {t}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-wrap gap-3 pt-7">
        <Button asChild variant="glass" size="sm" className="rounded-full px-4">
          <a href={project.github} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
        </Button>
        {project.demo ? (
          <Button asChild variant="hero" size="sm" className="rounded-full px-4">
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live Demo <ArrowUpRight />
            </a>
          </Button>
        ) : (
          <span className="inline-flex h-8 items-center gap-2 rounded-full border border-dashed border-border px-4 text-xs text-muted-foreground">
            <TerminalSquare className="size-4" /> Command-line app
          </span>
        )}
      </div>
    </article>
  );
}
