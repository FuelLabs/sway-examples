# Airdrop DApp

This project is a [Vite](https://vitejs.dev/) application bootstrapped with [`create-fuels`](https://github.com/FuelLabs/fuels-ts/tree/master/packages/create-fuels).

### Demo

Interact with the Airdrop DApp using this [demo link](https://fuellabs.github.io/sway-examples/pr-preview/pr-18/airdrop/).

### Architecture Overview

The Airdrop DApp leverages IPFS (InterPlanetary File System) and Merkle trees for efficient and decentralized airdrop management:

- **IPFS Storage**: 
  - Stores all airdrop data (recipient addresses, amounts, and metadata) on IPFS.
  - Ensures decentralized and permanent storage.
  - Reduces on-chain storage costs.
  - Provides data immutability and verification.
  - Facilitates easy access to complete airdrop details.

- **Merkle Tree Implementation**: 
  - Only the Merkle root is stored in the smart contract.
  - Enables efficient on-chain verification of airdrop claims.
  - Significantly reduces gas costs.
  - Supports large recipient lists without increasing contract complexity.

## Getting Started

1. **Set Up Environment Variables**:
   - Create a `.env.local` file at the root of the `/airdrop` directory.
   - Copy the contents from `.env.example` to `.env.local`.
   - Configure the following variables in `.env.local`:

     ```plaintext
     # Fuel Node Configuration
     VITE_FUEL_NODE_PORT=4000                    # Default port for local Fuel node

     # Environment Setting
     VITE_PUBLIC_DAPP_ENVIRONMENT=testnet        # Options: 'testnet', 'mainnet', or 'local'

     # Pinata IPFS Configuration (Get from https://app.pinata.cloud)
     VITE_PINATA_JWT=                            # Your Pinata JWT token
     VITE_PUBLIC_GATEWAY_URL=                    # Your preferred IPFS gateway URL
     VITE_API_Key=                               # Your Pinata API Key
     VITE_API_Secret=                            # Your Pinata API Secret

     # Base URL Configuration
     VITE_BASE_URL=/                             # Base URL for your application

     # WalletConnect Configuration
     VITE_PUBLIC_APP_WC_PROJECT_ID=              # Get from https://cloud.walletconnect.com
     ```

   > ⚠️ **Important Notes**:
   > - For Pinata credentials, sign up at [Pinata Cloud](https://app.pinata.cloud).
   > - For WalletConnect Project ID, register at [WalletConnect Cloud](https://cloud.walletconnect.com).

2. **Start the Fuel Development Server**:
   - This server will start a local Fuel node and provide hot-reloading for your smart contracts. To start the local Fuel node, run:

      ```bash
      npm run fuels:dev
      ```

   - This command will compile the contracts, generate types for your contracts, and start the Fuel local node at [http://127.0.0.1:4000/v1/graphql](http://127.0.0.1:4000/v1/graphql).

3. **Start the Next.js Development Server**:
   - To start the frontend server locally, run the `dev` command:

     ```bash
     npm run dev
     ```

   - This will start the local frontend server.

## Deploying to Testnet

For instructions on deploying your Fuel DApp to the testnet, refer to our [Deploying to Testnet guide](https://docs.fuel.network/docs/fuels-ts/creating-a-fuel-dapp/deploying-a-dapp-to-testnet/).

## Learn More

- [Fuel TS SDK Documentation](https://docs.fuel.network/docs/fuels-ts/)
- [Fuel Docs Portal](https://docs.fuel.network/)
