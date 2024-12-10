import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    plugins: [TanStackRouterVite(), react()],
    base: process.env.VITE_BASE_URL
      ? `${process.env.VITE_BASE_URL}/airdrop`
      : "/",
    build: {
      outDir: process.env.AIRDROP_DIST,
      minify: false,
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        src: "/src",
        hooks: "/src/hooks",
        lib: "/src/lib",
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
