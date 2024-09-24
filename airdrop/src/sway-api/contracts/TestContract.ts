/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.6
  Forc version: 0.63.5
  Fuel-Core version: 0.35.0
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  FunctionFragment,
  InvokeFunction,
} from 'fuels';

import type { Option, Enum, Vec } from "./common";

export enum AccessErrorInput { CallerNotOwner = 'CallerNotOwner', CallerNotPendingOwner = 'CallerNotPendingOwner', Paused = 'Paused', AirdropDone = 'AirdropDone', AirdropActive = 'AirdropActive', AlreadyClaimed = 'AlreadyClaimed', AlreadyInitialized = 'AlreadyInitialized' };
export enum AccessErrorOutput { CallerNotOwner = 'CallerNotOwner', CallerNotPendingOwner = 'CallerNotPendingOwner', Paused = 'Paused', AirdropDone = 'AirdropDone', AirdropActive = 'AirdropActive', AlreadyClaimed = 'AlreadyClaimed', AlreadyInitialized = 'AlreadyInitialized' };
export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export enum InputErrorInput { InvalidOwner = 'InvalidOwner' };
export enum InputErrorOutput { InvalidOwner = 'InvalidOwner' };
export enum ProofErrorInput { InvalidKey = 'InvalidKey', InvalidProofLength = 'InvalidProofLength' };
export enum ProofErrorOutput { InvalidKey = 'InvalidKey', InvalidProofLength = 'InvalidProofLength' };
export enum VerificationErrorInput { AccountIdToLarge = 'AccountIdToLarge', IncorrectAccount = 'IncorrectAccount', InvalidProof = 'InvalidProof', NoSigner = 'NoSigner' };
export enum VerificationErrorOutput { AccountIdToLarge = 'AccountIdToLarge', IncorrectAccount = 'IncorrectAccount', InvalidProof = 'InvalidProof', NoSigner = 'NoSigner' };

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ClaimEventInput = { amount: BigNumberish, claimer: string, to: IdentityInput };
export type ClaimEventOutput = { amount: BN, claimer: string, to: IdentityOutput };
export type ClawbackEventInput = { asset_id: AssetIdInput, amount: BigNumberish, to: IdentityInput };
export type ClawbackEventOutput = { asset_id: AssetIdOutput, amount: BN, to: IdentityOutput };
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type OwnershipTransferEventInput = { from: IdentityInput, to: IdentityInput };
export type OwnershipTransferEventOutput = { from: IdentityOutput, to: IdentityOutput };
export type OwnershipTransferInitiatedEventInput = { from: Option<IdentityInput>, to: IdentityInput };
export type OwnershipTransferInitiatedEventOutput = { from: Option<IdentityOutput>, to: IdentityOutput };
export type PauseChangeEventInput = { is_paused: boolean };
export type PauseChangeEventOutput = PauseChangeEventInput;

export type TestContractConfigurables = Partial<{
  MERKLE_ROOT: string;
  ASSET: AssetIdInput;
  END_TIME: BigNumberish;
  NUM_LEAVES: BigNumberish;
  INITIAL_OWNER: Option<IdentityInput>;
}>;

const abi = {
  "programType": "contract",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "()",
      "concreteTypeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
      "type": "b256",
      "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
      "type": "bool",
      "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
    },
    {
      "type": "enum errors::AccessError",
      "concreteTypeId": "966a21e670944bac224061bac62f1f4d514ed5b6ddbb37a67dcfd0a17f6423c0",
      "metadataTypeId": 0
    },
    {
      "type": "enum errors::InputError",
      "concreteTypeId": "450f24be2388d767c2a3683c3a8f173b79f7f02437bf6098cd36ba13bfc4c1b2",
      "metadataTypeId": 1
    },
    {
      "type": "enum errors::VerificationError",
      "concreteTypeId": "830d3b5a51b6b713a3c93913be027ca77d17b627fcb50fab6474df96baf1da1b",
      "metadataTypeId": 2
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 3
    },
    {
      "type": "enum std::option::Option<enum std::identity::Identity>",
      "concreteTypeId": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "metadataTypeId": 4,
      "typeArguments": [
        "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
      ]
    },
    {
      "type": "enum sway_libs::merkle::binary_proof::ProofError",
      "concreteTypeId": "b99ff7124bda2b55402338105d5a582d311c1113da1c5f5b1b6f2c32bcd91965",
      "metadataTypeId": 5
    },
    {
      "type": "struct events::ClaimEvent",
      "concreteTypeId": "1fa0c6da5fd6fd691795bd27aadcc15cdc0280686eab924a3884591d8d82eeab",
      "metadataTypeId": 8
    },
    {
      "type": "struct events::ClawbackEvent",
      "concreteTypeId": "5ac9dc90a29a8a0a6c103ae358b2328b5f7ba992bba3d614ecf30567493cb1d2",
      "metadataTypeId": 9
    },
    {
      "type": "struct events::OwnershipTransferEvent",
      "concreteTypeId": "af74b4220e088155e62d336c5d550649398f4840a7bfbc29939da422c1a20c47",
      "metadataTypeId": 10
    },
    {
      "type": "struct events::OwnershipTransferInitiatedEvent",
      "concreteTypeId": "dcfc1df0609cb2dd4ca8d2ed1ecf3345f0e8e24b4dba52be214e10713290cccc",
      "metadataTypeId": 11
    },
    {
      "type": "struct events::PauseChangeEvent",
      "concreteTypeId": "68b78007febdb9c12cc535c7b120f5b4e11145114b85e2c44947fac773823991",
      "metadataTypeId": 12
    },
    {
      "type": "struct std::asset_id::AssetId",
      "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      "metadataTypeId": 14
    },
    {
      "type": "struct std::vec::Vec<b256>",
      "concreteTypeId": "32559685d0c9845f059bf9d472a0a38cf77d36c23dfcffe5489e86a65cdd9198",
      "metadataTypeId": 17,
      "typeArguments": [
        "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
      ]
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [
    {
      "type": "enum errors::AccessError",
      "metadataTypeId": 0,
      "components": [
        {
          "name": "CallerNotOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "CallerNotPendingOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Paused",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "AirdropDone",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "AirdropActive",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "AlreadyClaimed",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "AlreadyInitialized",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum errors::InputError",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "InvalidOwner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum errors::VerificationError",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "AccountIdToLarge",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "IncorrectAccount",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "InvalidProof",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "NoSigner",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "Address",
          "typeId": 13
        },
        {
          "name": "ContractId",
          "typeId": 15
        }
      ]
    },
    {
      "type": "enum std::option::Option",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "None",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Some",
          "typeId": 6
        }
      ],
      "typeParameters": [
        6
      ]
    },
    {
      "type": "enum sway_libs::merkle::binary_proof::ProofError",
      "metadataTypeId": 5,
      "components": [
        {
          "name": "InvalidKey",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "InvalidProofLength",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        }
      ]
    },
    {
      "type": "generic T",
      "metadataTypeId": 6
    },
    {
      "type": "raw untyped ptr",
      "metadataTypeId": 7
    },
    {
      "type": "struct events::ClaimEvent",
      "metadataTypeId": 8,
      "components": [
        {
          "name": "amount",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "claimer",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        },
        {
          "name": "to",
          "typeId": 3
        }
      ]
    },
    {
      "type": "struct events::ClawbackEvent",
      "metadataTypeId": 9,
      "components": [
        {
          "name": "asset_id",
          "typeId": 14
        },
        {
          "name": "amount",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "to",
          "typeId": 3
        }
      ]
    },
    {
      "type": "struct events::OwnershipTransferEvent",
      "metadataTypeId": 10,
      "components": [
        {
          "name": "from",
          "typeId": 3
        },
        {
          "name": "to",
          "typeId": 3
        }
      ]
    },
    {
      "type": "struct events::OwnershipTransferInitiatedEvent",
      "metadataTypeId": 11,
      "components": [
        {
          "name": "from",
          "typeId": 4,
          "typeArguments": [
            {
              "name": "",
              "typeId": 3
            }
          ]
        },
        {
          "name": "to",
          "typeId": 3
        }
      ]
    },
    {
      "type": "struct events::PauseChangeEvent",
      "metadataTypeId": 12,
      "components": [
        {
          "name": "is_paused",
          "typeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
        }
      ]
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 13,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 14,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 15,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::vec::RawVec",
      "metadataTypeId": 16,
      "components": [
        {
          "name": "ptr",
          "typeId": 7
        },
        {
          "name": "cap",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "typeParameters": [
        6
      ]
    },
    {
      "type": "struct std::vec::Vec",
      "metadataTypeId": 17,
      "components": [
        {
          "name": "buf",
          "typeId": 16,
          "typeArguments": [
            {
              "name": "",
              "typeId": 6
            }
          ]
        },
        {
          "name": "len",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "typeParameters": [
        6
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "amount",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "account",
          "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        },
        {
          "name": "tree_index",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "proof",
          "concreteTypeId": "32559685d0c9845f059bf9d472a0a38cf77d36c23dfcffe5489e86a65cdd9198"
        },
        {
          "name": "recipient",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "claim",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "recipient",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        },
        {
          "name": "asset_id",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        }
      ],
      "name": "clawback",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "confirm_transfer_ownership",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "end_time",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": null
    },
    {
      "inputs": [],
      "name": "initialize",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "new_owner",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        }
      ],
      "name": "initiate_transfer_ownership",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "tree_index",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "is_claimed",
      "output": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "is_paused",
      "output": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "merkle_root",
      "output": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b",
      "attributes": null
    },
    {
      "inputs": [],
      "name": "owner",
      "output": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "paused",
          "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
        }
      ],
      "name": "set_paused",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "10838512726835481516",
      "concreteTypeId": "966a21e670944bac224061bac62f1f4d514ed5b6ddbb37a67dcfd0a17f6423c0"
    },
    {
      "logId": "9443269252769822483",
      "concreteTypeId": "830d3b5a51b6b713a3c93913be027ca77d17b627fcb50fab6474df96baf1da1b"
    },
    {
      "logId": "13375681076267723605",
      "concreteTypeId": "b99ff7124bda2b55402338105d5a582d311c1113da1c5f5b1b6f2c32bcd91965"
    },
    {
      "logId": "2279040052662566249",
      "concreteTypeId": "1fa0c6da5fd6fd691795bd27aadcc15cdc0280686eab924a3884591d8d82eeab"
    },
    {
      "logId": "6542002447493794314",
      "concreteTypeId": "5ac9dc90a29a8a0a6c103ae358b2328b5f7ba992bba3d614ecf30567493cb1d2"
    },
    {
      "logId": "12642928112293151061",
      "concreteTypeId": "af74b4220e088155e62d336c5d550649398f4840a7bfbc29939da422c1a20c47"
    },
    {
      "logId": "4976236512326244199",
      "concreteTypeId": "450f24be2388d767c2a3683c3a8f173b79f7f02437bf6098cd36ba13bfc4c1b2"
    },
    {
      "logId": "15923635300725469917",
      "concreteTypeId": "dcfc1df0609cb2dd4ca8d2ed1ecf3345f0e8e24b4dba52be214e10713290cccc"
    },
    {
      "logId": "7545640472509528513",
      "concreteTypeId": "68b78007febdb9c12cc535c7b120f5b4e11145114b85e2c44947fac773823991"
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "MERKLE_ROOT",
      "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b",
      "offset": 35304
    },
    {
      "name": "ASSET",
      "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      "offset": 35216
    },
    {
      "name": "END_TIME",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "offset": 35248
    },
    {
      "name": "NUM_LEAVES",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "offset": 35336
    },
    {
      "name": "INITIAL_OWNER",
      "concreteTypeId": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "offset": 35256
    }
  ]
};

const storageSlots: StorageSlot[] = [
  {
    "key": "1d63cc2495bbf5570c9a6d7f632018dc033107e7f4452405c44601bb771a4a5d",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "1d63cc2495bbf5570c9a6d7f632018dc033107e7f4452405c44601bb771a4a5e",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "309e214937e6b1ba34ba1a663db855b3aa0605083e49fa6b09c5ef4186a60300",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "309e214937e6b1ba34ba1a663db855b3aa0605083e49fa6b09c5ef4186a60301",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "38a1b038206f348ec947ba5770c6d713148c9d8bb0b312f47acc88777da1c09d",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "82364c88cfc6f6d7a89bb2c2a21170eb8c7bfebc3fe4a45221ce35a05295e4ad",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class TestContractInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    claim: FunctionFragment;
    clawback: FunctionFragment;
    confirm_transfer_ownership: FunctionFragment;
    end_time: FunctionFragment;
    initialize: FunctionFragment;
    initiate_transfer_ownership: FunctionFragment;
    is_claimed: FunctionFragment;
    is_paused: FunctionFragment;
    merkle_root: FunctionFragment;
    owner: FunctionFragment;
    set_paused: FunctionFragment;
  };
}

export class TestContract extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: TestContractInterface;
  declare functions: {
    claim: InvokeFunction<[amount: BigNumberish, account: string, tree_index: BigNumberish, proof: Vec<string>, recipient: IdentityInput], BN>;
    clawback: InvokeFunction<[recipient: IdentityInput, asset_id: AssetIdInput], BN>;
    confirm_transfer_ownership: InvokeFunction<[], void>;
    end_time: InvokeFunction<[], BN>;
    initialize: InvokeFunction<[], void>;
    initiate_transfer_ownership: InvokeFunction<[new_owner: IdentityInput], void>;
    is_claimed: InvokeFunction<[tree_index: BigNumberish], boolean>;
    is_paused: InvokeFunction<[], boolean>;
    merkle_root: InvokeFunction<[], string>;
    owner: InvokeFunction<[], Option<IdentityOutput>>;
    set_paused: InvokeFunction<[paused: boolean], void>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}
