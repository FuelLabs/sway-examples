import { Box, Dialog, DialogContent, Stack } from "@mui/material";
import { useEffect, useState } from "react";

import { WelcomePage } from "./WelcomePage";
import { OnboardingTopBar, CurrentStep } from "./OnboardingTopBar";
import { FaucetPage } from "./FaucetPage";
import { SuccessPage } from "./SuccessPage";
import { useBreakpoints } from "src/hooks/useBreakpoints";
import { useOnboardingFlowContext } from "./OnboardingFlowProvider";
import { useBalance, useWallet } from "@fuels/react";

type OnboardingFlowProps = {
  container?: Element | (() => Element | null) | null;
  welcomeMessage?: React.ReactNode;
};

export const OnboardingFlow = ({ container, welcomeMessage }: OnboardingFlowProps) => {
  const { openDialog } = useOnboardingFlowContext();
  const [currentStep, setCurrentStep] = useState(CurrentStep.Welcome);
  const { isMobile } = useBreakpoints();
  const { wallet } = useWallet();
  const { balance, refetch: refetchBalance } = useBalance({
    address: wallet?.address.toString(),
  });

  useEffect(() => {
    const interval = setInterval(refetchBalance, 500);
    if (balance && balance.gt(0)) {
      setCurrentStep(CurrentStep.Success);
    }
    return () => clearInterval(interval);
  }, [balance]);

  return (
    <Dialog
      fullScreen={isMobile}
      container={container}
      open={openDialog}
      id="onboarding"
      PaperProps={{ className: "p-8 w-full bg-zinc-200 dark:bg-black border-slate-600 border" }}
    >
      <DialogContent>
        <Stack spacing={4} className="items-center">
          <OnboardingTopBar currentStep={currentStep} />

          <Box className="flex w-full justify-center items-center">
            {currentStep === CurrentStep.Welcome ? (
              <WelcomePage
                message={welcomeMessage}
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
