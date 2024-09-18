<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset=".docs/nft-logo_white.png">
        <img alt="light theme" src=".docs/nft-logo_black.png">
    </picture>
</p>

<p align="center">
    <a href="https://crates.io/crates/forc/0.60.0" alt="forc">
        <img src="https://img.shields.io/badge/forc-v0.60.0-orange" />
    </a>
    <a href="https://crates.io/crates/fuel-core/0.26.0" alt="fuel-core">
        <img src="https://img.shields.io/badge/fuel--core-v0.26.0-yellow" />
    </a>
</p>

# Getting Started

## Requirements

To begin, install dependencies.

- [Node.js v20.11.0 or latest stable](https://nodejs.org/en/). We recommend using [nvm](https://github.com/nvm-sh/nvm) to install.
- [PNPM v8.15.7 or latest stable](https://pnpm.io/installation/)
- [Rust v1.76.0 or latest `stable`](https://www.rust-lang.org/tools/install)
- [Forc v0.61.2 with latest toolchain](https://install.fuel.network/latest)

## Running Project Locally

### 📚 1. Getting the Repository

1. Visit the [Sway Application](https://github.com/FuelLabs/sway-examples) repo and fork the project.
2. Then clone your forked copy to your local machine and get to work.

```sh
git clone https://github.com/FuelLabs/sway-examples
cd sway-examples/nft
```

### 📦 2. Install Dependencies

```sh
pnpm install
```

### 📒 3. Run Local Node

This command will start a local Fuel node

```sh
cd nft
pnpm fuels:node
```

### 🛠️ 4. Build and Deploy contracts

Now that you have the local node running you can build and deploy the contracts. This command will build the contracts, generate their ts types for the frontend, deploy the contracts, and set the owner of the NFT contract.

```sh
pnpm fuels:run
```

If you want to deploy to the testnet and interact with your contract, set `NEXT_PUBLIC_DAPP_ENVIRONMENT` to testnet in your `.env` file in the next step.

### 🪅 5. Create Pinata Account and get API Key

Create a `.env` file based on the provided example in the `nft/` directory

```sh
cp ./.env.example ./.env
```

This app uses Pinata to store NFT image data. You can follow their [documentation](https://docs.pinata.cloud/account-management/api-keys) to get an api key and gateway url. Once you have an account set `VITE_PINATA_JWT` as the API key and `VITE_PUBLIC_GATEWAY_URL` as your pinata gateway url in your `.env` file. `WALLET_SECRET` is a private key that holds funds on the network. Lastly, `VITE_APP_WC_PROJECT_ID` refers to the [WalletConnect](walletconnect.network) project ID.

### 💻 6. Run Web App

Now that you have your contract and its types you can start your frontend.

Start the frontend with the following command:

```sh
pnpm dev
```

After running that command, you can open [http://localhost:5173/nft](http://localhost:5173/nft) in your browser to view the explorer working.

### 🧪 7. Run Contract tests

```sh
cargo test
```

# Overview

A non-fungible token (NFT) is a unique asset that has a maximum supply of one. On the Fuel Network, all NFTs are [Native Assets](https://docs.fuel.network/docs/sway/blockchain-development/native_assets). They are commonly associated with artwork / collectibles however there are many greater utilities beyond that which have yet to be written for the Fuel Network.

Each NFT may contain any metadata the user desires to store, however this frontend app only stores the image uri under the `"image"` string. We store the `name` and `symbol` on-chain using [sway-libs](https://github.com/FuelLabs/sway-libs/tree/master). We also store extra metadata on IPFS such as the `nftSubId`, `minter`, `nftName`, and `nftDescription`.

# Standards Implementations

The project implements and follows the [SRC-20; Native Asset](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-20.md), [SRC-3; Mint and Burn](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-3.md), and [SRC-7; Metadata](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-7.md) standards. It also uses the [Native Asset Library](https://fuellabs.github.io/sway-libs/book/asset/index.html) to implement the basic functionality behind the standards.

## SRC-20

The [SRC-20](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-20.md) standard requires that there is a maximum number of one coin per NFT asset. It also states that the decimals must be `0u8` for any NFT. This project conforms to both these restrictions and thus can be deemed an NFT on the Fuel Network.

Set functions for name and symbol have been provided to the user. While traditionally name and symbol are written into the contract rather than storage, this contract is open to mint new types of assets. This means that every NFT minted by this contract may contain a different name and symbol.

The [SRC-20](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-20.md) ABI defined below has also been implemented.

```sway
abi SRC20 {
    #[storage(read)]
    fn total_assets() -> u64;
    #[storage(read)]
    fn total_supply(asset: AssetId) -> Option<u64>;
    #[storage(read)]
    fn name(asset: AssetId) -> Option<String>;
    #[storage(read)]
    fn symbol(asset: AssetId) -> Option<String>;
    #[storage(read)]
    fn decimals(asset: AssetId) -> Option<u8>;
}
```

## SRC-3

The [SRC-3](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-3.md) standard defines the ABI for minting and burning. This has been properly implemented.

```sway
abi SRC3 {
    #[storage(read, write)]
    fn mint(recipient: Identity, sub_id: SubId, amount: u64);
    #[storage(read, write)]
    fn burn(sub_id: SubId, amount: u64);
}
```

## SRC-7

The [SRC-7](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-7.md) standard defines the ABI for retrieving metadata. This has been properly implemented.

A set function that uses storage has been provided to allow the user to set their own desired metadata. There is no limit or restrictions to what and the amount of metadata an asset may have.

```sway
abi SRC7 {
    #[storage(read)]
    fn metadata(asset: AssetId, key: String) -> Option<Metadata>;
}
```
