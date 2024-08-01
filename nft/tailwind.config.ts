import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "../app-commmons/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../app-commmons/tailwind.config.ts"
  ],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  theme: {
    fontFamily: {
      sans: ['sans-serif']
    },
  },
  plugins: [],
};
export default config;
