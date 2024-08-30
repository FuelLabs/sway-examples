// testContractId=0xa857304d0215a3814161807bc5cfc845744ea6baa4c19cfaab534e861399e467

import { Button } from "@/components/Button";
import { Text } from "@/components/Text";
import { IdentityInput } from "@/contract-types/aidrop-contracts/contracts/AirdropContract";
import { Vec } from "@/contract-types/aidrop-contracts/contracts/common";
import { useClaimAirdrop } from "@/hooks/useClaimAirdrop";
import { RecipientData, useGetAirdropData } from "@/hooks/useGetAirdropData";
import { createMerkleTree, generateProof } from "@/utils/merkleTrees";
import { useWallet } from "@fuels/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ClaimAirdrop() {
  const { data: airdropData } = useGetAirdropData();
  const { mutate } = useClaimAirdrop();
  const [isRecipient, setIsRecipient] = useState<{
    address: string;
    amount: bigint;
  }>();
  const [treeIndex, setTreeIndex] = useState<number>();
  const { wallet } = useWallet();

  useEffect(() => {
    if (airdropData && wallet) {
      (airdropData as RecipientData)?.find((recipient, index) => {
        const temp =
          recipient.address === (wallet?.address.toB256() as unknown as string);
        if (temp) {
          setIsRecipient(recipient);
          setTreeIndex(index);
        }
        return temp;
      });
    }
  }, [airdropData, wallet]);

  const claimHandler = async () => {
    if (!wallet) {
      toast.error("Wallet not connected!");
      return;
    }

    if (!isRecipient) {
      toast.error("You are not eligible for the airdrop");
      return;
    }

    const { tree } = createMerkleTree(airdropData as RecipientData);
    const proof = generateProof(isRecipient, tree);

    console.log("proof:", proof);
    mutate({
      contractId:
        "0xa857304d0215a3814161807bc5cfc845744ea6baa4c19cfaab534e861399e467",
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
    <div>
      <Text variant="h4" sx={{ paddingBottom: "28px", width: "full" }}>
        Claim Airdrop
      </Text>
      {!wallet ? (
        <Text>Please connect your wallet to claim the airdrop</Text>
      ) : !isRecipient ? (
        <Text>You are not eligible for the airdrop</Text>
      ) : (
        <>
          <Text>Your Allocations: 2000</Text>
          <Button onClick={claimHandler} className="my-8">
            Claim Airdrop
          </Button>
        </>
      )}
    </div>
  );
}
