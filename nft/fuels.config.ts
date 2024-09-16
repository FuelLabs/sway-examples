import {
  defaultConsensusKey,
  FuelsConfig,
  createConfig,
  Wallet,
  Provider,
} from "fuels";
import dotenv from "dotenv";
dotenv.config({
  path: [".env.local", ".env"],
});
import { IS_PROD } from "src/lib";
import { NFTContract } from "src/contract-types/contracts";

const fuelCorePort =
  +(process.env.NEXT_PUBLIC_FUEL_NODE_PORT as string) || 4000;
const NODE_URL =
  process.env.VITE_PUBLIC_DAPP_ENVIRONMENT === "local"
    ? `http://127.0.0.1:${
        process.env.VITE_PUBLIC_FUEL_NODE_PORT || 4000
      }/v1/graphql`
    : "https://testnet.fuel.network/v1/graphql";

export default createConfig({
  workspace: "./",
  output: IS_PROD ? "./artifacts" : "./src/contract-types",
  fuelCorePort,
  providerUrl: NODE_URL,
  onDeploy: async (_config: FuelsConfig, data) => {
    const contracts = data;

    const nftContract = contracts.find((contract) => {
      console.log(`contract`, contract);
      return contract.name === "nftContract";
    });

    if (!nftContract) {
      throw new Error("Contract not found");
    }

    const provider = await Provider.create(NODE_URL);
    const privateKey = IS_PROD
      ? process.env.WALLET_SECRET!
      : defaultConsensusKey;
    const wallet = Wallet.fromPrivateKey(privateKey, provider);

    // Call nft contructor to initialize owner
    const contract = new NFTContract(nftContract.contractId, wallet);
    try {
      await contract.functions
        .constructor({ Address: { bits: wallet.address.toB256() } })
        .call();
      console.log("Owner initialized");
    } catch (err) {
      console.error(err);
    }
  },
});
