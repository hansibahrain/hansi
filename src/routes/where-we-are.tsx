import { createFileRoute } from "@tanstack/react-router";
import { getCateringLink, getEvents } from "@/lib/hansi";
import { useTranslation } from "@/lib/i18n/use-translation";
import { EventCard, NotAnnounced } from "@/components/hansi/events";
import { AnchorButton, Reveal, SoonPill, Sticker } from "@/components/hansi/bits";

export const Route = createFileRoute("/where-we-are")({
  head: () => ({
    meta: [
      { title: "Where's HANSI? — Locations Coming Soon" },
      {
        name: "description",
        content:
          "HANSI locations haven't been announced yet. Order online on Talabat or book HANSI to cater your event in Bahrain.",
      },
      { property: "og:title", content: "Where's HANSI? Not announced yet." },
      {
        property: "og:description",
        content: "HANSI locations are coming soon. Follow @hansi.bh to be the first to know.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhereWeAre,
});

function WhereWeAre() {
  const { t, lang } = useTranslation();
  const events = getEvents(lang);
  const cateringLink = getCateringLink(lang);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10">
        <Sticker className="animate-wiggle bg-primary">{t("whereWeAre.sticker")}</Sticker>
        <h1 className="mt-4 text-6xl leading-[0.85] uppercase sm:text-8xl">
          {t("whereWeAre.title")}{" "}
          <span className="text-secondary">{t("whereWeAre.titleAccent")}</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">{t("whereWeAre.body")}</p>
        <div className="mt-7">
          <SoonPill size="lg">{t("menu.cta")}</SoonPill>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        {events.length > 0 ? (
          <>
            <h2 className="text-4xl leading-[0.9] uppercase sm:text-5xl">
              {t("whereWeAre.stationsTitle")}
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">{t("whereWeAre.stationsBody")}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event, i) => (
                <Reveal key={event.name} delay={i * 70}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          </>
        ) : (
          <Reveal>
            <NotAnnounced dark={false} />
          </Reveal>
        )}

        <Reveal className="mt-14">
          <div className="pop rounded-[3rem] bg-card px-6 py-12 text-center sm:px-12">
            <h2 className="text-4xl leading-[0.9] uppercase sm:text-5xl">
              {t("whereWeAre.ctaTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-lg">{t("whereWeAre.ctaBody")}</p>
            <div className="mt-7">
              <AnchorButton href={cateringLink} size="lg">
                {t("whereWeAre.cta")}
              </AnchorButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
