import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/globals.css";

import { App } from "./App";
import { AppProvider } from "./components/Provider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
