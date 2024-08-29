import { useQuery } from "@tanstack/react-query";
import { PINATA_API_URL, PINATA_JWT } from "@/lib";
import { PinataSDK } from "pinata";

const pinata = new PinataSDK({
  pinataJwt: PINATA_JWT,
  pinataGateway: "gateway.pinata.cloud",
});

export type RecipientData = Array<{ address: string; amount: bigint }>;

export const useGetAirdropData = () => {
  return useQuery<RecipientData>({
    queryKey: ["airdropData"],
    queryFn: async () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${PINATA_JWT}`,
        },
      };
      const metaData = JSON.stringify({
        name: "Airdrop Recipients",
      });

      const cid = "QmaLkxGHvR4grWchnGjvHF1X2FamgwztG2kV8h3qRN5NLf";

      const files = await pinata
      .gateways
      .get(cid);


      if (files.data) {
        console.log(`files data`, files);
        return files.data;
      }

      return [];
    },
  });
};
