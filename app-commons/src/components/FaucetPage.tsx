import { useWallet, useBalance } from "@fuels/react";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import { Text } from "./Text";
import { TESTNET_FAUCET_LINK } from "../config";
import { CurrentStep } from "./OnboardingTopBar";
import { useFaucet } from "src/hooks";

type FaucetPageProps = {
  setCurrentStep: (currentStep: CurrentStep) => void;
};

const TOP_UP_AMOUNT = 100_000_000;

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
  const { faucetWallet } = useFaucet();

  // @ts-ignore
  const IS_LOCAL = import.meta.env.VITE_PUBLIC_DAPP_ENVIRONMENT === "local";

  const topUpWallet = async () => {
    if (IS_LOCAL) {
      if (!faucetWallet) {
        throw new Error("Faucet wallet not found.");
      }
      if (!wallet) {
        throw new Error("Wallet not found.");
      }

      const tx = await faucetWallet?.transfer(wallet.address, TOP_UP_AMOUNT);
      await tx?.waitForResult();
    }
  };

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
      setClassName("overflow-hidden h-[800px]");
    }
  }, []);

  if (isLoading) return <Text>Loading...</Text>;

  if (!wallet) return <Text>Wallet not found</Text>;

  if (IS_LOCAL) {
    return (
      <Button className="btn-primary h-12 w-3/4" onClick={() => topUpWallet()}>
        Faucet funds
      </Button>
    );
  }

  return (
    <iframe
      src={`${TESTNET_FAUCET_LINK}?address=${wallet.address.toAddress()}`}
      id="test"
      width="100%"
      height="800px"
      className={className}
    >
      hello
    </iframe>
  );
};
