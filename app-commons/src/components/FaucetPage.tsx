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
  const {
    wallet,
    isLoading: isLoadingWallet,
    isPending: isPendingWallet,
    isFetching: isFetchingWallet,
  } = useWallet();
  const {
    isPending: isPendingBalance,
    isLoading: isLoadingBalance,
    isFetching: isFetchingBalance,
  } = useBalance({ address: wallet?.address.toString() });
  const [className, setClassName] = useState("");
  const isLoading =
    isLoadingWallet ||
    isPendingWallet ||
    isFetchingWallet ||
    (!wallet && (isPendingBalance || isLoadingBalance || isFetchingBalance));

  // TODO: fix, this does not work
  // the gray cloud flare page does not have top margin
  // the white page does, so we try to remove margin when logo appears
  useEffect(() => {
    const logo = document.getElementsByClassName("fuel-logo");
    if (logo) {
      setClassName("-mt-20 h-[700px]");
    }
  }, []);

  if (isLoading) return <Text>Loading...</Text>;

  if (!wallet) return <Text>Wallet not found</Text>;

  return (
    <>
      {isSafari ? (
        <Button
          className="btn-primary h-12 w-full"
          onClick={() => {
            window.open(
              `https://faucet-testnet.fuel.network/?address=${wallet.address.toString()}&autoClose`,
              "_blank"
            );
          }}
        >
          Faucet
        </Button>
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
