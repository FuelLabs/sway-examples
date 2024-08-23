import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  //root: "../",
  base: "./",
  // build: {
  //   outDir: process.env.NFT_DIST,
  //   minify: false,
  // },
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
