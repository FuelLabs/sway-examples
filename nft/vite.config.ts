import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NFT_BASE_URL,
  build: {
    outDir: process.env.NFT_DIST,
  },
  plugins: [react(), vercel()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      hooks: "/src/hooks",
      lib: "/src/lib",
    },
  },
});
