import { createFileRoute } from "@tanstack/react-router";

import { CtaBand } from "@/components/site/CtaBand";
import { GithubIcon } from "@/components/site/icons";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Button } from "@/components/ui/button";
import { profile, projects } from "@/lib/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nikhitha K P | Full Stack Java Applications" },
      {
        name: "description",
        content:
          "AI-Powered E-Commerce Website, SmartQueue queue management system and Gym Manager CLI — projects by Nikhitha K P.",
      },
      { property: "og:title", content: "Projects by Nikhitha K P" },
      {
        property: "og:description",
        content: "Full-stack Java projects built with Spring Boot, Servlets, JDBC, React.js and MySQL, with live demos.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHeader
        label="Projects"
        title={<>Things I've <span className="text-gradient">designed & built</span></>}
        description="Each project covers the full journey — data modelling, backend logic, APIs and the user interface."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div key={p.slug} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
            <ProjectCard project={p} index={i} detailed />
          </div>
        ))}
      </section>
      <div className="mt-12 flex justify-center px-5">
        <Button asChild variant="glass" size="xl">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GithubIcon /> More on GitHub
          </a>
        </Button>
      </div>
      <CtaBand />
    </>
  );
}
