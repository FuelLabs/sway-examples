import { Text } from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDeploySrc20 } from "@/hooks/src20Hooks/useDeploySrc20";
import { createLazyFileRoute } from "@tanstack/react-router";
import { arrayify, NumberCoder, StringCoder } from "fuels";
import { useState } from "react";

export const Route = createLazyFileRoute("/airdrop/deploy-src20")({
  component: () => <Src20 />,
});

const Src20 = () => {
  const [tokenName, setTokenName] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");

  const {
    mutate: deploySrc20,
    error: deploySrc20Error,
    status: deploySrc20Status,
    isPending: deploySrc20IsPending,
    isSuccess: deploySrc20IsSuccess,
    data: deploySrc20Data,
  } = useDeploySrc20();

  const u8Coder = new NumberCoder("u8");
  const nameCoder = new StringCoder(7); // Adjust the length as per your contract definition
  const symbolCoder = new StringCoder(5); // Adjust the length as per your contract definition

  return (
    <div className="flex w-full flex-col gap-6 items-center">
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
        {deploySrc20IsPending ? 'Deploying...' : 'Deploy SRC20 contract'}
      </Button>
    </div>
  );
};
