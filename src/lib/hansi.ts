export const WHATSAPP_NUMBER = "97334240567";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const orderLink = whatsappLink(
  "Hey HANSI! 🌭 I'd like to place an order. Here's what I want:",
);

export const cateringLink = whatsappLink(
  "Hey HANSI! 🌭 I want to book you for my event. Here are the details:",
);

export function orderItemLink(item: string) {
  return whatsappLink(`Hey HANSI! 🌭 I'd like to order the ${item}. Bite me!`);
}

export type MenuItem = {
  name: string;
  flag?: string;
  description: string;
  bun?: string;
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
        description:
          "Classic beef dog with yellow mustard, ketchup, sauerkraut, fresh onions and crispy onions.",
        bun: "Potato bun",
      },
      {
        name: "CHICAGO DOG",
        flag: "🇺🇸",
        description:
          "Beef dog with yellow mustard, sweet relish, fresh onions, tomato, pickle spear, sport peppers and celery salt.",
        bun: "Potato bun",
      },
      {
        name: "AMSTERDAM DOG",
        flag: "🇳🇱",
        description:
          "Beef dog with tomato sauce, pepperoni, melted mozzarella, oregano and crispy onions.",
        bun: "Special bun",
      },
      {
        name: "MEXICAN DOG",
        flag: "🇲🇽",
        description:
          "Beef dog with jalapeños, cheddar cheese sauce, pico de gallo, chipotle mayo and crispy onions.",
        bun: "Potato bun",
      },
      {
        name: "DANISH DOG",
        flag: "🇩🇰",
        description:
          "Beef dog served in a Danish-style hollowed bun with Danish remoulade, ketchup, mustard, pickles and fresh onions.",
        bun: "Danish bun",
      },
      {
        name: "GERMAN CRUNCH DOG",
        flag: "🇩🇪",
        description:
          "Beef dog with German mustard, sauerkraut, pickles and crispy potato strings.",
        bun: "Potato bun",
      },
      {
        name: "BAHRAIN NASHEF DOG",
        flag: "🇧🇭",
        description:
          "Sliced beef sausage tossed in a rich tomato sauce with Bahraini spices and fresh onions.",
        bun: "Potato bun",
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
        description:
          "100% beef sausage coated in golden corn batter and fried until crispy. Served with ketchup & mustard.",
      },
      {
        name: "HANSI CHEESY CORN DOG",
        description:
          "100% beef sausage with melted cheese, coated in golden corn batter and fried until crispy. Served with cheese sauce & spicy mayo.",
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
        description:
          "Crispy fries tossed in our signature Hansi Smoke Seasoning — smoked paprika, garlic powder, onion powder, salt, black pepper, a touch of sugar and cayenne.",
      },
      {
        name: "LOADED HANSI FRIES",
        description:
          "Hansi Smoke Fries topped with cheddar cheese sauce, Hansi special sauce and crispy onions.",
      },
      {
        name: "CRISPY POTATO",
        description: "Thin, golden crispy potato strings.",
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
        description: "Any Signature Dog + Hansi Smoke Fries + Soft Drink.",
      },
      {
        name: "CORN DOG COMBO",
        description: "2 Corn Dogs + Hansi Smoke Fries + Soft Drink.",
      },
      {
        name: "HANSI DUO",
        description: "Any 2 Signature Dogs + Loaded Hansi Fries + 2 Drinks.",
      },
      {
        name: "KIDS COMBO",
        description: "Mini Beef Dog + Fries + Soft Drink / juice.",
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
        description: "Homemade black tea, peach and fresh lemon, served over ice.",
      },
      {
        name: "HANSI LEMON MINT",
        description: "Fresh lemon, mint and homemade syrup served over ice.",
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
        description:
          "Mayo, ketchup, mustard, pickle relish, smoked paprika, garlic and a touch of hot sauce.",
      },
    ],
  },
];

export const addOns = [
  "Extra Beef Sausage",
  "Cheddar Cheese Sauce",
  "Mozzarella",
  "Crispy Onions",
  "Crispy Potato",
  "Jalapeños",
  "Pickles",
  "Sauerkraut",
  "Fresh Onions",
  "Chipotle Mayo",
  "Danish Remoulade",
  "Hansi Special Sauce",
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
