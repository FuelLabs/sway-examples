/* eslint-disable react-hooks/rules-of-hooks */
import {
  BakoSafeConnector,
  BurnerWalletConnector,
  FueletWalletConnector,
  FuelWalletConnector,
  FuelWalletDevelopmentConnector,
  SolanaConnector,
  WalletConnectConnector,
} from "@fuels/connectors";
import { FuelProvider } from "@fuels/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Provider } from "fuels";
import { useEffect, useMemo, useState } from "react";
import { Layout } from "../components/Layout";
import { NODE_URL, WC_PROJECT_ID } from "../lib";
import { useTheme } from "@/components/theme-provider";
import { http, createConfig, injected } from "@wagmi/core";
import type { Config as WagmiConfig } from "@wagmi/core";
import { mainnet, sepolia } from "@wagmi/core/chains";
import { coinbaseWallet, walletConnect } from "@wagmi/connectors";
import type { WalletConnectConnectorConfig } from "@fuels/connectors";

/**
 * react-query is a peer dependency of @fuels/react, so we set it up here.
 * See https://docs.fuel.network/docs/wallet/dev/getting-started/#installation-1
 */
const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => {
    const [isMounted, setIsMounted] = useState(false);
    const { theme } = useTheme();

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

    // ============================================================
    // WalletConnect Connector configurations
    // https://docs.walletconnect.com/web3modal/javascript/about
    // ============================================================
    const METADATA = {
      name: "Airdrop Dapp",
      description: "Deploy and airdrop SRC20 tokens",
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

    const walletConnectConfig: WalletConnectConnectorConfig = {
      fuelProvider: providerToUse,
      projectId: WC_PROJECT_ID,
      wagmiConfig: wagmiConfig,
    };

    return (
      <>
        <QueryClientProvider client={queryClient}>
          <FuelProvider
            theme={theme === "dark" ? "dark" : "light"}
            fuelConfig={{
              /**
               * The list of wallet connectors.
               * You can add or remove connectors from here based on your needs.
               * See https://wallet.fuel.network/docs/dev/connectors/
               */
              connectors: [
                new FuelWalletConnector(),
                new BurnerWalletConnector({
                  fuelProvider: providerToUse,
                }),
                new WalletConnectConnector(walletConnectConfig),
                new BakoSafeConnector(),
                new FueletWalletConnector(),
                new FuelWalletDevelopmentConnector(),
                new SolanaConnector({
                  fuelProvider: providerToUse,
                }),
              ],
            }}
          >
            <Layout>
              <Outlet />
            </Layout>
          </FuelProvider>
        </QueryClientProvider>
      </>
    );
  },
});
