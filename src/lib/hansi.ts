import type { Lang } from "./i18n/translations";

export const WHATSAPP_NUMBER = "97334240567";

/** Ordering happens on Keeta — swap this for your exact store link. */
export const KEETA_LINK = "https://keeta.com";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const orderLink = whatsappLink(
  "Hey HANSI! 🌭 I'd like to place an order. Here's what I want:",
);

export const cateringLink = whatsappLink(
  "Hey HANSI! 🌭 I want a HANSI hotdog station at my event. Here are the details:",
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
      ? "مرحبا هانسي! 🌭 أبي محطة هوت دوغ هانسي في فعاليتي. هذي التفاصيل:"
      : "Hey HANSI! 🌭 I want a HANSI hotdog station at my event. Here are the details:";
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
    kicker: "World-inspired beef dogs. 100% beef, grilled to order.",
    items: [
      {
        name: "NEW YORK DOG",
        flag: "🇺🇸",
        description: "Mustard, ketchup, sauerkraut, onions, crispy onions.",
        bun: "Potato bun",
        img: "ny-dog",
      },
      {
        name: "CHICAGO DOG",
        flag: "🇺🇸",
        description: "Relish, pickle, tomato, sport peppers, celery salt.",
        bun: "Potato bun",
        img: "chicago-dog",
      },
      {
        name: "AMSTERDAM DOG",
        flag: "🇳🇱",
        description: "Tomato sauce, pepperoni, mozzarella, crispy onions.",
        bun: "Special bun",
        img: "amsterdam-dog",
      },
      {
        name: "MEXICAN DOG",
        flag: "🇲🇽",
        description: "Jalapeños, cheddar sauce, pico de gallo, chipotle mayo.",
        bun: "Potato bun",
        img: "mexican-dog",
      },
      {
        name: "DANISH DOG",
        flag: "🇩🇰",
        description: "Danish remoulade, ketchup, mustard, pickles, onions.",
        bun: "Danish bun",
        img: "danish-dog",
      },
      {
        name: "GERMAN CRUNCH DOG",
        flag: "🇩🇪",
        description: "German mustard, sauerkraut, pickles, crispy potato.",
        bun: "Potato bun",
        img: "german-dog",
      },
      {
        name: "BAHRAIN NASHEF DOG",
        flag: "🇧🇭",
        description: "Sliced beef sausage, spiced tomato sauce, onions.",
        bun: "Potato bun",
        img: "nashef-dog",
      },
    ],
  },
  {
    id: "corn-dogs",
    title: "CORN DOGS",
    emoji: "🍢",
    kicker: "Golden batter. Zero chill.",
    items: [
      {
        name: "HANSI CLASSIC CORN DOG",
        description: "Crispy corn batter. Ketchup & mustard.",
        img: "corn-dog",
      },
      {
        name: "HANSI CHEESY CORN DOG",
        description: "Melted cheese inside. Cheese sauce & spicy mayo.",
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
        description: "Crispy fries in our smoky signature seasoning.",
        img: "smoke-fries",
      },
      {
        name: "LOADED HANSI FRIES",
        description: "Cheddar sauce, Hansi special sauce, crispy onions.",
        img: "loaded-fries",
      },
      {
        name: "CRISPY POTATO",
        description: "Thin, golden potato strings.",
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
      {
        name: "HANSI COMBO",
        description: "Signature dog + Smoke Fries + drink.",
        img: "combo",
      },
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
      {
        name: "KIDS COMBO",
        description: "Mini beef dog + fries + drink.",
        img: "combo",
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
        description: "Homemade peach tea over ice.",
        img: "drinks",
      },
      {
        name: "HANSI LEMON MINT",
        description: "Fresh lemon, mint, over ice.",
        img: "drinks",
      },
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
        description: "Smoky, tangy, a little spicy. Our house sauce.",
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
 * Update this list whenever HANSI books a new spot.
 * Just add an object — the homepage carousel and the events page pick it up.
 */
export const events: HansiEvent[] = [
  {
    name: "BAHRAIN FOOD FESTIVAL",
    dates: "12–15 March",
    location: "Bahrain Bay",
    type: "Food festival",
    description: "A full HANSI hotdog station. Follow the smoke, follow the noise.",
    status: "LIVE NOW",
  },
  {
    name: "BLOCK 338 NIGHT MARKET",
    dates: "Every Friday",
    location: "Adliya, Block 338",
    type: "Street pop-up",
    description: "Late dogs, loud tunes and a very long queue. Worth it.",
    status: "UP NEXT",
  },
  {
    name: "SEEF MALL POP-UP",
    dates: "22–24 April",
    location: "Seef District",
    type: "Mall activation",
    description: "Shopping is hungry work. We fixed that.",
    status: "UP NEXT",
  },
  {
    name: "AMWAJ ISLANDS BEACH DAY",
    dates: "6 May",
    location: "Amwaj Islands",
    type: "Beach party",
    description: "Sun, sand and a Bahrain Nashef Dog. Bring napkins.",
    status: "COMING SOON",
  },
  {
    name: "BUDAIYA FARMERS MARKET",
    dates: "Saturdays, winter season",
    location: "Budaiya",
    type: "Weekend market",
    description: "Fresh produce next door, best corn dogs on the block right here.",
    status: "COMING SOON",
  },
];

/** Where the HANSI truck is parked right now. Update this whenever it moves. */
export const truckNow = {
  location: "Bahrain Bay — Bahrain Food Festival",
  hours: "Today, 5 PM – 12 AM",
  note: "Look for the glowing HANSI sign. You'll smell us first.",
  mapUrl: "https://maps.google.com/?q=Bahrain+Bay",
};


export const cateringTypes = [
  "Birthday parties",
  "Corporate events",
  "Office lunches",
  "Private parties",
  "Weddings",
  "Festivals",
  "Brand activations",
  "School & university events",
  "Pop-ups",
  "Community events",
  "Any gathering where hungry people exist",
];

export const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "WhatsApp", href: `https://wa.me/${WHATSAPP_NUMBER}` },
];

export function getSocials(lang: Lang) {
  if (lang === "ar") {
    return [
      { label: "إنستغرام", href: "https://instagram.com" },
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
        kicker: "هوت دوغ بقري مستوحى من العالم. 100% بقر، مشوي عند الطلب.",
        items: [
          {
            name: "نيويورك دوغ",
            flag: "🇺🇸",
            description: "خردل، كاتشب، ملفوف مخمّر، بصل، بصل مقرمش.",
            bun: "خبز بطاطا",
            img: "ny-dog",
          },
          {
            name: "شيكاغو دوغ",
            flag: "🇺🇸",
            description: "مخلل، خيار، طماطم، فلفل رياضي، ملح كرفس.",
            bun: "خبز بطاطا",
            img: "chicago-dog",
          },
          {
            name: "أمستردام دوغ",
            flag: "🇳🇱",
            description: "صلصة طماطم، ببروني، موزاريلا، بصل مقرمش.",
            bun: "خبز مميز",
            img: "amsterdam-dog",
          },
          {
            name: "مكسيكي دوغ",
            flag: "🇲🇽",
            description: "هالابينيو، صلصة شيدر، بيكو دي غالو، مايونيز شيبوتلي.",
            bun: "خبز بطاطا",
            img: "mexican-dog",
          },
          {
            name: "دنماركي دوغ",
            flag: "🇩🇰",
            description: "ريمولاد دنماركي، كاتشب، خردل، مخلل، بصل.",
            bun: "خبز دنماركي",
            img: "danish-dog",
          },
          {
            name: "كرانش ألماني دوغ",
            flag: "🇩🇪",
            description: "خردل ألماني، ملفوف مخمّر، مخلل، بطاطا مقرمشة.",
            bun: "خبز بطاطا",
            img: "german-dog",
          },
          {
            name: "البحرين الناشف دوغ",
            flag: "🇧🇭",
            description: "سجق بقري مقطّع، صلصة طماطم متبّلة، بصل.",
            bun: "خبز بطاطا",
            img: "nashef-dog",
          },
        ],
      },
      {
        id: "corn-dogs",
        title: "كورن دوغ",
        emoji: "🍢",
        kicker: "عجينة ذهبية. صفر هدوء.",
        items: [
          {
            name: "كورن دوغ كلاسيك هانسي",
            description: "عجينة ذرة مقرمشة. كاتشب وخردل.",
            img: "corn-dog",
          },
          {
            name: "كورن دوغ بالجبن هانسي",
            description: "جبن ذائب بالداخل. صلصة جبن ومايونيز حار.",
            img: "cheesy-corn-dog",
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
            name: "بطاطا هانسي المدخّنة",
            description: "بطاطا مقرمشة ببهاراتنا المدخّنة المميزة.",
            img: "smoke-fries",
          },
          {
            name: "بطاطا هانسي المحمّلة",
            description: "صلصة شيدر، صلصة هانسي الخاصة، بصل مقرمش.",
            img: "loaded-fries",
          },
          {
            name: "بطاطا مقرمشة",
            description: "شرائح بطاطا رفيعة وذهبية.",
            img: "crispy-potato",
          },
        ],
      },
      {
        id: "combos",
        title: "وجبات",
        emoji: "🎯",
        kicker: "أقصى دوغ، أقل قرارات.",
        items: [
          {
            name: "وجبة هانسي",
            description: "دوغ مميز + بطاطا مدخّنة + مشروب.",
            img: "combo",
          },
          {
            name: "وجبة كورن دوغ",
            description: "٢ كورن دوغ + بطاطا مدخّنة + مشروب.",
            img: "corn-dog",
          },
          {
            name: "هانسي الثنائي",
            description: "٢ دوغ مميز + بطاطا محمّلة + ٢ مشروب.",
            img: "loaded-fries",
          },
          {
            name: "وجبة الأطفال",
            description: "دوغ بقري صغير + بطاطا + مشروب.",
            img: "combo",
          },
        ],
      },
      {
        id: "drinks",
        title: "مشروبات",
        emoji: "🥤",
        kicker: "باردة. منزلية.",
        items: [
          {
            name: "شاي هانسي بالخوخ المثلج",
            description: "شاي خوخ منزلي على الثلج.",
            img: "drinks",
          },
          {
            name: "ليمون نعناع هانسي",
            description: "ليمون طازج ونعناع على الثلج.",
            img: "drinks",
          },
        ],
      },
      {
        id: "saucy",
        title: "الصلصات",
        emoji: "🌶️",
        kicker: "صوص زيادة؟ دائماً.",
        items: [
          {
            name: "صلصة هانسي الخاصة",
            description: "مدخّنة، حامضة، حارة شوي. صلصتنا الخاصة.",
            img: "sauce",
          },
        ],
      },
    ];
  }
  return menu;
}

export function getEvents(lang: Lang): HansiEvent[] {
  if (lang === "ar") {
    return [
      {
        name: "مهرجان البحرين للأكل",
        dates: "١٢–١٥ مارس",
        location: "خليج البحرين",
        type: "مهرجان أكل",
        description: "محطة هوت دوغ هانسي كاملة. اتبع الدخان، اتبع الصوت.",
        status: "LIVE NOW",
      },
      {
        name: "سوق بلوك ٣٣٨ الليلي",
        dates: "كل جمعة",
        location: "العدلية، بلوك ٣٣٨",
        type: "بوب-آب شارعي",
        description: "كلاب متأخرة، موسيقى صاخبة وطابور طويل. يستاهل.",
        status: "UP NEXT",
      },
      {
        name: "بوب-آب مجمع السيف",
        dates: "٢٢–٢٤ أبريل",
        location: "منطقة السيف",
        type: "تفعيل في المول",
        description: "التسوق يجوّع. حلّيناها.",
        status: "UP NEXT",
      },
      {
        name: "يوم شاطئ جزر أمواج",
        dates: "٦ مايو",
        location: "جزر أمواج",
        type: "حفلة شاطئية",
        description: "شمس، رمل والبحرين الناشف دوغ. جيب مناديل.",
        status: "COMING SOON",
      },
      {
        name: "سوق المزارعين في البديع",
        dates: "السبت، موسم الشتاء",
        location: "البديع",
        type: "سوق نهاية الأسبوع",
        description: "خضار طازة بالجوار، وأطيب كورن دوغ في المنطقة هني.",
        status: "COMING SOON",
      },
    ];
  }
  return events;
}

export function getTruckNow(lang: Lang) {
  if (lang === "ar") {
    return {
      location: "خليج البحرين — مهرجان البحرين للأكل",
      hours: "اليوم، ٥ مساءً – ١٢ صباحاً",
      note: "ابحث عن لوحة هانسي المضيئة. ريحتنا توصل قبلنا.",
      mapUrl: "https://maps.google.com/?q=Bahrain+Bay",
    };
  }
  return truckNow;
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
      "بوب-آب",
      "فعاليات مجتمعية",
      "أي تجمع فيه ناس جعانين",
    ];
  }
  return cateringTypes;
}
