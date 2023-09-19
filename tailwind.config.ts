import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FBBF24",
        white: "#FFFFFF",
        black: "#010101",
        grey: "#6B7280",
        lightgray: "#E9EDF0",
        darkgray: "#111827",
        pink: "#BE185D",
        green: "#059669",
        blue: "#3B82F6",
        orange: "#B45309",
        red: "#B91C1C",
        whatsapp: "#27C34B",
        telegram: "#1086C2",
        linkedin: "#0077B5",
        twitter: "#1C99E6",
        instagram: "#AD3288",
        github: "#000000",
        gitlab: "#DC4128",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme("fontSize.7xl") },
        h2: { fontSize: theme("fontSize.4xl") },
        h3: { fontSize: theme("fontSize.lg") },
      });
    }),
  ],
};
export default config;
