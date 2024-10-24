import { TestContract } from "@/sway-api";
import { useWallet } from "@fuels/react";
import { useMutation } from "@tanstack/react-query";
import { AbstractAddress } from "fuels";
import toast from "react-hot-toast";

interface InitializeParams {
  contractId: string | AbstractAddress;
}

export const useInitializeAirdrop = () => {
  const { wallet } = useWallet();

  const mutation = useMutation({
    mutationFn: async ({ contractId }: InitializeParams) => {
      if (!wallet) {
        throw new Error("Wallet not connected!");
      }

      const contract = new TestContract(contractId, wallet);

      const result = await contract.functions.initialize().call();

      return result;
    },
    onSuccess: (data) => {
      console.log("onSuccess useInitializeAirdrop", data);
      toast.success("Airdrop initialized successfully!");
    },
    onError: (err) => {
      console.error("Error initializing airdrop:", err);
      toast.error(err.message);
    },
  });

  return mutation;
};
