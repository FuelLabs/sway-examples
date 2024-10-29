import stringify from "json-stable-stringify";
import { MerkleTree } from "merkletreejs";

import {
  arrayify,
  B256Coder,
  BigNumberCoder,
  bn,
  BN,
  concat,
  hexlify,
  sha256,
  toHex,
  TupleCoder
} from "fuels";
//import crypto from "crypto";
import { calcRoot, constructTree, getProof,  } from "@fuel-ts/merkle"
import { object } from "zod";

// import keccak256 from "keccak256";

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
  // const leafCoder = new TupleCoder([
  //   new B256Coder(),
  //   new BigNumberCoder("u64"),
  // ]);

// const tupleCoder = new TupleCoder([stringCoder1, stringCoder2]);
  // const result = (obj.address, obj.amount.toString());
  // const addressBytes = arrayify(obj.address);

  // const result = leafCoder.encode([
  //  addressBytes,
  //   bn(obj.amount.toString()),
  // ]);
  console.log(result);
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

  // const result = stringifyObj(recipient);


  // Hash the concatenated data to get the leaf
  const hashedData = sha256(result);

  // console.log(`hashedData`, hashedData);

  return hashedData;
};

// function sha256(data) {
//   // returns Buffer
//   return crypto.createHash('sha256').update(data).digest()
//  }

export const createMerkleTree = (recipients: Recipient[]) => {
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
    const leafData = getLeafData(recipient);
    return  leafData;
  });
  const tree = constructTree(leaves);
  // const root = tree.getRoot().toString("hex");

  const root = calcRoot(leaves);
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
  const hashedData = getLeafData(recipient);

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

export const generateProof = (recipient: Recipient, tree: any, leafIndex: number) => {
  const hashedData = getLeafData(recipient);
  // const temp = sha256(hashedData);
  // console.log(`HEREEEEEE`, temp);
  // @ts-expect-error will fix it once the build succeeds
  const proof = getProof(tree, leafIndex);
  // return proof.map((p) => `0x${p.data.toString("hex")}`);
  return proof;
};
