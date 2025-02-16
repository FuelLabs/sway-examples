import { AirdropQueryKeys } from "@/queryKeys";
import { useWallet } from "@fuels/react";
import { useQuery } from "@tanstack/react-query";

export const useGetSrc20Balance = (assetId: string) => {
  const { wallet } = useWallet();
  const query = useQuery({
    queryKey: [AirdropQueryKeys.src20Balance],
    queryFn: async () => {
      if (!wallet || !assetId || assetId.trim() === "") return;
      const balance = await wallet.getBalance(assetId);
      return balance;
    },
  });
  return query;
};
