import { createFileRoute } from "@tanstack/react-router";
import truckNight from "@/assets/hansi-truck-night.png.asset.json";
import { cateringLink, events, truckNow } from "@/lib/hansi";
import { EventCard } from "@/components/hansi/events";
import { AnchorButton, Reveal, Sticker } from "@/components/hansi/bits";

export const Route = createFileRoute("/where-we-are")({
  head: () => ({
    meta: [
      { title: "Where's HANSI? — The Truck Right Now & Upcoming Bahrain Events" },
      {
        name: "description",
        content:
          "See where the HANSI truck is parked right now, plus every upcoming HANSI hotdog station around Bahrain — festivals, night markets and pop-ups.",
      },
      { property: "og:title", content: "Where's HANSI? Catch us if you can." },
      {
        property: "og:description",
        content: "The HANSI truck's live location and upcoming Bahrain hotdog stations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhereWeAre,
});

function WhereWeAre() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10">
        <Sticker className="animate-wiggle bg-primary">Honk honk. We&apos;re here. 🌭</Sticker>
        <h1 className="mt-4 text-6xl leading-[0.85] uppercase sm:text-8xl">
          Catch us <span className="text-secondary">if you can.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          One truck, plenty of hotdog stations. Bookmark this page — we update it
          constantly.
        </p>
      </section>

      {/* TRUCK RIGHT NOW */}
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <Reveal>
          <div className="pop grid gap-0 overflow-hidden rounded-[3rem] bg-ink md:grid-cols-2">
            <img
              src={truckNight.url}
              alt="The HANSI truck lit up at night with its glowing mascot sign"
              width={1400}
              height={1400}
              loading="lazy"
              className="h-72 w-full object-cover md:h-full"
            />
            <div className="p-8 text-cream sm:p-10">
              <span className="pop-sm inline-block rounded-full bg-secondary px-4 py-1.5 font-display text-[11px] uppercase tracking-widest text-secondary-foreground">
                🚚 The truck right now
              </span>
              <h2 className="mt-5 text-4xl leading-[0.9] uppercase text-primary sm:text-5xl">
                {truckNow.location}
              </h2>
              <p className="mt-4 font-display text-sm uppercase tracking-wide text-cream">
                {truckNow.hours}
              </p>
              <p className="mt-3 text-cream/80">{truckNow.note}</p>
              <div className="mt-7">
                <AnchorButton href={truckNow.mapUrl} size="lg">
                  Open in Maps
                </AnchorButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-4xl leading-[0.9] uppercase sm:text-5xl">
          HANSI hotdog stations
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Where we&apos;re setting up next around Bahrain.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.name} delay={i * 70}>
              <EventCard event={event} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="pop rounded-[3rem] bg-secondary px-6 py-12 text-center text-secondary-foreground sm:px-12">
            <h2 className="text-4xl leading-[0.9] uppercase sm:text-5xl">
              Want us at your spot?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg">
              Private party, festival, office lunch — if there are hungry people, we&apos;ll
              set up a HANSI hotdog station.
            </p>
            <div className="mt-7">
              <AnchorButton href={cateringLink} size="lg">
                Get HANSI for your event
              </AnchorButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
