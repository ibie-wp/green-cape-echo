import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Recycle, Leaf, Users, ExternalLink, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-capetown.jpg";
import communityImg from "@/assets/community-clean.jpg";
import greenMapImg from "@/assets/green-map.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Keeping it Green in Cape Town" },
      {
        name: "description",
        content:
          "An environmental awareness campaign for a cleaner, greener Cape Town. Discover resources, organisations and small actions that make a real difference.",
      },
      { property: "og:title", content: "Keeping it Green in Cape Town" },
      {
        property: "og:description",
        content: "Learn how small actions can create a cleaner and healthier Cape Town.",
      },
    ],
  }),
});

const pillars = [
  {
    icon: Recycle,
    tag: "01",
    title: "Reduce Waste",
    body: "Cut single-use plastics, compost organics and choose products built to last. Every household choice ripples outward.",
  },
  {
    icon: Leaf,
    tag: "02",
    title: "Recycle More",
    body: "Sort paper, glass, metal and plastic at home. Drop-off points across Cape Town keep valuable materials in the loop.",
  },
  {
    icon: Users,
    tag: "03",
    title: "Protect Local Communities",
    body: "Join clean-ups, support local conservation and keep public spaces free of litter. A clean street is a healthier street.",
  },
];

const organisations = [
  {
    name: "Environmental Monitoring Group (EMG)",
    desc: "Cape Town based NGO advancing environmental and social justice through water, climate and food sovereignty work.",
    url: "https://emg.org.za/",
  },
  {
    name: "Freshwater Research Centre",
    desc: "Independent research collective protecting South Africa's rivers, wetlands and freshwater biodiversity.",
    url: "https://frcsa.org.za/",
  },
  {
    name: "WWF South Africa",
    desc: "Working to build a future where people live in harmony with nature — protecting wildlife, water and wild places.",
    url: "https://www.wwf.org.za/",
  },
  {
    name: "Zero Waste Association of South Africa",
    desc: "Driving a circular economy by championing zero-waste principles across communities, business and policy.",
    url: "https://zwasa.org/",
  },
];

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/40 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-sm tracking-wider uppercase">
            <span className="text-accent">Green</span>/CPT
          </a>
          <nav className="hidden md:flex gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <a href="#why" className="hover:text-foreground transition">Why</a>
            <a href="#map" className="hover:text-foreground transition">Green Map</a>
            <a href="#orgs" className="hover:text-foreground transition">Organisations</a>
            <a href="#act" className="hover:text-foreground transition">Take Action</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Cape Town landscape with Table Mountain and lush forest"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-3xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent mb-6 yellow-bar">
              An Environmental Campaign · Cape Town
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-balance uppercase">
              Keep our<br />
              <span className="text-accent">community</span><br />
              clean.
            </h1>
            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground">
              Learn how small actions can create a cleaner and healthier Cape Town.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#map"
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:brightness-110 transition"
              >
                Explore Green Resources
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#why"
                className="inline-flex items-center gap-3 border border-foreground/30 text-foreground px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-foreground/5 transition"
              >
                Why it matters
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 z-10 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
          Issue 01 · 2026
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-24 md:py-36 mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5 reveal">
            <p className="text-xs uppercase tracking-[0.3em] text-accent yellow-bar mb-6">
              Chapter One
            </p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] text-balance">
              Why environmental<br />responsibility<br />
              <span className="text-accent">matters.</span>
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4 reveal">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Protecting the environment starts at home. Recycling a bottle, refusing a
              plastic bag, picking up litter on the way to the shops — these are the
              small, daily acts that compound into real change. Cape Town's coastlines,
              mountains and neighbourhoods are only as healthy as the choices we make in
              them.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              This is not someone else's job. It is ours, together.
            </p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="reveal bg-card p-8 md:p-10 group hover:bg-secondary transition-colors duration-500"
            >
              <div className="flex items-start justify-between mb-12">
                <span className="font-display text-accent text-sm tracking-widest">{p.tag}</span>
                <p.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl uppercase mb-4">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* GREEN MAP */}
      <section id="map" className="bg-secondary py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.3em] text-accent yellow-bar mb-6">
              Chapter Two
            </p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] text-balance">
              The Cape Town<br />
              <span className="text-accent">Green Map.</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed md:text-lg">
              An interactive guide to the people, places and projects building a greener
              city. The Green Map helps you locate:
            </p>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              {[
                "Recycling centres and drop-off points",
                "Green businesses and ethical brands",
                "Conservation and rewilding projects",
                "Local environmental resources",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-accent mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.capetowngreenmap.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:brightness-110 transition"
            >
              Open the Green Map
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="reveal order-1 md:order-2 relative">
            <div className="aspect-[4/3] overflow-hidden border border-border">
              <img
                src={greenMapImg}
                alt="Illustration of the Cape Town Green Map with location pins"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-5 py-3 text-xs uppercase tracking-widest font-semibold">
              capetowngreenmap.co.za
            </div>
          </div>
        </div>
      </section>

      {/* ORGS */}
      <section id="orgs" className="py-24 md:py-36 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16 reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-accent yellow-bar mb-6">
            Chapter Three
          </p>
          <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] text-balance">
            Organisations<br />on the <span className="text-accent">frontline.</span>
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            The groups protecting South Africa's environment — and how to support them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border">
          {organisations.map((o, i) => (
            <article
              key={o.name}
              className="reveal bg-background p-8 md:p-10 flex flex-col group hover:bg-card transition-colors duration-500"
            >
              <span className="font-display text-accent text-sm tracking-widest mb-8">
                0{i + 1}
              </span>
              <h3 className="font-display text-xl md:text-2xl uppercase leading-tight mb-4">
                {o.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{o.desc}</p>
              <a
                href={o.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-accent border-b border-accent/40 self-start pb-1 hover:border-accent transition"
              >
                Visit website <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* FINAL MESSAGE */}
      <section id="act" className="relative py-32 md:py-48 overflow-hidden">
        <img
          src={communityImg}
          alt="Aerial view of a Cape Town community"
          width={1280}
          height={896}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="relative mx-auto max-w-4xl px-6 text-center reveal">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-8">
            One last thing.
          </p>
          <h2 className="font-display text-4xl md:text-7xl uppercase leading-[0.95] text-balance">
            Small changes.<br />
            <span className="text-accent">Lasting impact.</span>
          </h2>
          <p className="mt-10 text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
            A reusable bottle. A sorted bin. A picked-up wrapper. None of it feels heroic
            on its own — but together, our daily decisions decide what Cape Town looks
            like in ten, twenty, fifty years. Start where you stand.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <p className="font-display text-lg uppercase tracking-wider">
              Keeping Cape Town <span className="text-accent">Green</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
              An environmental awareness campaign
            </p>
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} · Built with care for the Mother City
          </p>
        </div>
      </footer>
    </div>
  );
}
