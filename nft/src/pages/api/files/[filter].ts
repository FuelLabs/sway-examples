import pinataSDK, { PinataMetadataFilter } from "@pinata/sdk";
import { NextApiRequest, NextApiResponse } from "next";

const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT });

export const getNFTMetadata = async (filter?: PinataMetadataFilter) => {
  try {
    const metadata = filter;
    // TODO: support pagination for an explore page
    const nftData = await pinata.pinList({ metadata, status: "pinned" });
    return nftData;
  } catch {
    throw new Error("Could not fetch nft data from ipfs");
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const filter = req.query.filter;
      if (
        (typeof filter !== "string" && typeof filter !== undefined) ||
        Array.isArray(filter)
      ) {
        throw new Error(`Invalid filter ${filter}`);
      }
      const metadata = JSON.parse(filter || "");
      const nftData = await getNFTMetadata(metadata);
      res.json(nftData.rows);
    } else {
      res.status(405).send("Method Not Allowed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}
