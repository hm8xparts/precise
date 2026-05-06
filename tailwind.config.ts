import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        precise: {
          navy: "#1B2C5C",
          "navy-dark": "#142147",
          blue: "#3F5891",
          gray: "#6B6E72",
          green: "#22C55E",
          "green-dark": "#16A34A",
          ink: "#0F1730",
          "off-white": "#F4F5F7",
          "line": "#E3E5EA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      backgroundImage: {
        "precise-grid":
          "linear-gradient(to right, rgba(27,44,92,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(27,44,92,0.06) 1px, transparent 1px)",
        "precise-grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "48px 48px",
        "grid-sm": "32px 32px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,23,48,0.04), 0 4px 16px rgba(15,23,48,0.06)",
        "card-hover": "0 2px 4px rgba(15,23,48,0.06), 0 12px 32px rgba(15,23,48,0.10)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
