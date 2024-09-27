import { PINATA_JWT } from "../lib";
import { AbstractAddress } from "fuels";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export type useUploadAirdropDataParams = {
  contractId: AbstractAddress | string;
  recipients: Array<{ address: string; amount: bigint }>;
};

export const useUploadAirdropData = () => {
  const mutation = useMutation({
    mutationFn: async ({
      contractId,
      recipients,
    }: useUploadAirdropDataParams) => {
      // Custom replacer function to handle BigInt values
      // @ts-expect-error
      const replacer = (key: string, value: any) => {
        return typeof value === "bigint" ? value.toString() : value;
      };
      const airdropData = JSON.stringify({ contractId, recipients }, replacer);

      const formData = new FormData();
      const metaData = JSON.stringify({
        name: "AirdropData",
      });

      formData.append("pinataMetadata", metaData);
      formData.append("data", airdropData);

      const options = JSON.stringify({ cidVersion: 0 });
      formData.append("pinataOptions", options);

      const blob = new Blob([airdropData], { type: "application/json" });
      formData.append("file", blob, "airdropData.json");

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
        // @ts-expect-error will fix it once the build succeeds
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