import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/site/icons";
import { navLinks, profile } from "@/lib/portfolio";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="bg-brand grid size-9 place-items-center rounded-xl font-display text-sm font-bold text-foreground">
              NK
            </span>
            <span className="font-display text-base font-semibold">{profile.name}</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {profile.role} crafting dependable web applications with Java, Spring Boot, React and MySQL.
          </p>
          <div className="mt-5 flex gap-2">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="glass grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary">
              <GithubIcon className="size-4" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="glass grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary">
              <LinkedinIcon className="size-4" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send email" className="glass grid size-10 place-items-center rounded-full text-muted-foreground transition-colors hover:text-primary">
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-foreground/80 transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="break-all text-foreground/80 transition-colors hover:text-primary">
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-2 text-foreground/80">
              <MapPin className="size-4 text-primary" /> {profile.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Built with React · Designed for recruiters</p>
        </div>
      </div>
    </footer>
  );
}
