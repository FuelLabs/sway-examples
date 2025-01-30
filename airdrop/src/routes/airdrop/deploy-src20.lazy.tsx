import { Text } from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDeploySrc20 } from "@/hooks/src20Hooks/useDeploySrc20";
import { useMint } from "@/hooks/src20Hooks/useMint";
import { createLazyFileRoute } from "@tanstack/react-router";
import { getMintedAssetId, NumberCoder } from "fuels";
import { useState } from "react";
import { useInitializeOwner } from "@/hooks/src20Hooks/useInitializeOwner";
import { getTruncatedAddress, copyToClipboard } from "@/lib/utils";
import { Copy } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { VITE_BASE_URL } from "@/lib";

export const Route = createLazyFileRoute("/airdrop/deploy-src20")({
  component: () => <Src20 />,
});

const Src20 = () => {
  const [tokenName, setTokenName] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");
  const [mintAmount, setMintAmount] = useState<string>("");

  const {
    mutate: deploySrc20,
    error: deploySrc20Error,
    status: deploySrc20Status,
    isPending: deploySrc20IsPending,
    isSuccess: deploySrc20IsSuccess,
    data: deploySrc20Data,
  } = useDeploySrc20();

  const { mutate: mint, isPending: isMinting } = useMint();

  const {
    mutate: initializeOwner,
    isPending: isInitializing,
    isSuccess: isInitialized,
  } = useInitializeOwner();

  const u8Coder = new NumberCoder("u8");

  const navigate = useNavigate();

  // Using a zeroed SubId for single asset contracts
  const DEFAULT_SUB_ID =
    "0x0000000000000000000000000000000000000000000000000000000000000000";

  const handleMintSuccess = async () => {
    if (deploySrc20Data?.contract.id.toB256()) {
      const mintedAssetId = getMintedAssetId(
        deploySrc20Data?.contract.id.toB256(),
        DEFAULT_SUB_ID
      );
      
      navigate({
        to: "/airdrop/create",
        search: {
          deployedTokenId: mintedAssetId,
        },
      });
    }
  };

  return (
    <div className="flex w-full flex-col gap-6 items-center">
      {!deploySrc20IsSuccess ? (
        <>
          <Text variant="h4">Deploy an SRC20 token</Text>
          <div className="flex items-center w-max ">
            <Text className="w-full text-center">Enter Token Name:</Text>

            <Input
              maxLength={7}
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
              placeholder="Fuel"
            />
          </div>
          <div className="flex items-center w-max ">
            <Text className="w-full text-center">Enter Symbol:</Text>

            <Input
              maxLength={5}
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              placeholder="Fuel"
            />
          </div>
          <Button
            variant="secondary"
            disabled={
              deploySrc20IsPending ||
              !tokenName.trim() ||
              !symbol.trim() ||
              tokenName.length > 7 ||
              symbol.length > 5
            }
            onClick={() => {
              // Validation checks
              if (!tokenName.trim() || !symbol.trim()) {
                return;
              }

              const configurableConstants = {
                DECIMALS: u8Coder.encode(9),
                NAME: tokenName.trim(),
                SYMBOL: symbol.trim(),
              };

              deploySrc20({
                options: {
                  configurableConstants,
                },
              });
            }}
          >
            {deploySrc20IsPending ? "Deploying..." : "Deploy SRC20 contract"}
          </Button>
        </>
      ) : (
        <Card className="w-full max-w-md p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Text variant="h4" className="text-center">
                Token Deployed Successfully!
              </Text>
              <div className="flex items-center justify-center gap-2">
                <Text className="text-sm text-muted-foreground">
                  Contract ID:{" "}
                  {getTruncatedAddress(
                    deploySrc20Data?.contract.id.toB256() || ""
                  )}
                </Text>
                <button
                  onClick={() =>
                    copyToClipboard(deploySrc20Data?.contract.id.toB256() || "")
                  }
                  className="p-1 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 rounded-md transition-colors"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>

            {!isInitialized ? (
              <div className="flex flex-col gap-4">
                <Text className="text-sm text-muted-foreground text-center">
                  Initialize the contract to start minting tokens
                </Text>
                <Button
                  variant="secondary"
                  disabled={isInitializing}
                  onClick={() => {
                    if (!deploySrc20Data?.contract.id.toB256()) return;

                    initializeOwner({
                      contractId: deploySrc20Data.contract.id.toB256(),
                    });
                  }}
                >
                  {isInitializing ? (
                    <div className="flex items-center gap-2">
                      <span>Initializing...</span>
                    </div>
                  ) : (
                    "Initialize Contract"
                  )}
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Text variant="h5">Mint Tokens</Text>

                <div className="flex flex-col gap-2">
                  <Text className="text-sm">Amount to mint:</Text>
                  <Input
                    type="number"
                    value={mintAmount}
                    onChange={(e) => setMintAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="0"
                  />
                </div>

                <Button
                  variant="secondary"
                  disabled={isMinting || !mintAmount || Number(mintAmount) <= 0}
                  onClick={() => {
                    if (!deploySrc20Data?.contract.id.toB256()) return;

                    mint(
                      {
                        contractId: deploySrc20Data.contract.id.toB256(),
                        amount: Number(mintAmount) * 10 ** 9, // 9 decimals
                        subId: DEFAULT_SUB_ID,
                      },
                      {
                        onSuccess: handleMintSuccess,
                      }
                    );
                  }}
                >
                  {isMinting ? (
                    <div className="flex items-center gap-2">
                      <span>Minting...</span>
                    </div>
                  ) : (
                    "Mint Tokens"
                  )}
                </Button>
              </div>
            )}

            <div className="flex text-center flex-col gap-2">
              <Text variant="h5" className="text-muted-foreground">
                Token Details:
              </Text>
              <div className="text-sm flex flex-col gap-2">
                <p>Name: {tokenName}</p>
                <p>Symbol: {symbol}</p>
                <p>Decimals: 9</p>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
