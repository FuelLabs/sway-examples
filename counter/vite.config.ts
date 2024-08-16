import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.COUNTER_BASE_URL,
  build: {
    outDir: process.env.COUNTER_DIST,
  },
  plugins: [react(), vercel()],
  // @ts-ignore
  resolve: {
    alias: {
      src: "/src",
      hooks: "/src/hooks",
      lib: "/src/lib",
    },
  },
});
