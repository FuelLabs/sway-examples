import { Toaster } from "react-hot-toast";
import { NavMenu } from "./NavMenu";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className="w-full">
      <Toaster />
      <div className="flex flex-col w-['100vw'] bg-background text-foreground">
        <NavMenu />
        <div className="min-h-screen items-center p-24 flex flex-col gap-6">
          {children}
        </div>
      </div>
    </div>
  );
};
