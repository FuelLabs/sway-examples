import { useQuery } from "@tanstack/react-query";
import { PinataSDK } from "pinata";
import { PINATA_JWT } from "../lib";
import { useUploadAirdropDataParams } from "./useUploadAirdropData";

export type ContractIdData = Array<useUploadAirdropDataParams>;

export const pinata = new PinataSDK({
  pinataJwt: PINATA_JWT,
  pinataGateway: "gateway.pinata.cloud",
});

export const useGetAirdropData = () => {
  return useQuery<ContractIdData>({
    queryKey: ["airdropData"],
    queryFn: async (): Promise<ContractIdData> => {
      try {
        const ipfsData = (await pinata.listFiles()).filter(
          (file) => file.metadata.name === "AirdropData"
        );

        const airdropData = await Promise.all(
          ipfsData.map(async (file) => {
            const res = await pinata.gateways.get(file.ipfs_pin_hash);
            return res?.data;
          })
        );

        if (airdropData) {
          return airdropData as unknown as ContractIdData;
        }
        return [];
      } catch (error) {
        console.error(
          "Error while fetching contractIds from ipfs in useGetAirdropContractId: ",
          error
        );
        throw error;
      }
    },
  });
};
