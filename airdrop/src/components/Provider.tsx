import { FuelProvider } from "@fuels/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "fuels";
import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";

import {
  BurnerWalletConnector,
  FuelWalletConnector,
  FuelWalletDevelopmentConnector,
  FueletWalletConnector,
  WalletConnectConnector,
} from "@fuels/connectors";
import { StyledEngineProvider } from "@mui/material";
import { coinbaseWallet, walletConnect } from "@wagmi/connectors";
import type { Config as WagmiConfig } from "@wagmi/core";
import { createConfig, http, injected } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";

import { NODE_URL, WC_PROJECT_ID } from "src/lib";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => {
    return new QueryClient({});
  });
  const [currentProvider] = useState(Provider.create(NODE_URL));
  
  // ============================================================
  // WalletConnect Connector configurations
  // https://docs.walletconnect.com/web3modal/javascript/about
  // ============================================================
  const METADATA = {
    name: "NFT App",
    description: "View and collect NFTs",
    url: location.href,
    icons: ["https://connectors.fuel.network/logo_white.png"],
  };
  // NOTE: we do not have ssr: true
  // Bc there is a bug in the connector
  // https://github.com/FuelLabs/fuel-connectors/issues/134
  const wagmiConfig: WagmiConfig = createConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
    connectors: [
      injected({ shimDisconnect: false }),
      walletConnect({
        projectId: WC_PROJECT_ID,
        metadata: METADATA,
        showQrModal: false,
      }),
      coinbaseWallet({
        appName: METADATA.name,
        appLogoUrl: METADATA.icons[0],
        darkMode: true,
        reloadOnDisconnect: true,
      }),
    ],
  });

  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <FuelProvider
              fuelConfig={{
                connectors: [
                  new FuelWalletConnector(),
                  new FueletWalletConnector(),
                  new WalletConnectConnector({
                    fuelProvider: currentProvider,
                    // @ts-expect-error will fix it once the build succeeds
                    wagmiConfig,
                    projectId: WC_PROJECT_ID,
                  }),
                  new FuelWalletDevelopmentConnector(),
                  new BurnerWalletConnector({ fuelProvider: currentProvider }),
                ],
              }}
            >
              {/* <OnboardingFlowProvider> */}
                {children}
                {/* </OnboardingFlowProvider> */}
            </FuelProvider>
          </QueryClientProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  );
};