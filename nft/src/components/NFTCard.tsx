import { Card, CardContent, CardActionArea, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; 

import { GATEWAY_URL } from "src/lib";
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
    <Card
      variant="outlined"
      className="rounded-lg"
      sx={{
        padding: "18px",
        backgroundColor: "black",
        borderColor: "#1e1e1e",
        borderWidth: "1px",
      }}
    >
      <CardActionArea
        onClick={() => {
          navigate(
            `/nft/mint/${cid}/${fileCid}?nftName=${nftName}&nftDescription=${nftDescription}&nftSubId=${nftSubId}`
          );
        }}
      >
        <Box display="flex" justifyContent="center">
          <NFTImage src={`${GATEWAY_URL}/ipfs/${cid}/${fileCid}`} />
        </Box>
        <CardContent sx={{ paddingBottom: "0px", paddingLeft: "0px" }}>
          <span className="text-lg font-mono text-white">{nftName}</span>
          {showDescription && <Text>{nftDescription}</Text>}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
