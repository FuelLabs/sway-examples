import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
  theme: {
    fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['GeistMono', 'monospace'],
    },
  },
  plugins: [],
};
export default config;
