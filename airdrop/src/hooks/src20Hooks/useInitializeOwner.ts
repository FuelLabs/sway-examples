import { Src20 } from "@/sway-api";
import { useWallet } from "@fuels/react";
import { useMutation } from "@tanstack/react-query";
import { bn } from "fuels";
import toast from "react-hot-toast";

export type InitializeOwnerArgs = {
  contractId: string;
};

export const useInitializeOwner = () => {
  const { wallet } = useWallet();
  const mutation = useMutation({
    mutationFn: async (args: InitializeOwnerArgs) => {
      if (!wallet) {
        toast.error("Wallet not connected!");
        return;
      }


      const owner = { Address: { bits: wallet.address.toB256() } };

      const contract = new Src20(args.contractId, wallet);

      const result = await contract.functions.constructor(owner).call();
      const transactionResult = await result.waitForResult();

      console.log("Initialize Owner Transaction Result: ", transactionResult);
      return transactionResult;
    },
    onSuccess: (data) => {
      console.log("onSuccess useMint", data);
      toast.success("Owner initialized successfully!");
    },
    onError: (err) => {
      console.error("Error initializing owner:", err);
      toast.error(err.message);
    },  
  });

  return mutation;
};
