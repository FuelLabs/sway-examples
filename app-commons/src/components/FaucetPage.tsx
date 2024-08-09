import { useWallet, useBalance } from "@fuels/react";
import { useEffect, useState } from "react";

import { Text } from "./Text";
import { TESTNET_FAUCET_LINK } from "../config";
import { CurrentStep } from "./OnboardingTopBar";
import { isSafari } from "src/utils";
import { Button } from "@mui/material";

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
      setCurrentStep(CurrentStep.Success);
    }
    return () => clearInterval(interval);
  }, [balance]);

  // TODO: fix, this does not work
  // the gray cloud flare page does not have top margin
  // the white page does, so we try to remove margin when logo appears
  useEffect(() => {
    const logo = document.getElementsByClassName("fuel-logo");
    if (logo) {
      setClassName("-mt-20 h-[700px]");
    }
  }, []);

  // useEffect(() => {
  //   if (isSafari && wallet) {
  //     window.open(
  //       `https://faucet-testnet.fuel.network/?address=${wallet.address.toString()}&autoClose`,
  //       "_blank"
  //     );
  //   }
  // }, [isSafari, wallet]);

  if (isLoading || isPending || isFetching) return <Text>Loading...</Text>;

  if (!wallet) return <Text>Wallet not found</Text>;

  return (
    <>
      {isSafari ? (
        <Button className="btn-primary h-12 w-full">Faucet</Button>
      ) : (
        <iframe
        src={`${TESTNET_FAUCET_LINK}?address=${wallet.address.toAddress()}`}
        id="test"
        width="100%"
        height="600px"
        className={className}
      >
        hello
      </iframe>
      )}
    </>
  );
};
