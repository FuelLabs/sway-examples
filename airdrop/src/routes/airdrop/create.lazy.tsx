import { DatePicker } from "@/components/ui/date-picker";
import { useWallet } from "@fuels/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { AssetId, BytesLike, DateTime } from "fuels";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Input as ShadcnInput } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useDeployAirdrop } from "../../hooks/useDeployAirdrop";
import { useUploadAirdropData } from "../../hooks/useUploadAirdropData";
import { createMerkleTree } from "../../utils/merkleTrees";
import { recipientsParser } from "../../utils/parsers";
import { useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useInitializeAirdrop } from "@/hooks/useInitializeAirdrop";
import {
  getTruncatedAddress,
  copyToClipboard,
} from "@/components/WalletDisplay";
import { IconCopy } from "@tabler/icons-react";
import { VITE_BASE_URL } from "@/lib";

export const Route = createLazyFileRoute("/airdrop/create")({
  component: () => <Airdrop />,
});

const parseSRC20Text = (text: string): [string, string][] => {
  const regex = /^0x[a-fA-F0-9]{64}(?= ?[^ ])([=,]?) *(\d*(\.\d*)?)$/;
  const lines = text.trim().split("\n");
  const validLines = lines.filter((line) => regex.test(line));
  return validLines.reduce((acc, line) => {
    // @ts-expect-error will fix it once the build succeeds
    let [, , value] = line.match(regex);
    // Address is always the full 66 characters (0x plus 64 hex characters)
    const address = line.slice(0, 66);
    value = value?.replace(/^[^0-9.]+/, "");
    // add 0 for straight decimal value
    if (value?.startsWith(".")) {
      value = `0${value}`;
    }
    // @ts-expect-error will fix it once the build succeeds
    acc.push([address.toLowerCase(), value]);
    return acc;
  }, []);
};

function Airdrop() {
  const [assetId, setAssetId] = useState<string & BytesLike>("");
  const placeholderText =
    "0x00...00, 4\n0x00...00, 4\n0x00...00, 4\n0x00...00, 4\n0x00...00, 4";
  const [recipients, setRecipients] = useState<
    { address: string; amount: bigint }[]
  >([]);

  const [totalAmount, setTotalAmount] = useState<string>("0");

  const [textValue, setTextValue] = useState<string>("");
  const [endDate, setEndDate] = useState<string>();

  const parseText = useCallback((text: string) => {
    // Need to parse decimals dynamically, currently hardcoded to 9
    return recipientsParser(Number(9)).parse(parseSRC20Text(text));
  }, []);

  const { wallet } = useWallet();
  const navigate = useNavigate();

  const baseAssetId =
    "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07";

  // const {mutateAsync, data: ipfsData, isSuccess: uploadToIpfsSuccess} = useUploadAirdropData();
  const {
    mutate: deployAirdrop,
    isSuccess: deployAirdropSuccess,
    data,
    error: deployAirdropError,
    status: deployAirdropStatus,
    isPending: deployAirdropIsPending,
  } = useDeployAirdrop();

  const {
    mutate: initialize,
    data: initializeData,
    status: initializeStatus,
    isSuccess: initializeSuccess,
    error: initializeError,
    isPending: initializeIsPending,
  } = useInitializeAirdrop();

  const {
    mutate: uploadAirdropData,
    isPending: uploadAirdropDataPending,
    status: uploadAirdropDataStatus,
    error: uploadAirdropDataError,
    isSuccess: uploadAirdropDataSuccess,
  } = useUploadAirdropData();

  useEffect(() => {
    if (deployAirdropSuccess && data?.contractId) {
      uploadAirdropData({
        contractId: data?.contractId,
        recipients,
      });
    }
  }, [deployAirdropSuccess, data]);

  useEffect(() => {
    const total = recipients.reduce(
      (acc, recipient) => acc + recipient.amount,
      BigInt(0)
    );
    setTotalAmount(total.toString());
  }, [recipients]);

  useEffect(() => {
    if (textValue) {
      try {
        setRecipients(parseText(textValue));
      } catch (e) {
        setRecipients([]);
        console.error(e);
        toast.error("There was an error parsing addresses");
      }
    }
  }, [textValue]);

  const submitHandler = async () => {
    console.log("recipients", recipients);

    if (!wallet || !assetId || !endDate || !recipients.length) {
      toast.error("Please fill in all fields");
      return;
    }

    // stringifyObj(recipients);
    const { root, tree, leaves } = createMerkleTree(recipients);
    console.log("root: ", root);
    // const { isValid } = verifyMerkleProof(recipients[0], root, tree);

    // console.log("Merkle proof valid:", isValid);
    // console.log(
    //   "logging address: ",
    //   Address.fromDynamicInput(wallet?.address).toB256()
    // );

    // Define new configurable values
    const configurableConstants = {
      MERKLE_ROOT: root,
      ASSET: {
        bits: assetId,
      } as AssetId,
      END_TIME: endDate, // Example UNIX timestamp
      NUM_LEAVES: BigInt(leaves.length),
      INITIAL_OWNER: {
        Address: {
          bits: wallet.address.toB256(),
        },
      },
    };
    try {
      await deployAirdrop({
        configurables: configurableConstants,
        options: {
          configurableConstants,
          // storageSlots: [
          //   {
          //     key: "1d63cc2495bbf5570c9a6d7f632018dc033107e7f4452405c44601bb771a4a5d",
          //     value: `0x${root}`,
          //   },
          //   {
          //     key: "1d63cc2495bbf5570c9a6d7f632018dc033107e7f4452405c44601bb771a4a5e",
          //     value: assetId,
          //   },
          //   {
          //     key: "309e214937e6b1ba34ba1a663db855b3aa0605083e49fa6b09c5ef4186a60300",
          //     value: bn(endDate).toHex(32),
          //   },
          //   {
          //     key: "309e214937e6b1ba34ba1a663db855b3aa0605083e49fa6b09c5ef4186a60301",
          //     value: bn(leaves.length).toHex(32),
          //   },
          //   {
          //     key: "38a1b038206f348ec947ba5770c6d713148c9d8bb0b312f47acc88777da1c09d",
          //     value: wallet?.address.toB256() as string,
          //   },
          //   {
          //     key: "82364c88cfc6f6d7a89bb2c2a21170eb8c7bfebc3fe4a45221ce35a05295e4ad",
          //     value:
          //       "0000000000000000000000000000000000000000000000000000000000000000",
          //   },
          // ],
        },

        assetId,

        totalAmount,
      });
    } catch (error) {
      toast.error("Error while deploying contract");
      console.log("Error while deploying contract", error);
    }
  };

  useEffect(() => {
    if (
      initializeStatus === "success" &&
      initializeData?.transactionId &&
      initializeSuccess
    ) {
      // toast.success("Airdrop initialized successfully");
      navigate({
        to: VITE_BASE_URL,
      });
    }
  }, [initializeStatus, initializeData, initializeIsPending, navigate]);

  if (
     ( !deployAirdropError &&
      deployAirdropStatus === "success" &&
      data?.contractId ) && (uploadAirdropDataSuccess && !uploadAirdropDataPending && uploadAirdropDataStatus === "success")
  ) {
    return (
      <div className="text-white flex flex-col">
        <div className=" flex gap-2 items-center">
          <Text>
            Contract deployed to: {getTruncatedAddress(data?.contractId ?? "")}
          </Text>
          <IconCopy
            className="text-[#dddddd] cursor-pointer h-5 hover:opacity-80 active:scale-[90%]"
            onClick={() => copyToClipboard(data?.contractId as string)}
          />
        </div>

        <Button
          className="my-8 mx-auto text-center"
          disabled={initializeIsPending || !wallet}
          onClick={() => {
            initialize({ contractId: data?.contractId });
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
        </Button>
      </div>
    );
  }
  return (
    <div className="text-white">
      <Text variant="h4" sx={{ paddingBottom: "28px", width: "full" }}>
        Airdrop an SRC20 token
      </Text>

      <Text>Enter Asset Id</Text>
      <div className="flex w-full max-w-fit items-center space-x-2">
        <ShadcnInput
          placeholder="0x00...00"
          value={assetId}
          className="w-96"
          onChange={(val) => setAssetId(val.target.value)}
        />
        <Button
          onClick={() => setAssetId(baseAssetId)}
          className="m-auto w-fit text-xs"
        >
          Base Asset Id
        </Button>
      </div>

      <Text sx={{ paddingTop: "28px" }}>
        Enter addresses and amounts. It accepts the following formats:
      </Text>
      <Textarea
        className="w-full mb-7 min-h-[150px] text-white border-2 border-white rounded-md p-1"
        placeholder={placeholderText}
        value={textValue}
        onChange={(val) => setTextValue(val.target.value)}
      />
      <div>
        <DatePicker
          className="pl-3"
          onChangeHandler={(e) => {
            const tiaValue = DateTime.fromUnixMilliseconds(
              e?.getTime() ?? 0
            ).toTai64();
            console.log(BigInt(tiaValue));
            setEndDate(tiaValue);
          }}
        />
      </div>
      <Button
        className="m-auto w-fit"
        disabled={!wallet || deployAirdropIsPending || uploadAirdropDataPending}
        onClick={submitHandler}
      >
        {deployAirdropIsPending || uploadAirdropDataPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Loading
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </div>
  );
}

// 0x6c49291704adc561074d887603c0c5e98b162b8662b746a1c945bb1c71e40f79, 0.001
// 0x4a30b5cc74a9094c16a6e86680e09c7bef7d4bfe5f52d577fc78efa87a1ac085, 0.001
// 0x4a30b5cc74a9094c16a6e86680e09c7bef7d4bfe5f52d577fc78efa87a1ac085, 0.001
// 0x4a30b5cc74a9094c16a6e86680e09c7bef7d4bfe5f52d577fc78efa87a1ac085, 0.001

// const dummy_recipients = [
//   { address: "0x6c49291704adc561074d887603c0c5e98b162b86s62b746a1c945bb1c71e40f79", amount: BigInt(4000000000) },
//   { address: "0x9a30b5cc74a9094c16a6e86680e09c7bef7d4bfe5f52d577fc78efa87a1ac085", amount: BigInt(4000000000) },
// ];

//base assetId=0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07
