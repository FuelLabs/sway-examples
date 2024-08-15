import { useActiveWallet } from "hooks/useActiveWallet";
import { useGetNFTData } from "hooks/useGetNFTData";
import { Text } from "components/Text";
import { NFTGrid } from "components/NFTGrid";

export default function Collection() {
  const { wallet, isPending: isWalletPending } = useActiveWallet();

  // The filter expects a value so we pass in an impossible wallet address
  // in the case the user is disconnected
  const { data: nftData, isLoading: isNFTDataPending } = useGetNFTData({
    keyvalues: {
      minter: {
        value: wallet?.address.toB256() || "dud",
        op: "eq",
      },
    },
  }, !wallet);

  const isPending = isNFTDataPending || isWalletPending;

  return (
    <NFTGrid
      isLoading={isPending}
      nftData={nftData}
      title={<Text variant="h5">Your NFTs</Text>}
    />
  );
}
