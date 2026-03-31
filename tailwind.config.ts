import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#020617",
        foreground: "#e5e7eb",
        accent: {
          DEFAULT: "#38bdf8",
          soft: "#0f172a",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;
