import stringify from "json-stable-stringify";
import { MerkleTree } from "merkletreejs";

import { calcRoot, constructTree, getProof, } from "@fuel-ts/merkle";
import {
  B256Coder,
  BigNumberCoder,
  bn,
  sha256,
  TupleCoder
} from "fuels";
import Node from "node_modules/@fuel-ts/merkle/dist/binary/types/node";

export type Recipient = {
  address: string;
  amount: bigint;
};

export const stringifyObj = (obj: Recipient) => {
  const temp = {
    ...obj,
    amount: bn(obj.amount.toString()),
  }
  const result = stringify(temp);

  return result;
};

export const getLeafData = (recipient: Recipient) => {

  const leafTuple = [recipient.address, recipient.amount];

  const leafCoder = new TupleCoder([
    new B256Coder(),
    new BigNumberCoder("u64"),
  ]);

  const result = leafCoder.encode([
    recipient.address,
    bn(recipient.amount.toString()),
  ]);

  const hashedData = sha256(result);

  return hashedData;
};

export const createMerkleTree = (recipients: Recipient[]) => {
  const leaves = recipients.map((recipient) => {
    const leafData = getLeafData(recipient);
    return  leafData;
  });
  const tree = constructTree(leaves);

  const root = calcRoot(leaves);

  return { leaves, tree, root };
};

// Function to verify a Merkle proof
export const verifyMerkleProof = (
  recipient: Recipient,
  root: string,
  tree: MerkleTree
) => {
  // Concatenate address and amount in the same format as when creating the Merkle tree

   const hashedData = getLeafData(recipient);

  // Generate the proof for the hashed leaf
  const proof = tree.getProof(hashedData);

  // Verify the proof against the Merkle root
  const isValid = tree.verify(proof, hashedData, Buffer.from(root, "hex"));
  
  return { isValid, proof: proof.map((p) => p.data.toString("hex")) };
};

export const generateProof = (tree: Node[], leafIndex: number) => {
  const proof = getProof(tree, leafIndex);
  return proof;
};
