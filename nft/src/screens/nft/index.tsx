import { useGetNFTData } from "hooks/useGetNFTData";
import { NFTGrid } from "components/NFTGrid";


export default function Explore() {
  const { data, isFetching } = useGetNFTData();

  return (
    <NFTGrid
      isLoading={isFetching}
      nftData={data}
      title={<h3 className="text-xl font-mono mt-2 mb-5 text-white">Latest NFTs</h3>}
    />
  );
}
