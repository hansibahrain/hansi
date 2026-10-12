import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "@/assets/hansi-logo.png";
import {
  EMAIL,
  TALABAT_LINK,
  WHATSAPP_NUMBER,
  getCateringLink,
  getTalabatHours,
} from "@/lib/hansi";
import { useTranslation } from "@/lib/i18n/use-translation";
import { Sticker } from "@/components/hansi/bits";

export const Route = createFileRoute("/links")({
  head: () => ({
    meta: [
      { title: "HANSI — All Our Links" },
      {
        name: "description",
        content:
          "Order on Talabat, follow @hansi.bh, book HANSI for your event, send us feedback — every HANSI link in one place.",
      },
      { property: "og:title", content: "HANSI — All our links" },
      {
        property: "og:description",
        content: "Order, follow, book an event or tell us how we did.",
      },
    ],
  }),
  component: Links,
});

type Item = {
  label: string;
  note?: string;
  href?: string;
  to?: string;
  tone: "mustard" | "ketchup" | "cream";
  emoji: string;
};

function useItems(): Item[] {
  const { t, lang } = useTranslation();
  return [
    {
      label: t("links.talabat"),
      note: getTalabatHours(lang),
      href: TALABAT_LINK,
      tone: "ketchup",
      emoji: "🛵",
    },
    { label: t("links.menu"), to: "/menu", tone: "mustard", emoji: "🌭" },
    {
      label: t("links.instagram"),
      note: "@hansi.bh",
      href: "https://instagram.com/hansi.bh",
      tone: "cream",
      emoji: "📸",
    },
    {
      label: t("links.whatsapp"),
      note: "+973 3424 0567",
      href: `https://wa.me/${WHATSAPP_NUMBER}`,
      tone: "cream",
      emoji: "💬",
    },
    { label: t("links.catering"), to: "/catering", tone: "mustard", emoji: "🎉" },
    { label: t("links.feedback"), to: "/feedback", tone: "cream", emoji: "⭐" },
    { label: t("links.email"), note: EMAIL, href: `mailto:${EMAIL}`, tone: "cream", emoji: "✉️" },
    { label: t("links.website"), to: "/", tone: "cream", emoji: "🏠" },
  ];
}

const toneMap = {
  mustard: "bg-primary text-primary-foreground",
  ketchup: "bg-secondary text-secondary-foreground",
  cream: "bg-card text-foreground",
};

function Row({ item }: { item: Item }) {
  const inner = (
    <>
      <span aria-hidden="true" className="text-2xl">
        {item.emoji}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-base uppercase tracking-wide">{item.label}</span>
        {item.note ? (
          <span className="block text-xs font-semibold opacity-70">{item.note}</span>
        ) : null}
      </span>
      <span aria-hidden="true" className="font-display text-lg">
        →
      </span>
    </>
  );

  const className = `pop press flex w-full items-center gap-4 rounded-3xl px-5 py-4 text-start hover:-rotate-1 ${toneMap[item.tone]}`;

  if (item.to) {
    return (
      <Link to={item.to} className={className}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={item.href} target="_blank" rel="noreferrer" className={className}>
      {inner}
    </a>
  );
}

function Links() {
  const { t, lang } = useTranslation();
  const items = useItems();
  const cateringLink = getCateringLink(lang);

  return (
    <section className="mx-auto max-w-xl px-4 pt-10 pb-20">
      <div className="text-center">
        <img
          src={logo}
          alt="HANSI logo"
          width={1024}
          height={866}
          className="animate-float mx-auto w-44"
        />
        <div className="mt-2">
          <Sticker className="bg-secondary text-secondary-foreground">{t("links.sticker")}</Sticker>
        </div>
        <h1 className="mt-4 text-5xl leading-[0.85] uppercase sm:text-6xl">{t("links.title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("links.body")}</p>
      </div>

      <div className="mt-8 grid gap-3">
        {/* No scroll-reveal here: this page is opened from a QR code, so every
            row has to be on screen the moment the page paints. */}
        {items.map((item) => (
          <Row key={item.label} item={item} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        {t("links.footer")}{" "}
        <a href={cateringLink} target="_blank" rel="noreferrer" className="underline">
          {t("links.footerCta")}
        </a>
      </p>
    </section>
  );
}
