import { NFTData } from "hooks/useGetNFTData";
import { Skeleton } from "@mui/material";
import { ReactNode } from "react";
import { NFTCard } from "./NFTCard";

type NFTGridProps = {
  isLoading?: boolean;
  title: ReactNode;
  nftData: NFTData[] | undefined;
};

const NFTGridLoader = () => {
  return (
    <>
      {Array(6)
        .fill(0)
        .map((_, i) => {
          return (
            <Skeleton
              key={i}
              variant="rectangular"
              height="250px"
              className="bg-gray-900"
            />
          );
        })}
    </>
  );
};

export const NFTGrid = ({ isLoading, title, nftData = [] }: NFTGridProps) => {
  return (
    <div className="w-full">
      {title}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <NFTGridLoader />
        ) : (
          nftData.map((nftDatum) => {  
            return (
              <NFTCard
                key={nftDatum.ipfs_pin_hash}
                cid={nftDatum.ipfs_pin_hash}
                fileCid={nftDatum.metadata?.name || ""}
                nftName={nftDatum.metadata.keyvalues?.nftName || ""}
                nftDescription={
                  nftDatum.metadata.keyvalues?.nftDescription || ""
                }
                nftSubId={nftDatum.metadata.keyvalues?.nftSubId || ""}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
