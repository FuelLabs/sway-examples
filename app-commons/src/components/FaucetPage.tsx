import { useWallet, useBalance } from "@fuels/react";
import { useEffect, useState } from "react";

import { Text } from "./Text";
import { TESTNET_FAUCET_LINK } from "../config";
import { CurrentStep } from "./OnboardingTopBar";

type FaucetPageProps = {
  setCurrentStep: (currentStep: CurrentStep) => void;
};

export const FaucetPage = ({ setCurrentStep }: FaucetPageProps) => {
  const { wallet, isLoading, isPending, isFetching } = useWallet();
  const { balance, refetch } = useBalance({
    address: wallet?.address.toB256(),
  });
  const [className, setClassName] = useState("");

  useEffect(() => {
    const interval = setInterval(refetch, 500);
    if (balance && balance.gt(0)) {
      console.log("here");
      setCurrentStep(CurrentStep.Success);
    }
    return () => clearInterval(interval);
  }, [balance]);

  useEffect(() => {
    const logo = document.getElementsByClassName("fuel-logo");
    if (logo) {
      setClassName("-mt-20 h-[700px]")
    }
  }, []);

  console.log(`balance`, balance);

  if (isLoading || isPending || isFetching) return <Text>Loading...</Text>;

  if (!wallet) return <Text>Wallet not found</Text>;

  console.log("iframe");
  return (
    <iframe
      src={`${TESTNET_FAUCET_LINK}?address=${wallet.address.toAddress()}`}
      width="100%"
      height="600px"
      className={className}
    >
      hello
    </iframe>
  );
};
