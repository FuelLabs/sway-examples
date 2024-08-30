import { PINATA_API_URL, PINATA_JWT } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { AbstractAddress } from "fuels";
import { pinata } from "./useGetAirdropData";

export type ContractIdData = Array<{ contractId: AbstractAddress | string }>;

export const useGetAirdropContractId = () => {
  return useQuery<ContractIdData>({
    queryKey: ["airdropContractId"],
    queryFn: async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${PINATA_JWT}`,
        },
      };

      const metaData = JSON.stringify({
        name: "Airdrop ContractId",
      });

      const ipfsData = (await pinata.listFiles()).filter(
        (file) => file.metadata.name === "Airdrop ContractId"
      );

      console.log("ipfsData from useGetAirdropContractId: ", ipfsData);

      const contractIds = await Promise.all(
        ipfsData.map(async (file) => {
          const res = await pinata.gateways.get(file.ipfs_pin_hash);
          return res?.data;
        })
      );
      console.log(
        "final contractIds from useGetAirdropContractId pinatasdk: ",
        contractIds
      );

      return contractIds;
    },
  });
};
