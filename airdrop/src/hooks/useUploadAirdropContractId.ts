import { PINATA_JWT } from "@/lib";
import { useMutation } from "@tanstack/react-query";
import { AbstractAddress } from "fuels";
import toast from "react-hot-toast";

export const useUploadContractId = () => {
  const mutation = useMutation({
    mutationFn: async ({
      contractId,
    }: {
      contractId: AbstractAddress | string;
    }) => {
      const contractData = JSON.stringify({ contractId });

      const formData = new FormData();
      const metaData = JSON.stringify({
        name: "Airdrop ContractId",
      });

      formData.append("pinataMetadata", metaData);
      formData.append("data", contractData);

      const options = JSON.stringify({ cidVersion: 0 });
      formData.append("pinataOptions", options);

      const blob = new Blob([contractData], { type: "application/json" });
      formData.append("file", blob, "contractId.json");

      const fetchOptions = {
        method: "POST",
        body: formData,
        headers: {
          pinata_api_key: process.env.NEXT_PUBLIC_API_Key,
          pinata_secret_api_key: process.env.NEXT_PUBLIC_API_Secret,
          Authorization: `Bearer ${PINATA_JWT}`,
        },
      };

      const res = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        fetchOptions
      );
      const resData = await res.json();
      return resData.IpfsHash;
    },
    onSuccess: (data) => {
      toast.success(`ContractId uploaded successfully! IPFS Hash: ${data}`);
    },
    onError: (err) => {
      console.error("Error while uploading contractId to ipfs: ", err.message);
      toast.error(err.message);
    },
  });

  return mutation;
};
