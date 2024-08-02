import { Dialog, Stack } from "@mui/material";
import { useState } from "react";

import { WelcomePage } from "./WelcomePage";
import { OnboardingTopBar, CurrentStep } from "./OnboardingTopBar";

type OnboardingFlowProps = {
  container?: Element | (() => Element | null) | null;
};

export const OnboardingFlow = ({ container }: OnboardingFlowProps) => {
  const [open, setOpen] = useState(true);
  const [currentStep, setCurrentStep] = useState(CurrentStep.Welcome);

  return (
    <Dialog
      container={container}
      open={open}
      id="onboarding"
      PaperProps={{ className: "p-8 w-full bg-black border-slate-600 border" }}
    >
      <Stack spacing={4} className="items-center">
        <OnboardingTopBar currentStep={currentStep} />

        <WelcomePage
          message="Welcome to Sway NFT!"
          messageProps={{ className: "text-xl" }}
        />
      </Stack>
    </Dialog>
  );
};
