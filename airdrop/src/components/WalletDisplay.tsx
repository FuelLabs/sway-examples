import toast from "react-hot-toast";
import { useActiveWallet } from "../hooks/useActiveWallet";
import { IconCopy } from "@tabler/icons-react";
import { Link } from "./Link";


export const getTruncatedAddress = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Address copied to clipboard");
};
interface WalletDisplayProps {
  darkMode?: boolean;
}

export const WalletDisplay: React.FC<WalletDisplayProps> = ({ darkMode }) => {
  const { wallet, walletBalance } = useActiveWallet();
  // const CopyIcon = darkMode ? CopyIconDark : CopyIconLight;
  return (
    wallet && (
      <div className="flex gap-2 md:gap-4 items-center">
        <Link
          href={`https://app.fuel.network/account/${wallet.address.toB256()}`}
          target="_blank"
          className="text-gray-400 hover:underline hover:text-green-400"
        >
          {getTruncatedAddress(wallet?.address?.toB256() as string)}
        </Link>
        <IconCopy
          className="text-[#dddddd] cursor-pointer h-5 hover:opacity-80 active:scale-[90%]"
          onClick={() => copyToClipboard(wallet?.address?.toB256() as string)}
        />
        <span data-testid="wallet-balance" className="text-gray-400">
          Balance:{" "}
          {walletBalance?.format({
            precision: 5,
          })}{" "}
          ETH
        </span>
      </div>
    )
  );
};
