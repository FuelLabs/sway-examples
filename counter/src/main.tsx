import React, { useMemo } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FuelProvider } from "@fuels/react";
import { coinbaseWallet, walletConnect } from "@wagmi/connectors";
import { http, createConfig, injected } from "@wagmi/core";
import type { Config as WagmiConfig } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";
import { Provider } from "fuels";
import {
  FuelWalletConnector,
  FuelWalletDevelopmentConnector,
  FueletWalletConnector,
  BurnerWalletConnector,
  WalletConnectConnector,
} from "@fuels/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NODE_URL } from "./lib";
// import { ActiveWalletProvider } from "./hooks/useActiveWallet";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { StyledEngineProvider } from "@mui/material";


const queryClient = new QueryClient();

const Root = () => {
  const providerToUse = useMemo(() => Provider.create(NODE_URL), [NODE_URL]);
  return (
    <React.StrictMode>
      <Router>
        <StyledEngineProvider injectFirst>
          <QueryClientProvider client={queryClient}>
            <FuelProvider
              fuelConfig={{
                connectors: [
                  new FuelWalletConnector(),
                  new BurnerWalletConnector({
                    fuelProvider: providerToUse,
                  }),
                  new WalletConnectConnector({
                    fuelProvider: providerToUse,
                  }),
                  new FueletWalletConnector(),
                  new FuelWalletDevelopmentConnector(),
                ],
              }}
            >
              {/* <ActiveWalletProvider> */}
              <App />
              {/* </ActiveWalletProvider> */}
            </FuelProvider>
          </QueryClientProvider>
        </StyledEngineProvider>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
