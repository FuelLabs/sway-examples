import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./node_modules/app-commons/src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/app-commons/tailwind.config.ts",
  ],
  important: "#root",
  corePlugins: {
    preflight: false,
  },
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["GeistMono", "monospace"],
    },
    extend: {
      colors: {
        //   "fuel-green": "#009d5a",
        //   background: "var(--background-color)",
        "text-primary": "var(--text-color)",
        //   primary: "var(--primary-color)",
        //   secondary: "var(--secondary-color)",
      },
    },
  },
  plugins: [],
};
export default config;
