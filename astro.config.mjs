import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://mechanikoi.com.ar",
  // English moved to the root; keep old links alive
  redirects: {
    "/en": "/",
  },
});
