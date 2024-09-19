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
import { useBreakpoints } from "hooks/useBreakpoints";
import { Outlet, useNavigate } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/ExploreOutlined";
import AddBoxIcon from "@mui/icons-material/AddBoxOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import { ThemeToggle } from "sway-example-commons";
import { useState, useEffect } from "react";

import { BrandBackgroundBlur } from "./BrandBackgroundBlur";
import { FuelLogo } from "./FuelLogo";

const TOP_UP_AMOUNT = 100_000_000;

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { faucetWallet } = useFaucet();
  const { wallet, network, walletBalance, refetchBalance } = useActiveWallet();
  const { isTablet } = useBreakpoints();
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

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
      navigate(NFTRoutes.faucet, { state: { redirectUrl: location.pathname } });
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

  return (
    <div>
      <header className="w-full sticky top-0 z-10 bg-gradient-header-light dark:bg-gradient-header">
        <nav className="max-w-[1780px] mx-auto">
          <div className="flex items-center gap-2 lg:gap-6 py-4 px-8">
            <div className="block md:hidden">
              <NavMenu />
            </div>

            <FuelLogo size={32} showLettering />

            <div className="hidden md:flex flex-row items-center gap-2 grow">
              <NavLink to={NFTRoutes.explore} end>
                <ExploreIcon fontSize="inherit" /> Explore
              </NavLink>
              <NavLink to={NFTRoutes.create}>
                <AddBoxIcon fontSize="inherit" /> Create
              </NavLink>
              <NavLink to={NFTRoutes.collection} end>
                <AccountCircleIcon fontSize="inherit" /> My Account
              </NavLink>
            </div>

            {showAddNetworkButton && (
              <Button onClick={tryToAddNetwork} className="bg-red-500">
                Wrong Network
              </Button>
            )}

            <div className="ml-auto hidden lg:block">
              <WalletDisplay />
            </div>

            <div className="ml-auto flex items-center justify-around sm:justify-between w-52">
              <ConnectButton
                showTopUpButton={!!showTopUpButton}
                onTopUp={topUpWallet}
              />
              <ThemeToggle
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
              />
            </div>
          </div>
        </nav>
      </header>

      <main className="w-full max-w-[1780px] mt-8 pb-8 mx-auto">
        <div className="bg-content bg-gradient-light dark:bg-gradient mx-8">
          <BrandBackgroundBlur />

          <div className="max-w-[1200px] min-h-[calc(100vh-200px)] mx-auto mt-6 lg:mt-14 px-4">
            {children ?? <Outlet />}

            <p className="text-zinc-800 dark:text-[#b4b4b4] text-sm mt-14 text-center">
              © 2024 Fuel Labs. All rights reserved
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
