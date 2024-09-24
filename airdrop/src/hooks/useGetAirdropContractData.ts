
import { TestContract } from "../sway-api";
import { useWallet } from "@fuels/react";
import { useQuery } from "@tanstack/react-query";
import { AbstractAddress, Provider } from "fuels";
import toast from "react-hot-toast";
import { AirdropQueryKeys } from "../queryKeys";
import { NODE_URL } from "../lib";

type ContractId = string | AbstractAddress;

interface Params {
  contractId: ContractId;
}
export const useGetOwner = ({ contractId }: Params) => {

  const query = useQuery({
    queryKey: [AirdropQueryKeys.owner, contractId],
    queryFn: async () => {
      console.log("contractId from useGetOwner: ", contractId);
      try {
        const provider = await Provider.create(NODE_URL);

        const contract = new TestContract(contractId,  provider!);

        const owner = await contract.functions.is_paused().get();
        console.log("owner from useGetOwner: ", owner);
        return owner.value;
      } catch (error) {
        console.log("error from useGetOwner: ", error);
      }
    },
  });
  return query;
};