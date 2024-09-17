import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";

import { App } from "./App";
import { Text } from "./components/Text";
import { AppProvider } from "./components/Provider";
import { Toaster } from "react-hot-toast";
import { OnboardingFlow } from "sway-example-commons";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <Toaster />
      <OnboardingFlow
        welcomeMessage={<Text>Welcome to Fuel NFT!</Text>}
        container={() => document.getElementById("root")}
      />
      <App />
    </AppProvider>
  </React.StrictMode>
);
