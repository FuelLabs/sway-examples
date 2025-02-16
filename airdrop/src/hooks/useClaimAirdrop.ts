import {
  IdentityInput,
  TestContract,
} from "../sway-api/contracts/TestContract";
import { useWallet } from "@fuels/react";
import { useMutation } from "@tanstack/react-query";
import { AbstractAddress } from "fuels";
import toast from "react-hot-toast";

interface ClaimParams {
  contractId: string | AbstractAddress;
  amount: number;
  account: string;
  treeIndex: number;
  proof: string[];
  recipient: IdentityInput;
}

export const useClaimAirdrop = () => {
  const { wallet } = useWallet();

  const mutation = useMutation({
    mutationFn: async ({
      contractId,
      amount,
      account,
      treeIndex,
      proof,
      recipient,
    }: ClaimParams) => {
      if (!wallet) {
        throw new Error("Wallet not connected!");
      }

      const contract = new TestContract(contractId, wallet);

      const result = await contract.functions
        .claim(amount, account, treeIndex, proof, recipient)
        .call();

      await result.waitForResult();

      return result;
    },
    onSuccess: () => {
      toast.success("Airdrop claimed successfully!");
    },
    onError: (err) => {
      console.error("Error claiming airdrop:", err);
      toast.error(err.message);
    },
  });

  return mutation;
};
