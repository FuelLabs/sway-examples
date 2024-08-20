<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset=".docs/native-asset-logo-dark-theme.png">
        <img alt="light theme" src=".docs/native-asset-logo-light-theme.png">
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

## Overview

A fungible asset is a [Native Asset](https://docs.fuel.network/docs/sway/blockchain-development/native_assets) on the Fuel Network.

In this project, there are a maximum of 100,000,000 coins for each asset that may be minted. There is no limit on the total individual assets a user may mint.

## Standards Implementations

The project implements and follows the [SRC-20; Native Asset](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-20.md) and [SRC-3; Mint and Burn](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-3.md) standards. It also uses the [Native Asset Library](https://fuellabs.github.io/sway-libs/book/asset/index.html) to implement the basic functionality behind the standards.  

### SRC-20

Set functions for name, symbol, and decimals have been provided to the user. While traditionally name, symbol, and decimals are written into the contract rather than storage, this contract is open to mint new types of assets. This means that every asset minted by this contract may contain a different name and symbol. 

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

### SRC-3

The [SRC-3](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-3.md) standard defines the ABI for minting and burning. This has been properly implemented.

```sway
abi SRC3 {
    #[storage(read, write)]
    fn mint(recipient: Identity, sub_id: SubId, amount: u64);
    #[storage(read, write)]
    fn burn(sub_id: SubId, amount: u64);
}
```

## Project structure

The project consists of a smart contract.

<!--Only show most important files e.g. script to run, build etc.-->

```sh
token-src20
├── README.md
└── token-src20-contract
    ├── Forc.lock
    ├── Forc.toml
    └── src
        ├── main.sw
```


# Getting Started

## Requirements

To begin, install dependencies.

- [Node.js v20.11.0 or latest stable](https://nodejs.org/en/). We recommend using [nvm](https://github.com/nvm-sh/nvm) to install.
- [PNPM v8.15.7 or latest stable](https://pnpm.io/installation/)
- [Rust v1.76.0 or latest `stable`](https://www.rust-lang.org/tools/install)
- [Forc v0.61.2 with latest toolchain](https://install.fuel.network/latest)

## Running Project Locally

### 📚 1. Getting the Repository

1. Visit the [Sway Application](https://github.com/FuelLabs/sway-applications) repo and fork the project.
2. Then clone your forked copy to your local machine and get to work.

```sh
git clone https://github.com/FuelLabs/sway-applications
cd sway-applications
```

### 📦 2. Install Dependencies

```sh
pnpm install
```

### 📒 3. Run Local Node

This command will start a local Fuel node

```sh
cd token-src0
pnpm fuels:node
```

### 🛠️ 4. Build and Deploy contracts

Now that you have the local node running you can build and deploy the contracts.  This command will build the contracts, generate their ts types for the frontend, deploy the contracts, and set the owner of the token contract.

```sh
pnpm fuels:run
```


###  💻 5. Run Web App

Now that you have your contract and its types you can start your frontend.

Start the frontend with the following command:

```sh
pnpm dev
```

After running that command, you can open [http://localhost:3000](http://localhost:3000) in your browser to view the explorer working.

### 🧪 7. Run Contract tests

```bash
cd token-src20-contract
forc test 
```

# Overview

A fungible token or more commonly referred as ERC 20 in the Ethereum ecosystem  is a unique asset that can be minted with a supply of your choice, burned and transferred. On the Fuel Network, all tokens are [Native Assets](https://docs.fuel.network/docs/sway/blockchain-development/native_assets). 


# Standards Implementations

The project implements and follows the [SRC-20; Native Asset](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-20.md), [SRC-3; Mint and Burn](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-3.md), and [SRC-7; Metadata](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-7.md) standards. It also uses the [Native Asset Library](https://fuellabs.github.io/sway-libs/book/asset/index.html) to implement the basic functionality behind the standards.  

## SRC-20
SRC-20 is a standard for fungible tokens built in Sway.

The [SRC-20](https://github.com/FuelLabs/sway-standards/blob/master/SRCs/src-20.md) standard allows for the implementation of a standard API for Native Assets using the Sway Language. This standard provides basic functionality as well as on-chain metadata for other applications to use.
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



