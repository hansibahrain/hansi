import type { Lang } from "./i18n/translations";

export const WHATSAPP_NUMBER = "97334240567";

/** Ordering happens on Talabat — swap this for the exact HANSI store link once it's live. */
export const TALABAT_LINK = "https://www.talabat.com/bahrain";

export const EMAIL = "hansi.bahrain@gmail.com";

/** Talabat delivery hours, shown next to every Talabat link. */
export function getTalabatHours(lang: Lang) {
  return lang === "ar" ? "يوميًا ٦:٠٠ مساءً – ١١:٣٠ مساءً" : "Daily 6:00 PM – 11:30 PM";
}

/**
 * Google Form used for guest feedback. Paste the form's "embed" src here
 * (the .../viewform?embedded=true link) and the feedback page shows the form
 * itself; while it is empty the page falls back to WhatsApp.
 */
export const FEEDBACK_FORM_EMBED =
  "https://docs.google.com/forms/d/e/1FAIpQLSeMP9HTKQIvbZVkTc6YdJICcIQxzwkkjaO_93hGbZf-RFg1Sg/viewform?embedded=true";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const orderLink = whatsappLink(
  "Hey HANSI! 🌭 I'd like to place an order. Here's what I want:",
);

export const cateringLink = whatsappLink(
  "Hey HANSI! 🌭 I'd like HANSI to cater my event. Here are the details:",
);

export function getOrderLink(lang: Lang) {
  const msg =
    lang === "ar"
      ? "مرحبا هانسي! 🌭 أبي أطلب. هذا اللي أبي:"
      : "Hey HANSI! 🌭 I'd like to place an order. Here's what I want:";
  return whatsappLink(msg);
}

export function getCateringLink(lang: Lang) {
  const msg =
    lang === "ar"
      ? "مرحبا هانسي! 🌭 أبي هانزي يسوي كيترنق لفعاليتي. هذي التفاصيل:"
      : "Hey HANSI! 🌭 I'd like HANSI to cater my event. Here are the details:";
  return whatsappLink(msg);
}

export type MenuItem = {
  name: string;
  /** Key into the sticker art in src/assets/stickers. */
  sticker?: string;
  description: string;
  bun?: string;
  img: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  emoji: string;
  kicker: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "dogs",
    title: "THE DOGS",
    emoji: "🌭",
    kicker: "Hotdogs from around the world, with a Bahraini twist. 100% beef, grilled to order.",
    items: [
      {
        name: "AMERICAN DOG",
        sticker: "american",
        description: "The original classic, done the HANSI way.",
        bun: "Potato bun",
        img: "american-dog",
      },
      {
        name: "AMSTERDAM DOG",
        sticker: "amsterdam",
        description: "Pizza night, packed into a bun.",
        bun: "Butter brioche",
        img: "amsterdam-dog",
      },
      {
        name: "GERMAN CRUNCH DOG",
        sticker: "german",
        description: "It's all about the crunch.",
        bun: "Potato bun",
        img: "german-dog",
      },
      {
        name: "DANISH DOG",
        sticker: "danish",
        description: "Copenhagen's street favourite, tucked right inside the bread.",
        bun: "Danish-style butter brioche",
        img: "danish-dog",
      },
      {
        name: "MEXICAN DOG",
        sticker: "mexican",
        description: "Turn up the heat.",
        bun: "Potato bun",
        img: "mexican-dog",
      },
      {
        name: "BAHRAIN NASHEF DOG",
        sticker: "bahrain",
        description: "Our local flavour. Every trip ends at home.",
        bun: "Potato bun",
        img: "nashef-dog",
      },
    ],
  },
  {
    id: "corn-dogs",
    title: "CORN DOGS",
    emoji: "🍢",
    kicker: "Korean-style. Golden batter. Zero chill.",
    items: [
      {
        name: "HANSI CLASSIC CORN DOG",
        sticker: "korea",
        description: "100% beef inside a golden, crispy coat.",
        img: "corn-dog",
      },
      {
        name: "HANSI HALF & HALF CORN DOG",
        sticker: "korea",
        description: "Beef on one side, melted cheese on the other.",
        img: "half-half-corn-dog",
      },
      {
        name: "HANSI CHEESE CORN DOG",
        sticker: "korea",
        description: "All cheese, all pull.",
        img: "cheese-corn-dog",
      },
    ],
  },
  {
    id: "sides",
    title: "SIDES",
    emoji: "🍟",
    kicker: "Never order just one.",
    items: [
      {
        name: "HANSI SEASONED FRIES",
        description: "Our signature seasoned fries.",
        img: "seasoned-fries",
      },
      {
        name: "LOADED HANSI FRIES",
        description: "Fries, but make it a meal.",
        img: "loaded-fries",
      },
    ],
  },
  {
    id: "drinks",
    title: "DRINKS",
    emoji: "🥤",
    kicker: "Ice cold. Homemade.",
    items: [
      {
        name: "HANSI PEACH ICED TEA",
        description: "Homemade and ice cold.",
        img: "peach-iced-tea",
      },
      { name: "HANSI PINK LEMONADE", description: "Fresh, zingy, ice cold.", img: "pink-lemonade" },
      { name: "HANSI CHERRY COLA", description: "Cola with a cherry kick.", img: "cherry-cola" },
      {
        name: "HANSI HIBISCUS MOJITO",
        description: "Hibiscus, mint and lime.",
        img: "hibiscus-mojito",
      },
    ],
  },
];

export type HansiEvent = {
  name: string;
  dates: string;
  location: string;
  type: string;
  description: string;
  status: "LIVE NOW" | "UP NEXT" | "COMING SOON";
};

/**
 * Public locations and event spots are not announced yet.
 * When HANSI books a spot, add an object here — the homepage and the
 * Where We Are page will show it automatically instead of "Not announced yet".
 */
export const events: HansiEvent[] = [];

export const cateringTypes = [
  "Birthday parties",
  "Corporate events",
  "Office lunches",
  "Private parties",
  "Weddings",
  "Festivals",
  "Brand activations",
  "School & university events",
  "Community events",
  "Any gathering where hungry people exist",
];

export const socials = [
  { label: "Instagram", href: "https://instagram.com/hansi.bh" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
];

export function getSocials(lang: Lang) {
  if (lang === "ar") {
    return [
      { label: "إنستغرام", href: "https://instagram.com/hansi.bh" },
      { label: "تيك توك", href: "https://tiktok.com" },
      { label: "واتساب", href: `https://wa.me/${WHATSAPP_NUMBER}` },
    ];
  }
  return socials;
}

export function getMenu(lang: Lang): MenuCategory[] {
  if (lang === "ar") {
    return [
      {
        id: "dogs",
        title: "الدوغ",
        emoji: "🌭",
        kicker: "هوت دوغ من حول العالم، بنكهة بحرينية. 100% لحم بقري، يشوى عند الطلب.",
        items: [
          {
            name: "أمريكان دوغ",
            sticker: "american",
            description: "الكلاسيكي الأصلي، على طريقة هانزي.",
            bun: "خبز البطاطس",
            img: "american-dog",
          },
          {
            name: "أمستردام دوغ",
            sticker: "amsterdam",
            description: "ليلة بيتزا داخل خبزة.",
            bun: "خبز بريوش بالزبدة",
            img: "amsterdam-dog",
          },
          {
            name: "جيرمان كرانش دوغ",
            sticker: "german",
            description: "كله عن القرمشة.",
            bun: "خبز البطاطس",
            img: "german-dog",
          },
          {
            name: "دانيش دوغ",
            sticker: "danish",
            description: "المفضل في شوارع كوبنهاغن، محشي داخل الخبز.",
            bun: "بريوش بالزبدة على الطريقة الدنماركية",
            img: "danish-dog",
          },
          {
            name: "ميكسيكان دوغ",
            sticker: "mexican",
            description: "ارفع الحرارة.",
            bun: "خبز البطاطس",
            img: "mexican-dog",
          },
          {
            name: "بحريني ناشف",
            sticker: "bahrain",
            description: "نكهتنا المحلية. كل رحلة تنتهي في البيت.",
            bun: "خبز البطاطس",
            img: "nashef-dog",
          },
        ],
      },
      {
        id: "corn-dogs",
        title: "كورن دوغ",
        emoji: "🍢",
        kicker: "على الطريقة الكورية. ذهبي ومقرمش.",
        items: [
          {
            name: "كلاسيك كورن دوغ",
            sticker: "korea",
            description: "100% لحم بقري داخل عجينة ذهبية مقرمشة.",
            img: "corn-dog",
          },
          {
            name: "هاف آند هاف كورن دوغ",
            sticker: "korea",
            description: "نص سجق ونص جبن ذائب.",
            img: "half-half-corn-dog",
          },
          {
            name: "تشيز كورن دوغ",
            sticker: "korea",
            description: "جبن بالكامل، وسحبة مضمونة.",
            img: "cheese-corn-dog",
          },
        ],
      },
      {
        id: "sides",
        title: "إضافات",
        emoji: "🍟",
        kicker: "لا تطلب واحدة بس.",
        items: [
          {
            name: "بطاطس هانزي المتبّلة",
            description: "بطاطسنا المميزة.",
            img: "seasoned-fries",
          },
          {
            name: "بطاطس هانزي المحمّلة",
            description: "بطاطس بحجم وجبة.",
            img: "loaded-fries",
          },
        ],
      },
      {
        id: "drinks",
        title: "مشروبات",
        emoji: "🥤",
        kicker: "باردة. منزلية.",
        items: [
          { name: "شاي هانزي بالخوخ", description: "منزلي وبارد.", img: "peach-iced-tea" },
          { name: "ليموناضة هانزي الوردية", description: "منعشة وباردة.", img: "pink-lemonade" },
          { name: "كولا هانزي بالكرز", description: "كولا بلمسة كرز.", img: "cherry-cola" },
          {
            name: "موهيتو الكركديه",
            description: "كركديه ونعناع وليمون.",
            img: "hibiscus-mojito",
          },
        ],
      },
    ];
  }
  return menu;
}

export function getEvents(_lang: Lang): HansiEvent[] {
  return events;
}

export function getCateringTypes(lang: Lang): string[] {
  if (lang === "ar") {
    return [
      "حفلات أعياد ميلاد",
      "فعاليات شركات",
      "غداء مكاتب",
      "حفلات خاصة",
      "أعراس",
      "مهرجانات",
      "تفعيل علامات تجارية",
      "فعاليات مدارس وجامعات",
      "فعاليات مجتمعية",
      "أي تجمع فيه ناس جعانين",
    ];
  }
  return cateringTypes;
}
