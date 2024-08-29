import { Button } from "@/components/Button";
import { Input, MultilineInput } from "@/components/Input";
import { Text } from "@/components/Text";
import { useDeployAirdrop } from "@/hooks/useDeployAirdrop";
import { useUploadAirdropData } from "@/hooks/useUploadAirdropData";
import {
  createMerkleTree,
  stringifyObj,
  verifyMerkleProof,
} from "@/utils/merkleTrees";
import { recipientsParser } from "@/utils/parsers";
import { useWallet } from "@fuels/react";
import { TextField } from "@mui/material";
import { Address, BytesLike, getRandomB256 } from "fuels";
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
  const [assetId, setAssetId] = useState<string & BytesLike>("");
  const placeholderText =
    "0x00...00, 4\n0x00...00, 4\n0x00...00, 4\n0x00...00, 4\n0x00...00, 4";
  const [recipients, setRecipients] = useState<
    { address: string; amount: bigint }[]
  >([]);
  const [textValue, setTextValue] = useState<string>("");

  const parseText = useCallback((text: string) => {
    // Need to parse decimals dynamically, currently hardcoded to 9
    return recipientsParser(Number(9)).parse(parseSRC20Text(text));
  }, []);

  const {wallet} = useWallet();

  const uploadToipfs = useUploadAirdropData();
  const { mutate: deployAirdrop, isPending } = useDeployAirdrop();

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

      <Text>Enter Asset Id</Text>
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
          const data = await uploadToipfs?.mutateAsync({
            recipients,
          });
          console.log("data from ipfs: ", data);

          // stringifyObj(recipients);
          const { leaves, root, tree } = createMerkleTree(recipients);
          console.log("root: ", root);
          const { isValid } = verifyMerkleProof(recipients[0], root, tree);

          console.log("Merkle proof valid:", isValid);

          const deployRes = await deployAirdrop({
            // storageSlots: [
            //   {
            //     key: "02dac99c283f16bc91b74f6942db7f012699a2ad51272b15207b9cc14a70dbae",
            //     value: getRandomB256()
            //     // value: `0x${root}` as string,
            //   },
            //   {
            //     key: "6294951dcb0a9111a517be5cf4785670ff4e166fb5ab9c33b17e6881b48e964f",
            //     value: getRandomB256()
            //     // value: `0x${assetId}` as string,
            //   },
            //   {
            //     key: "94b2b70d20da552763c7614981b2a4d984380d7ed4e54c01b28c914e79e44bd5",
            //     value: "8932748843"
            //   },{
            //     key: "94b2b70d20da552763c7614981b2a4d984380d7ed4e54c01b28c914e79e44bd6",
            //     value: recipients.length.toString(),
            //   },{
            //     key: "de9090cb50e71c2588c773487d1da7066d0c719849a7e58dc8b6397a25c567c0",
            //     value: wallet?.address.toString() as string,
            //   },{
            //     key: "de9090cb50e71c2588c773487d1da7066d0c719849a7e58dc8b6397a25c567c1",
            //     value: wallet?.address.toString() as string,
            //   },
            // ],
          });


          // console.log("deployRes: ", deployRes);
        }}
      >
        Submit
      </Button>
    </div>
  );
}

// 0x4a30b5cc74a9094c16a6e86680e09c7bef7d4bfe5f52d577fc78efa87a1ac085, 1
// 0x4a30b5cc74a9094c16a6e86680e09c7bef7d4bfe5f52d577fc78efa87a1ac085, 2
// 0x4a30b5cc74a9094c16a6e86680e09c7bef7d4bfe5f52d577fc78efa87a1ac085, 3
// 0x4a30b5cc74a9094c16a6e86680e09c7bef7d4bfe5f52d577fc78efa87a1ac085, 4

// const dummy_recipients = [
//   { address: "0x6c49291704adc561074d887603c0c5e98b162b86s62b746a1c945bb1c71e40f79", amount: BigInt(4000000000) },
//   { address: "0x9a30b5cc74a9094c16a6e86680e09c7bef7d4bfe5f52d577fc78efa87a1ac085", amount: BigInt(4000000000) },
// ];
