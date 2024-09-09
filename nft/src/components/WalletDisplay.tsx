import { useActiveWallet } from "hooks/useActiveWallet";


export const WalletDisplay = () => {
  const { walletBalance } = useActiveWallet();

  if(!walletBalance) return null;

  return (
    <span className="text-sm text-gray-600 dark:text-gray-400 font-sans">
      Balance: {walletBalance.isZero() ? '0' : walletBalance.format()} ETH
    </span>
  );
};
