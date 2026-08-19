import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import crowd from "@/assets/crowd.jpg";
import truck from "@/assets/hansi-truck.jpg.asset.json";
import { cateringTypes, menu, whatsappLink } from "@/lib/hansi";
import { Marquee, Reveal, SectionTitle, Sticker } from "@/components/hansi/bits";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "HANSI Catering — Hotdog Trucks & Stands For Bahrain Events" },
      {
        name: "description",
        content:
          "You bring the people, we'll bring the dogs. HANSI caters birthdays, corporate events, weddings, festivals and brand activations across Bahrain.",
      },
      { property: "og:title", content: "HANSI Catering — You bring the people." },
      {
        property: "og:description",
        content: "Hotdog catering for parties, offices, weddings and festivals in Bahrain.",
      },
    ],
  }),
  component: Catering,
});

const packages = [
  {
    name: "THE MINI STATION",
    line: "Small spot, big flavour.",
    detail:
      "A compact HANSI hotdog station for smaller gatherings — signature dogs grilled to order plus Hansi Smoke Fries.",
  },
  {
    name: "THE FULL STATION",
    line: "The whole circus sets up.",
    detail:
      "Our full HANSI hotdog station: the complete signature dog line-up, corn dogs, loaded fries and homemade drinks.",
  },
  {
    name: "BUILD YOUR OWN",
    line: "Tell us what you're planning.",
    detail:
      "Pick the dogs, sides and drinks you want and we'll shape the station around your guest count and venue.",
  },
];


function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-display text-[11px] uppercase tracking-widest">{label}</span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}

const inputClass =
  "pop-sm w-full rounded-2xl bg-card px-4 py-3 text-sm outline-none focus:ring-4 focus:ring-primary/50";

function Catering() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    location: "",
    guests: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      "Hey HANSI! 🌭 Let's get this party started.",
      "",
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : "",
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Event type: ${form.eventType}`,
      `Date: ${form.date}`,
      `Location: ${form.location}`,
      `Guests: ${form.guests}`,
      form.message ? `Details: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Sticker className="animate-wiggle bg-secondary text-secondary-foreground">
              Catering across Bahrain
            </Sticker>
            <h1 className="mt-4 text-5xl leading-[0.85] uppercase sm:text-7xl">
              You bring the people.
              <br />
              <span className="text-secondary">We&apos;ll bring the dogs.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Grilled fresh on site, served fast, eaten faster. We handle the food and
              the fun — you handle the guest list.
            </p>
          </div>
          <img
            src={truck.url}
            alt="The HANSI monster food truck ready for catering"
            width={1000}
            height={1000}
            loading="lazy"
            className="pop rounded-[3rem] bg-primary object-contain p-4"
          />
        </div>
      </section>

      <Marquee words={["Let's get this party started", "Oh, that's saucy", "Bun-believable"]} />

      <section className="mx-auto max-w-7xl px-4 py-16">
        <Reveal>
          <SectionTitle kicker="Anywhere hungry people exist" title="We cater for" />
          <ul className="mt-6 flex flex-wrap gap-2">
            {cateringTypes.map((t) => (
              <li
                key={t}
                className="pop-sm press rounded-full bg-card px-4 py-2 text-sm font-semibold uppercase"
              >
                {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article className="pop press h-full rounded-3xl bg-card p-6 hover:-rotate-1">
                <h3 className="text-2xl uppercase leading-tight">{p.name}</h3>
                <p className="mt-2 font-hand text-2xl text-secondary">{p.line}</p>
                <p className="mt-3 text-sm text-muted-foreground">{p.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Setups are built around your guest count and venue — message us and we&apos;ll
          put together a quote.
        </p>

        <Reveal className="mt-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <img
                src={crowd}
                alt="Guests enjoying HANSI hotdogs at an event"
                width={1280}
                height={864}
                loading="lazy"
                className="pop h-72 w-full rounded-[2.5rem] object-cover"
              />
              <div className="pop mt-6 rounded-3xl bg-primary p-6">
                <h3 className="text-2xl uppercase">On the grill</h3>
                <p className="mt-2 text-sm">
                  {menu[0]!.items.map((i) => i.name).join(" · ")} — plus corn dogs,
                  Hansi Smoke Fries and homemade drinks.
                </p>
              </div>
            </div>

            <form onSubmit={submit} className="pop rounded-[2.5rem] bg-card p-6 sm:p-8">
              <h2 className="text-3xl uppercase leading-tight">Tell us about it</h2>
              <p className="mt-1 font-hand text-2xl text-secondary">
                No forms-for-the-sake-of-forms. Just the good bits.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Your name">
                  <input required value={form.name} onChange={set("name")} className={inputClass} placeholder="Who's asking?" />
                </Field>
                <Field label="Company / organization">
                  <input value={form.company} onChange={set("company")} className={inputClass} placeholder="Optional" />
                </Field>
                <Field label="Email">
                  <input required type="email" value={form.email} onChange={set("email")} className={inputClass} placeholder="you@email.com" />
                </Field>
                <Field label="Phone">
                  <input required value={form.phone} onChange={set("phone")} className={inputClass} placeholder="+973 ..." />
                </Field>
                <Field label="Event type">
                  <select required value={form.eventType} onChange={set("eventType")} className={inputClass}>
                    <option value="">Pick one</option>
                    {cateringTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Event date">
                  <input required type="date" value={form.date} onChange={set("date")} className={inputClass} />
                </Field>
                <Field label="Location">
                  <input required value={form.location} onChange={set("location")} className={inputClass} placeholder="Where are we parking?" />
                </Field>
                <Field label="Number of guests">
                  <input required inputMode="numeric" value={form.guests} onChange={set("guests")} className={inputClass} placeholder="How many mouths?" />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Anything else?">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    className={inputClass}
                    placeholder="Timings, vibes, dietary stuff, secret sauce requests..."
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="pop press mt-6 w-full rounded-full bg-secondary px-6 py-4 font-display text-base uppercase text-secondary-foreground"
              >
                Let&apos;s get this party started
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Sends straight to our WhatsApp. We reply fast — usually mid-grill.
              </p>
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}
