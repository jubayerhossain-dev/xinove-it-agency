import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowDownRight,
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
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo.png.asset.json";
import heroImage from "@/assets/agency-studio-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Agency — Web, App, UI/UX & Marketing" },
      { name: "description", content: "A digital agency for web and app development, UI/UX, video editing and digital marketing." },
      { property: "og:title", content: "Digital Agency — Ideas Built to Move" },
      { property: "og:description", content: "Strategy, design, development, video and marketing from one focused digital team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  ["Services", "#services"],
  ["Process", "#process"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
];

function Logo({ className = "h-9" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Agency logo" className={`${className} w-auto object-contain`} />;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label="Home"><Logo className="h-9" /></a>
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map(([label, href]) => <a key={href} href={href} className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-lime-dark">{label}</a>)}
        </nav>
        <Button asChild className="hidden h-10 bg-lime px-5 text-xs font-bold uppercase tracking-[0.12em] text-ink shadow-none hover:bg-ink hover:text-hero-foreground md:inline-flex">
          <a href="#contact">Start a project <ArrowUpRight /></a>
        </Button>
        <Button variant="ghost" size="icon" className="text-foreground hover:bg-foreground/10 hover:text-lime-dark md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && <nav className="border-t border-border bg-white px-5 py-5 md:hidden">{navLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-border py-4 font-display text-2xl font-semibold text-foreground">{label}</a>)}</nav>}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink pt-28 text-hero-foreground">
      <img src={heroImage} alt="Modern digital studio workspace" width={1920} height={1200} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 lg:px-8 lg:pb-16">
        <div className="rise-in max-w-5xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-lime"><span className="h-px w-10 bg-lime" />Independent digital agency</p>
          <h1 className="font-display text-5xl font-semibold leading-[0.94] tracking-normal sm:text-7xl lg:text-[6.7rem]">
            Ideas built to<br /><span className="text-lime">move business</span> forward.
          </h1>
          <div className="mt-8 grid max-w-4xl gap-7 border-t border-hero-foreground/25 pt-7 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-base leading-relaxed text-hero-foreground/72 md:text-lg">We blend strategy, design and technology to create websites, apps and campaigns that are clear, useful and ready to grow.</p>
            <Button asChild size="lg" className="h-13 w-fit bg-lime px-6 font-bold uppercase tracking-[0.1em] text-ink shadow-none hover:bg-hero-foreground">
              <a href="#services">Explore our work <ArrowDownRight /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const capabilities = ["Web Development", "App Development", "UI/UX Design", "Video Editing", "Digital Marketing"];
function Marquee() {
  const items = [...capabilities, ...capabilities];
  return <div className="overflow-hidden border-y border-ink/10 bg-lime py-4 text-ink"><div className="marquee-track flex w-max items-center">{items.map((item, i) => <div key={`${item}-${i}`} className="flex items-center"><span className="px-7 font-display text-lg font-extrabold uppercase tracking-normal sm:px-10 sm:text-xl">{item}</span><span className="text-xl">✳</span></div>)}</div></div>;
}

const services = [
  { icon: Code2, title: "Web Development & Design", desc: "High-performing websites and web platforms built around your goals, your audience and measurable growth.", tags: ["Strategy", "Development", "SEO"] },
  { icon: Smartphone, title: "App Development", desc: "Useful, intuitive mobile products taken from early concept through engineering and store-ready release.", tags: ["iOS", "Android", "MVP"] },
  { icon: PenTool, title: "UI/UX Design", desc: "Research-led interfaces and systems that reduce friction and make every digital interaction feel natural.", tags: ["Research", "Figma", "Systems"] },
  { icon: Clapperboard, title: "Video Editing", desc: "Sharp edits, motion and sound design that turn raw footage into stories people stop to watch.", tags: ["Social", "Motion", "Campaigns"] },
  { icon: Megaphone, title: "Digital Marketing", desc: "Focused campaigns, paid media and content that build awareness while driving meaningful action.", tags: ["Social", "Paid media", "Analytics"] },
];

function Services() {
  return (
    <section id="services" className="bg-background py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.8fr_1.7fr]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-dark">01 / Capabilities</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.03] text-foreground sm:text-6xl lg:text-7xl">One team for the entire <span className="text-lime-dark">digital journey.</span></h2>
        </div>
        <div className="divide-y divide-border">
          {services.map((service, i) => <article key={service.title} className="group grid gap-6 py-8 transition-colors hover:bg-secondary/55 sm:grid-cols-[60px_1fr] sm:px-4 lg:grid-cols-[70px_1.1fr_1fr_auto] lg:items-center lg:py-10">
            <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
            <div className="flex items-center gap-4"><span className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-card text-lime-dark"><service.icon className="h-5 w-5" /></span><h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">{service.title}</h3></div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:col-start-2 lg:col-start-auto">{service.desc}</p>
            <div className="hidden h-11 w-11 items-center justify-center border border-border text-foreground transition-colors group-hover:border-lime group-hover:bg-lime lg:flex"><ArrowUpRight className="h-5 w-5" /></div>
          </article>)}
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Discover", "We get close to your business, audience and ambition before deciding what to make."],
  ["02", "Design & Build", "We turn the strategy into a focused experience, then engineer and test every detail."],
  ["03", "Launch & Grow", "We ship with confidence, measure what matters and keep improving after launch."],
];
function Process() {
  return <section id="process" className="bg-ink py-24 text-hero-foreground sm:py-28 lg:py-36"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-8 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">02 / How we work</p><h2 className="mt-7 max-w-xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl">Clarity at every stage. <span className="text-lime">No black box.</span></h2></div><p className="max-w-md self-end text-base leading-relaxed text-hero-foreground/60 lg:justify-self-end">A simple, collaborative process keeps the work focused and makes progress visible from first conversation to launch.</p></div><div className="mt-16 grid border border-hero-foreground/15 lg:grid-cols-3">{steps.map(([n,title,desc],i)=><div key={n} className={`p-8 lg:min-h-80 ${i < 2 ? "border-b border-hero-foreground/15 lg:border-b-0 lg:border-r" : ""}`}><span className="font-display text-sm font-bold text-lime">{n}</span><h3 className="mt-20 font-display text-3xl font-bold">{title}</h3><p className="mt-4 text-sm leading-relaxed text-hero-foreground/60">{desc}</p></div>)}</div></div></section>;
}

const plans = [
  { name: "Starter", price: "$499", note: "One-time", blurb: "A focused first step online.", features: ["One-page website", "Mobile-first design", "Contact form", "Basic SEO", "1–2 week delivery"], featured: false },
  { name: "Growth", price: "$1,499", note: "One-time", blurb: "A stronger digital foundation.", features: ["Up to 6 pages", "Custom UI/UX design", "Brand styling", "SEO + analytics", "2 social video edits"], featured: true },
  { name: "Scale", price: "$2,999+", note: "Project-based", blurb: "A complete digital growth system.", features: ["Custom web or mobile app", "Full identity system", "Marketing campaign", "Monthly content & ads", "Priority support"], featured: false },
];
function Pricing() {
  return <section id="pricing" className="bg-background py-24 sm:py-28 lg:py-36"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.7fr]"><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-dark">03 / Pricing</p><div><h2 className="font-display text-5xl font-semibold leading-[1.03] sm:text-6xl">Clear scope. <span className="text-lime-dark">Straightforward price.</span></h2><p className="mt-5 max-w-xl text-muted-foreground">Start with a package or tell us what you have in mind. Every engagement begins with a clear plan.</p></div></div><div className="mt-14 grid gap-px bg-border lg:grid-cols-3">{plans.map((plan)=><article key={plan.name} className={`relative flex min-h-[500px] flex-col p-8 ${plan.featured ? "bg-ink text-hero-foreground" : "bg-card text-foreground"}`}>{plan.featured && <span className="absolute right-0 top-0 bg-lime px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink">Most popular</span>}<p className={`text-xs font-bold uppercase tracking-[0.18em] ${plan.featured ? "text-lime" : "text-lime-dark"}`}>{plan.name}</p><p className="mt-10 font-display text-5xl font-bold">{plan.price}</p><p className={`mt-2 text-xs uppercase tracking-[0.14em] ${plan.featured ? "text-hero-foreground/50" : "text-muted-foreground"}`}>{plan.note}</p><p className={`mt-7 border-b pb-7 text-sm ${plan.featured ? "border-hero-foreground/15 text-hero-foreground/65" : "border-border text-muted-foreground"}`}>{plan.blurb}</p><ul className="mt-7 flex-1 space-y-4">{plan.features.map(f=><li key={f} className="flex items-center gap-3 text-sm"><Check className={`h-4 w-4 ${plan.featured ? "text-lime" : "text-lime-dark"}`} />{f}</li>)}</ul><Button asChild variant={plan.featured ? "secondary" : "default"} className={`mt-8 h-12 w-full font-bold uppercase tracking-[0.1em] shadow-none ${plan.featured ? "bg-lime text-ink hover:bg-hero-foreground" : "bg-primary text-primary-foreground hover:bg-ink-soft"}`}><a href="#contact">Get started <ArrowRight /></a></Button></article>)}</div></div></section>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full border-0 border-b border-hero-foreground/20 bg-transparent px-0 py-4 text-base text-hero-foreground outline-none placeholder:text-hero-foreground/40 focus:border-lime focus:ring-0";
  return <section id="contact" className="bg-ink py-24 text-hero-foreground sm:py-28 lg:py-36"><div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">04 / Let’s talk</p><h2 className="mt-7 font-display text-5xl font-semibold leading-[0.98] sm:text-7xl">Have an idea?<br/><span className="text-lime">Let’s make it real.</span></h2><p className="mt-8 max-w-md text-base leading-relaxed text-hero-foreground/60">Tell us what you are planning. We’ll respond within 24 hours with clear next steps.</p></div>{sent ? <div className="flex min-h-96 flex-col justify-center border border-hero-foreground/15 p-8"><Check className="h-12 w-12 text-lime"/><h3 className="mt-8 font-display text-4xl font-bold">Message received.</h3><p className="mt-3 text-hero-foreground/60">Thanks for reaching out. We’ll be in touch within 24 hours.</p><Button variant="link" onClick={()=>setSent(false)} className="mt-6 w-fit px-0 text-lime">Send another message</Button></div> : <form onSubmit={(e)=>{e.preventDefault();setSent(true)}} className="border border-hero-foreground/15 p-7 sm:p-10"><div className="grid gap-x-8 sm:grid-cols-2"><input required aria-label="Your name" placeholder="Your name" className={field}/><input required type="email" aria-label="Email address" placeholder="Email address" className={field}/></div><select required defaultValue="" aria-label="Service needed" className={`mt-3 ${field}`}><option value="" disabled className="text-foreground">What do you need?</option>{capabilities.map(c=><option key={c} className="text-foreground">{c}</option>)}<option className="text-foreground">Something else</option></select><textarea required rows={4} aria-label="Project details" placeholder="Tell us about your project" className={`mt-3 resize-none ${field}`}/><Button type="submit" className="mt-9 h-13 w-full bg-lime text-sm font-bold uppercase tracking-[0.12em] text-ink shadow-none hover:bg-hero-foreground">Send message <ArrowUpRight /></Button></form>}</div></section>;
}

const socials = [[Facebook,"Facebook"],[Instagram,"Instagram"],[Linkedin,"LinkedIn"],[Twitter,"X"],[Youtube,"YouTube"]] as const;
function Footer() {
  return <footer className="border-t border-border bg-white text-foreground"><div className="mx-auto max-w-7xl px-5 py-12 lg:px-8"><div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between"><a href="#top" aria-label="Back to top"><Logo className="h-11" /></a><div className="flex gap-2">{socials.map(([Icon,label])=><a key={label} href="#" aria-label={label} className="flex h-10 w-10 items-center justify-center border border-border text-foreground/60 transition-colors hover:border-lime hover:bg-lime hover:text-ink"><Icon className="h-4 w-4" /></a>)}</div></div><div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-[11px] uppercase tracking-[0.13em] text-muted-foreground sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} · All rights reserved</p><p>Strategy · Design · Technology</p></div></div></footer>;
}

function Index() {
  return <div className="min-h-screen bg-background font-sans text-foreground"><Navbar/><main><Hero/><Marquee/><Services/><Process/><Pricing/><Contact/></main><Footer/></div>;
}
