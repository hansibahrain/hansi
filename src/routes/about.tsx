import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/hansi-logo.png";
import truck from "@/assets/hansi-truck.jpg";
import crowd from "@/assets/crowd.jpg";
import { getCateringLink } from "@/lib/hansi";
import { useTranslation } from "@/lib/i18n/use-translation";
import {
  AnchorButton,
  LinkButton,
  Marquee,
  Reveal,
  Sticker,
} from "@/components/hansi/bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About HANSI — Who Let The Dogs Out? We Did." },
      {
        name: "description",
        content:
          "HANSI is a Bahrain hotdog brand built on good food, good buns and good vibes. We love hotdogs, we love feeding people, we love a good party.",
      },
      { property: "og:title", content: "About HANSI — Who let the dogs out? We did." },
      {
        property: "og:description",
        content: "The story behind Bahrain's cheekiest hotdog truck.",
      },
    ],
  }),
  component: About,
});

function useFacts() {
  const { t } = useTranslation();
  return [
    { big: t("about.fact1Big"), small: t("about.fact1Small") },
    { big: t("about.fact2Big"), small: t("about.fact2Small") },
    { big: t("about.fact3Big"), small: t("about.fact3Small") },
    { big: t("about.fact4Big"), small: t("about.fact4Small") },
  ];
}

function About() {
  const { t, lang } = useTranslation();
  const facts = useFacts();
  const cateringLink = getCateringLink(lang);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Sticker className="animate-wiggle bg-primary">{t("about.sticker")}</Sticker>
            <h1 className="mt-4 text-5xl leading-[0.85] uppercase sm:text-7xl">
              {t("about.title")}
              <br />
              <span className="text-secondary">{t("about.titleAccent")}</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl whitespace-pre-line">
              {t("about.body1")}
            </p>
            <p className="mt-4 max-w-lg text-muted-foreground">
              {t("about.body2")}
            </p>
          </div>
          <img
            src={logo}
            alt="The full HANSI logo with the mascot holding a hotdog"
            width={900}
            height={900}
            loading="lazy"
            className="pop rounded-[3rem] bg-card object-contain p-6"
          />
        </div>
      </section>

      <Marquee words={["Good dogs only", "Hot dogs. Cool people.", "That's one good dog"]} />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.small} delay={i * 70}>
              <div className="pop press rounded-3xl bg-primary p-6 text-center hover:rotate-2">
                <p className="font-display text-5xl">{f.big}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide">
                  {f.small}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="grid gap-5 md:grid-cols-2">
            <img
              src={truck}
              alt="The HANSI food truck"
              width={1000}
              height={1000}
              loading="lazy"
              className="pop h-80 w-full rounded-[2.5rem] bg-primary object-contain p-4"
            />
            <img
              src={crowd}
              alt="A crowd eating HANSI hotdogs"
              width={1280}
              height={864}
              loading="lazy"
              className="pop h-80 w-full rounded-[2.5rem] object-cover"
            />
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <div className="pop rounded-[3rem] bg-ink px-6 py-14 text-center text-cream sm:px-12">
            <p className="font-hand text-3xl text-primary">{t("about.closingKicker")}</p>
            <h2 className="mt-2 text-4xl leading-[0.9] uppercase text-primary sm:text-6xl">
              {t("about.closingTitle")}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <AnchorButton href={cateringLink} size="lg" tone="ketchup">
                {t("about.ctaEvent")}
              </AnchorButton>
              <LinkButton to="/menu" size="lg">
                {t("about.ctaMenu")}
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
