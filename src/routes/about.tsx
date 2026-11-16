import { createFileRoute } from "@tanstack/react-router";
import { Award, Briefcase, GraduationCap, Lightbulb, MapPin, Puzzle, Rocket } from "lucide-react";

import { CtaBand } from "@/components/site/CtaBand";
import { PageHeader, SectionHeading } from "@/components/site/PageHeader";
import { certifications, education, experience, profile } from "@/lib/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nikhitha K P — Education, Experience & Certifications" },
      {
        name: "description",
        content:
          "Background of Nikhitha K P: B.E. Computer Science at Cauvery Institute of Technology, Java Full Stack training and certifications.",
      },
      { property: "og:title", content: "About Nikhitha K P — Java Full Stack Developer" },
      {
        property: "og:description",
        content: "Education, experience and certifications of Java Full Stack Developer Nikhitha K P.",
      },
    ],
  }),
  component: About,
});

const values = [
  { icon: Puzzle, title: "Problem-solver", text: "I break complex requirements into clear, testable pieces before writing a line of code." },
  { icon: Lightbulb, title: "Practical builder", text: "I like building applications people can actually use — booking, shopping, tracking." },
  { icon: Rocket, title: "Fast learner", text: "From Servlets to Spring Boot and React, I pick up new tools quickly and apply them." },
];

function About() {
  return (
    <>
      <PageHeader
        label="About me"
        title={<>A developer who loves <span className="text-gradient">building things that work</span></>}
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm <span className="font-semibold text-foreground">{profile.name}</span>, a 2026 Computer Science Engineering graduate
            from {profile.location.split(",")[0]}, Karnataka, and an aspiring Java Full Stack Developer.
          </p>
          <p>
            My interest in software development grew from enjoying problem-solving — understanding how a system should behave and then
            designing the data model, APIs and interface to make it happen. I've built a full-stack e-commerce store with Servlets and
            JDBC, a real-time queue management platform with Spring Boot and React, and a membership tracking CLI in pure Java.
          </p>
          <p>
            I'm now looking for a Software Developer or Java Full Stack Developer role where I can contribute to real products, learn
            from experienced engineers and keep growing.
          </p>
        </div>
        <aside className="glass h-fit rounded-3xl p-7">
          <dl className="space-y-5 text-sm">
            {[
              ["Name", profile.name],
              ["Role", profile.role],
              ["Location", profile.location],
              ["Degree", "B.E. CSE · 2026"],
              ["Email", profile.email],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 border-b border-border pb-4 last:border-0 last:pb-0">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{k}</dt>
                <dd className="break-all font-medium text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-3">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="glass gradient-border rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <div className="bg-brand grid size-10 place-items-center rounded-xl">
              <Icon className="size-5 text-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section id="education" className="mx-auto mt-28 max-w-6xl scroll-mt-24 px-5 sm:px-8">
        <SectionHeading label="Education" title="Academic background" />
        <div className="glass gradient-border mt-8 flex flex-col gap-6 rounded-3xl p-7 sm:flex-row sm:items-center sm:p-9">
          <div className="bg-brand grid size-16 shrink-0 place-items-center rounded-2xl shadow-glow">
            <GraduationCap className="size-8 text-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold sm:text-2xl">{education.degree}</h3>
            <p className="mt-1.5 flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="size-4 text-primary" /> {education.school}
            </p>
          </div>
          <div className="flex gap-3 sm:flex-col sm:items-end">
            <span className="rounded-full border border-border px-4 py-1.5 font-mono text-sm">{education.period}</span>
            <span className="rounded-full bg-secondary px-4 py-1.5 font-mono text-sm text-primary">{education.score}</span>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-5 sm:px-8">
        <SectionHeading label="Experience" title="Training & hands-on work" />
        <ol className="relative mt-10 space-y-6 border-l border-border pl-8">
          {experience.map((e) => (
            <li key={e.org} className="relative">
              <span className="bg-brand absolute -left-[41px] top-6 grid size-5 place-items-center rounded-full ring-4 ring-background" />
              <div className="glass rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                      <Briefcase className="size-4 text-primary" /> {e.org}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{e.role}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/85">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Certifications */}
      <section id="certifications" className="mx-auto mt-24 max-w-6xl scroll-mt-24 px-5 sm:px-8">
        <SectionHeading label="Certifications" title="Continuous learning" />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {certifications.map((c) => (
            <div key={c.title} className="glass gradient-border group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:text-violet">
                  <Award className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{c.issuer}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
