import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/hansi-logo.png.asset.json";
import { cateringLink, orderLink, socials } from "@/lib/hansi";
import { AnchorButton, Squiggle } from "./bits";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/catering", label: "Catering" },
  { to: "/where-we-are", label: "Where We Are" },
  { to: "/about", label: "About HANSI" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-cocoa bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img
            src={logo.url}
            alt="HANSI hot dogs logo"
            width={140}
            height={118}
            className="h-11 w-auto transition-transform duration-300 hover:-rotate-3 hover:scale-105 sm:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "bg-primary" }}
              className="rounded-full px-3 py-2 font-display text-xs uppercase tracking-wide transition-colors hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <AnchorButton
            href={cateringLink}
            tone="ketchup"
            className="hidden md:inline-flex"
          >
            Get HANSI for your event
          </AnchorButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="pop-sm press rounded-full bg-primary p-2.5 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t-[3px] border-cocoa bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${i * 40}ms` }}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "bg-primary" }}
                className="pop-sm animate-pop-in rounded-2xl bg-card px-4 py-3 font-display text-lg uppercase"
              >
                {item.label}
              </Link>
            ))}
            <AnchorButton href={cateringLink} tone="ketchup" size="lg" className="mt-2">
              Get HANSI for your event
            </AnchorButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-3 md:hidden">
      <a
        href={orderLink}
        target="_blank"
        rel="noreferrer"
        className="pop press flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-4 font-display text-base uppercase text-secondary-foreground"
      >
        Get HANSI →
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <Squiggle className="-mt-3 h-6 text-ink" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo.url}
            alt="HANSI logo"
            width={180}
            height={152}
            loading="lazy"
            className="animate-wiggle h-20 w-auto"
          />
          <p className="mt-4 font-hand text-2xl text-primary">
            Hotdogs with a little attitude.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-widest text-primary">
            Wander off
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-widest text-primary">
            Say hi
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-primary">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <a href="tel:+97334240567" className="hover:text-primary">
                +973 3424 0567
              </a>
            </li>
            <li>Kingdom of Bahrain</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-widest text-primary">
            Hungry?
          </h3>
          <p className="mt-3 text-sm text-cream/80">
            Order straight to our WhatsApp. No apps, no fuss, just dogs.
          </p>
          <AnchorButton href={orderLink} className="mt-4">
            Order on WhatsApp
          </AnchorButton>
        </div>
      </div>
      <div className="border-t border-cream/20 py-5 text-center font-display text-[10px] uppercase tracking-[0.3em] text-cream/60">
        © {new Date().getFullYear()} HANSI · Good dogs only
      </div>
    </footer>
  );
}
