import { Account, BN } from "fuels";

// The two environments for the dapp are local and testnet.
export const Environments = {
  LOCAL: "local",
  TESTNET: "testnet",
} as const;
type Environment = (typeof Environments)[keyof typeof Environments];

/**
 * The current environment is determined by the
 * `VITE_DAPP_DAPP_ENVIRONMENT` environment variable.
 * If it's not set, the default is `local`.
 */
export const CURRENT_ENVIRONMENT: Environment = "testnet"
  // (process.env.VITE_DAPP_DAPP_ENVIRONMENT as Environment) || Environments.LOCAL;

const TESTNET_NETWORK_URL = "https://testnet.fuel.network/v1/graphql";
// The node URL is determined by the current environment too.
export const NODE_URL = TESTNET_NETWORK_URL;
// CURRENT_ENVIRONMENT === Environments.LOCAL
//   ? `http://127.0.0.1:${process.env.VITE_FUEL_NODE_PORT || 4000}/v1/graphql`
//   : TESTNET_NETWORK_URL;

export interface AppWallet {
  wallet?: Account;
  walletBalance?: BN;
  refreshWalletBalance?: () => Promise<void>;
}

export const TESTNET_FAUCET_LINK = "https://faucet-testnet.fuel.network/";

export const FAUCET_LINK =
// @ts-expect-error will fix it once the build succeeds
  CURRENT_ENVIRONMENT === Environments.LOCAL ? "/faucet" : TESTNET_FAUCET_LINK;

export const FAUCET_PRIVATE_KEY = "0x01";

export const DOCS_URL = "https://docs.fuel.network";

export const GATEWAY_URL = process.env.VITE_DAPP_GATEWAY_URL
  ? process.env.VITE_DAPP_GATEWAY_URL
  : "https://beige-ready-porcupine-957.mypinata.cloud";

export const PINATA_JWT = process.env.VITE_DAPP_PINATA_JWT;

export const PINATA_API_URL = "https://api.pinata.cloud";
