import { Account, BN } from 'fuels';

type DappEnvironment = 'local' | 'testnet';

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

export const CURRENT_ENVIRONMENT: DappEnvironment =
  (env.VITE_PUBLIC_DAPP_ENVIRONMENT as DappEnvironment) ||
  "local";

export const NODE_URL =
  CURRENT_ENVIRONMENT === "local"
    ? `http://127.0.0.1:${
        env.VITE_PUBLIC_FUEL_NODE_PORT || 4000
      }/v1/graphql`
    : "https://testnet.fuel.network/v1/graphql";

export interface AppWallet {
  wallet?: Account;
  walletBalance?: BN;
  refreshWalletBalance?: () => Promise<void>;
}

export const TESTNET_FAUCET_LINK = 'https://faucet-testnet.fuel.network/';
export const FAUCET_PRIVATE_KEY = '0x01';
export const WC_PROJECT_ID = env.VITE_PUBLIC_APP_WC_PROJECT_ID!;
export const VITE_BASE_URL = env.VITE_BASE_URL ?? "";


