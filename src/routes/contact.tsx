import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/hansi-logo.png.asset.json";
import { getCateringLink, getOrderLink, getSocials, whatsappLink } from "@/lib/hansi";
import { useTranslation } from "@/lib/i18n/use-translation";
import { AnchorButton, Marquee, Reveal, Sticker } from "@/components/hansi/bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Talk To HANSI — Contact, Bookings & Collabs in Bahrain" },
      {
        name: "description",
        content:
          "General enquiries, catering, event bookings, partnerships and collabs. Message HANSI on WhatsApp and we'll reply mid-grill.",
      },
      { property: "og:title", content: "Talk to HANSI" },
      {
        property: "og:description",
        content: "Bookings, catering, partnerships and collabs — straight to our WhatsApp.",
      },
    ],
  }),
  component: Contact,
});

function useReasons() {
  const { t } = useTranslation();
  return [
    {
      title: t("contact.reasonGeneralTitle"),
      copy: t("contact.reasonGeneralCopy"),
      message: t("contact.reasonGeneralMessage"),
    },
    {
      title: t("contact.reasonCateringTitle"),
      copy: t("contact.reasonCateringCopy"),
      message: t("contact.reasonCateringMessage"),
    },
    {
      title: t("contact.reasonBookingTitle"),
      copy: t("contact.reasonBookingCopy"),
      message: t("contact.reasonBookingMessage"),
    },
    {
      title: t("contact.reasonCollabTitle"),
      copy: t("contact.reasonCollabCopy"),
      message: t("contact.reasonCollabMessage"),
    },
  ];
}

function Contact() {
  const { t, lang } = useTranslation();
  const reasons = useReasons();
  const socials = getSocials(lang);
  const orderLink = getOrderLink(lang);
  const cateringLink = getCateringLink(lang);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Sticker className="animate-wiggle bg-secondary text-secondary-foreground">
              {t("contact.sticker")}
            </Sticker>
            <h1 className="mt-4 text-6xl leading-[0.85] uppercase sm:text-8xl">
              {t("contact.title")} <span className="text-secondary">{t("contact.titleAccent")}</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              {t("contact.body")}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <AnchorButton href={orderLink} size="lg" tone="ketchup">
                {t("contact.ctaWhatsApp")}
              </AnchorButton>
              <a
                href="tel:+97334240567"
                className="pop press inline-flex items-center rounded-full bg-card px-7 py-4 font-display text-base uppercase"
              >
                +973 3424 0567
              </a>
            </div>
          </div>
          <img
            src={logo.url}
            alt="HANSI logo"
            width={1024}
            height={866}
            loading="lazy"
            className="animate-float mx-auto w-full max-w-md"
          />
        </div>
      </section>

      <Marquee words={["Say hello", "More sauce? Always.", "See you at the next party"]} />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 70}>
              <a
                href={whatsappLink(r.message)}
                target="_blank"
                rel="noreferrer"
                className="pop press flex h-full flex-col rounded-3xl bg-card p-6 hover:-rotate-1"
              >
                <h2 className="text-2xl uppercase leading-tight">{r.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{r.copy}</p>
                <span className="mt-auto pt-6 font-display text-xs uppercase tracking-wide text-secondary">
                  {t("contact.reasonCta")}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="pop rounded-[3rem] bg-primary px-6 py-12 text-center sm:px-12">
            <h2 className="text-4xl leading-[0.9] uppercase sm:text-5xl">
              {t("contact.socialTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-md">
              {t("contact.socialBody")}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {socials.map((s) => (
                <AnchorButton key={s.label} href={s.href} tone="cream">
                  {s.label}
                </AnchorButton>
              ))}
            </div>
            <div className="mt-8">
              <AnchorButton href={cateringLink} tone="ketchup" size="lg">
                {t("contact.ctaEvent")}
              </AnchorButton>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
