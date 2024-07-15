import { useBreakpoints } from "@/hooks/useBreakpoints";
import { Link } from "./Link";

export const ExternalFaucet = ({
  address,
  children,
}: {
  address?: string;
  children: React.ReactNode;
}) => {
  const { isTablet } = useBreakpoints();

  return (
    <>
      {isTablet ? (
        <Link
          href={`https://faucet-testnet.fuel.network/?address=${address}`}
          target="_blank"
        >
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
