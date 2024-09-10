import React, { useMemo } from "react";
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
      <OnboardingFlow container={() => document.getElementById("root")} />
      <App />
    </AppProvider>
  </React.StrictMode>
);
