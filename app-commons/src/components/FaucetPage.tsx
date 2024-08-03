import { useWallet, useBalance } from "@fuels/react";
import { useEffect } from "react";

import { Text } from "./Text";
import { TESTNET_FAUCET_LINK } from "../config";
import { CurrentStep } from "./OnboardingTopBar";

type FaucetPageProps = {
    setCurrentStep: (currentStep: CurrentStep) => void;
}

export const FaucetPage = ({ setCurrentStep }: FaucetPageProps) => {
  const { wallet } = useWallet();
  const { balance, refetch } = useBalance({
    address: wallet?.address.toB256(),
  });

  useEffect(() => {
    const interval = setInterval(refetch, 500);
    if (balance?.gt(0)) {
        setCurrentStep(CurrentStep.Success);
    }
    return () => clearInterval(interval);
  }, [balance]);

  if (!wallet) return <Text>Wallet not found</Text>;

  return (
    <iframe
      src={`${TESTNET_FAUCET_LINK}?address=${wallet.address.toAddress()}`}
      width="100%"
      height="700px"
      className="-mt-16"
    >
      hello
    </iframe>
  );
};
