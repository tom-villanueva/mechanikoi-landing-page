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
      typography: ({ theme }) => ({
        mechanikoi: {
          css: {
            "--tw-prose-body": theme("colors.secondary"),
            "--tw-prose-headings": theme("colors.primary"),
            "--tw-prose-lead": theme("colors.secondary"),
            "--tw-prose-links": theme("colors.primary"),
            "--tw-prose-bold": theme("colors.primary"),
            "--tw-prose-counters": theme("colors.secondary"),
            "--tw-prose-bullets": theme("colors.secondary"),
            "--tw-prose-hr": theme("colors.secondary"),
            "--tw-prose-quotes": theme("colors.primary"),
            "--tw-prose-quote-borders": theme("colors.secondary"),
            "--tw-prose-captions": theme("colors.secondary"),
            "--tw-prose-code": theme("colors.primary"),
            "--tw-prose-pre-code": theme("colors.secondary"),
            "--tw-prose-pre-bg": theme("colors.primary"),
            "--tw-prose-th-borders": theme("colors.secondary"),
            "--tw-prose-td-borders": theme("colors.secondary"),
            "--tw-prose-invert-body": theme("colors.secondary"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.secondary"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.secondary"),
            "--tw-prose-invert-bullets": theme("colors.secondary"),
            "--tw-prose-invert-hr": theme("colors.secondary"),
            "--tw-prose-invert-quotes": theme("colors.secondary"),
            "--tw-prose-invert-quote-borders": theme("colors.secondary"),
            "--tw-prose-invert-captions": theme("colors.secondary"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.secondary"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.secondary"),
            "--tw-prose-invert-td-borders": theme("colors.secondary"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
