import { createFileRoute, Link } from "@tanstack/react-router";
import heroDog from "@/assets/hero-dog.jpg";
import crowd from "@/assets/crowd.jpg";
import sides from "@/assets/sides.jpg";
import truck from "@/assets/hansi-truck.jpg.asset.json";
import mascot from "@/assets/hansi-mascot.jpg.asset.json";
import { menu, orderLink, cateringLink } from "@/lib/hansi";
import {
  AnchorButton,
  ArrowDown,
  LinkButton,
  Marquee,
  Reveal,
  SectionTitle,
  Sticker,
  Squiggle,
} from "@/components/hansi/bits";
import { EventCarousel } from "@/components/hansi/events";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HANSI — Hotdogs With A Little Attitude | Bahrain" },
      {
        name: "description",
        content:
          "Good dogs. Nice buns. Big vibes. HANSI is Bahrain's world-inspired beef hotdog brand — catch us at events, festivals and pop-ups, or book us for yours.",
      },
      { property: "og:title", content: "HANSI — Bite Me! Hotdogs with a little attitude" },
      {
        property: "og:description",
        content:
          "Good dogs. Nice buns. Big vibes. Bahrain's world-inspired beef dogs, catering and pop-ups.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const dogs = menu[0]!.items.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 pb-16 lg:grid-cols-2 lg:pt-16">
          <div className="relative z-10">
            <Sticker className="animate-wiggle bg-primary">Bahrain 🇧🇭 · Grilled to order</Sticker>
            <h1 className="animate-wiggle mt-5 text-[19vw] leading-[0.8] text-secondary uppercase sm:text-8xl lg:text-9xl">
              Bite Me!
            </h1>
            <p className="mt-5 max-w-md text-xl font-medium sm:text-2xl">
              Good dogs. Nice buns. Big vibes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AnchorButton href={cateringLink} tone="ketchup" size="lg">
                Get HANSI for your event
              </AnchorButton>
              <LinkButton to="/menu" size="lg" tone="cream">
                See the menu
              </LinkButton>
            </div>
            <div className="mt-10 flex items-center gap-3 text-secondary">
              <ArrowDown />
              <span className="font-hand text-2xl">Scroll. It gets saucier.</span>
            </div>
          </div>

          <div className="relative">
            <div className="pop overflow-hidden rounded-[3rem] bg-primary">
              <img
                src={heroDog}
                alt="Close-up of a HANSI beef hotdog loaded with mustard, ketchup and crispy onions"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <img
              src={mascot.url}
              alt="HANSI mascot"
              width={300}
              height={300}
              loading="lazy"
              className="animate-float absolute -bottom-8 -left-6 w-28 drop-shadow-xl sm:w-40"
            />
            <Sticker className="absolute -top-4 right-2 bg-secondary text-secondary-foreground" rotate={9}>
              Nice bun.
            </Sticker>
          </div>
        </div>
        <Squiggle className="text-primary" />
      </section>

      <Marquee
        words={[
          "Hot dogs. Cool people.",
          "No boring dogs here",
          "Bun-believable",
          "Come hungry, leave happy",
        ]}
      />

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle
              kicker="Say hello to your new favorite dog"
              title="We make hotdogs. You make the memories."
            />
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              We roll the HANSI truck anywhere people get hungry — and then we make it
              a party. Seven world-inspired beef dogs, smoky fries and homemade drinks,
              grilled fresh in front of you.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {[
                "Events",
                "Parties",
                "Offices",
                "Festivals",
                "Private gatherings",
                "Corporate",
                "Pop-ups",
                "Anywhere hungry people are",
              ].map((t) => (
                <li
                  key={t}
                  className="pop-sm rounded-full bg-card px-3 py-1.5 text-xs font-semibold uppercase"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LinkButton to="/catering" size="lg" tone="ketchup">
                Bring the dogs →
              </LinkButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={crowd}
              alt="People laughing and eating HANSI hotdogs at a night market"
              width={1280}
              height={864}
              loading="lazy"
              className="pop col-span-2 h-64 w-full rounded-3xl object-cover"
            />
            <img
              src={truck.url}
              alt="The HANSI monster food truck"
              width={800}
              height={800}
              loading="lazy"
              className="pop h-44 w-full rounded-3xl bg-card object-contain p-2"
            />
            <img
              src={sides}
              alt="Loaded HANSI fries and corn dogs"
              width={1280}
              height={864}
              loading="lazy"
              className="pop h-44 w-full rounded-3xl object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* WHERE'S HANSI */}
      <section className="border-y-[3px] border-cocoa bg-ink py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-hand text-3xl text-primary">Catch us if you can.</p>
                <h2 className="mt-1 text-5xl leading-[0.9] uppercase text-primary sm:text-7xl">
                  Where&apos;s HANSI?
                </h2>
                <p className="mt-4 max-w-lg text-cream/80">
                  We move around Bahrain like a rumour. Here&apos;s where the truck is
                  parked next.
                </p>
              </div>
              <LinkButton to="/where-we-are" size="lg">
                See all events →
              </LinkButton>
            </div>
          </Reveal>
          <div className="mt-10">
            <EventCarousel />
          </div>
        </div>
      </section>

      {/* MENU TEASER */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Reveal>
          <SectionTitle
            kicker="Pick your dog. Add your sauce. Get messy."
            title="The Dogs 🌭"
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dogs.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <article className="pop press h-full rounded-3xl bg-card p-5 hover:rotate-1">
                <span className="text-3xl">{item.flag}</span>
                <h3 className="mt-2 text-xl leading-tight uppercase">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                {item.bun ? (
                  <p className="mt-3 font-hand text-xl text-secondary">{item.bun}</p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <LinkButton to="/menu" size="lg" tone="ketchup">
            I&apos;m hungry →
          </LinkButton>
          <AnchorButton href={orderLink} size="lg">
            Order on WhatsApp
          </AnchorButton>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <Reveal>
          <div className="pop checker-none relative overflow-hidden rounded-[3rem] bg-primary px-6 py-14 text-center sm:px-12">
            <h2 className="text-4xl leading-[0.9] uppercase sm:text-6xl">
              Who let the dogs out?
              <br />
              <span className="text-secondary">We did.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg">
              We love hotdogs. We love feeding people. We love a good party. So we put
              all three together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton to="/about" size="lg" tone="cream">
                Meet HANSI
              </LinkButton>
              <Link
                to="/contact"
                className="pop press inline-flex items-center rounded-full bg-secondary px-7 py-4 font-display text-base uppercase text-secondary-foreground"
              >
                Talk to HANSI
              </Link>
            </div>
            <p className="mt-8 font-hand text-3xl text-secondary">
              See you at the next party.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
