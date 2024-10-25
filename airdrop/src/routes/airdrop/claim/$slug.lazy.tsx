import { createLazyFileRoute, useParams } from "@tanstack/react-router";

// import { IdentityInput } from "@/contract-types/aidrop-contracts/contracts/AirdropContract";
// import { Vec } from "@/contract-types/aidrop-contracts/contracts/common";
// import { useClaimAirdrop } from "@/hooks/useClaimAirdrop";
// import { createMerkleTree, generateProof } from "@/utils/merkleTrees";
import { useAccount, useWallet } from "@fuels/react";
import z from "zod";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatUnits } from "viem";
import {
  createMerkleTree,
  generateProof,
  Recipient,
  verifyMerkleProof,
} from "../../../utils/merkleTrees";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { useClaimAirdrop } from "../../../hooks/useClaimAirdrop";
import {
  useGetEndTime,
  useGetIsPaused,
  useGetMerkleRoot,
  useGetNumLeaves,
  useGetOwner,
} from "../../../hooks/useGetAirdropContractData";
import { DateTime } from "fuels";
import { Button as ShadcnButton } from "../../../components/ui/button";
import { useInitializeAirdrop } from "@/hooks/useInitializeAirdrop";

// import { useGetOwner } from "@/hooks/useGetAirdropContractData";

export const Route = createLazyFileRoute("/airdrop/claim/$slug")({
  // validateSearch: z.array(z.object({ address: z.string(), amount: z.string() })),
  component: () => <ClaimAirdrop />,
});

export type RecipientData = Array<Recipient>;

function ClaimAirdrop() {
  const { slug } = useParams({ strict: false });
  // @ts-expect-error will fix it once the build succeeds
  const { recipient } = Route.useSearch();
  const contractId = slug as string;
  const recipients = recipient as RecipientData;
  // const recipients = JSON.parse(useSearchParams().get('recipient') as string)
  // const { data: airdropData } = useGetAirdropData();
  const { mutate } = useClaimAirdrop();
  const [possibleRecipient, setPossibleRecipient] = useState<Recipient>();
  const [treeIndex, setTreeIndex] = useState<number>();
  const { wallet } = useWallet();

  const { data: owner } = useGetOwner({ contractId });
  const { data: endTime } = useGetEndTime({ contractId });
  const { data: isPaused } = useGetIsPaused({ contractId });
  const { data: merkleRoot } = useGetMerkleRoot({ contractId });
  const { data: numLeaves } = useGetNumLeaves({ contractId });
  const { mutate: initialize, data: initializeData } = useInitializeAirdrop();

  // console.log(endTime?.toNumber())

  useEffect(() => {
    console.log({ wallet });
    if (recipients && wallet) {
      (recipients as RecipientData)?.find((recipient, index) => {
        const temp =
          recipient.address.toLowerCase() === wallet.address.toHexString();
        if (temp) {
          setPossibleRecipient(recipient);
          console.log({ recipient });
          setTreeIndex(index);
        }
        return temp;
      });
    }
  }, [wallet, recipients]);

  const claimHandler = async () => {
    if (!wallet) {
      toast.error("Wallet not connected!");
      return;
    }

    if (!possibleRecipient) {
      toast.error("You are not eligible for the airdrop");
      return;
    }

    const { tree, root, leaves } = createMerkleTree(
      recipients as RecipientData
    );
    // const { isValid } = verifyMerkleProof(possibleRecipient, root, tree);

    // console.log("isValid", isValid);
    const proof = generateProof(possibleRecipient, tree);
    console.log("root", root);
    console.log("tree", tree);
    console.log("proof:", proof);
    console.log(`treeIndex`, treeIndex);
    mutate({
      contractId,
      amount: possibleRecipient?.amount as unknown as number,
      account: wallet?.address.toB256() as unknown as string,
      treeIndex: treeIndex as number,
      proof,
      recipient: {
        Address: { bits: wallet?.address.toB256() },
      },
    });
  };

  return (
    <div className="w-full text-center flex flex-col justify-center">
      <Text variant="h4" sx={{ paddingBottom: "28px", textAlign: "center" }}>
        Claim Airdrop
      </Text>
      {!wallet ? (
        <Text>Please connect your wallet to claim the airdrop</Text>
      ) : !possibleRecipient ? (
        <Text>You are not eligible for the airdrop</Text>
      ) : (
        <>
          <Text textAlign={"center"}>
            Your Allocations: {Number(formatUnits(possibleRecipient.amount, 9))}
          </Text>
          <ShadcnButton
            onClick={claimHandler}
            className="my-8 mx-auto text-center"
          >
            Claim Airdrop
          </ShadcnButton>
        </>
      )}

      <Text textAlign={"center"}>Contract Owner: {owner?.Address?.bits}</Text>
      <Text textAlign={"center"}>
        End time:{" "}
        {DateTime.fromTai64(endTime?.toString() ?? "").toLocaleDateString()}
      </Text>
      <Text textAlign={"center"}>Paused: {isPaused?.toString()}</Text>
      <Text textAlign={"center"}>Merkle Root: {merkleRoot?.toString()}</Text>
      <Text textAlign={"center"}>
        Number of Leaves: {numLeaves?.toString()}
      </Text>
      {/* {owner && owner?.Address?.bits === wallet?.address.toB256() && ( */}
      <ShadcnButton
        className="my-8 mx-auto text-center"
        onClick={() => {
          initialize({ contractId });
        }}
      >
        Initialize Airdrop
      </ShadcnButton>
      {/* )} */}
    </div>
  );
}
