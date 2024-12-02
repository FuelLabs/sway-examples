import { Toaster } from "react-hot-toast";
import { NavMenu } from "./NavMenu";
import { OnboardingFlow } from "sway-example-commons";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">
      <Toaster />
      <OnboardingFlow
        welcomeMessage={<div>Welcome to the Airdrop!</div>}
        container={() => document.getElementById("root")}
      />
      <div className="flex flex-col w-['100vw'] bg-black text-white">
        <NavMenu />

        <div className="min-h-screen items-center p-24 flex flex-col gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};
