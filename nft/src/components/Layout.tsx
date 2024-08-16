import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
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
import ExploreIcon from '@mui/icons-material/ExploreOutlined';
import AddBoxIcon from '@mui/icons-material/AddBoxOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';

import { faucetUrl } from "src/utils/url";
import { BrandBackgroundBlur } from "./BrandBackgroundBlur";
import { FuelLogo } from "./FuelLogo";

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { faucetWallet } = useFaucet();
  const { wallet, network, walletBalance, refetchBalance, isConnected } =
    useActiveWallet();
  const { isTablet, isMobile } = useBreakpoints();
  const navigate = useNavigate();
  const [hasOpenedFaucetPage, setHasOpenedFaucetPage] = useState(false);
  const [hasRedirectedAfterFaucet, setHasRedirectedAfterFaucet] =
    useState(false);

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

  useEffect(() => {
    if (isConnected && walletBalance?.eq(0) && !hasOpenedFaucetPage) {
      setHasOpenedFaucetPage(true);
      if (isTablet) {
        window.open(faucetUrl(wallet?.address.toString()), "_blank");
      } else {
        navigate(NFTRoutes.faucet);
      }
    }
  }, [isConnected, walletBalance, isTablet]);

  useEffect(() => {
    if (
      walletBalance &&
      isConnected &&
      !walletBalance.eq(0) &&
      hasOpenedFaucetPage &&
      !hasRedirectedAfterFaucet
    ) {
      setHasRedirectedAfterFaucet(true);
      navigate(NFTRoutes.explore);
    }
  }, [isConnected, walletBalance]);

  return (
    <div>
      <header className="w-full sticky top-0 z-10 bg-gradient">
        <nav className="max-w-[1780px] mx-auto">
          <div className="flex justify-between items-center gap-2 lg:gap-6 py-4 px-8">
            <FuelLogo size={32} showLettering />

            {!isMobile && (
              <>
                <NavLink to={NFTRoutes.explore}>
                  <ExploreIcon fontSize="inherit" /> Explore
                </NavLink>
                <NavLink to={NFTRoutes.create}>
                  <AddBoxIcon fontSize="inherit" /> Create
                </NavLink> 
                <NavLink to={NFTRoutes.collection}>
                  <AccountCircleIcon fontSize="inherit" /> My Account
                </NavLink>
              </>
            )}

            {showAddNetworkButton && (
              <Button onClick={tryToAddNetwork} className="bg-red-500">
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
          </div>
        </nav>
      </header>

      <main className="w-full max-w-[1780px] mt-8 pb-8 mx-auto">
        <div className="bg-content bg-gradient mx-8">
          <BrandBackgroundBlur />

          <div className="max-w-[840px] mx-auto mt-14 px-4">
            {children ?? <Outlet />}
          </div>
        </div>
      </main>
    </div>
  );
};

