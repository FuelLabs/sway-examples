import { useQuery } from "@tanstack/react-query";
import type { PinataMetadataFilter, PinataPin } from "@pinata/sdk";

import { PINATA_API_URL, PINATA_JWT } from "src/lib";
import { NFTQueryKeys } from "src/queryKeys";

// We need this custom type bc pinata does not return the same type
// as the type they have defined in ts
export type NFTData = Omit<PinataPin, "metadata"> & {
  metadata: { name?: string; keyvalues: { [key: string]: string | undefined } };
};

export const useGetNFTData = (filter?: PinataMetadataFilter, skipFetch?: boolean) => {
  return useQuery<NFTData[]>({
    queryKey: [NFTQueryKeys.nftData, filter, skipFetch],
    queryFn: async () => {
      if (skipFetch) {
        return [];
      }

      const options = {
        method: "GET",
        headers: { Authorization: `Bearer ${PINATA_JWT}` },
      };

      const metadata = filter ? `&metadata[keyvalues]=${JSON.stringify(filter?.keyvalues)}` : "";

      const response = await fetch(
        `${PINATA_API_URL}/data/pinList?status=pinned${metadata}`,
        options
      );

      if (response.ok) {
        const nftData = await response.json();
        return nftData.rows;
      }

      return [];
    },
  });
};
