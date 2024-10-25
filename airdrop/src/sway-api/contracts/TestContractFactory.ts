/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.96.1
  Forc version: 0.66.1
  Fuel-Core version: 0.40.0
*/

import { Contract, ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { TestContract } from "./TestContract";

const bytecode = decompressBytecode("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");

export class TestContractFactory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, TestContract.abi, accountOrProvider);
  }

  override deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: TestContract.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<TestContract>> {
    const factory = new TestContractFactory(wallet);
    return factory.deploy(options);
  }
}
