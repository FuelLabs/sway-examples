import { useActiveWallet } from "hooks/useActiveWallet";
import { useGetNFTData } from "hooks/useGetNFTData";
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
      title={<h3 className="text-xl font-mono mb-5 text-black dark:text-white">Your NFTs</h3>}
    />
  );
}
