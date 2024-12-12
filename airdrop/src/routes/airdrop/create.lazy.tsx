import { DatePicker } from "@/components/ui/date-picker";
import { useWallet } from "@fuels/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { AssetId, BytesLike, DateTime } from "fuels";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";

import { useInitializeAirdrop } from "@/hooks/useInitializeAirdrop";
import { VITE_BASE_URL } from "@/lib";
import { IconCopy } from "@tabler/icons-react";
import { useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { Text } from "../../components/Text";
import { Input as ShadcnInput } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useDeployAirdrop } from "../../hooks/useDeployAirdrop";
import { useUploadAirdropData } from "../../hooks/useUploadAirdropData";
import { createMerkleTree } from "../../utils/merkleTrees";
import { recipientsParser } from "../../utils/parsers";
import { copyToClipboard, getTruncatedAddress } from "@/lib/utils";

export const Route = createLazyFileRoute("/airdrop/create")({
  component: () => <Airdrop />,
});

const parseSRC20Text = (text: string): [string, string][] => {
  const regex = /^0x[a-fA-F0-9]{64}(?= ?[^ ])([=,]?) *(\d*(\.\d*)?)$/;
  const lines = text.trim().split("\n");
  const validLines = lines.filter((line) => regex.test(line));
  return validLines.reduce((acc, line) => {
    const match = line.match(regex);
    if (!match) return acc;
    
    let value = match[2]; // Get the second capture group which contains the number
    // Address is always the full 66 characters (0x plus 64 hex characters)
    const address = line.slice(0, 66);
    value = value?.replace(/^[^0-9.]+/, "");
    // add 0 for straight decimal value
    if (value?.startsWith(".")) {
      value = `0${value}`;
    }
    acc.push([address.toLowerCase(), value]);
    return acc;
  }, [] as [string, string][]);
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
        console.error('Error parsing addresses:', e);
        toast.error("There was an error parsing addresses");
      }
    }
  }, [textValue]);

  const submitHandler = async () => {

    if (!wallet || !assetId || !endDate || !recipients.length) {
      toast.error("Please fill in all fields");
      return;
    }

    const { root, tree, leaves } = createMerkleTree(recipients);

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
        },

        assetId,

        totalAmount,
      });
    } catch (error) {
      toast.error("Error while deploying contract");
      console.error("Error while deploying contract", error);
    }
  };

  useEffect(() => {
    if (
      initializeStatus === "success" &&
      initializeData?.transactionId &&
      initializeSuccess
    ) {
      navigate({
        to: VITE_BASE_URL + "/airdrop",
      });
    }
  }, [initializeStatus, initializeData, initializeIsPending, navigate, initializeSuccess]);

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
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <Text variant="h4" className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Create Airdrop
        </Text>
      </div>

      {/* Main Content Card */}
      <div className="bg-gray-900/50 rounded-xl p-8 shadow-lg border border-gray-800">
        {/* Asset ID Section */}
        <div className="space-y-6 mb-8">
          <div>
            <Text className="text-gray-400 mb-2">Enter Asset Id</Text>
            <div className="flex gap-3 items-center">
              <ShadcnInput
                placeholder="0x00...00"
                value={assetId}
                className="flex-1 bg-gray-800/50 border-gray-700 focus:border-blue-500 disabled:opacity-50"
                onChange={(val) => setAssetId(val.target.value)}
                disabled={deployAirdropIsPending || uploadAirdropDataPending}
              />
              <Button
                onClick={() => setAssetId(baseAssetId)}
                className="bg-blue-600 hover:bg-blue-700 transition-colors text-xs px-4 disabled:opacity-50"
                disabled={deployAirdropIsPending || uploadAirdropDataPending}
              >
                Base Asset Id
              </Button>
            </div>
          </div>

          <Button
            onClick={() => {
              navigate({
                to: VITE_BASE_URL + "/airdrop/deploy-src20",
              });
            }}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity disabled:opacity-50"
            disabled={deployAirdropIsPending || uploadAirdropDataPending}
          >
            Deploy an SRC20 token
          </Button>
        </div>

        {/* Recipients Section */}
        <div className="space-y-4 mb-8">
          <Text className="text-gray-400">
            Enter addresses and amounts. It accepts the following formats:
          </Text>
          <Textarea
            className="w-full min-h-[150px] bg-gray-800/50 border-gray-700 focus:border-blue-500 text-gray-300 disabled:opacity-50"
            placeholder={placeholderText}
            value={textValue}
            onChange={(val) => setTextValue(val.target.value)}
            disabled={deployAirdropIsPending || uploadAirdropDataPending}
          />
        </div>

        {/* Date Picker Section */}
        <div className="mb-8">
          <Text className="text-gray-400 mb-2">Select End Date</Text>
          <DatePicker
            className="w-full bg-gray-800/50 border-gray-700 disabled:opacity-50"
            onChangeHandler={(e) => {
              const taiValue = DateTime.fromUnixMilliseconds(
                e?.getTime() ?? 0
              ).toTai64();
              setEndDate(taiValue);
            }}
            disabled={deployAirdropIsPending || uploadAirdropDataPending}
          />
        </div>

        {/* Submit Button */}
        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-opacity disabled:opacity-50"
          disabled={!wallet || deployAirdropIsPending || uploadAirdropDataPending}
          onClick={submitHandler}
        >
          {deployAirdropIsPending || uploadAirdropDataPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading
            </>
          ) : (
            "Create Airdrop"
          )}
        </Button>
      </div>
    </div>
  );
}
