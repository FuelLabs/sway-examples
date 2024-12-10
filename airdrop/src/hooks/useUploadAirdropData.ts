import { getTruncatedAddress } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { AbstractAddress } from "fuels";
import toast from "react-hot-toast";
import { PINATA_JWT } from "../lib";


export type useUploadAirdropDataParams = {
  contractId: AbstractAddress | string;
  recipients: Array<{ address: string; amount: bigint }>;
};

interface PinataFetchOptions {
  method: string;
  body: FormData;
  headers: {
    pinata_api_key?: string;
    pinata_secret_api_key?: string;
    Authorization: string;
  };
}

export const useUploadAirdropData = () => {
  const mutation = useMutation({
    mutationFn: async ({
      contractId,
      recipients,
    }: useUploadAirdropDataParams) => {
      // Custom replacer function to handle BigInt values
      const replacer = (_key: string, value: unknown): string | unknown => {
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

      const fetchOptions: PinataFetchOptions = {
        method: "POST",
        body: formData,
        headers: {
          pinata_api_key: process.env.VITE_API_Key,
          pinata_secret_api_key: process.env.VITE_API_Secret,
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
      toast.success(`ContractId uploaded successfully! IPFS Hash: ${getTruncatedAddress(data)}`);
    },
    onError: (err) => {
      console.error("Error while uploading contractId to ipfs: ", err.message);
      toast.error(err.message);
    },
  });

  return mutation;
};