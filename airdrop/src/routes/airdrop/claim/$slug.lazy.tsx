import { createLazyFileRoute, useParams } from "@tanstack/react-router";
import {
  copyToClipboard,
  getTruncatedAddress,
} from "@/components/WalletDisplay";
import { useInitializeAirdrop } from "@/hooks/useInitializeAirdrop";
import { checkEligibility } from "@/utils/airdropEligibility";
import { useWallet } from "@fuels/react";
import { IconCopy } from "@tabler/icons-react";
import { DateTime } from "fuels";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { formatUnits } from "viem";
import { Text } from "../../../components/Text";
import { Button as ShadcnButton } from "../../../components/ui/button";
import { useClaimAirdrop } from "../../../hooks/useClaimAirdrop";
import {
  useGetEndTime,
  useGetIsInitialized,
  useGetIsPaused,
  useGetMerkleRoot,
  useGetNumLeaves,
  useGetOwner,
} from "../../../hooks/useGetAirdropContractData";
import {
  createMerkleTree,
  generateProof,
  Recipient,
} from "../../../utils/merkleTrees";


export const Route = createLazyFileRoute("/airdrop/claim/$slug")({
  component: () => <ClaimAirdrop />,
});

export type RecipientData = Array<Recipient>;

function ClaimAirdrop() {
  const { slug } = useParams({ strict: false });
  // @ts-expect-error will fix it once the build succeeds
  const { recipient } = Route.useSearch();
  const contractId = slug as string;
  const recipients = recipient as RecipientData;

  const {
    mutate: claim,
    error: claimError,
    status: claimStatus,
    isPending: claimIsPending,
    isSuccess: claimIsSuccess,
    isError: claimIsError,
  } = useClaimAirdrop();
  const [possibleRecipient, setPossibleRecipient] = useState<Recipient>();
  const [treeIndex, setTreeIndex] = useState<number>();
  const { wallet } = useWallet();

  const { data: owner, isFetching: ownerIsfetching } = useGetOwner({
    contractId,
  });
  const { data: endTime, isFetching: endTimeIsFetching } = useGetEndTime({
    contractId,
  });
  const { data: isPaused, isFetching: isPausedFetching } = useGetIsPaused({
    contractId,
  });
  const { data: merkleRoot, isFetching: merkleRootIsFetching } =
    useGetMerkleRoot({ contractId });
  const { data: numLeaves, isFetching: numLeavesIsFetching } = useGetNumLeaves({
    contractId,
  });
  const {
    mutate: initialize,
    data: initializeData,
    status: initializeStatus,
    isSuccess: initializeSuccess,
    error: initializeError,
    isPending: initializeIsPending,
  } = useInitializeAirdrop();

  const {
    data: isInitialized,
    isFetching: fetchingIsInitialized,
    refetch: refetchIsIntialized,
  } = useGetIsInitialized({ contractId });

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

  useEffect(() => {
    if (
      initializeStatus === "success" &&
      initializeData?.transactionId &&
      initializeSuccess
    ) {
      toast.success("Airdrop initialized successfully");
      refetchIsIntialized();
    }
  }, [
    initializeStatus,
    initializeData,
    initializeIsPending,
    refetchIsIntialized,
    initializeSuccess,
  ]);

  const claimHandler = async () => {
    if (!wallet) {
      toast.error("Wallet not connected!");
      return;
    }

    if (isInitialized?.toString() === "false") {
      toast.error("Owner needs to initialize the contract first!");
      return;
    }

    if (!possibleRecipient) {
      toast.error("You are not eligible for the airdrop");
      return;
    }

    const { tree, root, leaves } = createMerkleTree(
      recipients as RecipientData
    );

    const proof = generateProof(possibleRecipient, tree, treeIndex as number);
    console.log("root", root);
    console.log("tree", tree);
    console.log("proof:", proof);
    console.log(`treeIndex`, treeIndex);
    claim({
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

  console.log(owner?.Address?.bits);

  return (
    <div className="w-full text-center flex flex-col justify-center">
      <Text variant="h4" sx={{ paddingBottom: "28px", textAlign: "center" }}>
        Claim Airdrop
      </Text>
      <div className="flex m-auto items-start gap-2">
        <Text variant="h5" sx={{ textAlign: "center" }}>
         Airdrop Contract ID: {getTruncatedAddress(contractId)}
        </Text>
        <IconCopy
          className="text-[#dddddd] cursor-pointer h-5 mt-2 hover:opacity-80 active:scale-[90%]"
          onClick={() => copyToClipboard(contractId)}
        />
      </div>
      <div className="py-8 ">
        <Text className=" py-2">
          {" "}
          Contract Initialized:{" "}
          {fetchingIsInitialized
            ? "Fetching..."
            : isInitialized?.toString() === "true"
              ? "Yes"
              : "No"}
        </Text>
        {!fetchingIsInitialized &&
          isInitialized?.toString() === "false" &&
          !!wallet && (
            <ShadcnButton
              disabled={initializeIsPending || !wallet}
              className="my-8 mx-auto text-center"
              onClick={() => {
                initialize({ contractId });
              }}
            >
              {initializeIsPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading
                </>
              ) : (
                "Initialize Airdrop"
              )}
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
              disabled={claimIsPending || !wallet || !possibleRecipient}
              className="my-8 mx-auto text-center"
            >
              {claimIsPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading
                </>
              ) : (
                "Claim Airdrop"
              )}
            </ShadcnButton>
          </>
        )}
      </div>

      <div className="flex items-center flex-col gap-3">
        <div className="flex items-center gap-2">
          <Text textAlign={"center"}>
            Contract Owner:{" "}
            {ownerIsfetching
              ? "Fetching.."
              : getTruncatedAddress(owner?.Address?.bits ?? "")}
          </Text>
          <IconCopy
            className="text-[#dddddd] cursor-pointer h-5 hover:opacity-80 active:scale-[90%]"
            onClick={() => copyToClipboard(owner?.Address?.bits as string)}
          />
        </div>
        <Text textAlign={"center"}>
          End time:{" "}
          {endTimeIsFetching
            ? "Fetching..."
            : DateTime.fromTai64(
                endTime?.toString() ?? ""
              ).toLocaleDateString()}
        </Text>
        <Text textAlign={"center"}>
          Paused: {isPausedFetching ? "Fetching..." : isPaused?.toString()}
        </Text>
        <div className="flex items-center gap-2 ">
          <Text textAlign={"center"}>
            Merkle Root:{" "}
            {merkleRootIsFetching
              ? "Fetching..."
              : getTruncatedAddress(merkleRoot?.toString() ?? "")}
          </Text>
          <IconCopy
            className="text-[#dddddd] cursor-pointer h-5 hover:opacity-80 active:scale-[90%]"
            onClick={() => copyToClipboard(merkleRoot?.toString() ?? "")}
          />
        </div>
        <Text textAlign={"center"}>
          Number of Leaves:{" "}
          {numLeavesIsFetching ? "Fetching..." : numLeaves?.toString()}
        </Text>
      </div>
    </div>
  );
}
