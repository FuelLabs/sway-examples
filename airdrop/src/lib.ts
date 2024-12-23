import { Account, BN } from "fuels";

// The two environments for the dapp are local and testnet.
export const Environments = {
  LOCAL: "local",
  TESTNET: "testnet",
} as const;
type Environment = (typeof Environments)[keyof typeof Environments];

const getEnv = () => {
  try {
    if (import.meta.env) {
      return import.meta.env;
    }
    return process.env;
  } catch {
    return process.env;
  }
};

const env = getEnv();
/**
 * The current environment is determined by the
 * `VITE_DAPP_DAPP_ENVIRONMENT` environment variable.
 * If it's not set, the default is `local`.
 */
export const CURRENT_ENVIRONMENT: Environment = (process.env.VITE_PUBLIC_DAPP_ENVIRONMENT as Environment) || Environments.LOCAL;

const TESTNET_NETWORK_URL = "https://testnet.fuel.network/v1/graphql";
// The node URL is determined by the current environment too.
export const NODE_URL =
  CURRENT_ENVIRONMENT === "local"
    ? `http://127.0.0.1:${
        env.VITE_PUBLIC_FUEL_NODE_PORT || 4000
      }/v1/graphql`
    : TESTNET_NETWORK_URL;

export interface AppWallet {
  wallet?: Account;
  walletBalance?: BN;
  refreshWalletBalance?: () => Promise<void>;
}

export const TESTNET_FAUCET_LINK = "https://faucet-testnet.fuel.network/";

export const FAUCET_PRIVATE_KEY = "0x01";

export const DOCS_URL = "https://docs.fuel.network";

export const GATEWAY_URL = env.VITE_PUBLIC_GATEWAY_URL;

export const PINATA_JWT = env.VITE_PINATA_JWT;

export const PINATA_API_URL = "https://api.pinata.cloud";

export const VITE_BASE_URL = env.VITE_BASE_URL ?? "/";

export const WC_PROJECT_ID = env.VITE_PUBLIC_APP_WC_PROJECT_ID;