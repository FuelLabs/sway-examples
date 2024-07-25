import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { PINATA_API_URL, PINATA_JWT } from "src/lib";

export const useUnpin = () => {
  const mutation = useMutation({
    mutationFn: async ({ ipfsHash }: { ipfsHash: string }) => {
      const options = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${PINATA_JWT}`,
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        `${PINATA_API_URL}/pinning/unpin/${ipfsHash}`,
        options
      );

      return response;
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return mutation;
};
