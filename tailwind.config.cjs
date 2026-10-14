/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Play", ...defaultTheme.fontFamily.sans],
        display: ['"IM Fell English"', ...defaultTheme.fontFamily.serif],
        type: ['"Special Elite"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        primary: "#05F440",
        secondary: "#739B6E",
        blackish: "#141E12",
        detail: "#1F361D",
        // Iris Dissolution palette: rainy night, fog, title bone, inventory ice, tablecloth red
        night: "#0D1B1E",
        deep: "#15292D",
        fog: "#A3B8B4",
        bone: "#ECE6D6",
        ice: "#7FD3E6",
        blood: "#B8323A",
        // Theme tokens for shared chrome (header, footer, picker); values set per html[data-theme] in Layout
        page: "rgb(var(--c-page) / <alpha-value>)",
        raised: "rgb(var(--c-raised) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",
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
      typography: ({ theme }) => ({
        mechanikoi: {
          css: {
            "--tw-prose-body": theme("colors.fog"),
            "--tw-prose-headings": theme("colors.bone"),
            "--tw-prose-lead": theme("colors.fog"),
            "--tw-prose-links": theme("colors.bone"),
            "--tw-prose-bold": theme("colors.bone"),
            "--tw-prose-counters": theme("colors.fog"),
            "--tw-prose-bullets": theme("colors.fog"),
            "--tw-prose-hr": "rgb(163 184 180 / 0.2)",
            "--tw-prose-quotes": theme("colors.bone"),
            "--tw-prose-quote-borders": theme("colors.ice"),
            "--tw-prose-captions": theme("colors.fog"),
            "--tw-prose-code": theme("colors.bone"),
            "--tw-prose-pre-code": theme("colors.fog"),
            "--tw-prose-pre-bg": theme("colors.deep"),
            "--tw-prose-th-borders": theme("colors.fog"),
            "--tw-prose-td-borders": theme("colors.deep"),
            "h1, h2, h3, h4": {
              fontFamily: theme("fontFamily.display").join(", "),
              fontWeight: "400",
            },
            a: {
              textDecorationColor: "rgb(127 211 230 / 0.6)",
              textUnderlineOffset: "6px",
            },
            "a:hover": {
              textDecorationColor: theme("colors.ice"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
