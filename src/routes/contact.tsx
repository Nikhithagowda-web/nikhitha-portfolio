import { createFileRoute } from "@tanstack/react-router";
import { Copy, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { GithubIcon, LinkedinIcon } from "@/components/site/icons";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildMailto, contactSchema } from "@/lib/contact";
import { profile } from "@/lib/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Nikhitha K P — Java Full Stack Developer" },
      {
        name: "description",
        content: "Get in touch with Nikhitha K P for Software Developer and Java Full Stack Developer opportunities.",
      },
      { property: "og:title", content: "Contact Nikhitha K P" },
      { property: "og:description", content: "Email, LinkedIn, GitHub and a contact form to reach Nikhitha K P." },
    ],
  }),
  component: Contact,
});

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: LinkedinIcon, label: "LinkedIn", value: "nikhitha-k-p", href: profile.linkedin, external: true },
  { icon: GithubIcon, label: "GitHub", value: "Nikhithagowda-web", href: profile.github, external: true },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
];

function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const result = contactSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    window.location.href = buildMailto(profile.email, result.data);
    toast.success("Opening your email app", { description: "Your message is ready to send — just hit send." });
    form.reset();
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast.success("Email copied to clipboard");
    } catch {
      toast.error("Couldn't copy — please copy it manually");
    }
  }

  return (
    <>
      <PageHeader
        label="Contact"
        title={<>Let's build something <span className="text-gradient">great together</span></>}
        description="I'm open to Software Developer and Java Full Stack Developer roles. Drop a message — I usually reply within a day."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-[1fr_1.35fr]">
        <div className="space-y-4">
          {channels.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="glass gradient-border group flex items-center gap-4 rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <div className="bg-brand grid size-11 shrink-0 place-items-center rounded-xl">
                <Icon className="size-5 text-foreground" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                <p className="truncate font-medium transition-colors group-hover:text-primary">{value}</p>
              </div>
            </a>
          ))}
          <div className="glass flex items-center gap-4 rounded-2xl p-5">
            <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
              <MapPin className="size-5" />
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Location</p>
              <p className="font-medium">{profile.location}</p>
            </div>
          </div>
          <Button variant="ghost" onClick={copyEmail} className="w-full justify-center rounded-full text-muted-foreground">
            <Copy /> Copy email address
          </Button>
        </div>

        <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">Fill this in and your email app will open with the message ready to send.</p>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <Field id="name" label="Your name" error={errors.name}>
              <Input id="name" name="name" autoComplete="name" placeholder="Priya Sharma" maxLength={100} className="h-11 bg-secondary/50" aria-invalid={!!errors.name} />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <Input id="email" name="email" type="email" autoComplete="email" placeholder="priya@company.com" maxLength={255} className="h-11 bg-secondary/50" aria-invalid={!!errors.email} />
            </Field>
          </div>
          <div className="mt-5">
            <Field id="subject" label="Subject (optional)" error={errors.subject}>
              <Input id="subject" name="subject" placeholder="Java Developer opportunity" maxLength={150} className="h-11 bg-secondary/50" />
            </Field>
          </div>
          <div className="mt-5">
            <Field id="message" label="Message" error={errors.message}>
              <Textarea
                id="message"
                name="message"
                rows={6}
                maxLength={2000}
                placeholder="Hi Nikhitha, we'd love to talk to you about…"
                className="bg-secondary/50"
                aria-invalid={!!errors.message}
              />
            </Field>
          </div>
          <Button type="submit" variant="hero" size="xl" className="mt-7 w-full sm:w-auto">
            <Send /> Send message
          </Button>
        </form>
      </section>
    </>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string | undefined; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
