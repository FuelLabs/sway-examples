import { Text } from "components/Text";
import { useActiveWallet } from "hooks/useActiveWallet";
import { TESTNET_FAUCET_LINK, VITE_BASE_URL } from "src/lib";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Faucet() {
  const { wallet, refetchBalance, walletBalance } = useActiveWallet();
  const [initialBalance, setInitialBalance] = useState(walletBalance);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(refetchBalance, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (walletBalance && !initialBalance) {
      setInitialBalance(walletBalance);
    }

    if (walletBalance && initialBalance && !walletBalance.eq(initialBalance)) {
      navigate(`${VITE_BASE_URL}${location.state.redirectUrl}`);
    }
  }, [walletBalance]);

  if (!wallet) return <Text>Please connect wallet to faucet funds.</Text>;

  return (
    <iframe
      src={`${TESTNET_FAUCET_LINK}?address=${wallet.address.toAddress()}`}
      width="100%"
      height="700px"
      allowFullScreen
    >
      hello
    </iframe>
  );
}
