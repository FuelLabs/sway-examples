import { useGetNFTData } from "hooks/useGetNFTData";
import { Text } from "components/Text";
import { NFTGrid } from "components/NFTGrid";


export default function Explore() {
  const { nftData, isLoading } = useGetNFTData();

  return (
    <NFTGrid
      isLoading={isLoading}
      nftData={nftData}
      title={<Text variant="h3">Latest NFTs</Text>}
    />
  );
}
