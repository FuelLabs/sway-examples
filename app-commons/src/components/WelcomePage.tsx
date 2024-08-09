import { Box, Button, Stack } from "@mui/material";
import { useConnectUI, useConnect, useIsConnected, useWallet } from "@fuels/react";
import { useEffect } from "react";
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
  const { connectAsync: connectBurner, data } = useConnect();
  const { wallet } = useWallet();
  // const { isConnected } = useIsConnected();

  // useEffect(() => {
  //   if (isConnected) {
  //     setCurrentStep(CurrentStep.Faucet);
  //   }
  // }, [isConnected]);

  return (
    <Stack spacing={3} className="w-5/6 items-center">
      {message && <Text {...messageProps}>{message}</Text>}
      <Button
        className="btn-primary h-12 w-full"
        onClick={async () => {
          const isConnected = await connectBurner("Burner Wallet");
          console.log(`isConnected`, isConnected);
          if (isConnected) {
            window.open(
              `https://faucet-testnet.fuel.network/?address=${wallet.address.toString()}&autoClose`,
              "_blank"
            );
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
        }}
      >
        Connect
      </Button>
    </Stack>
  );
};
