import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
    base: process.env.VITE_BASE_URL ? `${process.env.VITE_BASE_URL}/counter` : "/",
    build: {
      outDir: process.env.COUNTER_DIST,
      minify: false,
      emptyOutDir: true,
    },
    plugins: [react()],
    resolve: {
      alias: {
        src: "/src",
        hooks: "/src/hooks",
        lib: "/src/lib",
      },
    },
  };
});