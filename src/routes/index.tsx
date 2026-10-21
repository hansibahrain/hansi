import { createFileRoute, Link } from "@tanstack/react-router";
import heroBoxes from "@/assets/hero-boxes.jpg";
import crowd from "@/assets/crowd.jpg";
import lifestyle from "@/assets/lifestyle-dogs.jpg";
import americanDog from "@/assets/menu/american-dog.jpg";
import { getMenu, cateringLink } from "@/lib/hansi";
import { useTranslation } from "@/lib/i18n/use-translation";
import {
  AnchorButton,
  ArrowDown,
  SoonPill,
  LinkButton,
  Reveal,
  SectionTitle,
  Sticker,
  Squiggle,
} from "@/components/hansi/bits";
import { HansiSnake } from "@/components/hansi/snake";
import { menuImages } from "@/components/hansi/menu-images";
import { stickerImages } from "@/components/hansi/stickers";

import { EventCarousel, NotAnnounced } from "@/components/hansi/events";
import { events } from "@/lib/hansi";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HANSI — Hotdogs With A Little Attitude | Bahrain" },
      {
        name: "description",
        content:
          "Good dogs. Nice buns. Big vibes. HANSI is Bahrain's world-inspired beef hotdog brand — order online on Talabat, or book us to cater your event.",
      },
      { property: "og:title", content: "HANSI — Bite Me! Hotdogs with a little attitude" },
      {
        property: "og:description",
        content:
          "Good dogs. Nice buns. Big vibes. Bahrain's world-inspired beef dogs — online orders and event catering.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useTranslation();
  const menu = getMenu(lang);
  const dogs = menu[0]!.items.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pt-10 pb-16 lg:grid-cols-2 lg:pt-16">
          <div className="relative z-10">
            <Sticker className="animate-wiggle bg-primary">{t("home.sticker")}</Sticker>
            <h1 className="animate-wiggle mt-5 text-[19vw] leading-[0.8] text-secondary uppercase sm:text-8xl lg:text-9xl">
              {t("home.title")}
            </h1>
            <p className="mt-5 max-w-md text-xl font-medium sm:text-2xl">{t("home.subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <AnchorButton href={cateringLink} tone="ketchup" size="lg">
                {t("home.ctaEvent")}
              </AnchorButton>
              <LinkButton to="/menu" size="lg" tone="cream">
                {t("home.ctaMenu")}
              </LinkButton>
            </div>
            <div className="mt-10 flex items-center gap-3 text-secondary">
              <ArrowDown />
              <span className="font-hand text-2xl">{t("home.scroll")}</span>
            </div>
          </div>

          <div className="relative">
            <div className="pop overflow-hidden rounded-[3rem] bg-primary">
              <img
                src={heroBoxes}
                alt="HANSI hotdogs in branded Bite Me boxes"
                width={1270}
                height={1400}
                className="h-full w-full object-cover"
              />
            </div>
            <Sticker
              className="absolute -top-4 right-2 bg-secondary text-secondary-foreground"
              rotate={9}
            >
              {lang === "ar" ? "خبز حلو." : "Nice bun."}
            </Sticker>
          </div>
        </div>
        <Squiggle className="text-primary" />
      </section>

      {/* PIXEL CHASE STRIP */}
      <HansiSnake />

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Reveal className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionTitle kicker={t("home.introKicker")} title={t("home.introTitle")} />
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">{t("home.introBody")}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {t("home.tags")
                .split(/,|،/)
                .map((t) => t.trim())
                .filter(Boolean)
                .map((tag) => (
                  <li
                    key={tag}
                    className="pop-sm rounded-full bg-card px-3 py-1.5 text-xs font-semibold uppercase"
                  >
                    {tag}
                  </li>
                ))}
            </ul>
            <div className="mt-8">
              <LinkButton to="/catering" size="lg" tone="ketchup">
                {t("home.ctaCatering")}
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
              src={americanDog}
              alt="The HANSI American Dog"
              width={800}
              height={800}
              loading="lazy"
              className="pop h-44 w-full rounded-3xl object-cover"
            />
            <img
              src={lifestyle}
              alt="Two guests holding a HANSI hotdog and a corn dog at a gathering"
              width={1800}
              height={1344}
              loading="lazy"
              className="pop h-44 w-full rounded-3xl object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* WHERE'S HANSI */}
      <section className="border-y-[3px] border-cocoa bg-secondary py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-hand text-3xl text-primary">{t("home.whereKicker")}</p>
                <h2 className="mt-1 text-5xl leading-[0.9] uppercase text-primary sm:text-7xl">
                  {t("home.whereTitle")}
                </h2>
                <p className="mt-4 max-w-lg text-cream/80">{t("home.whereBody")}</p>
              </div>
              <LinkButton to="/where-we-are" size="lg">
                {t("home.whereCta")}
              </LinkButton>
            </div>
          </Reveal>
          <div className="mt-10">{events.length > 0 ? <EventCarousel /> : <NotAnnounced />}</div>
        </div>
      </section>

      {/* MENU TEASER */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Reveal>
          <SectionTitle kicker={t("home.menuKicker")} title={t("home.menuTitle")} />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dogs.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <article className="pop sticker-host flex h-full flex-col rounded-3xl bg-card">
                <div className="relative">
                  <img
                    src={menuImages[item.img]}
                    alt={item.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-36 w-full rounded-t-3xl border-b-[3px] border-cocoa object-cover"
                  />
                  {item.sticker ? (
                    <img
                      src={stickerImages[item.sticker]}
                      alt=""
                      aria-hidden="true"
                      width={420}
                      height={420}
                      loading="lazy"
                      className="sticker-cut absolute -bottom-7 end-3 h-24 w-24 rounded-full object-cover"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-xl leading-tight uppercase pe-20">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  {item.bun ? (
                    <p className="mt-auto pt-3 font-hand text-xl text-secondary">{item.bun}</p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <LinkButton to="/menu" size="lg" tone="cream">
            {t("home.menuCta")}
          </LinkButton>
          <SoonPill size="lg">{t("home.menuOrder")}</SoonPill>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <Reveal>
          <div className="pop relative overflow-hidden rounded-[3rem] bg-primary px-6 py-14 text-center sm:px-12">
            <h2 className="text-4xl leading-[0.9] uppercase sm:text-6xl">
              {t("home.aboutTitle")}
              <br />
              <span className="text-secondary">{t("home.aboutTitleAccent")}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg">{t("home.aboutBody")}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton to="/about" size="lg" tone="cream">
                {t("home.aboutCta")}
              </LinkButton>
              <Link
                to="/contact"
                className="pop press inline-flex items-center rounded-full bg-secondary px-7 py-4 font-display text-base uppercase text-secondary-foreground"
              >
                {t("home.contactCta")}
              </Link>
            </div>
            <p className="mt-8 font-hand text-3xl text-secondary">{t("home.aboutClosing")}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
