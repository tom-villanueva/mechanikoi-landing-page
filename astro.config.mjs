import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://mechanikoi.com.ar",
  // Old /en links are 301'd to the root in public/.htaccess
});
