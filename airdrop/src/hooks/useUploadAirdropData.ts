import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { GATEWAY_URL, PINATA_JWT } from "@/lib";

type UploadRecipientDataParams = {
  recipients: Array<{ address: string; amount: number }>;
};

export const useUploadAirdropData = () => {
  const mutation = useMutation({
    mutationFn: async ({ recipients }: UploadRecipientDataParams) => {
      const recipientData = JSON.stringify(recipients);

      const formData = new FormData();
      const metaData = JSON.stringify({
        name: "Airdrop Recipients",
      });

      formData.append("pinataMetadata", metaData);
      formData.append("data", recipientData);

      const options = JSON.stringify({ cidVersion: 0 });
      formData.append("pinataOptions", options);

      const blob = new Blob([recipientData], { type: "application/json" });
      formData.append("file", blob, "recipients.json");

      console.log({ PINATA_JWT });

      const fetchOptions = {
        method: "POST",
        body: formData,
        headers: {
          "pinata_api_key": process.env.NEXT_PUBLIC_API_Key,
          "pinata_secret_api_key": process.env.NEXT_PUBLIC_API_Secret,
          Authorizaton: `Bearer ${PINATA_JWT}`,
        },
      };

      const res = await fetch(
        "https://api.pinata.cloud" + "/pinning/pinFileToIPFS",
        fetchOptions
      );
      const resData = await res.json();
      return resData.IpfsHash;
    },
    onSuccess: (data) => {
      toast.success(`Data uploaded successfully! IPFS Hash: ${data}`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return mutation;
};


