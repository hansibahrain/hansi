import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin, CalendarDays } from "lucide-react";
import { getEvents, type HansiEvent } from "@/lib/hansi";
import { useTranslation } from "@/lib/i18n/use-translation";
import { Sticker } from "./bits";

const statusTone: Record<HansiEvent["status"], string> = {
  "LIVE NOW": "bg-secondary text-secondary-foreground",
  "UP NEXT": "bg-primary text-primary-foreground",
  "COMING SOON": "bg-ink text-cream",
};

function statusLabel(status: HansiEvent["status"], lang: string): string {
  if (lang === "ar") {
    if (status === "LIVE NOW") return "حيّ الآن";
    if (status === "UP NEXT") return "الجاية";
    return "قريباً";
  }
  return status;
}

export function EventCard({ event }: { event: HansiEvent }) {
  const { lang } = useTranslation();
  return (
    <article className="pop press flex h-full flex-col rounded-3xl bg-card p-6 text-card-foreground transition-transform hover:-rotate-1">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`pop-sm rounded-full px-3 py-1 font-display text-[10px] uppercase tracking-widest ${statusTone[event.status]}`}
        >
          {statusLabel(event.status, lang)}
        </span>
        <span className="font-hand text-xl text-secondary">{event.type}</span>
      </div>

      <h3 className="mt-4 text-2xl leading-tight uppercase">{event.name}</h3>

      <div className="mt-3 space-y-1.5 text-sm">
        <p className="flex items-center gap-2">
          <MapPin className="size-4 text-secondary" /> {event.location}
        </p>
        <p className="flex items-center gap-2">
          <CalendarDays className="size-4 text-secondary" /> {event.dates}
        </p>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">{event.description}</p>
      <p className="mt-auto pt-5 font-display text-xs uppercase tracking-wide text-secondary">
        🌭 {lang === "ar" ? "محطة هوت دوغ هانسي كاملة" : "Full HANSI hotdog station"}
      </p>

    </article>
  );
}

export function EventCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const { t, lang } = useTranslation();
  const events = getEvents(lang);

  const scrollBy = (dir: number) => {
    scroller.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <Sticker className="animate-wiggle bg-primary" rotate={-4}>
          {t("whereWeAre.sticker")}
        </Sticker>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            aria-label={lang === "ar" ? "الفعاليات السابقة" : "Previous events"}
            onClick={() => scrollBy(-1)}
            className="pop-sm press rounded-full bg-card p-2.5"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label={lang === "ar" ? "الفعاليات التالية" : "Next events"}
            onClick={() => scrollBy(1)}
            className="pop-sm press rounded-full bg-card p-2.5"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {events.map((event) => (
          <div key={event.name} className="w-[290px] shrink-0 snap-start sm:w-[330px]">
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}
