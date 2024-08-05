import { Box, Dialog, DialogContent, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import { WelcomePage } from "./WelcomePage";
import { OnboardingTopBar, CurrentStep } from "./OnboardingTopBar";
import { FaucetPage } from "./FaucetPage";
import { SuccessPage } from "./SuccessPage";
import { useBreakpoints } from "src/hooks/useBreakpoints";
import { useOnboardingFlowContext } from "./OnboardingFlowProvider";

type OnboardingFlowProps = {
  container?: Element | (() => Element | null) | null;
};

export const OnboardingFlow = ({ container }: OnboardingFlowProps) => {
  const { openDialog } = useOnboardingFlowContext();
  const [currentStep, setCurrentStep] = useState(CurrentStep.Welcome);
  const { isMobile } = useBreakpoints();

  return (
    <Dialog
      fullScreen={isMobile}
      container={container}
      open={openDialog}
      id="onboarding"
      PaperProps={{ className: "p-8 w-full bg-black border-slate-600 border" }}
    >
      <DialogContent className="overflow-hidden">
        <Stack spacing={4} className="items-center">
          <OnboardingTopBar currentStep={currentStep} />

          <Box className="flex h-[400px] md:h-full w-full justify-center items-center">
            {currentStep === CurrentStep.Welcome ? (
              <WelcomePage
                message="Welcome to Sway NFT!"
                messageProps={{ className: "text-xl" }}
                setCurrentStep={setCurrentStep}
              />
            ) : currentStep === CurrentStep.Faucet ? (
              <FaucetPage setCurrentStep={setCurrentStep} />
            ) : (
              <SuccessPage message="Success!" />
            )}
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
