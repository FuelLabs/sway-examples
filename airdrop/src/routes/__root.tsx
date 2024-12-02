/* eslint-disable react-hooks/rules-of-hooks */
import { DEFAULT_WAGMI_CONFIG } from "@/config/config";
import {
  BurnerWalletConnector,
  FuelWalletConnector,
  FuelWalletDevelopmentConnector,
  FueletWalletConnector,
  WalletConnectConnector,
} from "@fuels/connectors";
import { FuelProvider, type NetworkConfig, type UIConfig } from "@fuels/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { coinbaseWallet, walletConnect } from "@wagmi/connectors";
import type { Config as WagmiConfig } from "@wagmi/core";
import { createConfig, http, injected } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";
import { CHAIN_IDS, Provider } from "fuels";
import { useEffect, useMemo, useState } from "react";
import { OnboardingFlowProvider } from "sway-example-commons";
import { Layout } from "../components/Layout";
import { ActiveWalletProvider } from "../hooks/useActiveWallet";
import { NODE_URL, WC_PROJECT_ID } from "../lib";

/**
 * react-query is a peer dependency of @fuels/react, so we set it up here.
 * See https://docs.fuel.network/docs/wallet/dev/getting-started/#installation-1
 */
const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => {
    const [isMounted, setIsMounted] = useState(false);

    /**
     * Create a Provider instance.
     * We memoize it to avoid creating a new instance on every render.
     */
    const providerToUse = useMemo(() => Provider.create(NODE_URL), []);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    // Only render the component if the page has been mounted.
    if (!isMounted) return null;

    const UI_CONFIG: UIConfig = { suggestBridge: false };

    const METADATA = {
      name: "Airdrop App",
      description: "Airdrop Assets to multiple addresses",
      url: location.href,
      icons: ["https://connectors.fuel.network/logo_white.png"],
    };

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

    const NETWORKS_ONLY_CURRENT: NetworkConfig[] = [
      {
        url: "https://testnet.fuel.network/v1/graphql",
        chainId: CHAIN_IDS.fuel.testnet,
      },
    ];

    return (
      <>
        <QueryClientProvider client={queryClient}>
          <FuelProvider
            fuelConfig={{
              connectors: [
                new FuelWalletConnector(),
                new FueletWalletConnector(),
                new WalletConnectConnector({
                  fuelProvider: providerToUse,
                  wagmiConfig: DEFAULT_WAGMI_CONFIG,
                  projectId: WC_PROJECT_ID,
                }),
                new FuelWalletDevelopmentConnector(),
                new BurnerWalletConnector({ fuelProvider: providerToUse }),
              ],
            }}
            uiConfig={UI_CONFIG}
            networks={NETWORKS_ONLY_CURRENT}
          >
            <ActiveWalletProvider>
              <OnboardingFlowProvider>
                <Layout>
                  <Outlet />
                </Layout>
              </OnboardingFlowProvider>
            </ActiveWalletProvider>
          </FuelProvider>
        </QueryClientProvider>
      </>
    );
  },
});
