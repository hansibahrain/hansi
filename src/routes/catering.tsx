import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import crowd from "@/assets/crowd.jpg";
import truck from "@/assets/hansi-truck.jpg";
import { getCateringTypes, getMenu, getCateringLink, whatsappLink } from "@/lib/hansi";
import { useTranslation } from "@/lib/i18n/use-translation";
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

function usePackages() {
  const { t } = useTranslation();
  return [
    {
      name: t("catering.packageMiniName"),
      line: t("catering.packageMiniLine"),
      detail: t("catering.packageMiniDetail"),
    },
    {
      name: t("catering.packageFullName"),
      line: t("catering.packageFullLine"),
      detail: t("catering.packageFullDetail"),
    },
    {
      name: t("catering.packageCustomName"),
      line: t("catering.packageCustomLine"),
      detail: t("catering.packageCustomDetail"),
    },
  ];
}

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
  const { t, lang } = useTranslation();
  const cateringLink = getCateringLink(lang);
  const cateringTypes = getCateringTypes(lang);
  const menu = getMenu(lang);
  const packages = usePackages();

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
    const lines =
      lang === "ar"
        ? [
            "مرحبا هانسي! 🌭 خلينا نبدأ الحفلة.",
            "",
            `الاسم: ${form.name}`,
            form.company ? `الشركة: ${form.company}` : "",
            `الإيميل: ${form.email}`,
            `الهاتف: ${form.phone}`,
            `نوع الفعالية: ${form.eventType}`,
            `التاريخ: ${form.date}`,
            `المكان: ${form.location}`,
            `عدد الضيوف: ${form.guests}`,
            form.message ? `تفاصيل: ${form.message}` : "",
          ]
        : [
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
          ];
    const msg = lines.filter(Boolean).join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-12 pb-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Sticker className="animate-wiggle bg-secondary text-secondary-foreground">
              {t("catering.sticker")}
            </Sticker>
            <h1 className="mt-4 text-5xl leading-[0.85] uppercase sm:text-7xl whitespace-pre-line">
              {t("catering.title")}
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              {t("catering.body")}
            </p>
          </div>
          <img
            src={truck}
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
          <SectionTitle kicker={t("catering.caterForTitle")} title={t("catering.caterForTitle")} />
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
          {t("catering.note")}
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
                <h3 className="text-2xl uppercase">{t("catering.grillTitle")}</h3>
                <p className="mt-2 text-sm">
                  {menu[0]!.items.map((i) => i.name).join(" · ")} {t("catering.grillBody")}
                </p>
              </div>
            </div>

            <form onSubmit={submit} className="pop rounded-[2.5rem] bg-card p-6 sm:p-8">
              <h2 className="text-3xl uppercase leading-tight">{t("catering.formTitle")}</h2>
              <p className="mt-1 font-hand text-2xl text-secondary">
                {t("catering.formKicker")}
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label={t("catering.labelName")}>
                  <input required value={form.name} onChange={set("name")} className={inputClass} placeholder={t("catering.placeholderName")} />
                </Field>
                <Field label={t("catering.labelCompany")}>
                  <input value={form.company} onChange={set("company")} className={inputClass} placeholder={t("catering.placeholderCompany")} />
                </Field>
                <Field label={t("catering.labelEmail")}>
                  <input required type="email" value={form.email} onChange={set("email")} className={inputClass} placeholder={t("catering.placeholderEmail")} />
                </Field>
                <Field label={t("catering.labelPhone")}>
                  <input required value={form.phone} onChange={set("phone")} className={inputClass} placeholder={t("catering.placeholderPhone")} />
                </Field>
                <Field label={t("catering.labelEventType")}>
                  <select required value={form.eventType} onChange={set("eventType")} className={inputClass}>
                    <option value="">{t("catering.optionPickOne")}</option>
                    {cateringTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label={t("catering.labelDate")}>
                  <input required type="date" value={form.date} onChange={set("date")} className={inputClass} />
                </Field>
                <Field label={t("catering.labelLocation")}>
                  <input required value={form.location} onChange={set("location")} className={inputClass} placeholder={t("catering.placeholderLocation")} />
                </Field>
                <Field label={t("catering.labelGuests")}>
                  <input required inputMode="numeric" value={form.guests} onChange={set("guests")} className={inputClass} placeholder={t("catering.placeholderGuests")} />
                </Field>
              </div>

              <div className="mt-4">
                <Field label={t("catering.labelMessage")}>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    className={inputClass}
                    placeholder={t("catering.placeholderMessage")}
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="pop press mt-6 w-full rounded-full bg-secondary px-6 py-4 font-display text-base uppercase text-secondary-foreground"
              >
                {t("catering.submit")}
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                {t("catering.disclaimer")}
              </p>
            </form>
          </div>
        </Reveal>
      </section>
    </>
  );
}
