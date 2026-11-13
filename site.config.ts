import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Voilà Catering",
  tagline: "Elegant halal catering for celebrations, events and corporate gatherings.",
  category: "Halal catering",
  schemaType: "FoodEstablishment",
  area: "Mississauga and the GTA, ON",
  siteUrl: "https://voila-catering-ca.vercel.app",

  theme: {
    preset: "warm-food",
    colors: { accent: "#2d4a3e" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Elegant halal catering",
    headline: "Platters, baked goods and desserts for your gathering",
    subhead: "Voilà Catering is a certified and insured halal caterer in Mississauga and the GTA, for celebrations, events and corporate gatherings. Send a message or email to enquire.",
    images: [
      { src: "/images/post-1.jpg", alt: "A fruit platter with mini tarts and cake bites from Voilà Catering", width: 1080, height: 822 },
      { src: "/images/post-2.jpg", alt: "A breakfast platter from Voilà Catering", width: 640, height: 1136 },
      { src: "/images/post-5.jpg", alt: "Chicken shawarma sliders and dessert cups from Voilà Catering", width: 640, height: 1136 },
    ],
    primaryCta: { label: "Enquire by Instagram DM", href: "https://ig.me/m/voilacateringca" },
    secondaryCta: { label: "See the food", href: "#gallery" },
  },

  highlights: [
    "Elegant halal catering in Mississauga and the GTA",
    "Certified and insured",
    "Platters, snack boxes, baked goods and desserts",
    "Enquire by Instagram DM or email",
  ],

  about: {
    title: "Welcome to Voilà Catering",
    body: [
      "Voilà Catering is a certified and insured halal caterer in Mississauga and the GTA, preparing food for celebrations, events and corporate gatherings.",
      "The menu has included fruit platters with mini apple tarts and cake bites, breakfast platters, dessert spreads, cinnamon rolls in mini bites and sharing sizes, hummus with veggies and chicken shawarma sliders, rosemary focaccia, cheese manaeesh, pretzels and savoury pastries, plus individual snack boxes, sharing platters and party spreads. A recent gathering menu for 6 included fresh salad, pasta salad, chicken Caesar wraps, za'atar sticks and mini pizzas. Send a message on Instagram, or email voila.cateringca@gmail.com, to enquire.",
    ],
    image: { src: "/images/post-5.jpg", alt: "Chicken shawarma sliders and dessert cups from Voilà Catering", width: 640, height: 1136 },
  },

  menu: {
    label: "Menu",
    title: "What we prepare",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message or email for a quote on your date, guest count and menu.",
    groups: [
      {
        title: "Platters and boxes",
        items: [
          { name: "Fruit platter", description: "Fresh seasonal fruit with mini apple tarts and cake bites, including a platter for 4. Available in different sizes." },
          { name: "Breakfast platters", description: "Including avocado omelette bagel, turkey club croissant, coconut granola yogurt cups, hummus and fresh veggies, and smoked cheese and crackers. Available in different sizes." },
          { name: "Individual snack boxes, sharing platters and party spreads" },
        ],
      },
      {
        title: "Savoury",
        items: [
          { name: "Hummus, veggies and chicken shawarma sliders" },
          { name: "Rosemary focaccia, cheese manaeesh, pretzels and savoury pastries" },
        ],
      },
      {
        title: "Sweets",
        items: [
          { name: "Dessert spreads", description: "Cheesecakes, pies, cakes and freshly baked cookies." },
          { name: "Cinnamon rolls", description: "Available in mini bites and sharing sizes." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent spreads",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 822, alt: "A fruit platter with mini tarts and cake bites from Voilà Catering", caption: "Fruit platter", href: "https://www.instagram.com/p/DfqWki3Dc_z/" },
      { src: "/images/post-2.jpg", width: 640, height: 1136, alt: "A breakfast platter from Voilà Catering", caption: "Breakfast platter", href: "https://www.instagram.com/reel/DfihJiZOMcn/" },
      { src: "/images/post-5.jpg", width: 640, height: 1136, alt: "Chicken shawarma sliders and dessert cups from Voilà Catering", caption: "A sharing spread", href: "https://www.instagram.com/reel/DfGVX4Qtz3d/" },
      { src: "/images/post-6.jpg", width: 640, height: 1136, alt: "Rosemary focaccia from Voilà Catering", caption: "Rosemary focaccia", href: "https://www.instagram.com/reel/DfBZA7FN49l/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "voilacateringca",
    embeds: ["https://www.instagram.com/p/DfqWki3Dc_z/", "https://www.instagram.com/reel/DfihJiZOMcn/", "https://www.instagram.com/reel/DfBZA7FN49l/"],
  },

  order: {
    label: "How to order",
    title: "Enquire in a DM or by email",
    intro: "Send a message on Instagram, or email voila.cateringca@gmail.com, with your date, guest count and the menu you have in mind.",
    dmMessage: "Hi Voilà Catering! I would like to enquire.\nDate:\nGuest count:\nEvent type:\nMenu ideas:",
    headerCtaLabel: "DM to enquire",
    links: [
      { label: "Enquire by Instagram DM", href: "https://ig.me/m/voilacateringca" },
      { label: "Email voila.cateringca@gmail.com", href: "mailto:voila.cateringca@gmail.com" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I enquire?", a: "Send a message on Instagram, or email voila.cateringca@gmail.com, with your date, guest count and menu." },
    { q: "Is the food halal?", a: "Yes. Voilà Catering is a certified and insured halal caterer." },
    { q: "Where do you serve?", a: "Voilà Catering is in Mississauga and serves the GTA." },
  ],

  contact: {
    title: "Contact",
    area: "Mississauga and the GTA, Ontario",
    email: "voila.cateringca@gmail.com",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/voilacateringca/" }],
  },

  seo: {
    title: "Voilà Catering | Halal catering in Mississauga and the GTA",
    description: "Halal catering in Mississauga and the GTA for celebrations, events and corporate gatherings, with platters, baked goods and desserts. Enquire by DM or email.",
    keywords: ["halal catering Mississauga", "event catering GTA", "Voilà Catering"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
