import { useBreakpoints } from "hooks/useBreakpoints";
import { Link } from "./Link";
import { faucetUrl } from "src/utils/url";

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
          href={faucetUrl(address)}
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
