import { useGetNFTData } from "hooks/useGetNFTData";
import { NFTGrid } from "components/NFTGrid";


export default function Explore() {
  const { data, isFetching } = useGetNFTData();

  return (
    <NFTGrid
      isLoading={isFetching}
      nftData={data}
      title={<h3 className="text-3xl font-sans">Latest NFTs</h3>}
    />
  );
}
