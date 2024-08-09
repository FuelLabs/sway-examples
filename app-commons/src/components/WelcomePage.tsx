import { Box, Button, Stack } from "@mui/material";
import {
  useConnectUI,
  useConnect,
  useIsConnected,
  useWallet,
  useBalance,
} from "@fuels/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Text, TextProps } from "./Text";
import { CurrentStep } from "./OnboardingTopBar";
import { isSafari } from "src/utils";

type WelcomePageProps = {
  message?: string;
  messageProps?: TextProps;
  setCurrentStep: (currentStep: CurrentStep) => void;
};

export const WelcomePage = ({
  message,
  messageProps,
  setCurrentStep,
}: WelcomePageProps) => {
  const { connect } = useConnectUI();
  const { connectAsync: connectBurner } = useConnect();
  const { refetch: refetchWallet, wallet } = useWallet();
  const { balance } = useBalance({ address: wallet?.address.toString() });
  const { isConnected } = useIsConnected();
  const [redirect, setRedirect] = useState(false);

  // useEffect(() => {
  //   if (isConnected &&  !balance?.gt(0)) {
  //     setCurrentStep(CurrentStep.Faucet);
  //   }
  // }, [isConnected, balance]);
    useEffect(() => {
    if (isConnected && wallet && !balance?.gt(0) && redirect) {
      window.location.href = `https://faucet-testnet.fuel.network/?address=${wallet.address.toString()}&redirectUrl=${window.location.href}`;
    }
  }, [isConnected, wallet, redirect]);

  return (
    <Stack spacing={3} className="w-5/6 items-center">
      {message && <Text {...messageProps}>{message}</Text>}
      <Button
        className="btn-primary h-12 w-full"
        onClick={async () => {
          const isConnected = await connectBurner("Burner Wallet");
          if (isConnected) {
            const { data: wallet } = await refetchWallet();
            if (wallet) {
              window.open(
                `https://faucet-testnet.fuel.network/?address=${wallet.address.toString()}&autoClose`,
                "_blank"
              );
            } else {
              toast.error("Error fetching wallet");
            }
          } else {
            toast.error("Error connecting wallet");
          }
        }}
      >
        Temporary Wallet
      </Button>
      <Box className="border-b-2 border-slate-600 w-full" />
      <Button
        variant="outlined"
        className="text-white h-12 w-full border-slate-600"
        onClick={() => {
          connect();
          setRedirect(true);
        }}
      >
        Connect
      </Button>
    </Stack>
  );
};
