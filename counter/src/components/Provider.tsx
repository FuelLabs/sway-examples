import { FuelProvider } from "@fuels/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "fuels";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  FuelWalletConnector,
  FuelWalletDevelopmentConnector,
  FueletWalletConnector,
  BurnerWalletConnector,
  WalletConnectConnector,
} from "@fuels/connectors";
import { StyledEngineProvider } from "@mui/material";

import { NODE_URL } from "../lib";
import { OnboardingFlowProvider } from "app-commons";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => {
    return new QueryClient({});
  });
  const [currentProvider] = useState(Provider.create(NODE_URL));

  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <FuelProvider
            fuelConfig={{
              connectors: [
                new FuelWalletConnector(),
                new FueletWalletConnector(),
                new FuelWalletDevelopmentConnector(),
                new BurnerWalletConnector({ fuelProvider: currentProvider }),
              ],
            }}
          >
            <OnboardingFlowProvider>{children}</OnboardingFlowProvider>
          </FuelProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  );
};
