import toast from "react-hot-toast";
import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import { useActiveWallet } from "hooks/useActiveWallet";
import { getTruncatedAddress } from "src/utils/address";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Address copied to clipboard");
};

export const WalletDisplay = () => {
  const { wallet, walletBalance } = useActiveWallet();

  return (
    wallet && (
      <div className="flex gap-4 items-center">
        <span className="text-base text-gray-400 font-sans">
          {getTruncatedAddress(wallet.address.toAddress() as string)}
        </span>
        <IconButton className="text-white hover:opacity-80 p-0" onClick={() => copyToClipboard(wallet.address.toAddress() as string)}>
          <ContentCopyIcon className="w-5 h-5" />
        </IconButton>
        <span className="text-base text-gray-400 font-sans">
          Balance: {walletBalance?.format()} ETH
        </span>
      </div>
    )
  );
};
