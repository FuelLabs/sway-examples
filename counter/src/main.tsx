import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./components/Provider";
import { Toaster } from "react-hot-toast";
import { OnboardingFlow } from "sway-example-commons";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <Toaster position="bottom-center" />
      <OnboardingFlow welcomeMessage={<div>Welcome to the Sway counter app!</div>} container={() => document.getElementById("root")} />
      <App />
    </AppProvider>
  </React.StrictMode>
);
