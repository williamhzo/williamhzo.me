const plugin = require("tailwindcss/plugin");

const paddingSafe = plugin(({ addUtilities, config, e }) => {
  const paddings = config("theme.padding", {});
  const variants = config("variants.padding", {});

  const utilities = Object.entries(paddings).flatMap(([modifier, size]) => ({
    [`.${e(`p-${modifier}-safe`)}`]: {
      "padding-top": `max(${size}, env(safe-area-inset-top))`,
      "padding-bottom": `max(${size}, env(safe-area-inset-bottom))`,
      "padding-left": `max(${size}, env(safe-area-inset-left))`,
      "padding-right": `max(${size}, env(safe-area-inset-right))`,
    },
    [`.${e(`py-${modifier}-safe`)}`]: {
      "padding-top": `max(${size}, env(safe-area-inset-top))`,
      "padding-bottom": `max(${size}, env(safe-area-inset-bottom))`,
    },
    [`.${e(`px-${modifier}-safe`)}`]: {
      "padding-left": `max(${size}, env(safe-area-inset-left))`,
      "padding-right": `max(${size}, env(safe-area-inset-right))`,
    },
    [`.${e(`pt-${modifier}-safe`)}`]: {
      "padding-top": `max(${size}, env(safe-area-inset-top))`,
    },
    [`.${e(`pr-${modifier}-safe`)}`]: {
      "padding-right": `max(${size}, env(safe-area-inset-right))`,
    },
    [`.${e(`pb-${modifier}-safe`)}`]: {
      "padding-bottom": `max(${size}, env(safe-area-inset-bottom))`,
    },
    [`.${e(`pl-${modifier}-safe`)}`]: {
      "padding-left": `max(${size}, env(safe-area-inset-left))`,
    },
  }));

  addUtilities(utilities, variants);
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Lusitana", "serif"],
    },
    extend: {
      colors: {
        background: "#151718",
        primary: "#a5f3fc",
        "high-contrast": "#e0f2fe", // sky-100
        contrast: "#9BA1A5",
        "low-contrast": "#687176",
        "lowest-contrast": "#4C5155",
        subtle: "#313538",
      },
      spacing: {
        tight: "0.75rem",
        base: "1.5rem",
      },
      keyframes: {
        "slide-down": {
          from: { height: 0, opacity: 0 },
          to: { height: "var(--radix-accordion-content-height)", opacity: 1 },
        },
        "slide-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: 1 },
          to: { height: 0, opacity: 0 },
        },
        "text-shimmer": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        "slide-up-and-fade": {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-right-and-fade": {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-down-and-fade": {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-and-fade": {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-up": "slide-up 0.3s ease-in-out forwards",
        "slide-down": "slide-down 0.3s ease-in-out forwards",
        "text-shimmer": "text-shimmer 2.75s ease-out infinite alternate",
        "slide-up-and-fade":
          "slide-up-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-right-and-fade":
          "slide-right-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-down-and-fade":
          "slide-down-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-left-and-fade":
          "slide-left-and-fade 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-radix")(), paddingSafe],
};
