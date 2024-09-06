import { Provider, Wallet, WalletUnlocked } from "fuels";
import { useState } from "react";
import useAsync from "react-use/lib/useAsync";

export const useFaucet = (
  fuelNodePort: number = 4000,
  privateKey: string = "0x01"
) => {
  const [faucetWallet, setFaucetWallet] = useState<WalletUnlocked>();

  useAsync(async () => {
    if (!faucetWallet) {
      const provider = await Provider.create(
        `http://127.0.0.1:${fuelNodePort}/v1/graphql`
      );
      const wallet = Wallet.fromPrivateKey(privateKey, provider);
      setFaucetWallet(wallet);
    }
  }, [faucetWallet]);

  return {
    faucetWallet,
  };
};
