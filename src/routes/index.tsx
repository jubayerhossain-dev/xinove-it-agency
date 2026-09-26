import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Smartphone,
  PenTool,
  Clapperboard,
  Megaphone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Agency — Web, App, UI/UX & Marketing" },
      {
        name: "description",
        content:
          "Full-service digital agency: web development & design, app development, UI/UX design, video editing and digital marketing. Fixed-scope packages, fast delivery.",
      },
      { property: "og:title", content: "Digital Agency — Web, App, UI/UX & Marketing" },
      {
        property: "og:description",
        content:
          "We design and build websites, apps and brands that grow your business — plus video and digital marketing under one roof.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="Agency logo"
      className={`${className} w-auto object-contain`}
    />
  );
}

function Navbar() {
  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" aria-label="Home" className="flex items-center">
          <Logo className="h-9" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-lime transition-colors hover:bg-ink-soft"
        >
          Book a call
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Web · App · UI/UX · Video · Marketing
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl">
          We build digital products that <em className="italic text-lime-dark">actually ship</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          A full-service digital agency. From your first landing page to a
          full product launch — design, development, video and marketing,
          all under one roof.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-lime transition-colors hover:bg-ink-soft"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-secondary"
          >
            View services
          </a>
        </div>
        <div className="mt-16 flex flex-wrap gap-x-12 gap-y-6 border-t border-border/70 pt-8">
          {[
            ["50+", "Projects delivered"],
            ["5", "Service lines"],
            ["24h", "Response time"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="font-display text-4xl text-foreground">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Code2,
    title: "Web Development & Design",
    desc: "Fast, modern websites and web apps — from landing pages to full platforms, built to convert.",
    tags: ["React", "SEO-ready", "Responsive"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "iOS and Android apps with clean UX and solid engineering, from MVP to store release.",
    tags: ["iOS", "Android", "MVP"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Interfaces people love to use — research, wireframes, prototypes and polished design systems.",
    tags: ["Figma", "Prototyping", "Design systems"],
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    desc: "Scroll-stopping edits for ads, social media and brand stories — color, sound and motion included.",
    tags: ["Reels & ads", "Motion", "Color grade"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "Campaigns that grow real numbers — social media, paid ads, content and analytics.",
    tags: ["Social", "Paid ads", "Analytics"],
  },
];

function Services() {
  return (
    <section id="services" className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime">
            Services
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Everything your brand needs, <em className="italic text-lime">in one team</em>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-lime/15 bg-ink-soft p-8 transition-colors hover:border-lime/40"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/15 text-lime">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-2xl text-lime/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-cream">{s.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/70">{s.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-lime/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-lime"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "We learn your business, audience and goals, then agree on a fixed scope and timeline.",
  },
  {
    n: "02",
    title: "Design & Build",
    desc: "You review designs before we write a line of code — then we build, test and polish.",
  },
  {
    n: "03",
    title: "Launch & Grow",
    desc: "We ship, measure and keep improving — with marketing that brings the right people in.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Process
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Simple, <em className="italic text-lime-dark">transparent</em> process
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <span className="font-display text-3xl text-lime-dark">{s.n}</span>
              <h3 className="mt-4 font-display text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Starter",
    price: "$499",
    note: "one-time",
    blurb: "Perfect for a first presence online.",
    features: [
      "One-page website",
      "Mobile-friendly design",
      "Contact form setup",
      "Basic SEO",
      "Delivered in 1–2 weeks",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,499",
    note: "one-time",
    blurb: "For brands that want to stand out.",
    features: [
      "Up to 6-page website",
      "Custom UI/UX design",
      "Brand kit (logo usage, colors)",
      "On-page SEO + analytics",
      "2 social media video edits",
      "Delivered in 2–4 weeks",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "$2,999+",
    note: "project-based",
    blurb: "Web + app + marketing, end to end.",
    features: [
      "Custom web or mobile app",
      "Full brand identity",
      "Digital marketing campaign",
      "Monthly content & ads",
      "Priority support",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Pricing
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground md:text-5xl">
            Fixed-scope <em className="italic text-lime-dark">packages</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Clear prices, no surprises. Custom project? Tell us about it — we
            quote within 24 hours.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl p-8 ${
                p.featured
                  ? "bg-ink text-cream shadow-xl shadow-ink/20 lg:-my-4"
                  : "border border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-lime px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                  Most popular
                </span>
              )}
              <h3 className={`font-display text-2xl ${p.featured ? "text-cream" : "text-foreground"}`}>
                {p.name}
              </h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-cream/70" : "text-muted-foreground"}`}>
                {p.blurb}
              </p>
              <p className="mt-6 flex items-baseline gap-2">
                <span
                  className={`font-display text-5xl ${p.featured ? "text-lime" : "text-foreground"}`}
                >
                  {p.price}
                </span>
                <span
                  className={`text-sm ${p.featured ? "text-cream/60" : "text-muted-foreground"}`}
                >
                  {p.note}
                </span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        p.featured ? "bg-lime text-ink" : "bg-lime/25 text-foreground"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={p.featured ? "text-cream/85" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${
                  p.featured
                    ? "bg-lime text-ink hover:bg-lime/90"
                    : "bg-primary text-lime hover:bg-ink-soft"
                }`}
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const inputCls =
    "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime";

  return (
    <section id="contact" className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-lime">Contact</p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Let's build something <em className="italic text-lime">together</em>
          </h2>
          <p className="mt-5 max-w-md text-cream/70">
            Tell us about your project — a website, an app, a brand or a full
            campaign. We reply within 24 hours with next steps and a quote.
          </p>
        </div>
        {sent ? (
          <div className="flex flex-col items-center justify-center rounded-2xl bg-cream p-12 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-lime text-ink">
              <Check className="h-7 w-7" strokeWidth={3} />
            </span>
            <h3 className="mt-6 font-display text-3xl text-foreground">Message sent</h3>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Thanks for reaching out — we'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-semibold uppercase tracking-wide text-foreground underline underline-offset-4"
            >
              Send another
            </button>
          </div>
        ) : (
          <form
            className="rounded-2xl bg-cream p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required placeholder="Your name" className={inputCls} />
              <input required type="email" placeholder="Email address" className={inputCls} />
            </div>
            <select required defaultValue="" className={`mt-4 ${inputCls}`}>
              <option value="" disabled>
                What do you need?
              </option>
              <option>Web Development & Design</option>
              <option>App Development</option>
              <option>UI/UX Design</option>
              <option>Video Editing</option>
              <option>Digital Marketing</option>
              <option>Something else</option>
            </select>
            <textarea
              required
              rows={5}
              placeholder="Tell us about your project…"
              className={`mt-4 resize-none ${inputCls}`}
            />
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-lime transition-colors hover:bg-ink-soft"
            >
              Send message
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Twitter, label: "X (Twitter)" },
  { icon: Youtube, label: "YouTube" },
];

function Footer() {
  return (
    <footer className="border-t border-lime/10 bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-14">
        <a href="#" aria-label="Back to top" className="rounded-full bg-cream px-4 py-2.5">
          <Logo className="h-8" />
        </a>
        <div className="mt-8 flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-lime/25 text-cream/70 transition-colors hover:border-lime hover:text-lime"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-xs text-cream/50">
          © {new Date().getFullYear()} · All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
