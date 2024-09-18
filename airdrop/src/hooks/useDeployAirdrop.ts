import { TestContract, TestContractFactory } from "@/sway-api";
import { useWallet } from "@fuels/react";
import { useMutation } from "@tanstack/react-query";
import { Account, DeployContractOptions } from "fuels";
import toast from "react-hot-toast";

type deployAirdropArgs = {
  wallet: Account;
  options: DeployContractOptions;
};

export const useDeployAirdrop = () => {
  const {wallet } = useWallet();
  const mutation = useMutation({
    mutationFn: async (options: DeployContractOptions) => {
      if(!wallet) {
        toast.error("Wallet not connected!");
        return;
      }
      const result = await TestContractFactory.deploy(wallet, options);
      return result;
    },
    onSuccess: (data) => {
      toast.success(`Airdrop contract deployed successfully! Contract Address: ${data?.contractId}`);
    },
    onError: (err) => {

      console.error('Error deploying contract:', err);
      toast.error(err.message);
    },
  });

  return mutation;
};