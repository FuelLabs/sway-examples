import { Address, isB256 } from "fuels";
import { parseUnits } from "viem";
import z from "zod";

export const recipientsParser = (decimals = 9) =>
  z.preprocess(
    (res) => {
      let arr = res as [string, string][];
      const firstAddress = arr.at(0)?.at(0);

      if (!firstAddress || !isB256(firstAddress)) {
        arr = arr.slice(1);
      }

      return arr.map(([address, amount]) => ({
        address: address as unknown as Address,
        amount: parseUnits(amount, decimals),
      }));
    },
    z.array(
      z.object({
        address: z.coerce.string().startsWith("0x").length(66),
        amount: z.bigint().refine((b) => b >= BigInt(0)),
      })
    )
  );