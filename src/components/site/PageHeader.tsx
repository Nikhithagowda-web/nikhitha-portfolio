import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-primary">
      <span className="bg-brand size-1.5 rounded-full" />
      {children}
    </span>
  );
}

export function PageHeader({ label, title, description }: { label: string; title: ReactNode; description?: string }) {
  return (
    <section className="relative overflow-hidden pb-12 pt-36 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="animate-fade-up">
          <SectionLabel>{label}</SectionLabel>
        </div>
        <h1 className="animate-fade-up mt-5 max-w-3xl text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl [animation-delay:80ms]">
          {title}
        </h1>
        {description && (
          <p className="animate-fade-up mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground [animation-delay:160ms]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({ label, title, description }: { label: string; title: ReactNode; description?: string }) {
  return (
    <div className="max-w-2xl">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  );
}
