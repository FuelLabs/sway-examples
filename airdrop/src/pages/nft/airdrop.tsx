import { Button } from "@/components/Button";
import { Input, MultilineInput } from "@/components/Input";
import { Text } from "@/components/Text";
import { useUploadAirdropData } from "@/hooks/useUploadAirdropData";
import {
  createMerkleTree,
  stringifyObj,
  verifyMerkleProof,
} from "@/utils/merkleTrees";
import { recipientsParser } from "@/utils/parsers";
import { TextField } from "@mui/material";
import { Address } from "fuels";
import { useCallback, useEffect, useState } from "react";

const parseSRC20Text = (text: string): [string, string][] => {
  const regex = /^0x[a-fA-F0-9]{64}(?= ?[^ ])([=,]?) *(\d*(\.\d*)?)$/;
  const lines = text.trim().split("\n");
  const validLines = lines.filter((line) => regex.test(line));
  return validLines.reduce((acc, line) => {
    // @ts-expect-error
    let [, , value] = line.match(regex);
    // Address is always the full 66 characters (0x plus 64 hex characters)
    const address = line.slice(0, 66);
    value = value?.replace(/^[^0-9.]+/, "");
    // add 0 for straight decimal value
    if (value?.startsWith(".")) {
      value = `0${value}`;
    }
    // @ts-expect-error
    acc.push([address, value]);
    return acc;
  }, []);
};

export default function Airdrop() {
  const [assetId, setAssetId] = useState<string>();
  const placeholderText =
    "0x00...00, 4\n0x00...00, 4\n0x00...00, 4\n0x00...00, 4\n0x00...00, 4";
  const [addresses, setAddresses] = useState<
    {
      address: string;
      amount: number;
    }[]
  >();
  const [recipients, setRecipients] = useState<
    { address: string; amount: bigint }[]
  >([]);
  const [textValue, setTextValue] = useState<string>("");

  const parseText = useCallback((text: string) => {
    // Need to parse decimals dynamically, currently hardcoded to 9
    return recipientsParser(Number(9)).parse(parseSRC20Text(text));
  }, []);

  const uploadToipfs = useUploadAirdropData();

  useEffect(() => {
    if (textValue) {
      try {
        setRecipients(parseText(textValue));
      } catch (e) {
        setRecipients([]);
        console.error(e);
        // toast.error("There was an error parsing addresses");
      }
    }
  }, [textValue]);

  return (
    <div>
      <Text variant="h4" sx={{ paddingBottom: "28px", width: "full" }}>
        Airdrop an SRC20 token
      </Text>

      <Text> Enter Token Address</Text>
      <Input
        placeholder="0x00...00"
        value={assetId}
        className="w-96"
        onChange={(val) => setAssetId(val.target.value)}
      />

      <Text sx={{ paddingTop: "28px" }}>
        Enter addresses and amounts. It accepts the following formats:
      </Text>
      <MultilineInput
        className="w-full mb-7"
        placeholder={placeholderText}
        value={textValue}
        onChange={(val) => setTextValue(val.target.value)}
      />

      <Button
        className="m-auto w-fit"
        onClick={async () => {
          console.log("recipients", recipients);

          // uploading to ipfs
          const data = uploadToipfs?.mutateAsync({
            recipients: [
              {
                address:
                  "0x6c49291704adc561074d887603c0c5e98b162b86s62b746a1c945bb1c71e40f79",
                amount: 4000000000,
              },
              {
                address:
                  "0x9a30b5cc74a9094c16a6e86680e09c7bef7d4bfe5f52d577fc78efa87a1ac085",
                amount: 4000000000,
              },
              {
                address:
                  "0x05d6e170e2e7ae00fc147c4d0c3a13d06c77a40794782d9ec10ea6f5bd23eb1d",
                amount: 4000000000,
              },
              {
                address:
                  "0x3764ed56dd996b8e262b0d28b4b9bdb8d4043e9445724aca06a749de6dbff829",
                amount: 4000000000,
              },
            ],
          });
          console.log("data from ipfs: ", data);

          // stringifyObj(recipients);
          const { leaves, root, tree } = createMerkleTree(recipients);
          const { isValid } = verifyMerkleProof(
            [
              {
                address:
                  "0x6c49291704adc561074d887603c0c5e98b162b86s62b746a1c945bb1c71e40f79",
                amount: 4000000000,
              },
            ],
            root,
            tree
          );
        }}
      >
        Submit
      </Button>
    </div>
  );
}
