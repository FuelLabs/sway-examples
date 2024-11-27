import { Text } from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDeploySrc20 } from "@/hooks/src20Hooks/useDeploySrc20";
import { createLazyFileRoute } from "@tanstack/react-router";
import { arrayify, NumberCoder } from "fuels";
import { useState } from "react";

export const Route = createLazyFileRoute("/airdrop/deploy-src20")({
  component: () => <Src20 />,
});

const Src20 = () => {
  const [tokenName, setTokenName] = useState<string>("Fuel Token");
  const [symbol, setSymbol] = useState<string>("FUEL");

  const { mutate } = useDeploySrc20();

  const u8Coder = new NumberCoder("u8");
  const configurableConstants = {
    DECIMELS: u8Coder.encode(9),
    NAME: arrayify(tokenName),
    SYMBOL: arrayify(symbol),
  };
  return (
    <div className="flex w-full flex-col gap-6 items-center">
      <Text variant="h4">Deploy an SRC20 token</Text>
      <div className="flex items-center w-max ">
        <Text className="w-full text-center">Enter Token Name:</Text>

        <Input
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
          placeholder="Fuel"
        />
      </div>
      <div className="flex items-center w-max ">
        <Text className="w-full text-center">Enter Symbol:</Text>

        <Input
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder="Fuel"
        />
      </div>
      <Button
        onClick={() => {
          mutate({
            options: {
              configurableConstants,
            }
          });
        }}
      >
        Deploy SRC20 contract
      </Button>
    </div>
  );
};
