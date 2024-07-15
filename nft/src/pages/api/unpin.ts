import { NextApiRequest, NextApiResponse } from "next";
import pinataSDK from "@pinata/sdk";

const pinata = new pinataSDK({ pinataJWTKey: process.env.PINATA_JWT });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { ipfsHash } = JSON.parse(req.body);

      const response = await pinata.unpin(ipfsHash);
      return res.send(response);
    } else {
      res.status(405).send("Method Not Allowed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(`Server Error: ${error}`);
  }
}
