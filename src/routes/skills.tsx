import { createFileRoute } from "@tanstack/react-router";
import { Braces, Database, Monitor, Server } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader } from "@/components/site/PageHeader";
import { skillGroups } from "@/lib/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Nikhitha K P | Java, Spring Boot, React, MySQL" },
      {
        name: "description",
        content:
          "Technical skills of Nikhitha K P: Java, OOP, SQL, Spring Boot, Hibernate, JDBC, Servlets, JSP, REST APIs, React.js, MySQL and Git.",
      },
      { property: "og:title", content: "Technical Skills — Nikhitha K P" },
      {
        property: "og:description",
        content: "Java full stack toolkit: Spring Boot, Hibernate, JDBC, React.js, MySQL, REST APIs and more.",
      },
    ],
  }),
  component: Skills,
});

const icons = [Braces, Server, Monitor, Database];

function Skills() {
  return (
    <>
      <PageHeader
        label="Skills"
        title={<>My <span className="text-gradient">technical toolkit</span></>}
        description="From object-oriented Java and relational databases to Spring Boot APIs and React interfaces — the technologies I use to ship complete applications."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-2">
        {skillGroups.map((g, i) => {
          const Icon = icons[i % icons.length] ?? Braces;
          return (
            <div
              key={g.title}
              className="glass gradient-border animate-fade-up group rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand grid size-12 place-items-center rounded-2xl">
                  <Icon className="size-6 text-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{g.title}</h2>
                  <p className="text-sm text-muted-foreground">{g.description}</p>
                </div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      <section className="mx-auto mt-6 max-w-6xl px-5 sm:px-8">
        <div className="glass rounded-3xl p-7">
          <h2 className="text-lg font-semibold">Also comfortable with</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            CRUD design, RESTful API design, JSON, Advanced Java, API testing with Postman, and productive use of generative AI tools
            (ChatGPT, Claude, Google Gemini) for research and debugging.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
