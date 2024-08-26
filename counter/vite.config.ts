// import react from "@vitejs/plugin-react";
// import vercel from "vite-plugin-vercel";
// import { defineConfig, loadEnv } from "vite";

// // https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     "process.env": env,
//   },
//   base: process.env.COUNTER_BASE_URL,
//   build: {
//     outDir: process.env.COUNTER_DIST,
//   },
//   plugins: [react(), vercel()],
//   // @ts-ignore
//   resolve: {
//     alias: {
//       src: "/src",
//       hooks: "/src/hooks",
//       lib: "/src/lib",
//     },
//   },
// });

import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env,
    },
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
  };
});