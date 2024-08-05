import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  //root: "../",
  // base: process.env.NFT_BASE_URL,
  // build: {
  //   outDir: process.env.NFT_DIST,
  //   minify: false,
  // },
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
