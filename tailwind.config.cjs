/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Play", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#05F440",
        secondary: "#739B6E",
        blackish: "#141E12",
        detail: "#1F361D",
      },
      animation: {
        spin: "spin 20s linear infinite",
      },
      dropShadow: {
        sm: [
          "0 0px 20px rgba(5,244, 64, 0.25)",
          //"0 0px 65px rgba(115, 155,110, 0.2)",
        ],
      },
    },
  },
  plugins: [],
};
