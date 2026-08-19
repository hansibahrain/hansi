import { createFileRoute } from "@tanstack/react-router";
import sides from "@/assets/sides.jpg";
import heroDog from "@/assets/hero-dog.jpg";
import { KEETA_LINK, getMenu } from "@/lib/hansi";
import { useTranslation } from "@/lib/i18n/use-translation";
import { menuImages } from "@/components/hansi/menu-images";
import { AnchorButton, Reveal, SectionTitle, Sticker } from "@/components/hansi/bits";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The HANSI Menu — World-Inspired Beef Dogs in Bahrain" },
      {
        name: "description",
        content:
          "Seven world-inspired 100% beef dogs, crispy corn dogs, Hansi Smoke Fries, homemade drinks and combos. Order from Keeta.",
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
              {t("menu.titlePrefix")} <span className="text-secondary">{t("menu.titleAccent")}</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              {t("menu.body")}
            </p>
            <div className="mt-7">
              <AnchorButton href={KEETA_LINK} size="lg" tone="ketchup">
                {t("menu.cta")}
              </AnchorButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={heroDog}
              alt="HANSI beef hotdog close up"
              width={1280}
              height={1280}
              loading="lazy"
              className="pop h-56 w-full rounded-3xl object-cover"
            />
            <img
              src={sides}
              alt="Loaded fries and corn dogs"
              width={1280}
              height={864}
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
                  <article className="pop flex h-full flex-col overflow-hidden rounded-3xl bg-card">
                    <img
                      src={menuImages[item.img]}
                      alt={item.name}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-44 w-full border-b-[3px] border-cocoa object-cover"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      {item.flag ? <span className="text-2xl">{item.flag}</span> : null}
                      <h3 className="mt-1 text-xl leading-tight uppercase">{item.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      {item.bun ? (
                        <p className="mt-auto pt-3 font-hand text-xl text-secondary">
                          {item.bun}
                        </p>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <Reveal>
          <div className="pop rounded-[3rem] bg-secondary px-6 py-12 text-center text-secondary-foreground sm:px-12">
            <h2 className="text-4xl leading-[0.9] uppercase sm:text-5xl">{t("menu.bottomTitle")}</h2>
            <p className="mx-auto mt-3 max-w-md text-lg">
              {t("menu.bottomBody")}
            </p>
            <div className="mt-7">
              <AnchorButton href={KEETA_LINK} size="lg">
                {t("menu.bottomCta")}
              </AnchorButton>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
