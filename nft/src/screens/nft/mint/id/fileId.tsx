import { Box, Stack } from "@mui/material";
import { Button } from "components/Button";
import { useMint } from "hooks/useMint";
import { useTotalSupply } from "hooks/useTotalSupply";
import clsx from "clsx";
import { NFTImage } from "components/NFTImage";
import { useActiveWallet } from "hooks/useActiveWallet";
import { useGetNFTData } from "hooks/useGetNFTData";
import { Link } from "components/Link";
import { getTruncatedAddress } from "src/utils/address";
import { Text } from "components/Text";
import { useEffect, useState } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";

import { GATEWAY_URL, VITE_BASE_URL } from "src/lib";

const MAX_INITIAL_DESCRIPTION = 256;

const NFTDescription = ({ nftDescription }: { nftDescription: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const showReadMore = nftDescription.length > MAX_INITIAL_DESCRIPTION;

  return (
    <>
      {showReadMore ? (
        <Stack spacing={2}>
          {isExpanded ? (
            <>
              <Text>{nftDescription}</Text>
              <Button onClick={() => setIsExpanded(false)}>Show less</Button>
            </>
          ) : (
            <>
              <Text>{nftDescription.slice(0, MAX_INITIAL_DESCRIPTION)}...</Text>
              <Button onClick={() => setIsExpanded(true)}>Show more</Button>
            </>
          )}
        </Stack>
      ) : (
        <Text>{nftDescription}</Text>
      )}
    </>
  );
};

export default function Mint() {
  const urlParams = useParams();
  const [searchParams] = useSearchParams();
  const [minterAddress, setMinterAddress] = useState("");

  const subId = (searchParams.get("nftSubId") || "dud") as string;
  const nftName = searchParams.get("nftName") as string;
  const nftDescription = searchParams.get("nftDescription") as string;

  const { data: totalSupply, isLoading: isTotalSupplyLoading } =
    useTotalSupply(subId);
  const { isConnected } = useActiveWallet();

  const { data: nftData, isLoading: isNFTDataLoading, refetch: refetchNFTData } = useGetNFTData({
    keyvalues: {
      nftSubId: {
        value: subId,
        op: "eq",
      },
    },
  });

  useEffect(() => {
    if (totalSupply) {
      refetchNFTData();
    }
  }, [totalSupply]);

  useEffect(() => {
    if (nftData?.length && nftData[0].metadata.keyvalues.minter) {
      setMinterAddress(nftData[0].metadata.keyvalues.minter);
    }
  }, [nftData]);

  const mint = useMint();

  const isLoading = isTotalSupplyLoading || isNFTDataLoading;

  return (
    <Stack
      justifyContent="center"
      spacing={3}
      className={clsx("gradient-border", "rounded-2xl overflow-hidden", "pb-8")}
    >
      <NFTImage
        src={`${GATEWAY_URL}/ipfs/${urlParams["id"]}/${urlParams["fileId"]}`}
        cover={false}
      />
      <Stack className="px-4" spacing={2}>
        <h5 className="text-2xl dark:text-white text-black font-mono">
          {nftName}
        </h5>
        {!totalSupply && !isLoading ? (
          <Button
            onClick={() => {
              mint.mutate({
                nftSubId: subId,
                cid: urlParams["id"] as string,
                nftName,
                nftDescription,
              });
            }}
            className="w-48"
            disabled={!isConnected || mint.isPending}
          >
            {mint.isPending ? "Minting..." : "Mint"}
          </Button>
        ) : minterAddress ? (
          <p className="text-sm text-zinc-900 dark:text-white/70">
            NFT minted by{" "}
            <Link href={`${VITE_BASE_URL}/nft/collection/${minterAddress}`}>
              {getTruncatedAddress(
                nftData?.[0].metadata.keyvalues.minter as string
              )}
            </Link>
          </p>
        ) : (
          <Text>Loading...</Text>
        )}
        {searchParams.get("nftDescription") && (
          <NFTDescription nftDescription={nftDescription} />
        )}
      </Stack>
    </Stack>
  );
}
