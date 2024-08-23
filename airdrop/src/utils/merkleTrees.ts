import stringify from "json-stable-stringify";
import { MerkleTree } from "merkletreejs";
import SHA256 from "crypto-js/sha256";

import keccak256 from "keccak256"

export const stringifyObj = (obj: Object) => {
  const result = stringify(obj);
  console.log(result);
  return result;
};

export const createMerkleTree = (
  recipients: { address: string; amount: bigint }[]
) => {
  const leaves = recipients.map((obj) => SHA256(obj));
  const tree = new MerkleTree(leaves, SHA256);
  const root = tree.getRoot().toString("hex");

  console.log("root", root);
  console.log("leaves", leaves);
  console.log("tree", tree);

  return { leaves, tree, root };
};

export const verifyMerkleProof = (
  data: any,
  root: string,
  tree: MerkleTree
) => {
  const hashedData = SHA256(data);
  const proof = tree.getProof(hashedData);
  const isValid = tree.verify(proof, hashedData, root);

  console.log("proof", proof);
  console.log("isValid", isValid);
  return {isValid, proof};
};
