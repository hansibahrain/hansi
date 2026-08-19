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
    description: "Find us at the HANSI truck. Follow the smoke, follow the noise.",
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
