import { useGetNFTData } from "hooks/useGetNFTData";
import { NFTGrid } from "components/NFTGrid";


export default function Explore() {
  const { data, isPending } = useGetNFTData();

  return (
    <NFTGrid
      isLoading={isPending}
      nftData={data}
      title={<h3 className="text-xl font-mono mb-5 text-black dark:text-white">Latest NFTs</h3>}
    />
  );
}
