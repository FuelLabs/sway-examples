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
  useGetIsInitialized,
  useGetIsPaused,
  useGetMerkleRoot,
  useGetNumLeaves,
  useGetOwner,
} from "../../../hooks/useGetAirdropContractData";
import { DateTime } from "fuels";
import { Button as ShadcnButton } from "../../../components/ui/button";
import { useInitializeAirdrop } from "@/hooks/useInitializeAirdrop";
import {
  copyToClipboard,
  getTruncatedAddress,
} from "@/components/WalletDisplay";
import { checkEligibility } from "@/utils/airdropEligibility";
import { IconCopy } from "@tabler/icons-react";

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
  const { data: isInitialized, isFetching: fetchingIsInitialized } =
    useGetIsInitialized({ contractId });

  // console.log(endTime?.toNumber())

  useEffect(() => {
    console.log({ wallet });
    if (recipients && wallet) {
      const fallback = (recipient: RecipientData[number], index: number) => {
        setPossibleRecipient(recipient);
        console.log({ recipient });
        setTreeIndex(index);
      };
      checkEligibility(recipients, wallet, fallback);
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
    const proof = generateProof(possibleRecipient, tree, treeIndex as number);
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
      <div className="py-8 ">
        <Text className=" py-2">
          {" "}
          Contract Initialized:{" "}
          {fetchingIsInitialized
            ? "Fetching..."
            : isInitialized?.toString()
              ? "Yes"
              : "No"}
        </Text>
        {!fetchingIsInitialized && !isInitialized?.toString() && !!wallet && (
          <ShadcnButton
            className="my-8 mx-auto text-center"
            onClick={() => {
              initialize({ contractId });
            }}
          >
            Initialize Airdrop
          </ShadcnButton>
        )}
        {!wallet ? (
          <Text variant="h5">
            Please connect your wallet to check eligibility and to claim the
            airdrop
          </Text>
        ) : !possibleRecipient ? (
          <Text variant="h5">You are not eligible for the airdrop</Text>
        ) : (
          <>
            <Text textAlign={"center"}>
              Your Allocations:{" "}
              {Number(formatUnits(possibleRecipient.amount, 9))}
            </Text>
            <ShadcnButton
              onClick={claimHandler}
              className="my-8 mx-auto text-center"
            >
              Claim Airdrop
            </ShadcnButton>
          </>
        )}
      </div>

      <div className="flex items-center flex-col gap-3">
        <div className="flex items-center gap-2">
          <Text textAlign={"center"}>
            Contract Owner: {getTruncatedAddress(owner?.Address?.bits ?? "")}
          </Text>
          <IconCopy
            className="text-[#dddddd] cursor-pointer h-5 hover:opacity-80 active:scale-[90%]"
            onClick={() => copyToClipboard(owner?.Address?.bits as string)}
          />
        </div>
        <Text textAlign={"center"}>
          End time:{" "}
          {DateTime.fromTai64(endTime?.toString() ?? "").toLocaleDateString()}
        </Text>
        <Text textAlign={"center"}>Paused: {isPaused?.toString()}</Text>
       <div className="flex items-center gap-2 ">
       <Text textAlign={"center"}>Merkle Root: {getTruncatedAddress(merkleRoot?.toString() ?? "")}</Text>
        <IconCopy
            className="text-[#dddddd] cursor-pointer h-5 hover:opacity-80 active:scale-[90%]"
            onClick={() => copyToClipboard(merkleRoot?.toString() ?? "")}
          />
       </div>
        <Text textAlign={"center"}>
          Number of Leaves: {numLeaves?.toString()}
        </Text>
      </div>
      {/* {owner && owner?.Address?.bits === wallet?.address.toB256() && ( */}

      {/* )} */}
    </div>
  );
}
