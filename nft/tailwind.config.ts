import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./node_modules/app-commons/src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/app-commons/tailwind.config.ts",
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  important: "#root",
  theme: {
    fontFamily: {
      sans: ['sans-serif']
    },
  },
  plugins: [],
};
export default config;
