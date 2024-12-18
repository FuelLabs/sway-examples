import { Src20Factory } from "@/sway-api";
import { useWallet } from "@fuels/react";
import { useMutation } from "@tanstack/react-query";
import { DeployContractOptions } from "fuels";
import toast from "react-hot-toast";

export type Src20Args = {
  options?: DeployContractOptions;
};
export const useDeploySrc20 = () => {
  const { wallet } = useWallet();
  const mutation = useMutation({
    mutationFn: async (args: Src20Args) => {
      if (!wallet) {
        throw new Error("Wallet not connected!");
      }

      const { options } = args;
      const result = await Src20Factory.deploy(wallet, options);
      const { contract, transactionResult } = await result.waitForResult();

      return { contract, transactionResult };
    },
    onSuccess: () => {
      toast.success(`SRC20 Contract deployed successfully!`);
    },
    onError: (err) => {
      console.error("Error deploying contract:", err);
      toast.error(err.message);
    },
  });

  return mutation;
};
