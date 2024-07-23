import { useWallet } from "@fuels/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { getRandomB256 } from "fuels";
import { useNavigate } from "react-router-dom";
import { NFTContractAbi__factory } from "src/contract-types";
import { AssetIdInput } from "src/contract-types/contracts/NFTContractAbi";
import { createAssetId } from "src/utils/assetId";
import { useUpdateMetadata } from "./useUpdateMetadata";
import { useUnpin } from "./useUnpin";
import { CONTRACT_ID } from "src/lib";
import { NFTQueryKeys } from "src/queryKeys";

type CreateNFT = {
  cid: string;
  name: string;
  symbol: string;
  description: string;
};

export const useCreateNFT = () => {
  const { wallet } = useWallet();
  const updateMetadata = useUpdateMetadata();
  const unpin = useUnpin();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [NFTQueryKeys.createNFT],
    mutationFn: async ({ cid, name, symbol }: CreateNFT) => {
      if (!wallet)
        throw new Error(
          `Cannot create NFT if wallet is ${wallet}.  Please connect your wallet.`
        );

      if (!cid) throw new Error(`cid is ${cid}`);

      const contract = NFTContractAbi__factory.connect(CONTRACT_ID, wallet);

      let contractCalls = [];
      const subId = getRandomB256();
      const assetId: AssetIdInput = createAssetId(subId, CONTRACT_ID);
      contractCalls.push(
        contract.functions.set_metadata(assetId, "image", { String: cid })
      );
      contractCalls.push(contract.functions.set_name(assetId, name));
      contractCalls.push(contract.functions.set_symbol(assetId, symbol));
      await contract.multiCall(contractCalls).call();
      return subId;
    },
    onSuccess: (data, { cid, name, description }) => {
      updateMetadata.mutateAsync({
        ipfsHash: cid,
        metadata: {
          keyvalues: {
            nftSubId: data,
            nftName: name,
            nftDescription: description,
          },
        },
      });
      toast.success("NFT successfully created.");
      navigate("/nft");
    },
    onError: (err, { cid }) => {
      // TODO: if the ts sdk erroneously throws an error
      // this will delete the ipfs image
      unpin.mutate({ ipfsHash: cid });
      queryClient.invalidateQueries({ queryKey: [NFTQueryKeys.nftData] });
      console.error(err.message);
      toast.error(err.message);
    },
  });

  return mutation;
};
