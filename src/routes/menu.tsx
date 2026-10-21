import { createFileRoute } from "@tanstack/react-router";
import heroBoxes from "@/assets/hero-boxes.jpg";
import lifestyle from "@/assets/lifestyle-dogs.jpg";
import { getMenu, getTalabatHours } from "@/lib/hansi";
import { useTranslation } from "@/lib/i18n/use-translation";
import { menuImages } from "@/components/hansi/menu-images";
import { stickerImages } from "@/components/hansi/stickers";
import { Reveal, SectionTitle, SoonPill, Sticker } from "@/components/hansi/bits";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The HANSI Menu — World-Inspired Beef Dogs in Bahrain" },
      {
        name: "description",
        content:
          "Six world-inspired 100% beef dogs, Korean-style corn dogs, Hansi Smoke Fries, homemade drinks and combos. Order on Talabat.",
      },
      { property: "og:title", content: "The HANSI Menu — Good dogs only" },
      {
        property: "og:description",
        content: "World-inspired beef dogs, corn dogs, loaded fries and homemade drinks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { t, lang } = useTranslation();
  const menu = getMenu(lang);

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Sticker className="animate-wiggle bg-secondary text-secondary-foreground">
              {t("menu.sticker")}
            </Sticker>
            <h1 className="mt-4 text-6xl leading-[0.85] uppercase sm:text-8xl">
              {t("menu.titlePrefix")}{" "}
              <span className="text-secondary">{t("menu.titleAccent")}</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">{t("menu.body")}</p>
            <div className="mt-7">
              <SoonPill size="lg">{t("menu.cta")}</SoonPill>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={heroBoxes}
              alt="HANSI hotdogs in branded Bite Me boxes"
              width={1270}
              height={1400}
              loading="lazy"
              className="pop h-56 w-full rounded-3xl object-cover"
            />
            <img
              src={lifestyle}
              alt="Guests holding a HANSI hotdog and a corn dog"
              width={1800}
              height={1344}
              loading="lazy"
              className="pop mt-8 h-56 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16">
        {menu.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <Reveal>
              <SectionTitle kicker={cat.kicker} title={`${cat.title} ${cat.emoji}`} />
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 60}>
                  <article className="pop sticker-host flex h-full flex-col rounded-3xl bg-card">
                    <div className="relative">
                      <img
                        src={menuImages[item.img]}
                        alt={item.name}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="h-44 w-full rounded-t-3xl border-b-[3px] border-cocoa object-cover"
                      />
                      {item.sticker ? (
                        <img
                          src={stickerImages[item.sticker]}
                          alt=""
                          aria-hidden="true"
                          width={420}
                          height={420}
                          loading="lazy"
                          className="sticker-cut absolute -bottom-7 end-3 h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-xl leading-tight uppercase sm:pe-24">{item.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      {item.bun ? (
                        <p className="mt-auto pt-3 font-hand text-xl text-secondary">{item.bun}</p>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <Reveal>
          <div className="pop rounded-[3rem] bg-primary px-6 py-12 text-center sm:px-12">
            <h2 className="text-4xl leading-[0.9] uppercase sm:text-5xl">
              {t("menu.bottomTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-lg">{t("menu.bottomBody")}</p>
            <div className="mt-7">
              <SoonPill size="lg" className="bg-card">
                {t("menu.bottomCta")}
              </SoonPill>
              <p className="mt-4 font-display text-xs uppercase tracking-wide">
                {getTalabatHours(lang)}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
