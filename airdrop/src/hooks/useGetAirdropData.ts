import { useQuery } from "@tanstack/react-query";
import { PINATA_API_URL, PINATA_JWT } from "@/lib";

type RecipientData = Array<{ address: string; amount: bigint }>;

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

      // const response = await fetch(
      //   `${PINATA_API_URL}/data/pinList?status=pinned&metadata=${metaData}`,
      //   options
      // );

      const cid = "bafybeifqf7ifjxgn2rxoq4vfjzzutynjorfp36rqad3z6lmodr6bnfmlwq"
      const response = await fetch(`${"https://api.pinata.cloud"}/ipfs/${cid}`, options);

      console.log(`response`, response);

      if (response.ok) {
        const result = await response.text()

        console.log(`result`, result);
        return result;

        // const airdropData = await response.json();
        // console.log(`airdropData`, airdropData);
        // return airdropData.rows;
      }

      return [];
    },
  });
};
