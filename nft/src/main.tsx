import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";

import { App } from "./App";
import { AppProvider } from "./components/Provider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <Toaster />
      <App />
    </AppProvider>
  </React.StrictMode>
);
