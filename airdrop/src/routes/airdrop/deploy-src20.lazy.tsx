
import { Text } from "@/components/Text";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useDeploySrc20 } from "@/hooks/src20Hooks/useDeploySrc20";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/airdrop/deploy-src20")({
  component: () => <Src20 />,
});

const Src20 = () => {
  const [tokenName, setTokenName] = useState<string>();
  const [symbol, setSymbol] = useState<string>();

  const { mutate } = useDeploySrc20();
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
            tokenName: tokenName ?? "Fuel token",
            symbol: symbol ?? "FUEL",
          });
        }}
      >
        Deploy SRC20 contract
      </Button>
    </div>
  );
};
