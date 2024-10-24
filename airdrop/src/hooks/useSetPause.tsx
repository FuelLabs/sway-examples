import { TestContract } from "@/sway-api";
import { useWallet } from "@fuels/react";
import { useMutation } from "@tanstack/react-query";
import { AbstractAddress } from "fuels";

interface PauseParams {
  contractId: string | AbstractAddress;
  paused: boolean;
}
export const useSetPause = () => {
  const { wallet } = useWallet();
  
  const mutation = useMutation({
    mutationFn: async ({ contractId, paused }: PauseParams) => {
      if (!wallet) {
        throw new Error("Wallet not connected!");
      }
      const contract = new TestContract(contractId, wallet);

      const result = await contract.functions.set_paused(paused).call();

      return result;
    },
  });
};
