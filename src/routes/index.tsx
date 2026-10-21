import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Mail, MapPin, Quote, Send } from "lucide-react";
import { z } from "zod";

import portrait from "@/assets/portrait.jpg";
import workCommerce from "@/assets/work-commerce.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import workFintech from "@/assets/work-fintech.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maya Cole — UX Designer" },
      {
        name: "description",
        content:
          "Maya Cole is a freelance UX designer crafting research-driven product experiences for fintech, SaaS, and e-commerce teams.",
      },
      { property: "og:title", content: "Maya Cole — UX Designer" },
      {
        property: "og:description",
        content:
          "Research-driven UX design for fintech, SaaS, and e-commerce teams. Selected work, process, and client results.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Maya Cole — UX Designer" },
      {
        name: "twitter:description",
        content:
          "Research-driven UX design for fintech, SaaS, and e-commerce teams. Selected work, process, and client results.",
      },
    ],
  }),
  component: Index,
});

/* ---------------------------------- data ---------------------------------- */

const projects = [
  {
    title: "Ember Banking",
    category: "Mobile · Fintech",
    year: "2025",
    blurb: "Rebuilt onboarding and money flows for a challenger bank — activation up 34%.",
    image: workFintech,
  },
  {
    title: "Pulse Analytics",
    category: "Web app · SaaS",
    year: "2024",
    blurb: "A dashboard redesign that turned dense data into decisions teams actually make.",
    image: workDashboard,
  },
  {
    title: "StyleNest",
    category: "Mobile · E-commerce",
    year: "2024",
    blurb: "Fashion commerce app with a browse-to-buy flow that lifted conversion 21%.",
    image: workCommerce,
  },
] as const;

const clients = ["NORDVIK", "helio", "Kappa&Co", "MONO", "Basecoat", "Lumen"] as const;

const testimonials = [
  {
    quote:
      "Maya joined for a six-week engagement and left us with a design system we still run on two years later. She asks the questions your team has been avoiding.",
    name: "Alia Karim",
    role: "Product Lead, Pulse Analytics",
  },
  {
    quote:
      "Our activation rate jumped 34% after the onboarding redesign. The best part — every recommendation came with evidence from real user sessions.",
    name: "Jonas Weber",
    role: "CEO, Ember Banking",
  },
  {
    quote:
      "She thinks like a partner, not a vendor. Sharp feedback, fast iterations, zero drama. We've already booked her for the next product.",
    name: "Sofia Lindgren",
    role: "Founder, StyleNest",
  },
] as const;

const contactSchema = z.object({
  name: z.string().trim().nonempty("Please add your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please add a valid email").max(255, "Email must be under 255 characters"),
  message: z
    .string()
    .trim()
    .nonempty("Tell me a little about the project")
    .max(2000, "Message must be under 2000 characters"),
});

/* --------------------------------- sections -------------------------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          Maya<span className="text-primary">.</span>Cole
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="transition-colors hover:text-foreground">Work</a>
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#testimonials" className="transition-colors hover:text-foreground">Testimonials</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          Let's talk
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="ember-blob pointer-events-none absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-[-10%] h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-[100px]"
      />
      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pb-24 pt-36 md:pt-44">
        <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Available for new projects
        </p>
        <h1 className="font-display max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight md:text-8xl">
          Design that
          <br />
          makes products
          <br />
          <span className="text-primary text-glow">feel inevitable.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          I'm Maya Cole, a freelance UX designer helping fintech, SaaS, and commerce teams turn
          messy problems into experiences people love using.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            See my work
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:border-primary/50 hover:bg-ember-soft"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <a href="#contact" className="group block focus-visible:outline-2 focus-visible:outline-primary">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} — ${project.category} case study`}
            width={1024}
            height={1280}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
        <span className="absolute top-4 left-4 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          {project.year}
        </span>
        <span className="absolute top-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">{project.category}</p>
          <h3 className="font-display mt-1 text-2xl font-bold">{project.title}</h3>
          <p className="mt-2 max-w-none text-sm text-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
            {project.blurb}
          </p>
        </div>
      </div>
    </a>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Selected work</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Recent projects
          </h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">
          Three case studies from the last two years — research, flows, and shipped interfaces.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-y border-border bg-card/50">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div className="relative">
          <div aria-hidden className="absolute -inset-3 rounded-3xl bg-primary/10 blur-2xl" />
          <img
            src={portrait}
            alt="Maya Cole, freelance UX designer"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-2xl border border-border object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">About</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Designer, researcher, and straight talker.
          </h2>
          <p className="mt-6 text-muted-foreground">
            For eight years I've worked with startups and established teams to ship products people
            actually enjoy. My process is simple: talk to real users, map the messy middle, and
            design the smallest thing that fixes the biggest problem.
          </p>
          <p className="mt-4 text-muted-foreground">
            I embed with your team for the length of an engagement — no hand-offs into the void, no
            pretty decks nobody uses.
          </p>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              ["8+", "Years of practice"],
              ["60+", "Products shipped"],
              ["12", "Design awards"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl font-bold text-primary">{value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
        Trusted by teams at
      </p>
      <div className="mt-8 grid grid-cols-3 items-center gap-x-6 gap-y-8 md:grid-cols-6">
        {clients.map((client, i) => (
          <span
            key={client}
            className={`text-center text-lg font-semibold tracking-wide text-muted-foreground/70 transition-colors hover:text-foreground ${
              i % 2 === 0 ? "font-display tracking-widest uppercase" : "lowercase italic"
            }`}
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const goTo = (i: number) => {
    if (timer.current) clearInterval(timer.current);
    setIndex(i);
    timer.current = setInterval(() => setIndex((n) => (n + 1) % testimonials.length), 7000);
  };

  const current = testimonials[index]!;

  return (
    <section id="testimonials" className="scroll-mt-24 border-y border-border bg-card/50">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">Testimonials</p>
        <Quote className="mx-auto mt-8 h-10 w-10 text-primary" aria-hidden />
        <blockquote className="font-display mt-6 min-h-[9rem] text-2xl font-medium leading-snug text-balance md:text-3xl">
          "{current.quote}"
        </blockquote>
        <p className="mt-8 font-semibold">{current.name}</p>
        <p className="text-sm text-muted-foreground">{current.role}</p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo((index - 1 + testimonials.length) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/60 hover:bg-ember-soft"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo((index + 1) % testimonials.length)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/60 hover:bg-ember-soft"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "message", string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof form) => (value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      for (const issue of parsed.error.issues) {
        fieldErrors[issue.path[0] as keyof typeof errors] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSent(true);
  };

  const fieldClass =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/40";

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-40%] right-[-5%] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-[110px]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Contact</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Tell me what you're building and where it hurts. I reply within two working days with
            honest thoughts on whether I'm the right fit.
          </p>
          <ul className="mt-10 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" aria-hidden />
              <span>hello@mayacole.design</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" aria-hidden />
              <span>Lisbon, Portugal — working across EU & US time zones</span>
            </li>
          </ul>
        </div>
        {sent ? (
          <div className="flex flex-col items-start justify-center rounded-2xl border border-primary/40 bg-ember-soft p-10">
            <Send className="h-8 w-8 text-primary" aria-hidden />
            <h3 className="font-display mt-4 text-2xl font-bold">Message sent — thank you!</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              I'll get back to you within two working days.
            </p>
            <button
              type="button"
              onClick={() => {
                setSent(false);
                setForm({ name: "", email: "", message: "" });
              }}
              className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-5">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                maxLength={100}
                onChange={(e) => update("name")(e.target.value)}
                placeholder="Your name"
                className={fieldClass}
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="mt-2 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                maxLength={255}
                onChange={(e) => update("email")(e.target.value)}
                placeholder="you@company.com"
                className={fieldClass}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="mt-2 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                Project details
              </label>
              <textarea
                id="contact-message"
                value={form.message}
                maxLength={2000}
                rows={5}
                onChange={(e) => update("message")(e.target.value)}
                placeholder="What are you building, and what's the timeline?"
                className={`${fieldClass} resize-none`}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Send message
              <Send className="h-4 w-4" aria-hidden />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <p className="font-display font-bold tracking-tight text-foreground">
          Maya<span className="text-primary">.</span>Cole
        </p>
        <p>© {new Date().getFullYear()} Maya Cole. Designed with care.</p>
        <a href="#top" className="transition-colors hover:text-primary">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <Work />
      <About />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
