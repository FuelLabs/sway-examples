import { useEffect, useState, createContext, useContext } from "react";
import { useBrowserWallet } from "./useBrowserWallet";
import { useBurnerWallet } from "./useBurnerWallet";
import { AppWallet } from "../lib";
import {
  useWallet,
  useIsConnected,
  useNetwork,
  useBalance,
} from "@fuels/react";

/**
 * burner -> a burner wallet embedded inside of the template app and stored in local storage
 * browser -> a wallet connected via a browser extension like the Fuel Wallet
 *
 * Whenever a browser wallet is connected, this hook will return an instance of the browser wallet.
 * Otherwise, it will return an instance of a local burner wallet.
 */
type WalletTypes = "burner" | "browser";

const ActiveWalletContext = createContext<AppWallet>({});

export const ActiveWalletProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeWallet, setActiveWallet] = useState<WalletTypes>("burner");
  const {
    wallet: burnerWallet,
    walletBalance: burnerWalletBalance,
    refreshWalletBalance: refreshBurnerWalletBalance,
  } = useBurnerWallet();
  const {
    wallet: browserWallet,
    walletBalance: browserWalletBalance,
    refreshWalletBalance: refreshBrowserWalletBalance,
    isConnected: isBrowserWalletConnected,
  } = useBrowserWallet();

  useEffect(() => {
    if (isBrowserWalletConnected) {
      setActiveWallet("browser");
      refreshBrowserWalletBalance?.();
    } else {
      setActiveWallet("burner");
      refreshBurnerWalletBalance?.();
    }
  }, [isBrowserWalletConnected]);

  const value = {
    wallet: activeWallet === "browser" ? browserWallet : burnerWallet,
    walletBalance:
      activeWallet === "browser" ? browserWalletBalance : burnerWalletBalance,
    refreshWalletBalance:
      activeWallet == "browser"
        ? refreshBrowserWalletBalance
        : refreshBurnerWalletBalance,
  };

  return (
    <ActiveWalletContext.Provider value={value}>
      {children}
    </ActiveWalletContext.Provider>
  );
};

export const useActiveWalletOld = (): AppWallet =>
  useContext(ActiveWalletContext);

export const useActiveWallet = () => {
  const { wallet, isLoading: isWalletLoading } = useWallet();
  const { balance, refetch } = useBalance({
    address: wallet?.address.toB256(),
  });
  const { isConnected, isLoading: isConnectedLoading } = useIsConnected();
  const { network } = useNetwork();

  return {
    wallet,
    walletBalance: balance,
    refetchBalance: refetch,
    isPending: isWalletLoading || isConnectedLoading,
    isConnected,
    network,
  };
};
