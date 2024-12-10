// vite.config.ts
import path from "path";
import { defineConfig, loadEnv } from "file:///Users/nazeeh/code/sway-examples/airdrop/node_modules/vite/dist/node/index.js";
import react from "file:///Users/nazeeh/code/sway-examples/airdrop/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { TanStackRouterVite } from "file:///Users/nazeeh/code/sway-examples/airdrop/node_modules/@tanstack/router-plugin/dist/esm/vite.js";
var __vite_injected_original_dirname = "/Users/nazeeh/code/sway-examples/airdrop";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env
    },
    plugins: [TanStackRouterVite(), react()],
    base: process.env.VITE_BASE_URL ? `${process.env.VITE_BASE_URL}/airdrop` : "/",
    build: {
      outDir: process.env.AIRDROP_DIST,
      minify: false,
      emptyOutDir: true
    },
    resolve: {
      alias: {
        src: "/src",
        hooks: "/src/hooks",
        lib: "/src/lib",
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbmF6ZWVoL2NvZGUvc3dheS1leGFtcGxlcy9haXJkcm9wXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbmF6ZWVoL2NvZGUvc3dheS1leGFtcGxlcy9haXJkcm9wL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9uYXplZWgvY29kZS9zd2F5LWV4YW1wbGVzL2FpcmRyb3Avdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XG5pbXBvcnQgeyBUYW5TdGFja1JvdXRlclZpdGUgfSBmcm9tIFwiQHRhbnN0YWNrL3JvdXRlci1wbHVnaW4vdml0ZVwiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCksIFwiXCIpO1xuICByZXR1cm4ge1xuICAgIGRlZmluZToge1xuICAgICAgXCJwcm9jZXNzLmVudlwiOiBlbnYsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbVGFuU3RhY2tSb3V0ZXJWaXRlKCksIHJlYWN0KCldLFxuICAgIGJhc2U6IHByb2Nlc3MuZW52LlZJVEVfQkFTRV9VUkxcbiAgICAgID8gYCR7cHJvY2Vzcy5lbnYuVklURV9CQVNFX1VSTH0vYWlyZHJvcGBcbiAgICAgIDogXCIvXCIsXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogcHJvY2Vzcy5lbnYuQUlSRFJPUF9ESVNULFxuICAgICAgbWluaWZ5OiBmYWxzZSxcbiAgICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgc3JjOiBcIi9zcmNcIixcbiAgICAgICAgaG9va3M6IFwiL3NyYy9ob29rc1wiLFxuICAgICAgICBsaWI6IFwiL3NyYy9saWJcIixcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFMsT0FBTyxVQUFVO0FBQzNULFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU8sV0FBVztBQUNsQixTQUFTLDBCQUEwQjtBQUhuQyxJQUFNLG1DQUFtQztBQU16QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sZUFBZTtBQUFBLElBQ2pCO0FBQUEsSUFDQSxTQUFTLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDO0FBQUEsSUFDdkMsTUFBTSxRQUFRLElBQUksZ0JBQ2QsR0FBRyxRQUFRLElBQUksYUFBYSxhQUM1QjtBQUFBLElBQ0osT0FBTztBQUFBLE1BQ0wsUUFBUSxRQUFRLElBQUk7QUFBQSxNQUNwQixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsS0FBSztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
