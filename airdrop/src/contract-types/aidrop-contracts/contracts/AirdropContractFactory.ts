/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.1
*/

import { ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { AirdropContract } from "./AirdropContract";

const bytecode = decompressBytecode("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");

export class AirdropContractFactory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, AirdropContract.abi, accountOrProvider);
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<AirdropContract>> {
    const factory = new AirdropContractFactory(wallet);

    return factory.deploy({
      storageSlots: AirdropContract.storageSlots,
      ...options,
    });
  }
}
