import { useNavigate } from "react-router-dom"; 

import { GATEWAY_URL, VITE_BASE_URL } from "src/lib";
import { NFTImage } from "./NFTImage";
import { Text } from "./Text";

type NFTCardProps = {
  cid: string;
  fileCid: string;
  nftName: string;
  nftDescription: string;
  nftSubId: string;
  showDescription?: boolean;
};

export const NFTCard = ({
  cid,
  fileCid,
  nftName,
  nftDescription,
  nftSubId,
  showDescription,
}: NFTCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white/[.08] hover:bg-white/10 group transition-all shadow-elevation-1 duration-200 hover:-translate-y-1 hover:shadow-elevation-2 rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => {
        navigate(
          `${VITE_BASE_URL}/nft/mint/${cid}/${fileCid}?nftName=${nftName}&nftDescription=${nftDescription}&nftSubId=${nftSubId}`
        );
      }}
    >
      <NFTImage src={`${GATEWAY_URL}/ipfs/${cid}/${fileCid}`}>
        <div className="px-6 py-4 bg-black/40 backdrop-blur absolute bottom-0 w-full opacity-100 group-hover:opacity-0 transition-opacity">
          <span className="text-lg font-mono text-white capitalize">{nftName}</span>
          {showDescription && <Text>{nftDescription}</Text>}
        </div>
      </NFTImage>
    </div>
  );
};
