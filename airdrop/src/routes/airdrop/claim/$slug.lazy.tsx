import { createLazyFileRoute, useParams } from "@tanstack/react-router";

// import { IdentityInput } from "@/contract-types/aidrop-contracts/contracts/AirdropContract";
// import { Vec } from "@/contract-types/aidrop-contracts/contracts/common";
// import { useClaimAirdrop } from "@/hooks/useClaimAirdrop";
// import { createMerkleTree, generateProof } from "@/utils/merkleTrees";
import { useWallet } from "@fuels/react";
import z from "zod";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatUnits } from "viem";
import { createMerkleTree, generateProof } from "../../../utils/merkleTrees";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { useClaimAirdrop } from "../../../hooks/useClaimAirdrop";
import {
  useGetEndTime,
  useGetIsPaused,
  useGetMerkleRoot,
  useGetOwner,
} from "../../../hooks/useGetAirdropContractData";
import { DateTime } from "fuels";

// import { useGetOwner } from "@/hooks/useGetAirdropContractData";

export const Route = createLazyFileRoute("/airdrop/claim/$slug")({
  // validateSearch: z.array(z.object({ address: z.string(), amount: z.string() })),
  component: () => <ClaimAirdrop />,
});

export type RecipientData = Array<{ address: string; amount: bigint }>;

function ClaimAirdrop() {
  const { slug } = useParams({ strict: false });
  // @ts-expect-error will fix it once the build succeeds
  const { recipient } = Route.useSearch();
  console.log("recipient", recipient);
  const contractId = slug as string;
  const recipients = recipient as RecipientData;
  console.log("recipients", recipients);
  // const recipients = JSON.parse(useSearchParams().get('recipient') as string)
  // const { data: airdropData } = useGetAirdropData();
  const { mutate } = useClaimAirdrop();
  const [isRecipient, setIsRecipient] = useState<{
    address: string;
    amount: bigint;
  }>();
  const [treeIndex, setTreeIndex] = useState<number>();
  const { wallet } = useWallet();

  console.log("recipients", recipients);

  const { data: owner } = useGetOwner({ contractId });
  const { data: endTime } = useGetEndTime({ contractId });
  const { data: isPaused } = useGetIsPaused({ contractId });
  const { data: merkleRoot } = useGetMerkleRoot({ contractId });

  useEffect(() => {
    console.log({ wallet });
    if (recipients && wallet) {
      (recipients as RecipientData)?.find((recipient, index) => {
        const temp =
          recipient.address === (wallet?.address.toB256() as unknown as string);
        if (temp) {
          setIsRecipient(recipient);
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

    if (!isRecipient) {
      toast.error("You are not eligible for the airdrop");
      return;
    }

    const { tree } = createMerkleTree(recipients as RecipientData);
    const proof = generateProof(isRecipient, tree);

    console.log("proof:", proof);
    mutate({
      contractId,
      amount: isRecipient?.amount as unknown as number,
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
      ) : !isRecipient ? (
        <Text>You are not eligible for the airdrop</Text>
      ) : (
        <>
          <Text textAlign={"center"}>
            Your Allocations: {Number(formatUnits(isRecipient.amount, 9))}
          </Text>
          <Button onClick={claimHandler} className="my-8 mx-auto text-center">
            Claim Airdrop
          </Button>
        </>
      )}

      <Text textAlign={"center"}>
        Contract Owner: {owner?.Address as unknown as string}
      </Text>
      <Text textAlign={"center"}>
        End time:{" "}
        {new Date(
          DateTime.fromUnixSeconds(endTime?.toNumber() ?? 0).toISOString()
        ).toLocaleDateString()}
      </Text>
      <Text textAlign={"center"}>Paused: {isPaused?.toString()}</Text>
      <Text textAlign={"center"}>Merkle Root: {merkleRoot?.toString()}</Text>
    </div>
  );
}
