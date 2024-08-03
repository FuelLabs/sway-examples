import { Box, Button, Stack } from "@mui/material";
import { useConnectUI } from "@fuels/react";

import { Text, TextProps } from "./Text";
import { BurnerWalletConnector } from "@fuels/connectors";
import { CurrentStep } from "./OnboardingTopBar";

type WelcomePageProps = {
  message?: string;
  messageProps?: TextProps;
  setCurrentStep: (currentStep: CurrentStep) => void;
};

export const WelcomePage = ({ message, messageProps, setCurrentStep }: WelcomePageProps) => {
  const { connect } = useConnectUI();

  const createBurnerWallet = async (config: any = {}) => {
    const connector = new BurnerWalletConnector(config);
    await connector.ping();
    await connector.connect();
    return connector;
  };

  return (
    <Stack spacing={3} className="w-5/6 items-center">
      {message && <Text {...messageProps}>{message}</Text>}
      <Button
        className="btn-primary h-12 w-full"
        onClick={async () => {
          const temp = await createBurnerWallet();
          const isConnected = await temp.isConnected();
          if (isConnected) {
            setCurrentStep(CurrentStep.Faucet);
          } else {
            throw new Error("Error connnecting temporary wallet");
          }
          console.log(`isConnected`, isConnected);
          console.log(`temp`, temp);
        }}
      >
        Temporary Wallet
      </Button>
      <Box className="border-b-2 border-slate-600 w-full" />
      <Button
        variant="outlined"
        className="text-white h-12 w-full border-slate-600"
        onClick={() => connect()}
      >
        Connect
      </Button>
    </Stack>
  );
};
