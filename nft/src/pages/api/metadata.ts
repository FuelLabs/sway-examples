import { NextApiRequest, NextApiResponse } from "next";
import pinataSDK from "@pinata/sdk";
import type { PinataMetadata } from "@pinata/sdk";

const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "PUT") {
      const { ipfsHash, metadata } = JSON.parse(req.body);

      if (typeof ipfsHash !== "string") {
        throw new Error("Invalid ipfs hash");
      }
      if (typeof metadata !== "object") {
        throw new Error("Invalid pinata metadata");
      }

      const response = await pinata.hashMetadata(ipfsHash, metadata);
      res.send(response);
    } else {
      res.status(405).send("Method Not Allowed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(`Server error: ${error}`);
  }
}
