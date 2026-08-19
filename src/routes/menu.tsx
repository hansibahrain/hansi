import { createFileRoute } from "@tanstack/react-router";
import sides from "@/assets/sides.jpg";
import heroDog from "@/assets/hero-dog.jpg";
import { addOns, menu, orderItemLink, orderLink } from "@/lib/hansi";
import {
  AnchorButton,
  Marquee,
  Reveal,
  SectionTitle,
  Sticker,
} from "@/components/hansi/bits";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "The HANSI Menu — World-Inspired Beef Dogs in Bahrain" },
      {
        name: "description",
        content:
          "Seven world-inspired 100% beef dogs, crispy corn dogs, Hansi Smoke Fries, homemade drinks and combos. Pick your dog. Add your sauce. Get messy.",
      },
      { property: "og:title", content: "The HANSI Menu — Good dogs only" },
      {
        property: "og:description",
        content: "World-inspired beef dogs, corn dogs, loaded fries and homemade drinks.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <Sticker className="animate-wiggle bg-secondary text-secondary-foreground">
              100% beef · Grilled to order
            </Sticker>
            <h1 className="mt-4 text-6xl leading-[0.85] uppercase sm:text-8xl">
              The <span className="text-secondary">Menu</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Pick your dog. Add your sauce. Get messy. Everything is grilled fresh when
              you order it — no sad heat lamps here.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <AnchorButton href={orderLink} size="lg" tone="ketchup">
                I&apos;m hungry →
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

      <Marquee words={["More sauce? Always.", "Good dogs only", "No boring bites"]} />

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16">
        {menu.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <Reveal>
              <SectionTitle kicker={cat.kicker} title={`${cat.title} ${cat.emoji}`} />
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {cat.items.map((item, i) => (
                <Reveal key={item.name} delay={i * 60}>
                  <article className="pop press flex h-full flex-col rounded-3xl bg-card p-6 hover:-rotate-1">
                    {item.flag ? <span className="text-3xl">{item.flag}</span> : null}
                    <h3 className="mt-2 text-xl leading-tight uppercase">{item.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    {item.bun ? (
                      <p className="mt-3 font-hand text-xl text-secondary">{item.bun}</p>
                    ) : null}
                    <div className="mt-auto pt-5">
                      <AnchorButton href={orderItemLink(item.name)}>
                        Order this
                      </AnchorButton>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <section id="add-ons">
          <Reveal>
            <SectionTitle kicker="Things are getting saucy." title="Add-ons ➕" />
            <ul className="mt-6 flex flex-wrap gap-2">
              {addOns.map((a) => (
                <li
                  key={a}
                  className="pop-sm press rounded-full bg-card px-4 py-2 text-sm font-semibold"
                >
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-8 font-hand text-3xl text-secondary">
              Prices? Ask us on WhatsApp — we&apos;ll sort you out.
            </p>
            <div className="mt-4">
              <AnchorButton href={orderLink} size="lg" tone="ketchup">
                Order on WhatsApp
              </AnchorButton>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
