import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { OnboardingFlow } from "sway-example-commons";
import { Toaster } from "react-hot-toast";

import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "./components/theme-provider";
import { VITE_BASE_URL } from "./lib";
import { AppProvider } from "./components/Provider";

// Create a new router instance
const router = createRouter({
  basepath: VITE_BASE_URL,
  routeTree,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      {/* <AppProvider> */}
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <Toaster position="bottom-center" /> */}
      {/* <OnboardingFlow welcomeMessage={<div>Welcome to the Airdrop!</div>} container={() => document.getElementById("root")} /> */}
        <RouterProvider router={router} />
      </ThemeProvider>
      {/* </AppProvider> */}
    </StrictMode>
  );
}
