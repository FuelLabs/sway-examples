import { useGetNFTData } from "hooks/useGetNFTData";
import { getTruncatedAddress } from "src/utils/address";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useSearchParams, useParams } from "react-router-dom";

import { Text } from "components/Text";
import { NFTGrid } from "components/NFTGrid";

export default function Address() {
  const urlParams = useParams();

  const accountAddress = urlParams["address"] as string;

  // The filter expects a value so we pass in an impossible wallet address
  // in the case the user is disconnected
  const { data: nftData, isLoading } = useGetNFTData({
    keyvalues: {
      minter: {
        value: accountAddress,
        op: "eq",
      },
    },
  });

  return (
    <NFTGrid
      isLoading={isLoading}
      nftData={nftData}
      title={
        <Stack>
          <Text variant="h5">NFTs in Account</Text>
          <Box display="flex" alignItems="center">
            <Text variant="h5">{getTruncatedAddress(accountAddress)}</Text>
            <Tooltip title="Open in Explorer">
              <IconButton
                className="text-white"
                target="_blank"
                href={`https://fuel-explorer.vercel.app/account/${accountAddress}`}
              >
                <OpenInNewIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Stack>
      }
    />
  );
}
