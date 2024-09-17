import { NFTContract } from "src/contract-types/contracts";
import { useQuery } from "@tanstack/react-query";
import { CONTRACT_ID, NODE_URL } from "src/lib";
import { createAssetId } from "src/utils/assetId";
import { NFTQueryKeys } from "src/queryKeys";
import { Provider } from "fuels";

export const useTotalSupply = (subId: string) => {
    return useQuery({
        queryKey: [NFTQueryKeys.totalSupply, subId],
        queryFn: async () => {
            const provider = await Provider.create(NODE_URL);

            const assetId = createAssetId(subId, CONTRACT_ID);

            const contract = new NFTContract(CONTRACT_ID, provider);

            const result = await contract.functions.total_supply(assetId).get();
            return result.value?.toNumber() || 0;
        },
    });
};
