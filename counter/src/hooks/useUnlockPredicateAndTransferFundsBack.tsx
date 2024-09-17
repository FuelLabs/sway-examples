import { useState } from "react";
import toast from "react-hot-toast";
import { BN, bn, Predicate, InputValue } from "fuels";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useActiveWallet } from "./useActiveWallet";
import { TestPredicate } from "../sway-api/predicates/index";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";


interface UseUnlockPredicateAndTransferFundsBackProps {
  predicate: Predicate<InputValue[]> | undefined;
  predicateBalance: BN | undefined;
  setPredicateBalance: (balance: BN) => void;
  refetchBalance?: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<BN | null, Error>>;
}

export function useUnlockPredicateAndTransferFundsBack({
  predicate,
  predicateBalance,
  setPredicateBalance,
  refetchBalance,
}: UseUnlockPredicateAndTransferFundsBackProps) {
  const { wallet, walletBalance, isConnected } = useActiveWallet();
  const [isLoadingUnlock, setIsLoadingUnlock] = useState<boolean>(false);

  const unlockPredicateAndTransferFundsBack = async (
    amount: BN,
    pin: string
  ) => {
    try {
      if (!isConnected) {
        return toast.error(
          "Please connect your wallet to transfer funds back from Predicate"
        );
      }
      if (!wallet) {
        return toast.error("Wallet not loaded");
      }
      if (walletBalance?.eq(0)) {
        return toast.error(
          "Your wallet does not have enough funds. Please click the 'Faucet' button in the top right corner, or use the local faucet."
        );
      }
      if (!predicateBalance || predicateBalance.lt(bn.parseUnits("0.0009"))) {
        return toast.error("Predicate balance is less than 0.0009 ETH");
      }

      setIsLoadingUnlock(true);
      const baseAssetId = wallet.provider.getBaseAssetId();
      const reInitializePredicate = new TestPredicate({
        provider: wallet.provider,
        data: [bn(pin)],
      });

      if (!reInitializePredicate) {
        return toast.error("Failed to initialize predicate");
      }

      const tx = await reInitializePredicate.transfer(
        wallet.address,
        amount,
        baseAssetId
      );
      const { isStatusSuccess } = await tx.wait();

      if (!isStatusSuccess) {
        toast.error("Failed to unlock predicate");
        return;
      }

      toast(() => (
        <span>
          <CheckCircleIcon color="success" />
          Funds transferred from predicate! View it on the
          <a
            className="pl-1 underline"
            target="_blank"
            href={`https://app.fuel.network/tx/${tx.id}`}
          >
            block explorer
          </a>
        </span>
      ));

      await refetchBalance?.();
      setPredicateBalance((await predicate?.getBalance()) ?? new BN(0));
    } catch (e) {
      console.error(e);
      toast.error(
        "Failed to unlock predicate. You probably entered the wrong pin, or the predicate does not have enough balance. Try again."
      );
    } finally {
      setIsLoadingUnlock(false);
    }
  };

  return {
    unlockPredicateAndTransferFundsBack,
    isLoadingUnlock,
  };
}
