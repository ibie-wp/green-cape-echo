import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-capetown.jpg";
import communityImg from "@/assets/community-clean.jpg";
import greenMapImg from "@/assets/green-map.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Keeping it Green in CapeTown" },
      {
        name: "description",
        content:
          "An environmental awareness campaign for a cleaner, greener Cape Town. Discover resources, organisations and small actions that make a real difference.",
      },
      { property: "og:title", content: "Keeping it Green in CapeTown" },
      {
        property: "og:description",
        content: "Learn how small actions can create a cleaner and healthier Cape Town.",
      },
    ],
  }),
});

const organisations = [
  {
    name: "Environmental Monitoring Group (EMG)",
    url: "https://www.emg.org.za/",
  },
  {
    name: "The Freshwater Research Centre",
    url: "https://www.frcsa.org.za/",
  },
  {
    name: "Where we work (WWF)",
    url: "https://www.wwf.org.za/",
  },
  {
    name: "Zero Waste Association of South Africa (ZWASA)",
    url: "http://www.zwasa.co.za/",
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
            <a href="#about" className="hover:text-foreground transition">About</a>
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
          alt="Cape Town landscape with Table Mountain"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-20 md:pb-28">
          <div className="max-w-4xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-accent mb-6 yellow-bar">
              An Environmental Awareness Campaign
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-balance uppercase">
              Keeping it<br />
              <span className="text-accent">Green</span> in<br />
              CapeTown
            </h1>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:brightness-110 transition"
              >
                Start Reading
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#map"
                className="inline-flex items-center gap-3 border border-foreground/30 text-foreground px-7 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-foreground/5 transition"
              >
                Explore the Green Map
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 z-10 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
          Issue 01 · 2026
        </div>
      </section>

      {/* ABOUT / MAIN INFO */}
      <section id="about" className="py-24 md:py-36 mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5 reveal md:sticky md:top-24">
            <p className="text-xs uppercase tracking-[0.3em] text-accent yellow-bar mb-6">
              Chapter One
            </p>
            <h2 className="font-display text-4xl md:text-6xl uppercase leading-[0.95] text-balance">
              Small actions.<br />
              <span className="text-accent">Big difference.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed reveal">
            <p>
              When the topic of “saving the environment” comes up in conversation, it's
              easy to brush it aside or feel as though it is someone else's responsibility.
              Many people also feel that even if they tried to help, their actions would not
              make much of a difference.
            </p>
            <p>
              However, protecting the environment doesn't require one person to “save the
              world” alone. Everyone at some point has heard that their small actions can
              make a big difference. But it really is true. By simply visiting this page,
              you have already shown an interest in becoming more environmentally aware.
              Environmental responsibility can begin with simple actions such as recycling
              and reducing waste in your own household or even picking up litter in your
              area.
            </p>
            <p>
              Luckily, in Cape Town there are many resources available that make it easier
              for ordinary people to become involved in environmental awareness and
              sustainability.
            </p>
          </div>
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
              The CapeTown<br />
              <span className="text-accent">Green Map.</span>
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed md:text-lg">
              If you visit the site{" "}
              <a
                href="https://www.capetowngreenmap.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4"
              >
                https://www.capetowngreenmap.co.za/
              </a>{" "}
              you'll be introduced to the CapeTown Green Map. This beginner-friendly
              website provides information related to environmental issues and sustainable
              living within the city. Users can search the name of their location to find
              recycling centres, green businesses, conservation projects and other useful
              resources nearby. It even provides advice and environmental news.
            </p>
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
            <div className="aspect-[4/3] overflow-hidden border border-border bg-background">
              <img
                src={greenMapImg}
                alt="The CapeTown Green Map showing locations across the city"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-5 py-3 text-xs uppercase tracking-widest font-semibold flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
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
            Take it a<br />
            <span className="text-accent">step further.</span>
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg leading-relaxed">
            For those who would like to take their environmental journey a step further,
            there are also several environmental organisations and NGOs based in South
            Africa that focus on topics like conservation, sustainability and
            environmental education:
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
              <h3 className="font-display text-xl md:text-2xl uppercase leading-tight mb-6 flex-1">
                {o.name}
              </h3>
              <a
                href={o.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-accent border-b border-accent/40 self-start pb-1 hover:border-accent transition break-all"
              >
                {o.url} <ExternalLink className="w-3.5 h-3.5 shrink-0" />
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
        <div className="absolute inset-0 bg-background/85" />
        <div className="relative mx-auto max-w-3xl px-6 text-center reveal space-y-10">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            One last thing.
          </p>
          <p className="font-display text-3xl md:text-5xl uppercase leading-[1.05] text-balance">
            There is already a large community of people working towards creating cleaner
            and healthier environments not just in CapeTown but throughout South Africa.
          </p>
          <p className="font-display text-4xl md:text-6xl uppercase leading-[1.05] text-accent">
            You could become part of it.
          </p>
          <p className="text-muted-foreground md:text-xl leading-relaxed max-w-2xl mx-auto">
            Becoming environmentally responsible doesn't mean that you have to change your
            entire lifestyle overnight. It can be as simple as making a few changes in
            your everyday life.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <div>
            <p className="font-display text-lg uppercase tracking-wider">
              Keeping CapeTown <span className="text-accent">Green</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
              An environmental awareness campaign
            </p>
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-widest text-left md:text-right">
            © {new Date().getFullYear()} · For the Mother City
            <span className="block mt-1 normal-case tracking-normal text-[10px] opacity-70">
              A project by Kauthar Karlie · with help from Ibrahim Karlie
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
