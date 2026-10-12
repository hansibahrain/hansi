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
export const FEEDBACK_FORM_EMBED = "";

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
  flag?: string;
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
        flag: "🇺🇸",
        description: "The original classic, done the HANSI way.",
        bun: "Potato bun",
        img: "american-dog",
      },
      {
        name: "AMSTERDAM DOG",
        flag: "🇳🇱",
        description: "Pizza night, packed into a bun.",
        bun: "Special baguette",
        img: "amsterdam-dog",
      },
      {
        name: "GERMAN CRUNCH DOG",
        flag: "🇩🇪",
        description: "It's all about the crunch.",
        bun: "Potato bun",
        img: "german-dog",
      },
      {
        name: "DANISH DOG",
        flag: "🇩🇰",
        description: "Copenhagen's street favourite, tucked right inside the bread.",
        bun: "Danish bun",
        img: "danish-dog",
      },
      {
        name: "MEXICAN DOG",
        flag: "🇲🇽",
        description: "Turn up the heat.",
        bun: "Potato bun",
        img: "mexican-dog",
      },
      {
        name: "BAHRAIN NASHEF DOG",
        flag: "🇧🇭",
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
        description: "Golden, crispy and impossible to share.",
        img: "corn-dog",
      },
      {
        name: "HANSI CHEESY CORN DOG",
        description: "Cheese pull guaranteed.",
        img: "cheesy-corn-dog",
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
        name: "HANSI SMOKE FRIES",
        description: "Our signature seasoned fries.",
        img: "smoke-fries",
      },
      {
        name: "LOADED HANSI FRIES",
        description: "Fries, but make it a meal.",
        img: "loaded-fries",
      },
      {
        name: "CRISPY POTATO",
        description: "Thin, golden, dangerously snackable.",
        img: "crispy-potato",
      },
    ],
  },
  {
    id: "combos",
    title: "COMBOS",
    emoji: "🎯",
    kicker: "Maximum dog, minimum decisions.",
    items: [
      { name: "HANSI COMBO", description: "Signature dog + Smoke Fries + drink.", img: "combo" },
      {
        name: "CORN DOG COMBO",
        description: "2 corn dogs + Smoke Fries + drink.",
        img: "corn-dog",
      },
      {
        name: "HANSI DUO",
        description: "2 signature dogs + Loaded Fries + 2 drinks.",
        img: "loaded-fries",
      },
      { name: "KIDS COMBO", description: "Mini beef dog + fries + drink.", img: "combo" },
    ],
  },
  {
    id: "drinks",
    title: "DRINKS",
    emoji: "🥤",
    kicker: "Ice cold. Homemade.",
    items: [
      { name: "HANSI PEACH ICED TEA", description: "Homemade and ice cold.", img: "drinks" },
      { name: "HANSI LEMON MINT", description: "Fresh, zingy, ice cold.", img: "drinks" },
    ],
  },
  {
    id: "saucy",
    title: "SAUCY STUFF",
    emoji: "🌶️",
    kicker: "More sauce? Always.",
    items: [
      {
        name: "HANSI SPECIAL SAUCE",
        description: "Our house sauce. You'll want extra.",
        img: "sauce",
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
            flag: "🇺🇸",
            description: "الكلاسيكي الأصلي، على طريقة هانزي.",
            bun: "خبز البطاطس",
            img: "american-dog",
          },
          {
            name: "أمستردام دوغ",
            flag: "🇳🇱",
            description: "ليلة بيتزا داخل خبزة.",
            bun: "خبز باغيت خاص",
            img: "amsterdam-dog",
          },
          {
            name: "جيرمان كرانش دوغ",
            flag: "🇩🇪",
            description: "السالفة كلها في الكرانش.",
            bun: "خبز البطاطس",
            img: "german-dog",
          },
          {
            name: "دانيش دوغ",
            flag: "🇩🇰",
            description: "مفضّل شوارع كوبنهاغن، داخل الخبز.",
            bun: "خبز دانيش",
            img: "danish-dog",
          },
          {
            name: "ميكسيكان دوغ",
            flag: "🇲🇽",
            description: "ارفع الحرارة.",
            bun: "خبز البطاطس",
            img: "mexican-dog",
          },
          {
            name: "بحريني ناشف",
            flag: "🇧🇭",
            description: "نكهتنا المحلية. والرحلة تنتهي في البحرين.",
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
          { name: "كلاسيك كورن دوغ", description: "ذهبي، مقرمش، وما ينتشارك.", img: "corn-dog" },
          { name: "تشيزي كورن دوغ", description: "سحبة الجبن مضمونة.", img: "cheesy-corn-dog" },
        ],
      },
      {
        id: "sides",
        title: "إضافات",
        emoji: "🍟",
        kicker: "لا تطلب واحدة بس.",
        items: [
          { name: "بطاطس هانزي المتبّلة", description: "بطاطسنا المميزة.", img: "smoke-fries" },
          { name: "بطاطس هانزي المحمّلة", description: "بطاطس بحجم وجبة.", img: "loaded-fries" },
          { name: "بطاطس مقرمشة", description: "رفيعة، ذهبية، وما تنترك.", img: "crispy-potato" },
        ],
      },
      {
        id: "combos",
        title: "وجبات",
        emoji: "🎯",
        kicker: "أقصى دوغ، أقل قرارات.",
        items: [
          { name: "وجبة هانزي", description: "دوغ مميز + بطاطس + مشروب.", img: "combo" },
          { name: "وجبة كورن دوغ", description: "٢ كورن دوغ + بطاطس + مشروب.", img: "corn-dog" },
          {
            name: "هانزي الثنائي",
            description: "٢ دوغ مميز + بطاطس محمّلة + ٢ مشروب.",
            img: "loaded-fries",
          },
          { name: "وجبة الأطفال", description: "دوغ صغير + بطاطس + مشروب.", img: "combo" },
        ],
      },
      {
        id: "drinks",
        title: "مشروبات",
        emoji: "🥤",
        kicker: "باردة. منزلية.",
        items: [
          { name: "شاي هانزي بالخوخ", description: "منزلي وبارد.", img: "drinks" },
          { name: "ليمون نعناع هانزي", description: "منعش وبارد.", img: "drinks" },
        ],
      },
      {
        id: "saucy",
        title: "الصوصات",
        emoji: "🌶️",
        kicker: "صوص زيادة؟ دايماً.",
        items: [{ name: "صوص هانزي الخاص", description: "صوص البيت. بتطلب زيادة.", img: "sauce" }],
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
