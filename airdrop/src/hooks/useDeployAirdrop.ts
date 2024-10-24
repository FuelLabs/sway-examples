import { TestContract, TestContractFactory } from "../sway-api";
import { useWallet } from "@fuels/react";
import { useMutation } from "@tanstack/react-query";
import { Account, Address, AssetId, B256Address, DeployContractOptions } from "fuels";
import toast from "react-hot-toast";

export type deployAirdropArgs = {
  wallet: Account;
  options: DeployContractOptions;
};


export interface ConfigurableConstants {
  MERKLE_ROOT?: B256Address;
  ASSET?: AssetId;
  END_TIME?: string;
  NUM_LEAVES?: bigint;
  INITIAL_OWNER?: {
    Address: {
      bits: B256Address | undefined
    }
  };
}



export type DeployAirdropArgs = {
  options?: DeployContractOptions;
  configurables?: ConfigurableConstants;
  assetId: string;
  totalAmount: string;
};

export const useDeployAirdrop = () => {
  const { wallet } = useWallet();
  const mutation = useMutation({
    mutationFn: async (args: DeployAirdropArgs) => {
      if (!wallet) {
        toast.error("Wallet not connected!");
        return;
      }

      const { options, assetId, totalAmount } = args;

      const baseAssetId = wallet.provider.getBaseAssetId();
      console.log("baseAssetId", baseAssetId);
      const contractBalance = await wallet.getBalance(baseAssetId);
      console.log("contractBalance", contractBalance);

      const result = await TestContractFactory.deploy(wallet, options);
      // Get the initial contract balance

      if (contractBalance.lt(+totalAmount.toString())) {
        toast.error("Insufficient balance");
        return;
      }

      // Perform the transfer to the contract
      const tx = await wallet.transferToContract(
        result.contractId,
        totalAmount,
        assetId
      );

      await tx.waitForResult();

      return result;
    },
    onSuccess: (data) => {
      toast.success(
        `Airdrop contract deployed successfully! Contract Address: ${data?.contractId}`
      );
    },
    onError: (err) => {
      console.error("Error deploying contract:", err);
      toast.error(err.message);
    },
  });

  return mutation;
};
