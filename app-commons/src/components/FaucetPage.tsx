import { useWallet, useBalance } from "@fuels/react";
import { useEffect, useState } from "react";

import { Text } from "./Text";
import { TESTNET_FAUCET_LINK } from "../config";
import { CurrentStep } from "./OnboardingTopBar";

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
      setClassName("overflow-hidden h-[800px]");
    }
  }, []);

  if (isLoading) return <Text>Loading...</Text>;

  if (!wallet) return <Text>Wallet not found</Text>;

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
