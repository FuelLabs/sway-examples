import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { NFTQueryKeys } from "src/queryKeys";
import { PINATA_API_URL, PINATA_JWT } from "src/lib";

// WARNING: although this can take arbitrary metadata
// it overwrites the past metadata
export const useUpdateMetadata = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      metadata,
      ipfsHash,
    }: {
      metadata: { name?: string; keyvalues?: { [key: string]: string } };
      ipfsHash: string;
    }) => {
      let putData = JSON.stringify({
        ipfsPinHash: ipfsHash,
        keyvalues: metadata.keyvalues,
      });
      const options = {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${PINATA_JWT}`,
          "Content-Type": "application/json",
        },
        body: putData
      };

      const response = await fetch(
        `${PINATA_API_URL}/pinning/hashMetadata`,
        options
      );

      return response;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [NFTQueryKeys.nftData] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return mutation;
};
