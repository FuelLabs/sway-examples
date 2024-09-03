import { Account, BN } from "fuels";
import productionContractId from "../artifacts/contract-ids.json";
import contractId from "./contract-types/contract-ids.json";

type DappEnvironment = "local" | "testnet";

const getEnv = () => {
  try {
    if (import.meta.env) {
      return import.meta.env;
    }
    return process.env;
  } catch {
    try {
      return process.env;
    } catch (e) {
      throw e;
    }
  }
};

const env = getEnv();

console.log(`env`, env);

export const VITE_BASE_URL = env.VITE_BASE_URL ?? "";

export const IS_PROD = env.NODE_ENV === "production";

export const PINATA_JWT = env.VITE_PINATA_JWT;

export const CURRENT_ENVIRONMENT: DappEnvironment =
  (env.VITE_PUBLIC_DAPP_ENVIRONMENT as DappEnvironment) || "local";

const IS_LOCAL = CURRENT_ENVIRONMENT === "local";

export const NODE_URL = IS_LOCAL
  ? `http://127.0.0.1:${env.VITE_PUBLIC_FUEL_NODE_PORT || 4000}/v1/graphql`
  : "https://testnet.fuel.network/v1/graphql";

/**
 * Enable the Fuel dev connector.
 * @see {@link https://docs.fuel.network/docs/wallet/dev/getting-started/#using-default-connectors}
 */
export const ENABLE_FUEL_DEV_CONNECTOR =
  env.VITE_PUBLIC_ENABLE_FUEL_DEV_CONNECTOR === "true";

export interface AppWallet {
  wallet?: Account;
  walletBalance?: BN;
  refreshWalletBalance?: () => Promise<void>;
}

export const TESTNET_FAUCET_LINK = "https://faucet-testnet.fuel.network/";

export const GATEWAY_URL =
  env.VITE_PUBLIC_GATEWAY_URL ?? "https://gateway.pinata.cloud";

export const PINATA_API_URL = "https://api.pinata.cloud";

export const CONTRACT_ID = IS_LOCAL
  ? contractId["nftContract"]
  : productionContractId["nftContract"];

export const WC_PROJECT_ID = env.VITE_PUBLIC_APP_WC_PROJECT_ID!;
