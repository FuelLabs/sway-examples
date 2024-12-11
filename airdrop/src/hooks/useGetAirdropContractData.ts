import { useQuery } from "@tanstack/react-query";
import { AbstractAddress, Provider } from "fuels";
import { NODE_URL } from "../lib";
import { AirdropQueryKeys } from "../queryKeys";
import { TestContract } from "../sway-api";

type ContractId = string | AbstractAddress;

interface Params {
  contractId: ContractId;
}
export const useGetOwner = ({ contractId }: Params) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.owner, contractId],
    queryFn: async () => {

      try {
        const provider = await Provider.create(NODE_URL);

        const contract = new TestContract(contractId, provider!);

        const owner = await contract.functions.owner().get();
        return owner.value;
      } catch (error) {
        console.error("error from useGetOwner: ", error);
      }
    },
  });
  return query;
};

export const useGetEndTime = ({ contractId }: Params) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.endTime, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);

        const contract = new TestContract(contractId, provider!);

        const endTime = await contract.functions.end_time().get();
        return endTime.value;
      } catch (error) {
        console.error("error from useGetEndTime: ", error);
      }
    },
  });
  return query;
};

export const useGetIsPaused = ({ contractId }: Params) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.isPaused, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);

        const contract = new TestContract(contractId, provider!);

        const isPaused = await contract.functions.is_paused().get();
        return isPaused.value;
      } catch (error) {
        console.error("error from useGetIsPaused: ", error);
      }
    },
  });
  return query;
};

export const useGetMerkleRoot = ({ contractId }: Params) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.merkleRoot, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);

        const contract = new TestContract(contractId, provider!);

        const merkleRoot = await contract.functions.merkle_root().get();
        return merkleRoot.value;
      } catch (error) {
        console.error("error from useGetMerkleRoot: ", error);
      }
    },
  });
  return query;
};

export const useGetNumLeaves = ({ contractId }: Params) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.numLeaves, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);

        const contract = new TestContract(contractId, provider!);

        const numLeaves = await contract.functions.num_leaves().get();
        return numLeaves.value;
      } catch (error) {
        console.error("error from useGetNumLeaves: ", error);
      }
    },
  });
  return query;
};

export const useGetIsInitialized = ({ contractId }: Params) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.isInitialized, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);

        const contract = new TestContract(contractId, provider!);

        const isInitialized = await contract.functions.is_initialized().get();

        return isInitialized.value;
      } catch (error) {
        console.error("error from useGetIsInitialized: ", error);
      }
    },
  });
  return query;
};
