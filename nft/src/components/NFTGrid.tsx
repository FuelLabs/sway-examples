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
      {Array(9)
        .fill(0)
        .map((_, i) => {
          return (
            <div key={i} className="rounded-2xl overflow-hidden">
              <div className="h-0 pb-[76.6667%] relative">
                <Skeleton
                  sx={{ bgcolor: 'rgba(255, 255, 255, 0.08)', position: 'absolute' }}
                  variant="rounded"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

export const NFTGrid = ({ isLoading, title, nftData = [] }: NFTGridProps) => {
  return (
    <div className="w-full">
      {title}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
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
