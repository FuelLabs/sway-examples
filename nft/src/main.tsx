import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";

import { App } from "./App";
import { AppProvider } from "./components/Provider";
import { Toaster } from "react-hot-toast";
import { OnboardingFlow } from "sway-examples-commons";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <Toaster />
      <OnboardingFlow container={() => document.getElementById("root")} />
      <App />
    </AppProvider>
  </React.StrictMode>
);
