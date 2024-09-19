/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./node_modules/sway-example-commons/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/sway-example-commons/tailwind.config.ts",
  ],
  theme: {
    // darkMode: 'selector',
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'fuel-green': '#009d5a',
        background: 'var(--background-color)',
        'text-primary': 'var(--text-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        buttontransition: 'var(--button-transition-background-color)',
      },
    },
  },
  plugins: [],
}

