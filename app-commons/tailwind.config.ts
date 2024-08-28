import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.stories.{js,jsx,ts,tsx},",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
