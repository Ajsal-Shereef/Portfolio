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
        background: "#1c1917",
        foreground: "#f5f5f4",
        muted: "#a8a29e",
        surface: {
          DEFAULT: "#292524",
          elevated: "#44403c",
        },
        accent: {
          DEFAULT: "#d4a574",
          muted: "#b45309",
          soft: "#292524",
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
