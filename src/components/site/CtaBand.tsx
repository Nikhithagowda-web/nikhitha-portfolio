import { Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";

export function CtaBand() {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-5 sm:px-8">
      <div className="glass relative overflow-hidden rounded-3xl px-7 py-12 text-center sm:px-12 sm:py-16">
        <div className="bg-brand pointer-events-none absolute -left-24 -top-24 size-72 rounded-full opacity-20 blur-3xl" />
        <div className="bg-brand pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full opacity-20 blur-3xl" />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-bold sm:text-4xl">
          Looking for a <span className="text-gradient">Java Full Stack Developer</span>?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
          I'm actively seeking Software Developer roles and would love to talk about how I can contribute to your team.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Let's talk <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="glass" size="xl">
            <a href={profile.resumeUrl} download={profile.resumeFileName}>
              <Download /> Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
