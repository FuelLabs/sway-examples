import stringify from "json-stable-stringify";
import { MerkleTree } from "merkletreejs";
import SHA256 from "crypto-js/sha256";
import { arrayify } from "fuels";

import keccak256 from "keccak256";

export const stringifyObj = (obj: Object) => {
  const result = stringify(obj);
  console.log(result);
  return result;
};

export const createMerkleTree = (
  recipients: { address: string; amount: bigint }[]
) => {
  const leaves = recipients.map((recipient) => {
    // Concatenate address and amount
    const leafData = `${recipient.address}:${recipient.amount}`;
    // Hash the concatenated data
    return SHA256(leafData);
  });
  const tree = new MerkleTree(leaves, SHA256);
  const root = tree.getRoot().toString("hex");

  console.log("root", root);
  console.log("leaves", leaves);
  console.log("tree", tree);

  return { leaves, tree, root };
};

// Function to verify a Merkle proof
export const verifyMerkleProof = (
  recipient: { address: string; amount: bigint },
  root: string,
  tree: MerkleTree
) => {
  // Concatenate address and amount in the same format as when creating the Merkle tree
  const leafData = `${recipient.address}:${recipient.amount}`;
  // Hash the concatenated data to get the leaf
  const hashedData = SHA256(leafData);

  // Generate the proof for the hashed leaf
  const proof = tree.getProof(hashedData);

  // Verify the proof against the Merkle root
  const isValid = tree.verify(proof, hashedData, Buffer.from(root, "hex"));

  console.log(
    "proof",
    proof.map((p) => p.data.toString("hex"))
  );
  console.log("isValid", isValid);
  return { isValid, proof: proof.map((p) => p.data.toString("hex")) };
};

export const generateProof = (
  recipient: { address: string; amount: bigint },
  tree: MerkleTree
) => {
  const leafData = `${recipient.address}:${recipient.amount}`;
  const hashedData = SHA256(leafData);
  const proof = tree.getProof(hashedData);
  return proof
    .map((p) => `0x${p.data.toString("hex")}`)
};
