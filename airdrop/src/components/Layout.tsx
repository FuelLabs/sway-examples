import { Toaster } from "react-hot-toast";
import { NavMenu } from "./NavMenu";
import { OnboardingFlow, OnboardingFlowProvider } from "sway-example-commons";
import { useFuel } from "@fuels/react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { networks } = useFuel();
  console.log("networks", networks);
  return (
    <OnboardingFlowProvider>
      <div className="w-full">
        <OnboardingFlow
          welcomeMessage={<div>Welcome to the Airdrop Dapp!</div>}
          container={() => document.getElementById("root")}
        />
        <Toaster />
        <div className="flex flex-col w-['100vw'] bg-background text-foreground">
          <NavMenu />
          <div className="min-h-screen items-center p-24 flex flex-col gap-6">
            {children}
          </div>
        </div>
      </div>
    </OnboardingFlowProvider>
  );
};
