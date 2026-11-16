import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, Download, GraduationCap, Layers, MapPin } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { GithubIcon, LinkedinIcon } from "@/components/site/icons";
import { SectionHeading } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Button } from "@/components/ui/button";
import { coreSkills, profile, projects } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikhitha K P — Java Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Nikhitha K P is a 2026 Computer Science graduate and Java Full Stack Developer skilled in Java, Spring Boot, React and MySQL.",
      },
      { property: "og:title", content: "Nikhitha K P — Java Full Stack Developer" },
      {
        property: "og:description",
        content: "Projects, skills and resume of Nikhitha K P — Java, Spring Boot, React.js and MySQL developer.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: Code2, label: "Core focus", value: "Java & Spring Boot" },
  { icon: Layers, label: "Full stack", value: "React + REST APIs" },
  { icon: Database, label: "Data layer", value: "MySQL · Hibernate" },
  { icon: GraduationCap, label: "B.E. CSE", value: "2026 · CGPA 8.0" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 sm:pt-40">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="bg-brand animate-float pointer-events-none absolute -left-32 top-24 size-80 rounded-full opacity-25 blur-[100px]" />
        <div className="bg-brand animate-float pointer-events-none absolute -right-24 top-60 size-96 rounded-full opacity-20 blur-[120px] [animation-delay:-4s]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Open to Software Developer roles
            </div>

            <h1 className="animate-fade-up mt-6 text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl [animation-delay:80ms]">
              Hi, I'm <span className="text-gradient">Nikhitha K P</span>
            </h1>
            <p className="animate-fade-up mt-4 font-display text-xl font-semibold text-foreground/90 sm:text-2xl [animation-delay:140ms]">
              {profile.role}
            </p>
            <p className="animate-fade-up mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg [animation-delay:200ms]">
              {profile.intro}
            </p>

            <div className="animate-fade-up mt-8 flex flex-wrap gap-3 [animation-delay:260ms]">
              <Button asChild variant="hero" size="xl">
                <Link to="/projects">
                  View Projects <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <a href={profile.resumeUrl} download={profile.resumeFileName}>
                  <Download /> Download Resume
                </a>
              </Button>
            </div>

            <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground [animation-delay:320ms]">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-4 text-primary" /> {profile.location}
              </span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
                <GithubIcon className="size-4" /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-foreground">
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
            </div>
          </div>

          {/* Code window */}
          <div className="animate-fade-up relative [animation-delay:200ms]">
            <div className="bg-brand absolute -inset-1 rounded-[1.75rem] opacity-40 blur-2xl" />
            <div className="glass relative overflow-hidden rounded-3xl">
              <div className="flex items-center gap-2 border-b border-border px-5 py-3.5">
                <span className="size-3 rounded-full bg-destructive/80" />
                <span className="size-3 rounded-full bg-chart-5/80" />
                <span className="size-3 rounded-full bg-chart-4/80" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">Developer.java</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-7 text-foreground/85">
                <code>
                  <span className="text-violet">public class</span> <span className="text-cyan">Developer</span> {"{"}
                  {"\n"}  <span className="text-violet">String</span> name = <span className="text-chart-4">"Nikhitha K P"</span>;
                  {"\n"}  <span className="text-violet">String</span> role = <span className="text-chart-4">"Java Full Stack"</span>;
                  {"\n"}  <span className="text-violet">String[]</span> stack = {"{"}
                  {"\n"}    <span className="text-chart-4">"Spring Boot"</span>, <span className="text-chart-4">"React"</span>,
                  {"\n"}    <span className="text-chart-4">"Hibernate"</span>, <span className="text-chart-4">"MySQL"</span>
                  {"\n"}  {"}"};
                  {"\n"}
                  {"\n"}  <span className="text-violet">boolean</span> <span className="text-primary">isOpenToWork</span>() {"{"}
                  {"\n"}    <span className="text-violet">return</span> <span className="text-cyan">true</span>;
                  {"\n"}  {"}"}
                  {"\n"}{"}"}
                  <span className="animate-blink ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary" />
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="relative mx-auto mt-20 max-w-6xl px-5 sm:px-8">
          <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, label, value }) => (
              <li key={label} className="glass rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                <Icon className="size-5 text-primary" />
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
                <p className="mt-1 font-display text-base font-semibold">{value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto mt-28 grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <SectionHeading label="About me" title={<>Turning ideas into <span className="text-gradient">practical software</span></>} />
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
          <p>
            I'm a Computer Science Engineering graduate from Cauvery Institute of Technology, Mandya, with a genuine interest in
            software development and problem-solving. I enjoy taking a real-world problem — like long waiting lines or manual
            membership tracking — and turning it into a clean, working application.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3">
            More about me <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Skills marquee-ish */}
      <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading label="Tech stack" title="Tools I build with" />
          <Link to="/skills" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3">
            All skills <ArrowRight className="size-4" />
          </Link>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {coreSkills.map((s) => (
            <li
              key={s}
              className="glass rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      {/* Featured projects */}
      <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            label="Featured work"
            title={<>Selected <span className="text-gradient">projects</span></>}
            description="Full-stack and backend applications built with Java, Spring Boot, React and MySQL."
          />
          <Button asChild variant="glass" className="rounded-full px-5">
            <Link to="/projects">
              View all projects <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
