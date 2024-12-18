import { useActiveWallet } from "@/hooks/useActiveWallet";
import { useBreakpoints } from "@/hooks/useBreakPoints";
import { NODE_URL, VITE_BASE_URL } from "@/lib";
import { useConnectUI, useDisconnect } from "@fuels/react";
import { IconExternalLink } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import toast from "react-hot-toast";
import { Link } from "./Link";
import { WalletDisplay } from "./WalletDisplay";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export const NavMenu = () => {
  const { isMobile } = useBreakpoints();
  const { wallet, network, isConnected } = useActiveWallet();
  const navigate = useNavigate();
  const showAddNetworkButton = wallet && network && network?.url !== NODE_URL;
  const { theme } = useTheme();

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const { connect } = useConnectUI();
  const { disconnect } = useDisconnect();

  const tryToAddNetwork = () => {
    return alert(
      `Please add the network ${NODE_URL} to your Fuel wallet, or swtich to it if you have it already, and refresh the page.`
    );
  };

  return (
    <>
      <div className="flex text flex-col bg-background text-text-primary">
        <nav className="flex justify-between items-center p-2 bg-background text-text-primary gap-6">
          {!isMobile && (
            <>
              <Link
                className="text-fuel-green hover:underline"
                href={`${VITE_BASE_URL}/airdrop`}
              >
                Home
              </Link>
              <Link
                href="https://docs.fuel.network"
                target="_blank"
                className="text-fuel-green flex gap-2 hover:underline"
              >
                Fuel Docs
                <IconExternalLink stroke={2} />
              </Link>
            </>
          )}
          {showAddNetworkButton && (
            <Button onClick={tryToAddNetwork} className="bg-red-500">
              Wrong Network
            </Button>
          )}

          <div className="ml-auto">
            <WalletDisplay darkMode={theme === "dark" ? true : false} />
          </div>

          {!isMobile && (
            <Button
              variant="outline"
              className="hover:bg-secondary/80"
              onClick={() => {
                if (!isConnected)
                  return toast.error(
                    "Please connect your wallet to visit the faucet."
                  );
                if (isSafari && wallet) {
                  const redirectUrl = new URL(
                    "https://faucet-testnet.fuel.network/"
                  );
                  redirectUrl.searchParams.append(
                    "address",
                    wallet.address.toString()
                  );
                  redirectUrl.searchParams.append(
                    "redirectUrl",
                    window.location.href
                  );
                  window.location.href = redirectUrl.href;
                } else {
                  navigate({
                    to: `${VITE_BASE_URL}/airdrop/faucet`,
                  });
                }
              }}
            >
              Faucet
            </Button>
          )}
          {isConnected && !isMobile && (
            <Button
              variant="destructive"
              className="hover:bg-destructive/90 hover:dark:text-white"
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
          )}
          {!isConnected && !isMobile && (
            <Button variant="outline" onClick={connect}>
              Connect Wallet
            </Button>
          )}
          <ModeToggle />
        </nav>
      </div>
    </>
  );
};