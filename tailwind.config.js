/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

function generateFontSize([fontSize, lineHeight]) {
  return [
    fontSize,
    {
      lineHeight,
      letterSpacing: "0.04em",
    },
  ];
}

const themeSizes = {
  0: 0,
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "32px",
  8: "40px",
  9: "48px",
  10: "56px",
  11: "64px",
  12: "80px",
  13: "96px",
  14: "112px",
  15: "128px",
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "744px",
      md: "1024px",
      lg: "1280px",
      xl: "1920px",
      "2xl": "2560px",
    },
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
    },
    fontSize: {
      xs: generateFontSize(["14px", "18px"]),
      sm: generateFontSize(["16px", "20px"]),
      md: generateFontSize(["20px", "28px"]),
      lg: generateFontSize(["24px", "32px"]),
      xl: generateFontSize(["32px", "40px"]),
    },
    letterSpacing: {
      normal: "0.04em",
      wide: "0.08em",
    },
    //colors: { ...colors, transparent: "transparent", "blue-overlay": "rgb(4 6 189)" },
    zIndex: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
    },
    extend: {
      height: themeSizes,
      spacing: themeSizes,
      minHeight: themeSizes,
      maxHeight: themeSizes,
      backgroundImage: () => ({
        "login-bg": "url('./src/assets/img/login-bg.jpg')",
        "intro-section-bg": "url('https://placehold.co/500x500/32414b/32414b')",
        "light-bg-placeholder": "url('https://placehold.co/500x500/fceeef/fceeef')",
        "dark-bg-placeholder": "url('https://placehold.co/500x500/cf7317/cf7317')",
        "products-intro-section-bg": "url('https://placehold.co/500x500/616d3c/616d3c')",
        "product-card-bg": "url('./src/assets/img/product-card-bg.jpg')",
        "circle-bg": "url('./src/assets/img/circle.svg')",
      }),
      animation: {
        blink: "blink 1.5s steps(2) infinite",
        "fade-in-bottom": "fade-in-bottom 0.3s ease-out 0.3s normal forwards",
      },
      keyframes: {
        blink: {
          "0%": { opacity: 0 },
        },
        "fade-in-bottom": {
          from: { opacity: 0, transform: "translateY(50%) scale(0.6)" },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
