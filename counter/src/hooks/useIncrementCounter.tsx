import { useState } from "react";
import toast from "react-hot-toast";
import { bn, BN } from "fuels";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TestContract } from "../sway-api/contracts/index";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface UseIncrementCounterProps {
  contract: TestContract | undefined;
  isConnected: boolean | null;
  walletBalance: BN | null;
  setCounter: (value: number) => void;
  refetchBalance?: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<BN | null, Error>>;
}

export const useIncrementCounter = ({
  contract,
  isConnected,
  walletBalance,
  setCounter,
  refetchBalance,
}: UseIncrementCounterProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onIncrementPressed = async () => {
    if (!isConnected)
      return toast.error("Please connect your wallet to increment the counter");
    if (!contract) {
      return toast.error("Contract not loaded");
    }

    if (walletBalance?.eq(0)) {
      return toast.error(
        "Your wallet does not have enough funds. Please click the 'Faucet' button in the top right corner, or use the local faucet."
      );
    }

    try {
      setIsLoading(true);

      const { waitForResult } = await contract.functions
        .increment_counter(bn(1))
        .call();

      const { value, transactionId } = await waitForResult();

      toast(() => (
        <span>
          <CheckCircleIcon color="success" />
          Counter Incremented! View it on the
          <a
            target="_blank"
            className="pl-1 underline"
            href={`https://app.fuel.network/tx/${transactionId}`}
          >
            block explorer
          </a>
        </span>
      ));
      setCounter(value.toNumber());

      await refetchBalance?.();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while incrementing the counter.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    onIncrementPressed,
    isLoading,
  };
};
