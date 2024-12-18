import { Src20 } from "@/sway-api";
import { useWallet } from "@fuels/react";
import { useMutation } from "@tanstack/react-query";
import { bn } from "fuels";
import toast from "react-hot-toast";

export type Src20MintArgs = {
  amount: number;
  contractId: string;
  subId: string;
};

export const useMint = () => {
  const { wallet } = useWallet();
  const mutation = useMutation({
    mutationFn: async (args: Src20MintArgs) => {
      if (!wallet) {
        throw new Error("Wallet not connected!");
      }

      const { amount, contractId, subId } = args;

      const recipient = { Address: { bits: wallet.address.toB256() } };

      const contract = new Src20(contractId, wallet);

      // Passing DEFAULT_SUB_ID as its a single asset contract
      const result = await contract.functions
        .mint(recipient, subId, bn(amount))
        .call();
      const transactionResult = await result.waitForResult();
      return transactionResult;
    },
    onSuccess: () => {
      toast.success("Successfully minted Src20!");
    },
    onError: (err) => {
      console.error("Error minting Src20:", err);
      toast.error(err.message);
    },
  });

  return mutation;
};
