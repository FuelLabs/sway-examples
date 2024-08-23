import { Box } from "@mui/material";

import { Text } from "./Text";

export enum CurrentStep {
  Welcome,
  Faucet,
  Success,
}

type OnboardingTopBarProps = {
  currentStep: CurrentStep;
};

export const OnboardingTopBar = ({ currentStep }: OnboardingTopBarProps) => {
  return (
    <Box className="flex w-full items-center justify-around">
      <Text
        className={
          currentStep === CurrentStep.Welcome ? "" : "!text-slate-600" // TODO: clsx might help remove the need for !
        }
      >
        1. Welcome
      </Text>
      <Text
        className={currentStep === CurrentStep.Faucet ? "" : "!text-slate-600"}
      >
        2. Faucet
      </Text>
      <Text
        className={currentStep === CurrentStep.Success ? "" : "!text-slate-600"}
      >
        3. Success
      </Text>
    </Box>
  );
};
