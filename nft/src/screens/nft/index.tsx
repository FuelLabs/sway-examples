import { useGetNFTData } from "hooks/useGetNFTData";
import { NFTGrid } from "components/NFTGrid";


export default function Explore() {
  console.log("EXLPOREEEEEE");
  const { data, isPending } = useGetNFTData();

  return (
    <NFTGrid
      isLoading={isPending}
      nftData={data}
      title={<h3 className="text-xl font-mono mb-5 text-white">Latest NFTs</h3>}
    />
  );
}
