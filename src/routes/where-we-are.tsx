import { createFileRoute } from "@tanstack/react-router";
import night from "@/assets/hansi-night.png.asset.json";
import { cateringLink, events } from "@/lib/hansi";
import { EventCard } from "@/components/hansi/events";
import { AnchorButton, Marquee, Reveal, Sticker } from "@/components/hansi/bits";

export const Route = createFileRoute("/where-we-are")({
  head: () => ({
    meta: [
      { title: "Where's HANSI? — Upcoming Bahrain Events & Pop-Ups" },
      {
        name: "description",
        content:
          "Catch the HANSI hotdog truck around Bahrain — festivals, night markets, mall pop-ups and beach days. Check back for new locations.",
      },
      { property: "og:title", content: "Where's HANSI? Catch us if you can." },
      {
        property: "og:description",
        content: "The HANSI truck's upcoming Bahrain events, festivals and pop-ups.",
      },
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
          The truck never sits still. Here&apos;s every spot we&apos;re rolling into
          around Bahrain — bookmark this page, we update it constantly.
        </p>
        <img
          src={night.url}
          alt="The HANSI truck lit up at night with a crowd ordering hotdogs"
          width={1400}
          height={1000}
          loading="lazy"
          className="pop mt-8 h-72 w-full rounded-[3rem] object-cover sm:h-[26rem]"
        />
      </section>

      <Marquee words={["Currently getting grilled", "We're outside", "Follow the smoke"]} />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              Private party, festival stand, office lunch — if there are hungry people,
              we&apos;ll park there.
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
