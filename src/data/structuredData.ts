// schema.org data for search engines and AI assistants (rendered as JSON-LD by Layout,
// which fills in each page's url, description and share image).
// Only facts that stay true: no release dates for unreleased games, no player counts.
import logo from "../assets/logo.png";

const SITE = "https://mechanikoi.com.ar/";
const studio = { "@type": "Organization", name: "MechaniKOI", url: SITE };

export const studioLd = {
  ...studio,
  alternateName: "Mechanikoi Games",
  logo: new URL(logo.src, SITE).href,
  foundingDate: "2023",
  founder: { "@type": "Person", name: "Juan Jousset", alternateName: "Totally" },
  email: "development@mechanikoi.com.ar",
  sameAs: [
    "https://store.steampowered.com/app/3349520/Iris_Dissolution",
    "https://store.steampowered.com/app/3091770",
    "https://mechanikoi.itch.io/bleedingroots",
    "https://steamcommunity.com/groups/mechanikoi",
    "https://discord.gg/sqzZJmKt7E",
    "https://x.com/MechanikoiGames",
    "https://bsky.app/profile/mechanikoigames.bsky.social",
    "https://www.instagram.com/mechanikoi/",
    "https://www.youtube.com/@MechaniKoi",
    "https://ar.linkedin.com/company/mechanikoigames",
  ],
};

const game = {
  "@type": "VideoGame",
  applicationCategory: "Game",
  playMode: "SinglePlayer",
  author: studio,
  publisher: studio,
};

export const irisLd = {
  ...game,
  name: "Iris Dissolution",
  genre: ["Survival horror"],
  gamePlatform: ["PC", "Steam Deck"],
  operatingSystem: "Windows, Linux",
  inLanguage: ["en", "fr", "it", "de", "es-ES", "es-419", "ja", "ko", "pt-BR", "pt-PT", "ru", "uk", "zh-Hans"],
  sameAs: ["https://store.steampowered.com/app/3349520/Iris_Dissolution"],
  award: [
    "Featured in 4 showcases of The Horror Game Awards, 2025–2026",
    "Official Selection, EVA 2026",
    "Featured, GameEffect Showcase 2026",
    "Featured, Indie Dev Argentina",
  ],
};

export const brLd = {
  ...game,
  name: "Bleeding Roots",
  genre: ["Psychological horror", "Walking simulator"],
  gamePlatform: ["PC"],
  operatingSystem: "Windows, Linux",
  inLanguage: ["en", "es-ES", "es-419", "ja", "pt-BR", "ru", "zh-Hans"],
  datePublished: "2024-09-07",
  timeRequired: "PT15M",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://store.steampowered.com/app/3091770",
  },
  sameAs: ["https://store.steampowered.com/app/3091770", "https://mechanikoi.itch.io/bleedingroots"],
  award: ["#1 New & Trending on Steam", "Featured, EVA 2024", "Featured, Ventana Sur – Maquinitas+ 2024"],
};
