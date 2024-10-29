var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { aa as Contract, ab as decompressBytecode, ac as ContractFactory, ad as constructTree, ae as calcRoot, af as getProof, ag as TupleCoder, ah as B256Coder, ai as BigNumberCoder, aj as bn, ak as sha256, o as clsx$1, r as reactExports, j as jsxRuntimeExports, a2 as Slot } from "./index-m4XAuUiK.js";
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
      "type": "str",
      "concreteTypeId": "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a"
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
      "name": "is_initialized",
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
      "name": "num_leaves",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
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
      "logId": "10098701174489624218",
      "concreteTypeId": "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a"
    },
    {
      "logId": "1515152261580153489",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    },
    {
      "logId": "9443269252769822483",
      "concreteTypeId": "830d3b5a51b6b713a3c93913be027ca77d17b627fcb50fab6474df96baf1da1b"
    },
    {
      "logId": "8961848586872524460",
      "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
      "logId": "3626970576394486879",
      "concreteTypeId": "32559685d0c9845f059bf9d472a0a38cf77d36c23dfcffe5489e86a65cdd9198"
    },
    {
      "logId": "13375681076267723605",
      "concreteTypeId": "b99ff7124bda2b55402338105d5a582d311c1113da1c5f5b1b6f2c32bcd91965"
    },
    {
      "logId": "13213829929622723620",
      "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
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
      "offset": 37824
    },
    {
      "name": "ASSET",
      "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      "offset": 37736
    },
    {
      "name": "END_TIME",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "offset": 37768
    },
    {
      "name": "NUM_LEAVES",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "offset": 37856
    },
    {
      "name": "INITIAL_OWNER",
      "concreteTypeId": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "offset": 37776
    }
  ]
};
const storageSlots = [
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
class TestContract extends Contract {
  constructor(id, accountOrProvider) {
    super(id, abi, accountOrProvider);
  }
}
__publicField(TestContract, "abi", abi);
__publicField(TestContract, "storageSlots", storageSlots);
const bytecode = decompressBytecode("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");
const _TestContractFactory = class _TestContractFactory extends ContractFactory {
  constructor(accountOrProvider) {
    super(bytecode, TestContract.abi, accountOrProvider);
  }
  deploy(deployOptions) {
    return super.deploy({
      storageSlots: TestContract.storageSlots,
      ...deployOptions
    });
  }
  static async deploy(wallet, options = {}) {
    const factory = new _TestContractFactory(wallet);
    return factory.deploy(options);
  }
};
__publicField(_TestContractFactory, "bytecode", bytecode);
let TestContractFactory = _TestContractFactory;
var jsonify = {};
var parse;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse;
  hasRequiredParse = 1;
  var at;
  var ch;
  var escapee = {
    '"': '"',
    "\\": "\\",
    "/": "/",
    b: "\b",
    f: "\f",
    n: "\n",
    r: "\r",
    t: "	"
  };
  var text;
  function error(m) {
    throw {
      name: "SyntaxError",
      message: m,
      at,
      text
    };
  }
  function next(c) {
    if (c && c !== ch) {
      error("Expected '" + c + "' instead of '" + ch + "'");
    }
    ch = text.charAt(at);
    at += 1;
    return ch;
  }
  function number() {
    var num;
    var str = "";
    if (ch === "-") {
      str = "-";
      next("-");
    }
    while (ch >= "0" && ch <= "9") {
      str += ch;
      next();
    }
    if (ch === ".") {
      str += ".";
      while (next() && ch >= "0" && ch <= "9") {
        str += ch;
      }
    }
    if (ch === "e" || ch === "E") {
      str += ch;
      next();
      if (ch === "-" || ch === "+") {
        str += ch;
        next();
      }
      while (ch >= "0" && ch <= "9") {
        str += ch;
        next();
      }
    }
    num = Number(str);
    if (!isFinite(num)) {
      error("Bad number");
    }
    return num;
  }
  function string() {
    var hex;
    var i;
    var str = "";
    var uffff;
    if (ch === '"') {
      while (next()) {
        if (ch === '"') {
          next();
          return str;
        } else if (ch === "\\") {
          next();
          if (ch === "u") {
            uffff = 0;
            for (i = 0; i < 4; i += 1) {
              hex = parseInt(next(), 16);
              if (!isFinite(hex)) {
                break;
              }
              uffff = uffff * 16 + hex;
            }
            str += String.fromCharCode(uffff);
          } else if (typeof escapee[ch] === "string") {
            str += escapee[ch];
          } else {
            break;
          }
        } else {
          str += ch;
        }
      }
    }
    error("Bad string");
  }
  function white() {
    while (ch && ch <= " ") {
      next();
    }
  }
  function word() {
    switch (ch) {
      case "t":
        next("t");
        next("r");
        next("u");
        next("e");
        return true;
      case "f":
        next("f");
        next("a");
        next("l");
        next("s");
        next("e");
        return false;
      case "n":
        next("n");
        next("u");
        next("l");
        next("l");
        return null;
      default:
        error("Unexpected '" + ch + "'");
    }
  }
  function array() {
    var arr = [];
    if (ch === "[") {
      next("[");
      white();
      if (ch === "]") {
        next("]");
        return arr;
      }
      while (ch) {
        arr.push(value());
        white();
        if (ch === "]") {
          next("]");
          return arr;
        }
        next(",");
        white();
      }
    }
    error("Bad array");
  }
  function object() {
    var key;
    var obj = {};
    if (ch === "{") {
      next("{");
      white();
      if (ch === "}") {
        next("}");
        return obj;
      }
      while (ch) {
        key = string();
        white();
        next(":");
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          error('Duplicate key "' + key + '"');
        }
        obj[key] = value();
        white();
        if (ch === "}") {
          next("}");
          return obj;
        }
        next(",");
        white();
      }
    }
    error("Bad object");
  }
  function value() {
    white();
    switch (ch) {
      case "{":
        return object();
      case "[":
        return array();
      case '"':
        return string();
      case "-":
        return number();
      default:
        return ch >= "0" && ch <= "9" ? number() : word();
    }
  }
  parse = function(source, reviver) {
    var result;
    text = source;
    at = 0;
    ch = " ";
    result = value();
    white();
    if (ch) {
      error("Syntax error");
    }
    return typeof reviver === "function" ? function walk(holder, key) {
      var k;
      var v;
      var val = holder[key];
      if (val && typeof val === "object") {
        for (k in value) {
          if (Object.prototype.hasOwnProperty.call(val, k)) {
            v = walk(val, k);
            if (typeof v === "undefined") {
              delete val[k];
            } else {
              val[k] = v;
            }
          }
        }
      }
      return reviver.call(holder, key, val);
    }({ "": result }, "") : result;
  };
  return parse;
}
var stringify;
var hasRequiredStringify;
function requireStringify() {
  if (hasRequiredStringify) return stringify;
  hasRequiredStringify = 1;
  var escapable = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  var gap;
  var indent;
  var meta = {
    // table of character substitutions
    "\b": "\\b",
    "	": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\"
  };
  var rep;
  function quote(string) {
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
      var c = meta[a];
      return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
  }
  function str(key, holder) {
    var i;
    var k;
    var v;
    var length;
    var mind = gap;
    var partial;
    var value = holder[key];
    if (value && typeof value === "object" && typeof value.toJSON === "function") {
      value = value.toJSON(key);
    }
    if (typeof rep === "function") {
      value = rep.call(holder, key, value);
    }
    switch (typeof value) {
      case "string":
        return quote(value);
      case "number":
        return isFinite(value) ? String(value) : "null";
      case "boolean":
      case "null":
        return String(value);
      case "object":
        if (!value) {
          return "null";
        }
        gap += indent;
        partial = [];
        if (Object.prototype.toString.apply(value) === "[object Array]") {
          length = value.length;
          for (i = 0; i < length; i += 1) {
            partial[i] = str(i, value) || "null";
          }
          v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
          gap = mind;
          return v;
        }
        if (rep && typeof rep === "object") {
          length = rep.length;
          for (i = 0; i < length; i += 1) {
            k = rep[i];
            if (typeof k === "string") {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ": " : ":") + v);
              }
            }
          }
        } else {
          for (k in value) {
            if (Object.prototype.hasOwnProperty.call(value, k)) {
              v = str(k, value);
              if (v) {
                partial.push(quote(k) + (gap ? ": " : ":") + v);
              }
            }
          }
        }
        v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
        gap = mind;
        return v;
    }
  }
  stringify = function(value, replacer, space) {
    var i;
    gap = "";
    indent = "";
    if (typeof space === "number") {
      for (i = 0; i < space; i += 1) {
        indent += " ";
      }
    } else if (typeof space === "string") {
      indent = space;
    }
    rep = replacer;
    if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
      throw new Error("JSON.stringify");
    }
    return str("", { "": value });
  };
  return stringify;
}
var hasRequiredJsonify;
function requireJsonify() {
  if (hasRequiredJsonify) return jsonify;
  hasRequiredJsonify = 1;
  jsonify.parse = requireParse();
  jsonify.stringify = requireStringify();
  return jsonify;
}
var toStr$1 = Object.prototype.toString;
var isArguments = function isArguments2(value) {
  var str = toStr$1.call(value);
  var isArgs2 = str === "[object Arguments]";
  if (!isArgs2) {
    isArgs2 = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr$1.call(value.callee) === "[object Function]";
  }
  return isArgs2;
};
var implementation$2;
var hasRequiredImplementation;
function requireImplementation() {
  if (hasRequiredImplementation) return implementation$2;
  hasRequiredImplementation = 1;
  var keysShim2;
  if (!Object.keys) {
    var has = Object.prototype.hasOwnProperty;
    var toStr2 = Object.prototype.toString;
    var isArgs2 = isArguments;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({ toString: null }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {
    }, "prototype");
    var dontEnums = [
      "toString",
      "toLocaleString",
      "valueOf",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "constructor"
    ];
    var equalsConstructorPrototype = function(o) {
      var ctor = o.constructor;
      return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
      $applicationCache: true,
      $console: true,
      $external: true,
      $frame: true,
      $frameElement: true,
      $frames: true,
      $innerHeight: true,
      $innerWidth: true,
      $onmozfullscreenchange: true,
      $onmozfullscreenerror: true,
      $outerHeight: true,
      $outerWidth: true,
      $pageXOffset: true,
      $pageYOffset: true,
      $parent: true,
      $scrollLeft: true,
      $scrollTop: true,
      $scrollX: true,
      $scrollY: true,
      $self: true,
      $webkitIndexedDB: true,
      $webkitStorageInfo: true,
      $window: true
    };
    var hasAutomationEqualityBug = function() {
      if (typeof window === "undefined") {
        return false;
      }
      for (var k in window) {
        try {
          if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") {
            try {
              equalsConstructorPrototype(window[k]);
            } catch (e) {
              return true;
            }
          }
        } catch (e) {
          return true;
        }
      }
      return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
      if (typeof window === "undefined" || !hasAutomationEqualityBug) {
        return equalsConstructorPrototype(o);
      }
      try {
        return equalsConstructorPrototype(o);
      } catch (e) {
        return false;
      }
    };
    keysShim2 = function keys2(object) {
      var isObject = object !== null && typeof object === "object";
      var isFunction = toStr2.call(object) === "[object Function]";
      var isArguments3 = isArgs2(object);
      var isString = isObject && toStr2.call(object) === "[object String]";
      var theKeys = [];
      if (!isObject && !isFunction && !isArguments3) {
        throw new TypeError("Object.keys called on a non-object");
      }
      var skipProto = hasProtoEnumBug && isFunction;
      if (isString && object.length > 0 && !has.call(object, 0)) {
        for (var i = 0; i < object.length; ++i) {
          theKeys.push(String(i));
        }
      }
      if (isArguments3 && object.length > 0) {
        for (var j = 0; j < object.length; ++j) {
          theKeys.push(String(j));
        }
      } else {
        for (var name in object) {
          if (!(skipProto && name === "prototype") && has.call(object, name)) {
            theKeys.push(String(name));
          }
        }
      }
      if (hasDontEnumBug) {
        var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
        for (var k = 0; k < dontEnums.length; ++k) {
          if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) {
            theKeys.push(dontEnums[k]);
          }
        }
      }
      return theKeys;
    };
  }
  implementation$2 = keysShim2;
  return implementation$2;
}
var slice = Array.prototype.slice;
var isArgs = isArguments;
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
  return origKeys(o);
} : requireImplementation();
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
  if (Object.keys) {
    var keysWorksWithArguments = function() {
      var args = Object.keys(arguments);
      return args && args.length === arguments.length;
    }(1, 2);
    if (!keysWorksWithArguments) {
      Object.keys = function keys2(object) {
        if (isArgs(object)) {
          return originalKeys(slice.call(object));
        }
        return originalKeys(object);
      };
    }
  } else {
    Object.keys = keysShim;
  }
  return Object.keys || keysShim;
};
var callBind$1 = { exports: {} };
var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = "[object Function]";
var concatty = function concatty2(a, b) {
  var arr = [];
  for (var i = 0; i < a.length; i += 1) {
    arr[i] = a[i];
  }
  for (var j = 0; j < b.length; j += 1) {
    arr[j + a.length] = b[j];
  }
  return arr;
};
var slicy = function slicy2(arrLike, offset) {
  var arr = [];
  for (var i = offset, j = 0; i < arrLike.length; i += 1, j += 1) {
    arr[j] = arrLike[i];
  }
  return arr;
};
var joiny = function(arr, joiner) {
  var str = "";
  for (var i = 0; i < arr.length; i += 1) {
    str += arr[i];
    if (i + 1 < arr.length) {
      str += joiner;
    }
  }
  return str;
};
var implementation$1 = function bind(that) {
  var target = this;
  if (typeof target !== "function" || toStr.apply(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }
  var args = slicy(arguments, 1);
  var bound;
  var binder = function() {
    if (this instanceof bound) {
      var result = target.apply(
        this,
        concatty(args, arguments)
      );
      if (Object(result) === result) {
        return result;
      }
      return this;
    }
    return target.apply(
      that,
      concatty(args, arguments)
    );
  };
  var boundLength = max(0, target.length - args.length);
  var boundArgs = [];
  for (var i = 0; i < boundLength; i++) {
    boundArgs[i] = "$" + i;
  }
  bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
  if (target.prototype) {
    var Empty = function Empty2() {
    };
    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }
  return bound;
};
var implementation = implementation$1;
var functionBind = Function.prototype.bind || implementation;
var esErrors = Error;
var _eval = EvalError;
var range = RangeError;
var ref = ReferenceError;
var syntax = SyntaxError;
var type = TypeError;
var uri = URIError;
var shams = function hasSymbols() {
  if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
    return false;
  }
  if (typeof Symbol.iterator === "symbol") {
    return true;
  }
  var obj = {};
  var sym = Symbol("test");
  var symObj = Object(sym);
  if (typeof sym === "string") {
    return false;
  }
  if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
    return false;
  }
  if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
    return false;
  }
  var symVal = 42;
  obj[sym] = symVal;
  for (sym in obj) {
    return false;
  }
  if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
    return false;
  }
  if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
    return false;
  }
  var syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }
  if (typeof Object.getOwnPropertyDescriptor === "function") {
    var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }
  return true;
};
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = shams;
var hasSymbols$1 = function hasNativeSymbols() {
  if (typeof origSymbol !== "function") {
    return false;
  }
  if (typeof Symbol !== "function") {
    return false;
  }
  if (typeof origSymbol("foo") !== "symbol") {
    return false;
  }
  if (typeof Symbol("bar") !== "symbol") {
    return false;
  }
  return hasSymbolSham();
};
var test = {
  __proto__: null,
  foo: {}
};
var $Object = Object;
var hasProto$1 = function hasProto() {
  return { __proto__: test }.foo === test.foo && !(test instanceof $Object);
};
var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind$1 = functionBind;
var hasown = bind$1.call(call, $hasOwn);
var undefined$1;
var $Error = esErrors;
var $EvalError = _eval;
var $RangeError = range;
var $ReferenceError = ref;
var $SyntaxError$1 = syntax;
var $TypeError$2 = type;
var $URIError = uri;
var $Function = Function;
var getEvalledConstructor = function(expressionSyntax) {
  try {
    return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
  } catch (e) {
  }
};
var $gOPD$1 = Object.getOwnPropertyDescriptor;
if ($gOPD$1) {
  try {
    $gOPD$1({}, "");
  } catch (e) {
    $gOPD$1 = null;
  }
}
var throwTypeError = function() {
  throw new $TypeError$2();
};
var ThrowTypeError = $gOPD$1 ? function() {
  try {
    arguments.callee;
    return throwTypeError;
  } catch (calleeThrows) {
    try {
      return $gOPD$1(arguments, "callee").get;
    } catch (gOPDthrows) {
      return throwTypeError;
    }
  }
}() : throwTypeError;
var hasSymbols2 = hasSymbols$1();
var hasProto2 = hasProto$1();
var getProto = Object.getPrototypeOf || (hasProto2 ? function(x) {
  return x.__proto__;
} : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined$1 : getProto(Uint8Array);
var INTRINSICS = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
  "%ArrayIteratorPrototype%": hasSymbols2 && getProto ? getProto([][Symbol.iterator]()) : undefined$1,
  "%AsyncFromSyncIteratorPrototype%": undefined$1,
  "%AsyncFunction%": needsEval,
  "%AsyncGenerator%": needsEval,
  "%AsyncGeneratorFunction%": needsEval,
  "%AsyncIteratorPrototype%": needsEval,
  "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
  "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
  "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined$1 : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined$1 : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": $Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": $EvalError,
  "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
  "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
  "%Function%": $Function,
  "%GeneratorFunction%": needsEval,
  "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
  "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
  "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": hasSymbols2 && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
  "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
  "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
  "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
  "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
  "%RangeError%": $RangeError,
  "%ReferenceError%": $ReferenceError,
  "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
  "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 || !getProto ? undefined$1 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": hasSymbols2 && getProto ? getProto(""[Symbol.iterator]()) : undefined$1,
  "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
  "%SyntaxError%": $SyntaxError$1,
  "%ThrowTypeError%": ThrowTypeError,
  "%TypedArray%": TypedArray,
  "%TypeError%": $TypeError$2,
  "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
  "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
  "%URIError%": $URIError,
  "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
  "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
  "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
};
if (getProto) {
  try {
    null.error;
  } catch (e) {
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
  }
}
var doEval = function doEval2(name) {
  var value;
  if (name === "%AsyncFunction%") {
    value = getEvalledConstructor("async function () {}");
  } else if (name === "%GeneratorFunction%") {
    value = getEvalledConstructor("function* () {}");
  } else if (name === "%AsyncGeneratorFunction%") {
    value = getEvalledConstructor("async function* () {}");
  } else if (name === "%AsyncGenerator%") {
    var fn = doEval2("%AsyncGeneratorFunction%");
    if (fn) {
      value = fn.prototype;
    }
  } else if (name === "%AsyncIteratorPrototype%") {
    var gen = doEval2("%AsyncGenerator%");
    if (gen && getProto) {
      value = getProto(gen.prototype);
    }
  }
  INTRINSICS[name] = value;
  return value;
};
var LEGACY_ALIASES = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
};
var bind2 = functionBind;
var hasOwn = hasown;
var $concat = bind2.call(Function.call, Array.prototype.concat);
var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
var $replace = bind2.call(Function.call, String.prototype.replace);
var $strSlice = bind2.call(Function.call, String.prototype.slice);
var $exec = bind2.call(Function.call, RegExp.prototype.exec);
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = function stringToPath2(string) {
  var first = $strSlice(string, 0, 1);
  var last = $strSlice(string, -1);
  if (first === "%" && last !== "%") {
    throw new $SyntaxError$1("invalid intrinsic syntax, expected closing `%`");
  } else if (last === "%" && first !== "%") {
    throw new $SyntaxError$1("invalid intrinsic syntax, expected opening `%`");
  }
  var result = [];
  $replace(string, rePropName, function(match, number, quote, subString) {
    result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
  });
  return result;
};
var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
  var intrinsicName = name;
  var alias;
  if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
    alias = LEGACY_ALIASES[intrinsicName];
    intrinsicName = "%" + alias[0] + "%";
  }
  if (hasOwn(INTRINSICS, intrinsicName)) {
    var value = INTRINSICS[intrinsicName];
    if (value === needsEval) {
      value = doEval(intrinsicName);
    }
    if (typeof value === "undefined" && !allowMissing) {
      throw new $TypeError$2("intrinsic " + name + " exists, but is not available. Please file an issue!");
    }
    return {
      alias,
      name: intrinsicName,
      value
    };
  }
  throw new $SyntaxError$1("intrinsic " + name + " does not exist!");
};
var getIntrinsic = function GetIntrinsic(name, allowMissing) {
  if (typeof name !== "string" || name.length === 0) {
    throw new $TypeError$2("intrinsic name must be a non-empty string");
  }
  if (arguments.length > 1 && typeof allowMissing !== "boolean") {
    throw new $TypeError$2('"allowMissing" argument must be a boolean');
  }
  if ($exec(/^%?[^%]*%?$/, name) === null) {
    throw new $SyntaxError$1("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  }
  var parts = stringToPath(name);
  var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
  var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
  var intrinsicRealName = intrinsic.name;
  var value = intrinsic.value;
  var skipFurtherCaching = false;
  var alias = intrinsic.alias;
  if (alias) {
    intrinsicBaseName = alias[0];
    $spliceApply(parts, $concat([0, 1], alias));
  }
  for (var i = 1, isOwn = true; i < parts.length; i += 1) {
    var part = parts[i];
    var first = $strSlice(part, 0, 1);
    var last = $strSlice(part, -1);
    if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
      throw new $SyntaxError$1("property names with quotes must have matching quotes");
    }
    if (part === "constructor" || !isOwn) {
      skipFurtherCaching = true;
    }
    intrinsicBaseName += "." + part;
    intrinsicRealName = "%" + intrinsicBaseName + "%";
    if (hasOwn(INTRINSICS, intrinsicRealName)) {
      value = INTRINSICS[intrinsicRealName];
    } else if (value != null) {
      if (!(part in value)) {
        if (!allowMissing) {
          throw new $TypeError$2("base intrinsic for " + name + " exists, but the property is not available.");
        }
        return void 0;
      }
      if ($gOPD$1 && i + 1 >= parts.length) {
        var desc = $gOPD$1(value, part);
        isOwn = !!desc;
        if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
          value = desc.get;
        } else {
          value = value[part];
        }
      } else {
        isOwn = hasOwn(value, part);
        value = value[part];
      }
      if (isOwn && !skipFurtherCaching) {
        INTRINSICS[intrinsicRealName] = value;
      }
    }
  }
  return value;
};
var esDefineProperty;
var hasRequiredEsDefineProperty;
function requireEsDefineProperty() {
  if (hasRequiredEsDefineProperty) return esDefineProperty;
  hasRequiredEsDefineProperty = 1;
  var GetIntrinsic3 = getIntrinsic;
  var $defineProperty2 = GetIntrinsic3("%Object.defineProperty%", true) || false;
  if ($defineProperty2) {
    try {
      $defineProperty2({}, "a", { value: 1 });
    } catch (e) {
      $defineProperty2 = false;
    }
  }
  esDefineProperty = $defineProperty2;
  return esDefineProperty;
}
var GetIntrinsic$2 = getIntrinsic;
var $gOPD = GetIntrinsic$2("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) {
  try {
    $gOPD([], "length");
  } catch (e) {
    $gOPD = null;
  }
}
var gopd$1 = $gOPD;
var $defineProperty$1 = requireEsDefineProperty();
var $SyntaxError = syntax;
var $TypeError$1 = type;
var gopd = gopd$1;
var defineDataProperty = function defineDataProperty2(obj, property, value) {
  if (!obj || typeof obj !== "object" && typeof obj !== "function") {
    throw new $TypeError$1("`obj` must be an object or a function`");
  }
  if (typeof property !== "string" && typeof property !== "symbol") {
    throw new $TypeError$1("`property` must be a string or a symbol`");
  }
  if (arguments.length > 3 && typeof arguments[3] !== "boolean" && arguments[3] !== null) {
    throw new $TypeError$1("`nonEnumerable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 4 && typeof arguments[4] !== "boolean" && arguments[4] !== null) {
    throw new $TypeError$1("`nonWritable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 5 && typeof arguments[5] !== "boolean" && arguments[5] !== null) {
    throw new $TypeError$1("`nonConfigurable`, if provided, must be a boolean or null");
  }
  if (arguments.length > 6 && typeof arguments[6] !== "boolean") {
    throw new $TypeError$1("`loose`, if provided, must be a boolean");
  }
  var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
  var nonWritable = arguments.length > 4 ? arguments[4] : null;
  var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
  var loose = arguments.length > 6 ? arguments[6] : false;
  var desc = !!gopd && gopd(obj, property);
  if ($defineProperty$1) {
    $defineProperty$1(obj, property, {
      configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
      enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
      value,
      writable: nonWritable === null && desc ? desc.writable : !nonWritable
    });
  } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
    obj[property] = value;
  } else {
    throw new $SyntaxError("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
  }
};
var $defineProperty = requireEsDefineProperty();
var hasPropertyDescriptors = function hasPropertyDescriptors2() {
  return !!$defineProperty;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
  if (!$defineProperty) {
    return null;
  }
  try {
    return $defineProperty([], "length", { value: 1 }).length !== 1;
  } catch (e) {
    return true;
  }
};
var hasPropertyDescriptors_1 = hasPropertyDescriptors;
var GetIntrinsic$1 = getIntrinsic;
var define = defineDataProperty;
var hasDescriptors = hasPropertyDescriptors_1();
var gOPD = gopd$1;
var $TypeError = type;
var $floor = GetIntrinsic$1("%Math.floor%");
var setFunctionLength = function setFunctionLength2(fn, length) {
  if (typeof fn !== "function") {
    throw new $TypeError("`fn` is not a function");
  }
  if (typeof length !== "number" || length < 0 || length > 4294967295 || $floor(length) !== length) {
    throw new $TypeError("`length` must be a positive 32-bit integer");
  }
  var loose = arguments.length > 2 && !!arguments[2];
  var functionLengthIsConfigurable = true;
  var functionLengthIsWritable = true;
  if ("length" in fn && gOPD) {
    var desc = gOPD(fn, "length");
    if (desc && !desc.configurable) {
      functionLengthIsConfigurable = false;
    }
    if (desc && !desc.writable) {
      functionLengthIsWritable = false;
    }
  }
  if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
    if (hasDescriptors) {
      define(
        /** @type {Parameters<define>[0]} */
        fn,
        "length",
        length,
        true,
        true
      );
    } else {
      define(
        /** @type {Parameters<define>[0]} */
        fn,
        "length",
        length
      );
    }
  }
  return fn;
};
(function(module) {
  var bind3 = functionBind;
  var GetIntrinsic3 = getIntrinsic;
  var setFunctionLength$1 = setFunctionLength;
  var $TypeError2 = type;
  var $apply = GetIntrinsic3("%Function.prototype.apply%");
  var $call = GetIntrinsic3("%Function.prototype.call%");
  var $reflectApply = GetIntrinsic3("%Reflect.apply%", true) || bind3.call($call, $apply);
  var $defineProperty2 = requireEsDefineProperty();
  var $max = GetIntrinsic3("%Math.max%");
  module.exports = function callBind2(originalFunction) {
    if (typeof originalFunction !== "function") {
      throw new $TypeError2("a function is required");
    }
    var func = $reflectApply(bind3, $call, arguments);
    return setFunctionLength$1(
      func,
      1 + $max(0, originalFunction.length - (arguments.length - 1)),
      true
    );
  };
  var applyBind = function applyBind2() {
    return $reflectApply(bind3, $apply, arguments);
  };
  if ($defineProperty2) {
    $defineProperty2(module.exports, "apply", { value: applyBind });
  } else {
    module.exports.apply = applyBind;
  }
})(callBind$1);
var callBindExports = callBind$1.exports;
var GetIntrinsic2 = getIntrinsic;
var callBind = callBindExports;
var $indexOf = callBind(GetIntrinsic2("String.prototype.indexOf"));
var callBound$1 = function callBoundIntrinsic(name, allowMissing) {
  var intrinsic = GetIntrinsic2(name, !!allowMissing);
  if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
    return callBind(intrinsic);
  }
  return intrinsic;
};
(typeof JSON !== "undefined" ? JSON : requireJsonify()).stringify;
var callBound = callBound$1;
callBound("Array.prototype.join");
callBound("Array.prototype.push");
const getLeafData = (recipient) => {
  [recipient.address, recipient.amount];
  const leafCoder = new TupleCoder([
    new B256Coder(),
    new BigNumberCoder("u64")
  ]);
  const result = leafCoder.encode([
    recipient.address,
    bn(recipient.amount.toString())
  ]);
  const hashedData = sha256(result);
  return hashedData;
};
const createMerkleTree = (recipients) => {
  const leaves = recipients.map((recipient) => {
    const leafData = getLeafData(recipient);
    return leafData;
  });
  const tree = constructTree(leaves);
  const root = calcRoot(leaves);
  console.log("root", root);
  console.log("tree", tree);
  return { leaves, tree, root };
};
const generateProof = (recipient, tree, leafIndex) => {
  const proof = getProof(tree, leafIndex);
  return proof;
};
const CLASS_PART_SEPARATOR = "-";
const createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
const getGroupRecursive = (classParts, classPartObject) => {
  var _a;
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return (_a = classPartObject.validators.find(({
    validator
  }) => validator(classRest))) == null ? void 0 : _a.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName == null ? void 0 : arbitraryPropertyClassName.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
const createClassMap = (config) => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
const getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
const isThemeGetter = (func) => func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};
const createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
const IMPORTANT_MODIFIER = "!";
const createParseClassName = (config) => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  const parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return (className) => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
const sortModifiers = (modifiers) => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
const createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
const toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
const fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value) => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value) => getIsArbitraryValue(value, "length", isLengthOnly);
const isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value) => getIsArbitraryValue(value, "number", isNumber);
const isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
const isArbitraryValue = (value) => arbitraryValueRegex.test(value);
const isTshirtSize = (value) => tshirtUnitRegex.test(value);
const sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
const isArbitrarySize = (value) => getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value) => getIsArbitraryValue(value, "position", isNever);
const imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
const isArbitraryImage = (value) => getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
const isAny = () => true;
const getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
const isLengthOnly = (value) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  lengthUnitRegex.test(value) && !colorFunctionRegex.test(value)
);
const isNever = () => false;
const isShadow = (value) => shadowRegex.test(value);
const isImage = (value) => imageRegex.test(value);
const getDefaultConfig = () => {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [borderColor]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
};
const twMerge = /* @__PURE__ */ createTailwindMerge(getDefaultConfig);
function cn(...inputs) {
  return twMerge(clsx$1(inputs));
}
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; ) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
const falsyToString = (value) => typeof value === "boolean" ? "".concat(value) : value === 0 ? "0" : value;
const cx = clsx;
const cva = (base, config) => {
  return (props) => {
    var ref2;
    if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    const { variants, defaultVariants } = config;
    const getVariantClassNames = Object.keys(variants).map((variant) => {
      const variantProp = props === null || props === void 0 ? void 0 : props[variant];
      const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
      if (variantProp === null) return null;
      const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
      return variants[variant][variantKey];
    });
    const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param) => {
      let [key, value] = param;
      if (value === void 0) {
        return acc;
      }
      acc[key] = value;
      return acc;
    }, {});
    const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (ref2 = config.compoundVariants) === null || ref2 === void 0 ? void 0 : ref2.reduce((acc, param1) => {
      let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param1;
      return Object.entries(compoundVariantOptions).every((param) => {
        let [key, value] = param;
        return Array.isArray(value) ? value.includes({
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key]) : {
          ...defaultVariants,
          ...propsWithoutUndefined
        }[key] === value;
      }) ? [
        ...acc,
        cvClass,
        cvClassName
      ] : acc;
    }, []);
    return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
  };
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref2) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Comp,
      {
        className: cn(
          "btn",
          "btn-primary",
          buttonVariants({ variant, size, className })
        ),
        ref: ref2,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
export {
  Button as B,
  TestContractFactory as T,
  createMerkleTree as a,
  buttonVariants as b,
  cn as c,
  TestContract as d,
  generateProof as g
};
