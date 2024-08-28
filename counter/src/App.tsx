import { useConnectUI, useDisconnect } from "@fuels/react";
import { Button } from "./components/Button";
import toast, { Toaster } from "react-hot-toast";
import { useActiveWallet } from "./hooks/useActiveWallet";
import { WalletDisplay } from "./components/WalletDisplay";
import { NODE_URL } from "./lib";
import {
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Counter";
import PredicateExample from "./pages/Predicate";
import ScriptExample from "./pages/Script";
import Faucet from "./pages/Faucet";
import { useBreakpoints } from "./hooks/useBreakpoints";
import { NavMenu } from "./components/NavMenu";
import ThemeToggle from "./components/ThemeToggle";
import { useEffect, useState } from "react";

export default function App() {
  const { wallet, network, isConnected } =
    useActiveWallet();
  const { connect } = useConnectUI();
  const { disconnect } = useDisconnect();
  const navigate = useNavigate();
  const { isMobile } = useBreakpoints();


  const showAddNetworkButton = wallet && network && network?.url !== NODE_URL;


  const tryToAddNetwork = () => {
    return alert(
      `Please add the network ${NODE_URL} to your Fuel wallet, or swtich to it if you have it already, and refresh the page.`
    );
  };
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });
    useEffect(() => {
      if (darkMode) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      }
    }, [darkMode]);
  return (
    <>
      <Toaster position="bottom-center" />
      <div className="flex flex-col bg-background text-text-primary">
        <nav className="flex justify-between items-center p-4 bg-background text-text-primary gap-6">
          {!isMobile && (
            <>
              <Link className="text-fuel-green hover:underline" to="/counter">
                Home
              </Link>
              <Link
                to="https://docs.fuel.network"
                target="_blank"
                className="text-fuel-green hover:underline"
              >
                Fuel Docs
              </Link>
            </>
          )}
          {showAddNetworkButton && (
            <Button onClick={tryToAddNetwork} className="bg-red-500">
              Wrong Network
            </Button>
          )}
          <div className="ml-auto">
            <WalletDisplay darkMode={darkMode} />
          </div>
          {!isMobile && (
            <Button
              className="bg-gray-500"
              onClick={() => {
                if (!isConnected)
                  return toast.error(
                    "Please connect your wallet to visit the faucet."
                  );
                navigate("/counter/faucet");
              }}
            >
              Faucet
            </Button>
          )}
          {isConnected && !isMobile && (
            <Button className="bg-red-600" onClick={disconnect}>
              Disconnect
            </Button>
          )}
          {!isConnected && !isMobile && (
            <Button onClick={connect}>Connect Wallet</Button>
          )}
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          {isMobile && <NavMenu address={wallet?.address.toString()} />}
        </nav>
        <div className="min-h-screen items-center justify-center flex flex-col gap-6">
          <Routes>
            <Route path="/counter" element={<Home />} />
            <Route path="/counter/predicate" element={<PredicateExample />} />
            <Route path="/counter/script" element={<ScriptExample />} />
            <Route path="/counter/faucet" element={<Faucet />} />
          </Routes>{" "}
        </div>
      </div>
    </>
  );
}
