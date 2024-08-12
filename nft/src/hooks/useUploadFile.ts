import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getRandomB256 } from "fuels";

import { useCreateNFT } from "./useCreateNFT";
import { PINATA_API_URL, PINATA_JWT } from "src/lib";

type UploadFileParams = {
  fileToUpload: File;
  name: string;
  description: string;
  symbol: string;
};

export const useUploadFile = () => {
  const createNFT = useCreateNFT();

  const mutation = useMutation({
    mutationFn: async ({ fileToUpload }: UploadFileParams) => {
      const formData = new FormData();
      const folderCid = getRandomB256();
      formData.append("file", fileToUpload, `${folderCid}/${folderCid}`);

      const metadata = JSON.stringify({ name: folderCid });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({ cidVersion: 0 });
      formData.append("pinataOptions", options);

      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${PINATA_JWT}`,
        },
        body: formData
      };

      const res = await fetch(`${PINATA_API_URL}/pinning/pinFileToIPFS`, fetchOptions);
      const resData = await res.json();
      return resData.IpfsHash;
    },
    onSuccess: (data, { name, description, symbol }) => {
      const newCid = data;
      createNFT.mutateAsync({
        cid: newCid,
        name,
        description,
        symbol,
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return mutation;
};
