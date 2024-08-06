import toast, { Toaster } from "react-hot-toast";
import { Link } from "./Link";
import { Button } from "./Button";
import { CURRENT_ENVIRONMENT, NODE_URL } from "src/lib";
import { WalletDisplay } from "./WalletDisplay";
import { useActiveWallet } from "hooks/useActiveWallet";
import { useFaucet } from "hooks/useFaucet";
import { ConnectButton } from "./ConnectButton";
import { NavMenu } from "./NavMenu";
import { NFTRoutes } from "src/routes";
import { ExternalFaucet } from "./ExternalFaucet";
import { useBreakpoints } from "hooks/useBreakpoints";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { OnboardingFlow } from "app-commons";

import { faucetUrl } from "src/utils/url";
import { useOnboardingFlowContext } from "app-commons";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { faucetWallet } = useFaucet();
  const { wallet, network, walletBalance, refetchBalance, isConnected } =
    useActiveWallet();
  const { isTablet, isMobile } = useBreakpoints();
  const navigate = useNavigate();
  const [hasOpenedFaucetPage, setHasOpenedFaucetPage] = useState(false);
  const [hasRedirectedAfterFaucet, setHasRedirectedAfterFaucet] =
    useState(false);

  const { openDialog } = useOnboardingFlowContext();

  const TOP_UP_AMOUNT = 100_000_000;

  const topUpWallet = async () => {
    if (!wallet) {
      return console.error("Unable to topup wallet because wallet is not set.");
    }

    if (CURRENT_ENVIRONMENT === "local") {
      if (!faucetWallet) {
        return toast.error("Faucet wallet not found.");
      }

      const tx = await faucetWallet?.transfer(wallet.address, TOP_UP_AMOUNT);
      await tx?.waitForResult();

      toast.success("Wallet topped up!");
    }

    if (CURRENT_ENVIRONMENT === "testnet" && !isTablet) {
      navigate(NFTRoutes.faucet);
    }
    await refetchBalance();
  };

  const showTopUpButton = walletBalance?.lt(TOP_UP_AMOUNT);
  const showAddNetworkButton = wallet && network && network?.url !== NODE_URL;

  const tryToAddNetwork = () => {
    toast(
      `Please add the network ${NODE_URL} to your Fuel wallet, or swtich to it if you have it already, and refresh the page.`
    );
  };

  // useEffect(() => {
  //   if (isConnected && walletBalance?.eq(0) && !hasOpenedFaucetPage) {
  //     setHasOpenedFaucetPage(true);
  //     if (isTablet) {
  //       window.open(faucetUrl(wallet?.address.toString()), "_blank");
  //     } else {
  //       navigate(NFTRoutes.faucet);
  //     }
  //   }
  // }, [isConnected, walletBalance, isTablet]);

  // useEffect(() => {
  //   if (
  //     walletBalance &&
  //     isConnected &&
  //     !walletBalance.eq(0) &&
  //     hasOpenedFaucetPage &&
  //     !hasRedirectedAfterFaucet
  //   ) {
  //     setHasRedirectedAfterFaucet(true);
  //     navigate(NFTRoutes.explore);
  //   }
  // }, [isConnected, walletBalance]);

  return (
    <>
      <Toaster />
      <OnboardingFlow container={() => document.getElementById("root")} />
      <div className={`flex flex-col w-full ${openDialog && "fixed"}`}>
        <nav
          className="flex justify-between items-center p-4 bg-black text-white gap-2 lg:gap-6 gradient-border
            bg-gradient-to-b
            from-zinc-900
            to-zinc-950/80"
        >
          {!isMobile && (
            <>
              <Link href={NFTRoutes.explore}>Explore</Link>

              <Link href={NFTRoutes.create}>Create</Link>

              <Link href={NFTRoutes.collection}>My Account</Link>
            </>
          )}

          {showAddNetworkButton && (
            <Button onClick={tryToAddNetwork} className="bg-red-500 text-white">
              Wrong Network
            </Button>
          )}

          <div className="ml-auto">
            <WalletDisplay />
          </div>

          {!isMobile ? (
            <>
              {showTopUpButton && (
                <ExternalFaucet address={wallet?.address.toString()}>
                  <Button onClick={() => topUpWallet()}>Faucet</Button>
                </ExternalFaucet>
              )}

              <ConnectButton />
            </>
          ) : (
            <NavMenu address={wallet?.address.toString()} />
          )}
        </nav>

        <div className="min-h-screen items-center p-8 lg:p-24 flex flex-col gap-6">
          {children ?? <Outlet />}
        </div>
      </div>
    </>
  );
};
