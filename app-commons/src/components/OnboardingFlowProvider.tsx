import { createContext, useContext, useState } from "react";
import { useIsConnected } from "@fuels/react";

import { Toaster } from "react-hot-toast";

export type OnboardingFlowContextType = {
  openDialog: boolean;
  setOpenDialog: (open: boolean) => void;
};

export const OnboardingFlowContext =
  createContext<OnboardingFlowContextType | null>(null);

export const useOnboardingFlowContext = () => {
  const context = useContext(
    OnboardingFlowContext
  ) as OnboardingFlowContextType;
  if (!context) {
    throw new Error(
      "useOnboardingFlowContext must be used within OnboardingFlowProvider"
    );
  }
  return context;
};

export const OnboardingFlowProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isConnected } = useIsConnected();
  const [openDialog, setOpenDialog] = useState(!isConnected);

  return (
      <OnboardingFlowContext.Provider value={{ openDialog, setOpenDialog }}>
        <Toaster />
        {children}
      </OnboardingFlowContext.Provider>
  );
};
