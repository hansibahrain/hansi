import { createFileRoute } from "@tanstack/react-router";
import mascot from "@/assets/hansi-mascot.jpg";
import { FEEDBACK_FORM_EMBED, whatsappLink } from "@/lib/hansi";
import { useTranslation } from "@/lib/i18n/use-translation";
import { AnchorButton, Marquee, Reveal, Sticker } from "@/components/hansi/bits";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "How Did We Do? — HANSI Feedback" },
      {
        name: "description",
        content:
          "Tell HANSI how your dogs were. Takes under a minute and goes straight to the people grilling.",
      },
      { property: "og:title", content: "How did we do?" },
      { property: "og:description", content: "Tell HANSI how your dogs were. Under a minute." },
    ],
  }),
  component: Feedback,
});

function Feedback() {
  const { t, lang } = useTranslation();
  const fallbackLink = whatsappLink(
    lang === "ar"
      ? "مرحبا هانزي! 🌭 عندي ملاحظات عن تجربتي:"
      : "Hey HANSI! 🌭 Here's my feedback on my order:",
  );

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Sticker className="animate-wiggle bg-secondary text-secondary-foreground">
              {t("feedback.sticker")}
            </Sticker>
            <h1 className="mt-4 text-6xl leading-[0.85] uppercase sm:text-7xl">
              {t("feedback.title")}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">{t("feedback.body")}</p>
            <p className="mt-3 font-hand text-2xl text-secondary">{t("feedback.time")}</p>
          </div>
          <img
            src={mascot}
            alt="The HANSI mascot"
            width={1024}
            height={1024}
            loading="lazy"
            className="pop mx-auto w-full max-w-sm rounded-[3rem] object-cover"
          />
        </div>
      </section>

      <Marquee words={["Tell us everything", "Too much sauce? Impossible.", "We're listening"]} />

      <section className="mx-auto max-w-3xl px-4 py-16">
        {FEEDBACK_FORM_EMBED ? (
          <Reveal>
            <div className="pop overflow-hidden rounded-[2.5rem] bg-card p-2 sm:p-4">
              <iframe
                src={FEEDBACK_FORM_EMBED}
                title={t("feedback.formTitle")}
                loading="lazy"
                className="h-[1500px] w-full rounded-[2rem] border-0 bg-white sm:h-[1250px]"
              />
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="pop rounded-[2.5rem] bg-card p-8 text-center">
              <h2 className="text-3xl uppercase leading-tight">{t("feedback.soonTitle")}</h2>
              <p className="mt-3 text-muted-foreground">{t("feedback.soonBody")}</p>
              <div className="mt-6">
                <AnchorButton href={fallbackLink} tone="ketchup" size="lg">
                  {t("feedback.soonCta")}
                </AnchorButton>
              </div>
            </div>
          </Reveal>
        )}
      </section>
    </>
  );
}
