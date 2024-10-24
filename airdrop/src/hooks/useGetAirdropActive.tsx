import { NODE_URL } from "@/lib";
import { AirdropQueryKeys } from "@/queryKeys";
import { TestContract } from "@/sway-api";
import { useQuery } from "@tanstack/react-query";
import { Provider } from "fuels";

type ContractId = string | AbstractAddress;

interface Params {
  contractId: ContractId;
}

export const useGetAirdropActive = ({contractId}: Params) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.isActive, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);

        const contract = new TestContract(contractId, provider!);

        const isActive = await contract.functions.
      } catch (error) {
        
      }
    }
  })
}