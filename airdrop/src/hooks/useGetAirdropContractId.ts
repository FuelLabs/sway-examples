import { PINATA_API_URL, PINATA_JWT } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { AbstractAddress } from "fuels";
import { pinata } from "./useGetAirdropData";
import { useUploadAirdropDataParams } from "./useUploadAirdropContractId";

export type ContractIdData = Array<useUploadAirdropDataParams>;

export const useGetAirdropData = () => {
  return useQuery<ContractIdData>({
    queryKey: ["airdropData"],
    queryFn: async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${PINATA_JWT}`,
        },
      };

      const metaData = JSON.stringify({
        name: "AirdropData",
      });

      const ipfsData = (await pinata.listFiles()).filter(
        (file) => file.metadata.name === "AirdropData"
      );

      console.log("ipfsData from useGetAirdropContractId: ", ipfsData);

      const airdropData = await Promise.all(
        ipfsData.map(async (file) => {
          const res = await pinata.gateways.get(file.ipfs_pin_hash);
          return res?.data;
        })
      );
      console.log(
        "final contractIds from useGetAirdropContractId pinatasdk: ",
        { airdropData }
      );

      if (airdropData) return airdropData;
      return [];
    },
  });
};
