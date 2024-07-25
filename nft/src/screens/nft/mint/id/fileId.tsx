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
import { useParams, useSearchParams } from "react-router-dom";

import { GATEWAY_URL } from "src/lib";

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

  const { totalSupply, isLoading: isTotalSupplyLoading } =
    useTotalSupply(subId);
  const { isConnected } = useActiveWallet();

  const { nftData, isLoading: isNFTDataLoading } = useGetNFTData({
    keyvalues: {
      nftSubId: {
        value: subId,
        op: "eq",
      },
    },
  });

  useEffect(() => {
    if (nftData.length && nftData[0].metadata.keyvalues.minter) {
      setMinterAddress(nftData[0].metadata.keyvalues.minter);
    }
  }, [nftData]);

  const mint = useMint();

  const isLoading = isTotalSupplyLoading || isNFTDataLoading;

  return (
    <Stack
      justifyContent="center"
      spacing={3}
      className={clsx(
        "gradient-border",
        "rounded-xl",
        "bg-gradient-to-b",
        "from-zinc-900",
        "to-zinc-950/80",
        "px-2",
        "py-8",
        "sm:w-3/4",
        "md:w-1/2"
      )}
    >
      <Box display="flex" alignSelf="center">
        <NFTImage
          src={`${GATEWAY_URL}/ipfs/${urlParams['id']}/${urlParams["fileId"]}`}
          className="w-80 h-80 lg:w-96 lg:h-96"
        />
      </Box>
      <Stack className="px-4" spacing={2}>
        <Text variant="h5">{nftName}</Text>
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
          <Text>
            NFT minted by{" "}
            <Link href={`/nft/collection/${minterAddress}`}>
              {getTruncatedAddress(
                nftData[0].metadata.keyvalues.minter as string
              )}
            </Link>
          </Text>
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
