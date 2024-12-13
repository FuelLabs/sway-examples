import { getTruncatedAddress } from "@/lib/utils";
import { useWallet } from "@fuels/react";
import { useMutation } from "@tanstack/react-query";
import { Account, AssetId, B256Address, DeployContractOptions } from "fuels";
import toast from "react-hot-toast";
import { TestContractFactory } from "../sway-api";

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
      bits: B256Address | undefined;
    };
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

      const tokenBalance = await wallet.getBalance(assetId);

      if (tokenBalance.lt(+totalAmount.toString())) {
        toast.error("Insufficient balance");
        return;
      }

      const result = await TestContractFactory.deploy(wallet, options);
      await result.waitForResult();
      // Get the initial contract balance

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
        `Airdrop contract deployed successfully!\nContract Address: ${getTruncatedAddress(data?.contractId ?? "")}`
      );
    },
    onError: (err) => {
      console.error("Error deploying contract:", err);
      toast.error(err.message);
    },
  });

  return mutation;
};
