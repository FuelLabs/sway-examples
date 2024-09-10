import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./components/Provider";
import { Toaster } from "react-hot-toast";
import { OnboardingFlow } from "app-commons";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <Toaster position="bottom-center" />
      <OnboardingFlow welcomMessage={<div>Welcome to the Sway counter app!</div>} container={() => document.getElementById("root")} />
      <App />
    </AppProvider>
  </React.StrictMode>
);
