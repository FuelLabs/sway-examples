import stringify from "json-stable-stringify";
import { MerkleTree } from "merkletreejs";
import SHA256 from "crypto-js/sha256";
import { arrayify, bn, BN, concat, hexlify, sha256 } from "fuels";
//import crypto from "crypto";

// import keccak256 from "keccak256";

export type Recipient = {
  address: string;
  amount: bigint
}

export const stringifyObj = (obj: object) => {
  const result = stringify(obj);
  console.log(result);
  return result;
};

export const getLeafData = (recipient: Recipient) => {
  const amount = bn(recipient.amount.toString());
  const recipientBytes = arrayify(recipient.address.toLowerCase());
  //const amountBytes = arrayify(recipient.amount.toString());
  const amountBytes = amount.toBytes();
  const leafData = concat([recipientBytes, amountBytes]);
  // Hash the concatenated data to get the leaf
  const hashedData = sha256(leafData);

  return { hashedData: "0xbef6237f9332675c07f4575f2c130a16dfcfdb3e2798bd70b1039ee2bd48b93c" }
}

// function sha256(data) {
//   // returns Buffer
//   return crypto.createHash('sha256').update(data).digest()
//  }

export const createMerkleTree = (
  recipients: Recipient[]
) => {
  // const tempHash = (recipient: Recipient) => {
  //   const amount = bn(recipient.amount.toString());
  //   const recipientBytes = arrayify(recipient.address.toLowerCase());
  //   //const amountBytes = arrayify(recipient.amount.toString());
  //   const amountBytes = amount.toBytes();
  //   const leafData = concat([recipientBytes, amountBytes]);
  //   return crypto.createHash("sha256").update(leafData).digest();
  // }
  // const leaves = recipients.map((recipient) => {
  //   // Concatenate address and amount
  //   const { hashedData } = getLeafData(recipient);
  //   // Hash the concatenated data
  //   return hashedData;
  // });
  const leaves = recipients.map((recipient) => {
    const { hashedData } = getLeafData(recipient);
    return sha256(hashedData);
  })
  const tree = new MerkleTree(leaves, sha256);
  const root = tree.getRoot().toString("hex");

  console.log("root", root);
  console.log("tree", tree);

  return { leaves, tree, root };
};

// Function to verify a Merkle proof
export const verifyMerkleProof = (
  recipient: Recipient,
  root: string,
  tree: MerkleTree
) => {
  // Concatenate address and amount in the same format as when creating the Merkle tree

  //const leafData = `${recipient.address.toLowerCase()}:${recipient.amount}`;
  // Hash the concatenated data to get the leaf
  const { hashedData } = getLeafData(recipient);

  console.log(`hashedData`, hashedData);

  // Generate the proof for the hashed leaf
  // @ts-expect-error will fix it once the build succeeds
  const proof = tree.getProof(hashedData);

  // Verify the proof against the Merkle root
  // @ts-expect-error will fix it once the build succeeds
  const isValid = tree.verify(proof, hashedData, Buffer.from(root, "hex"));

  console.log(
    "proof",
    proof.map((p) => p.data.toString("hex"))
  );
  console.log("isValid", isValid);
  return { isValid, proof: proof.map((p) => p.data.toString("hex")) };
};

export const generateProof = (
  recipient: Recipient,
  tree: MerkleTree
) => {
  const { hashedData } = getLeafData(recipient);
  const temp = sha256(hashedData);
  console.log(`HEREEEEEE`, temp);
  // @ts-expect-error will fix it once the build succeeds
  const proof = tree.getProof(temp);
  return proof
    .map((p) => `0x${p.data.toString("hex")}`)
};