import { createContext, useContext, useEffect, useState } from "react";
import { useIsConnected } from "@fuels/react";

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
  console.log(`isConnected`, isConnected);
  const [openDialog, setOpenDialog] = useState(!isConnected);

  // useEffect(() => {
  //   if (!is)
  //     setOpenDialog(!isConnected);
  // }, [isConnected])

  return (
    <OnboardingFlowContext.Provider value={{ openDialog, setOpenDialog }}>
      {children}
    </OnboardingFlowContext.Provider>
  );
};
