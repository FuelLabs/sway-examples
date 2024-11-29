import { RecipientData } from "@/routes/airdrop/claim/$slug";
import { Account } from "fuels";

export const checkEligibility = (
  recipients: RecipientData,
  wallet: Account | undefined,
  fallback?: (possibleRecipient: RecipientData[number], index: number) => void
) => {
  let temp = undefined;
  (recipients as RecipientData)?.find((recipient, index) => {
    temp = recipient.address.toLowerCase() === wallet?.address.toHexString();
    if (temp) {
      fallback?.(recipient, index);
    }
    return temp;
  });
  return temp ? true : false;
};
