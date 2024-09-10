import { useState } from "react";
import toast from "react-hot-toast";
import { BN, bn, Predicate, InputValue } from "fuels";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useActiveWallet } from "../hooks/useActiveWallet";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface UseTransferFundsToPredicateProps {
  predicate: Predicate<InputValue[]> | undefined;
  setPredicateBalance: (balance: BN) => void;
  refetchBalance?: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<BN | null, Error>>;
}

export const useTransferFundsToPredicate = ({
  predicate,
  setPredicateBalance,
  refetchBalance,
}: UseTransferFundsToPredicateProps) => {
  const { wallet, walletBalance, isConnected } = useActiveWallet();
  const [isLoadingTransfer, setIsLoadingTransfer] = useState<boolean>(false);

  const refreshBalances = async () => {
    await refetchBalance?.();
    setPredicateBalance((await predicate?.getBalance()) || bn(0));
  };

  const transferFundsToPredicate = async (amount: BN) => {
    if (!isConnected)
      return toast.error(
        "Please connect your wallet to transfer funds to Predicate"
      );
    if (!predicate) {
      return toast.error("Predicate not loaded");
    }

    if (!wallet) {
      return toast.error("Wallet not loaded");
    }
    if (walletBalance?.eq(0)) {
      return toast.error(
        "Your wallet does not have enough funds. Please click the 'Faucet' button in the top right corner, or use the local faucet."
      );
    }

    try {
      setIsLoadingTransfer(true);
      const baseAssetId = wallet.provider.getBaseAssetId();
      const tx = await wallet.transfer(predicate.address, amount, baseAssetId, {
        gasLimit: 10_000,
      });
      console.log(tx);
      await refreshBalances();

      return toast(() => (
        <span>
          <CheckCircleIcon color="success" />
          Funds transferred to predicate! View it on the
          <a
            className="pl-1 underline"
            target="_blank"
            href={`https://app.fuel.network/tx/${tx?.id}`}
          >
            block explorer
          </a>
        </span>
      ));
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while transferring funds.");
    } finally {
      setIsLoadingTransfer(false);
    }
  };

  return { transferFundsToPredicate, isLoadingTransfer };
};
