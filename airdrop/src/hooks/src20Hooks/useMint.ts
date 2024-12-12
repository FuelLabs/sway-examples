import { Src20 } from "@/sway-api";
import { useWallet } from "@fuels/react";
import { useMutation } from "@tanstack/react-query";
import { bn } from "fuels";
import toast from "react-hot-toast";

export type Src20MintArgs = {
  amount: number;
  contractId: string;
  subId?: number;
};

export const useMint = () => {
  const { wallet } = useWallet();
  const mutation = useMutation({
    mutationFn: async (args: Src20MintArgs) => {
      if (!wallet) {
        toast.error("Wallet not connected!");
        return;
      }

      const {amount, contractId, subId} = args;

      const recipient = { Address: { bits: wallet.address.toB256() } };

      const contract = new Src20(contractId, wallet);

      const result = await contract.functions.mint(recipient, '0x0000000000000000000000000000000000000000000000000000000000000000', bn(amount)).call();
      const transactionResult = await result.waitForResult();

      console.log("Transaction Result: ", transactionResult);
      return transactionResult;
    },
    onSuccess: (data) => {
      console.log("onSuccess useMint", data);
      toast.success("Successfully minted Src20!");
    },
    onError: (err) => {
      console.error("Error minting Src20:", err);
      toast.error(err.message);
    },  
  });

  return mutation;
};

