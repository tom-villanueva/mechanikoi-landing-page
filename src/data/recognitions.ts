// Showcases and selections shown on each game page, top to bottom.
// To add a row: drop the logo in src/assets/<game>/recognitions/, import it here,
// add the text to src/i18n/ui.ts (en + es) and add an entry to the list.
// `scale` is an optional optical fix for logos that look small at the shared height.
import type { ImageMetadata } from "astro";
import type { ui, defaultLang } from "../i18n/ui";

import irisThga from "../assets/iris/recognitions/iris-thga.png";
import irisEva2026 from "../assets/iris/recognitions/iris-eva-2026.png";
import irisGameEffect from "../assets/iris/recognitions/iris-gameeffect-2026.png";
import irisIda from "../assets/iris/recognitions/iris-ida.png";
import brSteam from "../assets/br/recognitions/bleeding-steam.svg";
import brEva2024 from "../assets/br/recognitions/bleeding-eva-2024.png";
import brVentanaSur from "../assets/br/recognitions/bleeding-ventana-sur.png";

export interface Recognition {
  logo: ImageMetadata;
  alt: string;
  text: keyof (typeof ui)[typeof defaultLang];
  scale?: number;
}

export const irisRecognitions: Recognition[] = [
  { logo: irisThga, alt: "The Horror Game Awards", text: "rec.iris.thga" },
  { logo: irisEva2026, alt: "EVA 2026", text: "rec.iris.eva2026" },
  { logo: irisGameEffect, alt: "GameEffect Showcase 2026", text: "rec.iris.gameeffect", scale: 1.18 },
  { logo: irisIda, alt: "Indie Dev Argentina", text: "rec.iris.ida" },
];

export const brRecognitions: Recognition[] = [
  { logo: brSteam, alt: "Steam", text: "rec.br.trending" },
  { logo: brSteam, alt: "Steam", text: "rec.br.reviews" },
  { logo: brEva2024, alt: "EVA 2024", text: "rec.br.eva2024" },
  { logo: brVentanaSur, alt: "Ventana Sur", text: "rec.br.ventanasur", scale: 1.18 },
];
