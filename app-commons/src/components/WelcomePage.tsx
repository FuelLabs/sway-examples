import { Box, Button, Stack } from "@mui/material";
import {
  useConnectUI,
  useConnect,
  useIsConnected,
  useWallet,
  useBalance,
} from "@fuels/react";
import { useEffect } from "react";

import { Text } from "./Text";
import { CurrentStep } from "./OnboardingTopBar";
import { isSafari } from "src/utils";

type WelcomePageProps = {
  message?: React.ReactNode;
  setCurrentStep: (currentStep: CurrentStep) => void;
};

export const WelcomePage = ({
  message,
  setCurrentStep,
}: WelcomePageProps) => {
  const { connect: connectUI } = useConnectUI();
  const { connect: connectBurner } = useConnect();
  const {
    wallet,
    isLoading: isLoadingWallet,
    isPending: isPendingWallet,
    isFetching: isFetchingWallet,
  } = useWallet();
  const {
    balance,
    isFetching: isFetchingBalance,
    isPending: isPendingBalance,
    isLoading: isLoadingBalance,
  } = useBalance({
    address: wallet?.address.toString(),
  });
  const { isConnected } = useIsConnected();

  const isBalanceLoading =
    (isFetchingBalance || isPendingBalance || isLoadingBalance);
  const isWalletLoading =
    isLoadingWallet || isPendingWallet || isFetchingWallet;

  useEffect(() => {
    if (isConnected && wallet) {
      if (balance && balance.gt(0)) {
        setCurrentStep(CurrentStep.Success);
      } else if (!isBalanceLoading) {
        if (isSafari) {
          const redirectUrl = new URL("https://faucet-testnet.fuel.network/");
          redirectUrl.searchParams.append("address", wallet.address.toString());
          redirectUrl.searchParams.append("redirectUrl", window.location.href);
          window.location.href = redirectUrl.href;
        } else {
          setCurrentStep(CurrentStep.Faucet);
        }
      }
    }
  }, [isConnected, wallet, balance, isBalanceLoading]);

  return (
    <Stack spacing={3} className="w-5/6 items-center">
      {message}
      {isWalletLoading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Button
            className="btn-primary h-12 w-full text-black"
            onClick={() => {
              connectBurner("Burner Wallet");
            }}
          >
            Temporary Wallet
          </Button>
          <Box className="border-b-2 border-slate-600 w-full" />
          <Button
            variant="outlined"
            className="text-black dark:text-white h-12 w-full border-slate-600"
            onClick={() => {
              connectUI();
            }}
          >
            Connect
          </Button>
        </>
      )}
    </Stack>
  );
};
