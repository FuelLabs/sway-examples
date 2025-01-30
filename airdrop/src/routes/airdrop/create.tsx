import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { useWallet } from "@fuels/react";
import { createFileRoute } from "@tanstack/react-router";
import { AssetId, BytesLike, DateTime } from "fuels";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { useInitializeAirdrop } from "@/hooks/useInitializeAirdrop";
import { VITE_BASE_URL } from "@/lib";
import { copyToClipboard, getTruncatedAddress } from "@/lib/utils";
import { IconCopy } from "@tabler/icons-react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { Text } from "../../components/Text";
import { Input as ShadcnInput } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useDeployAirdrop } from "../../hooks/useDeployAirdrop";
import { useUploadAirdropData } from "../../hooks/useUploadAirdropData";
import { createMerkleTree } from "../../utils/merkleTrees";
import { recipientsParser } from "../../utils/parsers";
import { useGetSrc20Balance } from "@/hooks/src20Hooks/useGetSrc20Balance";
import { useTheme } from "@/components/theme-provider";

type SearchParams = {
  deployedTokenId?: string;
};

const validateSearch = (rawParams: URLSearchParams): SearchParams => {
  const deployedTokenId = rawParams.get("deployedTokenId");

  return {
    deployedTokenId: deployedTokenId || undefined,
  };
};

export const Route = createFileRoute("/airdrop/create")({
  component: () => <Airdrop />,
  validateSearch: (search: Record<string, unknown>) =>
    validateSearch(new URLSearchParams(search as Record<string, string>)),
});

const parseSRC20Text = (text: string): [string, string][] => {
  const regex = /^0x[a-fA-F0-9]{64}(?= ?[^ ])([=,]?) *(\d*(\.\d*)?)$/;
  const lines = text.trim().split("\n");
  const validLines = lines.filter((line) => regex.test(line));
  return validLines.reduce(
    (acc, line) => {
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
    },
    [] as [string, string][]
  );
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
  const search = useSearch({ from: "/airdrop/create" });
  const deployedTokenId = search.deployedTokenId;

  const baseAssetId =
    "0xf8f8b6283d7fa5b672b530cbb84fcccb4ff8dc40f8176ef4544ddb1f1952ad07";

  const {
    data: src20Balance,
    isFetching: src20BalanceIsFetching,
    error: src20BalanceError,
    status: src20BalanceStatus,
    refetch: refetchSrc20Balance,
  } = useGetSrc20Balance(deployedTokenId ?? "");
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

  const { theme } = useTheme();

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
        console.error("Error parsing addresses:", e);
        toast.error("There was an error parsing addresses");
      }
    }
  }, [textValue, parseText]);

  useEffect(() => {
    if (deployedTokenId && wallet) {
      refetchSrc20Balance();
    }
  }, [deployedTokenId, refetchSrc20Balance, wallet]);

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
  }, [
    initializeStatus,
    initializeData,
    initializeIsPending,
    navigate,
    initializeSuccess,
  ]);

  if (
    !deployAirdropError &&
    deployAirdropStatus === "success" &&
    data?.contractId &&
    uploadAirdropDataSuccess &&
    !uploadAirdropDataPending &&
    uploadAirdropDataStatus === "success"
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
          variant="secondary"
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
        <Text variant="h4" className="text-3xl font-bold mb-4">
          Create Airdrop
        </Text>
      </div>

      {/* Main Content Card */}
      <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
        {/* Asset ID Section */}
        <div className="space-y-6 mb-8">
          <div>
            <Text className="text-muted-foreground mb-2">Enter Asset Id</Text>
            <div className="flex gap-3 items-center">
              <ShadcnInput
                placeholder="0x00...00"
                value={assetId}
                className="flex-1"
                onChange={(val) => setAssetId(val.target.value)}
                disabled={deployAirdropIsPending || uploadAirdropDataPending}
              />
              <Button
                onClick={() => setAssetId(baseAssetId)}
                variant="secondary"
                className={
                  theme === "dark"
                    ? "text-xs px-4 hover:text-white"
                    : "text-xs px-4 hover:text-black"
                }
                disabled={deployAirdropIsPending || uploadAirdropDataPending}
              >
                Base Asset Id
              </Button>
            </div>
          </div>

          {deployedTokenId ? (
            <Button
              onClick={() => setAssetId(deployedTokenId)}
              variant="secondary"
              className={
                theme === "dark"
                  ? "w-full hover:text-white"
                  : "w-full hover:text-black"
              }
              disabled={deployAirdropIsPending || uploadAirdropDataPending}
            >
              Use Deployed Token ({getTruncatedAddress(deployedTokenId)})
            </Button>
          ) : (
            <Button
              onClick={() => {
                navigate({
                  to: VITE_BASE_URL + "/airdrop/deploy-src20",
                });
              }}
              variant="secondary"
              className={
                theme === "dark"
                  ? "w-full hover:text-white"
                  : "w-full hover:text-black"
              }
              disabled={deployAirdropIsPending || uploadAirdropDataPending}
            >
              Deploy an SRC20 token
            </Button>
          )}

          {deployedTokenId && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-muted border border-border">
              <div className="text-muted-foreground">
                {src20BalanceIsFetching ? (
                  <div className="flex items-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Loading balance...</span>
                  </div>
                ) : src20BalanceError && src20BalanceStatus === "error" ? (
                  <span className="text-red-400">Error fetching balance</span>
                ) : (
                  <div className="flex flex-col">
                    <span className="text-sm text-muted-foreground">
                      Deployed Token Balance
                    </span>
                    <span className="text-lg font-medium">
                      {Number(src20Balance?.toString()) / 10 ** 9} tokens
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Recipients Section */}
        <div className="space-y-4 mb-8">
          <Text className="text-muted-foreground">
            Enter addresses and amounts. It accepts the following formats:
          </Text>
          <Textarea
            className="w-full min-h-[150px]"
            placeholder={placeholderText}
            value={textValue}
            onChange={(val) => setTextValue(val.target.value)}
            disabled={deployAirdropIsPending || uploadAirdropDataPending}
          />
        </div>

        {/* Date Picker Section */}
        <div className="mb-8">
          <Text className="text-muted-foreground mb-2">Select End Date</Text>
          <DatePicker
            className="w-full"
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
          className={
            theme === "dark"
              ? "w-full hover:text-black"
              : "w-full hover:text-white"
          }
          disabled={
            !wallet || deployAirdropIsPending || uploadAirdropDataPending
          }
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
