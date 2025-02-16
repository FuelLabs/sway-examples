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
import { NODE_URL } from "../lib";

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
    const providerToUse = useMemo(() => Provider.create(NODE_URL), [NODE_URL]);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    // Only render the component if the page has been mounted.
    if (!isMounted) return null;

    return (
      <>
        <QueryClientProvider client={queryClient}>
          <FuelProvider
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
                new WalletConnectConnector({
                  fuelProvider: providerToUse,
                }),
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
