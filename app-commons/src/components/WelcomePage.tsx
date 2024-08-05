import { Box, Button, Stack } from "@mui/material";
import { useConnectUI, useConnect, useIsConnected } from "@fuels/react";

import { Text, TextProps } from "./Text";
import { CurrentStep } from "./OnboardingTopBar";
import { useEffect } from "react";

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
  const { connect: connectBurner } = useConnect();
  const { isConnected } = useIsConnected();

  useEffect(() => {
    if (isConnected) {
      setCurrentStep(CurrentStep.Faucet);
    }
  }, [isConnected]);

  return (
    <Stack spacing={3} className="w-5/6 items-center">
      {message && <Text {...messageProps}>{message}</Text>}
      <Button
        className="btn-primary h-12 w-full"
        onClick={() => {
          connectBurner("Burner Wallet");
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
