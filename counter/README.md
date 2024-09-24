<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset=".docs/readme_white.png">
        <img alt="light theme" src=".docs/readme_black.png">
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

# Overview

This example dApp demonstrates how to build a simple counter dApp on Fuel. It covers the following key aspects:

1. **Building a Counter dApp**: Learn how to create a basic counter smart contract in Sway, deploy it to the Fuel network, and interact with it through a frontend application.
2. **Working with Predicates**: Understand how to use predicates in Fuel to create stateless DeFi applications.
3. **Running Scripts on Fuel**: Explore how to execute scripts that interact with your smart contracts and predicates on the Fuel network.

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
cd sway-examples/counter
```

### 📦 2. Install Dependencies

```sh
pnpm install
```

### 📒 3. Run Local Node

This command will start a local Fuel node

```sh
cd counter
pnpm fuels:node
```

### 🛠️ 4. Build and Deploy contracts

Now that you have the local node running you can build and deploy the contracts. This command will build the contracts, generate their ts types for the frontend and deploy the contracts.

```sh
pnpm fuels:run
```

If you want to deploy to the testnet and interact with your contract, set `VITE_PUBLIC_DAPP_ENVIRONMENT` to testnet in your `.env` file in the next step.

### 💻 6. Run Web App

Now that you have your contract and its types you can start your frontend.

Start the frontend with the following command:

```sh
pnpm dev
```

After running that command, you can open [http://localhost:5173/counter](http://localhost:5173/counter) in your browser to interact with the dapp.

### 🧪 7. Run Contract tests

```sh
cargo test
```

### 🧑🏻‍🔧 8. Deploying to testnet

Let's deploy the contract to the Fuel testnet for testing it on Production as well.

```sh
cd sway-programs/contract
```
Then run the following command and follow the instructions to deploy to testnet

```sh
forc deploy --testnet
```
You should see a message similar to this:
```sh
Contract deploy-to-testnet Deployed!

Network: https://testnet.fuel.network
Contract ID: 0x8342d413de2a678245d9ee39f020795800c7e6a4ac5ff7daae275f533dc05e08
Deployed in block 0x4ea52b6652836c499e44b7e42f7c22d1ed1f03cf90a1d94cd0113b9023dfa636
```
Now copy the Contract ID, go to your .env file and add a new variable named ```
VITE_PUBLIC_TESTNET_COUNTER_CONTRACT_ID ```. Set its value to the contract ID you have copied.

```sh
VITE_PUBLIC_TESTNET_COUNTER_CONTRACT_ID=0x8342d413de2a678245d9ee39f020795800c7e6a4ac5ff7daae275f533dc05e08
```

In the same .env file update the value of your ```VITE_PUBLIC_DAPP_ENVIRONMENT``` from ```local``` to ```testnet``` and you are done.

You can now run ```pnpm dev``` to test the dapp on Fuel testnet.