import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

console.log(`process.env.VITE_BASE_URL`, process.env.VITE_BASE_URL);

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_URL,
  build: {
    outDir: process.env.NFT_DIST,
    minify: false,
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      hooks: "/src/hooks",
      lib: "/src/lib",
    },
  },
});
