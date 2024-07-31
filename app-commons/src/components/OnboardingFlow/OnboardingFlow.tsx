import { Button, Flex, Box, Text } from "@radix-ui/themes";

export const OnboardingFlow = () => {
  return (
    <Flex className="border border-white p-4">
      <Flex className="flex justify-between flex-col border border-white w-1/2 min-w-80 min-h-60 p-4">
        <Flex className="flex justify-between">
          <Text className="text-white">1. Welcome</Text>
          <Text className="text-white">2. Faucet</Text>
          <Text className="text-white">3. Success</Text>
        </Flex>
        <Flex>
          <Button className="text-white">Temporary Wallet</Button>
          <Button className="text-white">Connect</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
