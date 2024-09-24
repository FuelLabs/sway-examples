var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a6 as Contract, a7 as decompressBytecode, a8 as ContractFactory, a9 as commonjsGlobal, aa as commonjsRequire, ab as require$$0, ac as getDefaultExportFromCjs, ad as buffer } from "./index-CINLNIaM.js";
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
      "offset": 34792
    },
    {
      "name": "ASSET",
      "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      "offset": 34704
    },
    {
      "name": "END_TIME",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "offset": 34736
    },
    {
      "name": "NUM_LEAVES",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "offset": 34824
    },
    {
      "name": "INITIAL_OWNER",
      "concreteTypeId": "253aea1197e8005518365bd24c8bc31f73a434fac0f7350e57696edfdd4850c2",
      "offset": 34744
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
var dist = {};
var MerkleTree$1 = {};
var bufferReverse = function reverse(src) {
  var buffer2 = new Buffer(src.length);
  for (var i = 0, j = src.length - 1; i <= j; ++i, --j) {
    buffer2[i] = src[j];
    buffer2[j] = src[i];
  }
  return buffer2;
};
var sha256 = { exports: {} };
var core = { exports: {} };
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core.exports;
  hasRequiredCore = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory();
      }
    })(commonjsGlobal, function() {
      var CryptoJS = CryptoJS || function(Math2, undefined$12) {
        var crypto;
        if (typeof window !== "undefined" && window.crypto) {
          crypto = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto = globalThis.crypto;
        }
        if (!crypto && typeof window !== "undefined" && window.msCrypto) {
          crypto = window.msCrypto;
        }
        if (!crypto && typeof commonjsGlobal !== "undefined" && commonjsGlobal.crypto) {
          crypto = commonjsGlobal.crypto;
        }
        if (!crypto && typeof commonjsRequire === "function") {
          try {
            crypto = require$$0;
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt = function() {
          if (crypto) {
            if (typeof crypto.getRandomValues === "function") {
              try {
                return crypto.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto.randomBytes === "function") {
              try {
                return crypto.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create = Object.create || /* @__PURE__ */ function() {
          function F() {
          }
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base2 = C_lib.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(overrides) {
              var subtype = create(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base2.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined$12) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j = 0; j < thatSigBytes; j += 4) {
                thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var clone = Base2.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
              words.push(cryptoSecureRandomInt());
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            }
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base2.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var clone = Base2.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        C_lib.Hasher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           */
          cfg: Base2.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      return CryptoJS;
    });
  })(core);
  return core.exports;
}
(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory(requireCore());
    }
  })(commonjsGlobal, function(CryptoJS) {
    (function(Math2) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var H = [];
      var K = [];
      (function() {
        function isPrime(n2) {
          var sqrtN = Math2.sqrt(n2);
          for (var factor = 2; factor <= sqrtN; factor++) {
            if (!(n2 % factor)) {
              return false;
            }
          }
          return true;
        }
        function getFractionalBits(n2) {
          return (n2 - (n2 | 0)) * 4294967296 | 0;
        }
        var n = 2;
        var nPrime = 0;
        while (nPrime < 64) {
          if (isPrime(n)) {
            if (nPrime < 8) {
              H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
            }
            K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
            nPrime++;
          }
          n++;
        }
      })();
      var W = [];
      var SHA2562 = C_algo.SHA256 = Hasher.extend({
        _doReset: function() {
          this._hash = new WordArray.init(H.slice(0));
        },
        _doProcessBlock: function(M, offset) {
          var H2 = this._hash.words;
          var a = H2[0];
          var b = H2[1];
          var c = H2[2];
          var d = H2[3];
          var e = H2[4];
          var f = H2[5];
          var g = H2[6];
          var h = H2[7];
          for (var i = 0; i < 64; i++) {
            if (i < 16) {
              W[i] = M[offset + i] | 0;
            } else {
              var gamma0x = W[i - 15];
              var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
              var gamma1x = W[i - 2];
              var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
              W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
            }
            var ch = e & f ^ ~e & g;
            var maj = a & b ^ a & c ^ b & c;
            var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
            var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
            var t1 = h + sigma1 + ch + K[i] + W[i];
            var t2 = sigma0 + maj;
            h = g;
            g = f;
            f = e;
            e = d + t1 | 0;
            d = c;
            c = b;
            b = a;
            a = t1 + t2 | 0;
          }
          H2[0] = H2[0] + a | 0;
          H2[1] = H2[1] + b | 0;
          H2[2] = H2[2] + c | 0;
          H2[3] = H2[3] + d | 0;
          H2[4] = H2[4] + e | 0;
          H2[5] = H2[5] + f | 0;
          H2[6] = H2[6] + g | 0;
          H2[7] = H2[7] + h | 0;
        },
        _doFinalize: function() {
          var data = this._data;
          var dataWords = data.words;
          var nBitsTotal = this._nDataBytes * 8;
          var nBitsLeft = data.sigBytes * 8;
          dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
          dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
          data.sigBytes = dataWords.length * 4;
          this._process();
          return this._hash;
        },
        clone: function() {
          var clone = Hasher.clone.call(this);
          clone._hash = this._hash.clone();
          return clone;
        }
      });
      C.SHA256 = Hasher._createHelper(SHA2562);
      C.HmacSHA256 = Hasher._createHmacHelper(SHA2562);
    })(Math);
    return CryptoJS.SHA256;
  });
})(sha256);
var sha256Exports = sha256.exports;
const SHA256 = /* @__PURE__ */ getDefaultExportFromCjs(sha256Exports);
var treeify = { exports: {} };
(function(module, exports) {
  (function(root, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    function makePrefix(key, last) {
      var str = last ? "└" : "├";
      if (key) {
        str += "─ ";
      } else {
        str += "──┐";
      }
      return str;
    }
    function filterKeys(obj, hideFunctions) {
      var keys2 = [];
      for (var branch in obj) {
        if (!obj.hasOwnProperty(branch)) {
          continue;
        }
        if (hideFunctions && typeof obj[branch] === "function") {
          continue;
        }
        keys2.push(branch);
      }
      return keys2;
    }
    function growBranch(key, root, last, lastStates, showValues, hideFunctions, callback) {
      var line = "", index = 0, lastKey, circular, lastStatesCopy = lastStates.slice(0);
      if (lastStatesCopy.push([root, last]) && lastStates.length > 0) {
        lastStates.forEach(function(lastState, idx) {
          if (idx > 0) {
            line += (lastState[1] ? " " : "│") + "  ";
          }
          if (!circular && lastState[0] === root) {
            circular = true;
          }
        });
        line += makePrefix(key, last) + key;
        showValues && (typeof root !== "object" || root instanceof Date) && (line += ": " + root);
        circular && (line += " (circular ref.)");
        callback(line);
      }
      if (!circular && typeof root === "object") {
        var keys2 = filterKeys(root, hideFunctions);
        keys2.forEach(function(branch) {
          lastKey = ++index === keys2.length;
          growBranch(branch, root[branch], lastKey, lastStatesCopy, showValues, hideFunctions, callback);
        });
      }
    }
    var Treeify = {};
    Treeify.asLines = function(obj, showValues, hideFunctions, lineCallback) {
      var hideFunctionsArg = typeof hideFunctions !== "function" ? hideFunctions : false;
      growBranch(".", obj, false, [], showValues, hideFunctionsArg, lineCallback || hideFunctions);
    };
    Treeify.asTree = function(obj, showValues, hideFunctions) {
      var tree = "";
      growBranch(".", obj, false, [], showValues, hideFunctions, function(line) {
        tree += line + "\n";
      });
      return tree;
    };
    return Treeify;
  });
})(treeify);
var treeifyExports = treeify.exports;
var Base$1 = {};
var cryptoJs = { exports: {} };
var x64Core = { exports: {} };
var hasRequiredX64Core;
function requireX64Core() {
  if (hasRequiredX64Core) return x64Core.exports;
  hasRequiredX64Core = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function(undefined$12) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base2 = C_lib.Base;
        var X32WordArray = C_lib.WordArray;
        var C_x64 = C.x64 = {};
        C_x64.Word = Base2.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(high, low) {
            this.high = high;
            this.low = low;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        });
        C_x64.WordArray = Base2.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined$12) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 8;
            }
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            var x64Words = this.words;
            var x64WordsLength = x64Words.length;
            var x32Words = [];
            for (var i = 0; i < x64WordsLength; i++) {
              var x64Word = x64Words[i];
              x32Words.push(x64Word.high);
              x32Words.push(x64Word.low);
            }
            return X32WordArray.create(x32Words, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            var clone = Base2.clone.call(this);
            var words = clone.words = this.words.slice(0);
            var wordsLength = words.length;
            for (var i = 0; i < wordsLength; i++) {
              words[i] = words[i].clone();
            }
            return clone;
          }
        });
      })();
      return CryptoJS;
    });
  })(x64Core);
  return x64Core.exports;
}
var libTypedarrays = { exports: {} };
var hasRequiredLibTypedarrays;
function requireLibTypedarrays() {
  if (hasRequiredLibTypedarrays) return libTypedarrays.exports;
  hasRequiredLibTypedarrays = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        if (typeof ArrayBuffer != "function") {
          return;
        }
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var superInit = WordArray.init;
        var subInit = WordArray.init = function(typedArray) {
          if (typedArray instanceof ArrayBuffer) {
            typedArray = new Uint8Array(typedArray);
          }
          if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
          }
          if (typedArray instanceof Uint8Array) {
            var typedArrayByteLength = typedArray.byteLength;
            var words = [];
            for (var i = 0; i < typedArrayByteLength; i++) {
              words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            }
            superInit.call(this, words, typedArrayByteLength);
          } else {
            superInit.apply(this, arguments);
          }
        };
        subInit.prototype = WordArray;
      })();
      return CryptoJS.lib.WordArray;
    });
  })(libTypedarrays);
  return libTypedarrays.exports;
}
var encUtf16 = { exports: {} };
var hasRequiredEncUtf16;
function requireEncUtf16() {
  if (hasRequiredEncUtf16) return encUtf16.exports;
  hasRequiredEncUtf16 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        C_enc.Utf16 = C_enc.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        C_enc.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        function swapEndian(word) {
          return word << 8 & 4278255360 | word >>> 8 & 16711935;
        }
      })();
      return CryptoJS.enc.Utf16;
    });
  })(encUtf16);
  return encUtf16.exports;
}
var encBase64 = { exports: {} };
var hasRequiredEncBase64;
function requireEncBase64() {
  if (hasRequiredEncBase64) return encBase64.exports;
  hasRequiredEncBase64 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        C_enc.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64;
    });
  })(encBase64);
  return encBase64.exports;
}
var encBase64url = { exports: {} };
var hasRequiredEncBase64url;
function requireEncBase64url() {
  if (hasRequiredEncBase64url) return encBase64url.exports;
  hasRequiredEncBase64url = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        C_enc.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(wordArray, urlSafe) {
            if (urlSafe === void 0) {
              urlSafe = true;
            }
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = urlSafe ? this._safe_map : this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(base64Str, urlSafe) {
            if (urlSafe === void 0) {
              urlSafe = true;
            }
            var base64StrLength = base64Str.length;
            var map = urlSafe ? this._safe_map : this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64url;
    });
  })(encBase64url);
  return encBase64url.exports;
}
var md5 = { exports: {} };
var hasRequiredMd5;
function requireMd5() {
  if (hasRequiredMd5) return md5.exports;
  hasRequiredMd5 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) {
            T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
          }
        })();
        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);
      return CryptoJS.MD5;
    });
  })(md5);
  return md5.exports;
}
var sha1 = { exports: {} };
var hasRequiredSha1;
function requireSha1() {
  if (hasRequiredSha1) return sha1.exports;
  hasRequiredSha1 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var W = [];
        var SHA1 = C_algo.SHA1 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            for (var i = 0; i < 80; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = n << 1 | n >>> 31;
              }
              var t = (a << 5 | a >>> 27) + e + W[i];
              if (i < 20) {
                t += (b & c | ~b & d) + 1518500249;
              } else if (i < 40) {
                t += (b ^ c ^ d) + 1859775393;
              } else if (i < 60) {
                t += (b & c | b & d | c & d) - 1894007588;
              } else {
                t += (b ^ c ^ d) - 899497514;
              }
              e = d;
              d = c;
              c = b << 30 | b >>> 2;
              b = a;
              a = t;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA1 = Hasher._createHelper(SHA1);
        C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
      })();
      return CryptoJS.SHA1;
    });
  })(sha1);
  return sha1.exports;
}
var sha224 = { exports: {} };
var hasRequiredSha224;
function requireSha224() {
  if (hasRequiredSha224) return sha224.exports;
  hasRequiredSha224 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), sha256Exports);
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA2562 = C_algo.SHA256;
        var SHA224 = C_algo.SHA224 = SHA2562.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var hash = SHA2562._doFinalize.call(this);
            hash.sigBytes -= 4;
            return hash;
          }
        });
        C.SHA224 = SHA2562._createHelper(SHA224);
        C.HmacSHA224 = SHA2562._createHmacHelper(SHA224);
      })();
      return CryptoJS.SHA224;
    });
  })(sha224);
  return sha224.exports;
}
var sha512 = { exports: {} };
var hasRequiredSha512;
function requireSha512() {
  if (hasRequiredSha512) return sha512.exports;
  hasRequiredSha512 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireX64Core());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        function X64Word_create() {
          return X64Word.create.apply(X64Word, arguments);
        }
        var K = [
          X64Word_create(1116352408, 3609767458),
          X64Word_create(1899447441, 602891725),
          X64Word_create(3049323471, 3964484399),
          X64Word_create(3921009573, 2173295548),
          X64Word_create(961987163, 4081628472),
          X64Word_create(1508970993, 3053834265),
          X64Word_create(2453635748, 2937671579),
          X64Word_create(2870763221, 3664609560),
          X64Word_create(3624381080, 2734883394),
          X64Word_create(310598401, 1164996542),
          X64Word_create(607225278, 1323610764),
          X64Word_create(1426881987, 3590304994),
          X64Word_create(1925078388, 4068182383),
          X64Word_create(2162078206, 991336113),
          X64Word_create(2614888103, 633803317),
          X64Word_create(3248222580, 3479774868),
          X64Word_create(3835390401, 2666613458),
          X64Word_create(4022224774, 944711139),
          X64Word_create(264347078, 2341262773),
          X64Word_create(604807628, 2007800933),
          X64Word_create(770255983, 1495990901),
          X64Word_create(1249150122, 1856431235),
          X64Word_create(1555081692, 3175218132),
          X64Word_create(1996064986, 2198950837),
          X64Word_create(2554220882, 3999719339),
          X64Word_create(2821834349, 766784016),
          X64Word_create(2952996808, 2566594879),
          X64Word_create(3210313671, 3203337956),
          X64Word_create(3336571891, 1034457026),
          X64Word_create(3584528711, 2466948901),
          X64Word_create(113926993, 3758326383),
          X64Word_create(338241895, 168717936),
          X64Word_create(666307205, 1188179964),
          X64Word_create(773529912, 1546045734),
          X64Word_create(1294757372, 1522805485),
          X64Word_create(1396182291, 2643833823),
          X64Word_create(1695183700, 2343527390),
          X64Word_create(1986661051, 1014477480),
          X64Word_create(2177026350, 1206759142),
          X64Word_create(2456956037, 344077627),
          X64Word_create(2730485921, 1290863460),
          X64Word_create(2820302411, 3158454273),
          X64Word_create(3259730800, 3505952657),
          X64Word_create(3345764771, 106217008),
          X64Word_create(3516065817, 3606008344),
          X64Word_create(3600352804, 1432725776),
          X64Word_create(4094571909, 1467031594),
          X64Word_create(275423344, 851169720),
          X64Word_create(430227734, 3100823752),
          X64Word_create(506948616, 1363258195),
          X64Word_create(659060556, 3750685593),
          X64Word_create(883997877, 3785050280),
          X64Word_create(958139571, 3318307427),
          X64Word_create(1322822218, 3812723403),
          X64Word_create(1537002063, 2003034995),
          X64Word_create(1747873779, 3602036899),
          X64Word_create(1955562222, 1575990012),
          X64Word_create(2024104815, 1125592928),
          X64Word_create(2227730452, 2716904306),
          X64Word_create(2361852424, 442776044),
          X64Word_create(2428436474, 593698344),
          X64Word_create(2756734187, 3733110249),
          X64Word_create(3204031479, 2999351573),
          X64Word_create(3329325298, 3815920427),
          X64Word_create(3391569614, 3928383900),
          X64Word_create(3515267271, 566280711),
          X64Word_create(3940187606, 3454069534),
          X64Word_create(4118630271, 4000239992),
          X64Word_create(116418474, 1914138554),
          X64Word_create(174292421, 2731055270),
          X64Word_create(289380356, 3203993006),
          X64Word_create(460393269, 320620315),
          X64Word_create(685471733, 587496836),
          X64Word_create(852142971, 1086792851),
          X64Word_create(1017036298, 365543100),
          X64Word_create(1126000580, 2618297676),
          X64Word_create(1288033470, 3409855158),
          X64Word_create(1501505948, 4234509866),
          X64Word_create(1607167915, 987167468),
          X64Word_create(1816402316, 1246189591)
        ];
        var W = [];
        (function() {
          for (var i = 0; i < 80; i++) {
            W[i] = X64Word_create();
          }
        })();
        var SHA512 = C_algo.SHA512 = Hasher.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(1779033703, 4089235720),
              new X64Word.init(3144134277, 2227873595),
              new X64Word.init(1013904242, 4271175723),
              new X64Word.init(2773480762, 1595750129),
              new X64Word.init(1359893119, 2917565137),
              new X64Word.init(2600822924, 725511199),
              new X64Word.init(528734635, 4215389547),
              new X64Word.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];
            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low;
            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l;
            for (var i = 0; i < 80; i++) {
              var Wil;
              var Wih;
              var Wi = W[i];
              if (i < 16) {
                Wih = Wi.high = M[offset + i * 2] | 0;
                Wil = Wi.low = M[offset + i * 2 + 1] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0xh = gamma0x.high;
                var gamma0xl = gamma0x.low;
                var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                var gamma1x = W[i - 2];
                var gamma1xh = gamma1x.high;
                var gamma1xl = gamma1x.low;
                var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                var Wi7 = W[i - 7];
                var Wi7h = Wi7.high;
                var Wi7l = Wi7.low;
                var Wi16 = W[i - 16];
                var Wi16h = Wi16.high;
                var Wi16l = Wi16.low;
                Wil = gamma0l + Wi7l;
                Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                Wil = Wil + gamma1l;
                Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                Wil = Wil + Wi16l;
                Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                Wi.high = Wih;
                Wi.low = Wil;
              }
              var chh = eh & fh ^ ~eh & gh;
              var chl = el & fl ^ ~el & gl;
              var majh = ah & bh ^ ah & ch ^ bh & ch;
              var majl = al & bl ^ al & cl ^ bl & cl;
              var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
              var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
              var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
              var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
              var Ki = K[i];
              var Kih = Ki.high;
              var Kil = Ki.low;
              var t1l = hl + sigma1l;
              var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
              var t1l = t1l + chl;
              var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
              var t1l = t1l + Kil;
              var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
              var t1l = t1l + Wil;
              var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
              var t2l = sigma0l + majl;
              var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
              hh = gh;
              hl = gl;
              gh = fh;
              gl = fl;
              fh = eh;
              fl = el;
              el = dl + t1l | 0;
              eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
              dh = ch;
              dl = cl;
              ch = bh;
              cl = bl;
              bh = ah;
              bl = al;
              al = t1l + t2l | 0;
              ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
            }
            H0l = H0.low = H0l + al;
            H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
            H1l = H1.low = H1l + bl;
            H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
            H2l = H2.low = H2l + cl;
            H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
            H3l = H3.low = H3l + dl;
            H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
            H4l = H4.low = H4l + el;
            H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
            H5l = H5.low = H5l + fl;
            H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
            H6l = H6.low = H6l + gl;
            H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
            H7l = H7.low = H7l + hl;
            H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var hash = this._hash.toX32();
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          },
          blockSize: 1024 / 32
        });
        C.SHA512 = Hasher._createHelper(SHA512);
        C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
      })();
      return CryptoJS.SHA512;
    });
  })(sha512);
  return sha512.exports;
}
var sha384 = { exports: {} };
var hasRequiredSha384;
function requireSha384() {
  if (hasRequiredSha384) return sha384.exports;
  hasRequiredSha384 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireX64Core(), requireSha512());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        var SHA512 = C_algo.SHA512;
        var SHA384 = C_algo.SHA384 = SHA512.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(3418070365, 3238371032),
              new X64Word.init(1654270250, 914150663),
              new X64Word.init(2438529370, 812702999),
              new X64Word.init(355462360, 4144912697),
              new X64Word.init(1731405415, 4290775857),
              new X64Word.init(2394180231, 1750603025),
              new X64Word.init(3675008525, 1694076839),
              new X64Word.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var hash = SHA512._doFinalize.call(this);
            hash.sigBytes -= 16;
            return hash;
          }
        });
        C.SHA384 = SHA512._createHelper(SHA384);
        C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
      })();
      return CryptoJS.SHA384;
    });
  })(sha384);
  return sha384.exports;
}
var sha3 = { exports: {} };
var hasRequiredSha3;
function requireSha3() {
  if (hasRequiredSha3) return sha3.exports;
  hasRequiredSha3 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireX64Core());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var C_algo = C.algo;
        var RHO_OFFSETS = [];
        var PI_INDEXES = [];
        var ROUND_CONSTANTS = [];
        (function() {
          var x = 1, y = 0;
          for (var t = 0; t < 24; t++) {
            RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
            var newX = y % 5;
            var newY = (2 * x + 3 * y) % 5;
            x = newX;
            y = newY;
          }
          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
            }
          }
          var LFSR = 1;
          for (var i = 0; i < 24; i++) {
            var roundConstantMsw = 0;
            var roundConstantLsw = 0;
            for (var j = 0; j < 7; j++) {
              if (LFSR & 1) {
                var bitPosition = (1 << j) - 1;
                if (bitPosition < 32) {
                  roundConstantLsw ^= 1 << bitPosition;
                } else {
                  roundConstantMsw ^= 1 << bitPosition - 32;
                }
              }
              if (LFSR & 128) {
                LFSR = LFSR << 1 ^ 113;
              } else {
                LFSR <<= 1;
              }
            }
            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
          }
        })();
        var T = [];
        (function() {
          for (var i = 0; i < 25; i++) {
            T[i] = X64Word.create();
          }
        })();
        var SHA3 = C_algo.SHA3 = Hasher.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: Hasher.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            var state = this._state = [];
            for (var i = 0; i < 25; i++) {
              state[i] = new X64Word.init();
            }
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(M, offset) {
            var state = this._state;
            var nBlockSizeLanes = this.blockSize / 2;
            for (var i = 0; i < nBlockSizeLanes; i++) {
              var M2i = M[offset + 2 * i];
              var M2i1 = M[offset + 2 * i + 1];
              M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
              M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
              var lane = state[i];
              lane.high ^= M2i1;
              lane.low ^= M2i;
            }
            for (var round = 0; round < 24; round++) {
              for (var x = 0; x < 5; x++) {
                var tMsw = 0, tLsw = 0;
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  tMsw ^= lane.high;
                  tLsw ^= lane.low;
                }
                var Tx = T[x];
                Tx.high = tMsw;
                Tx.low = tLsw;
              }
              for (var x = 0; x < 5; x++) {
                var Tx4 = T[(x + 4) % 5];
                var Tx1 = T[(x + 1) % 5];
                var Tx1Msw = Tx1.high;
                var Tx1Lsw = Tx1.low;
                var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  lane.high ^= tMsw;
                  lane.low ^= tLsw;
                }
              }
              for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                var tMsw;
                var tLsw;
                var lane = state[laneIndex];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                var rhoOffset = RHO_OFFSETS[laneIndex];
                if (rhoOffset < 32) {
                  tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                  tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                } else {
                  tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                }
                var TPiLane = T[PI_INDEXES[laneIndex]];
                TPiLane.high = tMsw;
                TPiLane.low = tLsw;
              }
              var T0 = T[0];
              var state0 = state[0];
              T0.high = state0.high;
              T0.low = state0.low;
              for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                  var laneIndex = x + 5 * y;
                  var lane = state[laneIndex];
                  var TLane = T[laneIndex];
                  var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                  var Tx2Lane = T[(x + 2) % 5 + 5 * y];
                  lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                  lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                }
              }
              var lane = state[0];
              var roundConstant = ROUND_CONSTANTS[round];
              lane.high ^= roundConstant.high;
              lane.low ^= roundConstant.low;
            }
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            var blockSizeBits = this.blockSize * 32;
            dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
            dataWords[(Math2.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var state = this._state;
            var outputLengthBytes = this.cfg.outputLength / 8;
            var outputLengthLanes = outputLengthBytes / 8;
            var hashWords = [];
            for (var i = 0; i < outputLengthLanes; i++) {
              var lane = state[i];
              var laneMsw = lane.high;
              var laneLsw = lane.low;
              laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
              laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
              hashWords.push(laneLsw);
              hashWords.push(laneMsw);
            }
            return new WordArray.init(hashWords, outputLengthBytes);
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            var state = clone._state = this._state.slice(0);
            for (var i = 0; i < 25; i++) {
              state[i] = state[i].clone();
            }
            return clone;
          }
        });
        C.SHA3 = Hasher._createHelper(SHA3);
        C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
      })(Math);
      return CryptoJS.SHA3;
    });
  })(sha3);
  return sha3.exports;
}
var ripemd160 = { exports: {} };
var hasRequiredRipemd160;
function requireRipemd160() {
  if (hasRequiredRipemd160) return ripemd160.exports;
  hasRequiredRipemd160 = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      /** @preserve
      			(c) 2012 by Cédric Mesnil. All rights reserved.
      
      			Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      			    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      			    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      			THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
      			*/
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var _zl = WordArray.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]);
        var _zr = WordArray.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]);
        var _sl = WordArray.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]);
        var _sr = WordArray.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]);
        var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
        var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
        var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
          _doReset: function() {
            this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var hl = _hl.words;
            var hr = _hr.words;
            var zl = _zl.words;
            var zr = _zr.words;
            var sl = _sl.words;
            var sr = _sr.words;
            var al, bl, cl, dl, el;
            var ar, br, cr, dr, er;
            ar = al = H[0];
            br = bl = H[1];
            cr = cl = H[2];
            dr = dl = H[3];
            er = el = H[4];
            var t;
            for (var i = 0; i < 80; i += 1) {
              t = al + M[offset + zl[i]] | 0;
              if (i < 16) {
                t += f1(bl, cl, dl) + hl[0];
              } else if (i < 32) {
                t += f2(bl, cl, dl) + hl[1];
              } else if (i < 48) {
                t += f3(bl, cl, dl) + hl[2];
              } else if (i < 64) {
                t += f4(bl, cl, dl) + hl[3];
              } else {
                t += f5(bl, cl, dl) + hl[4];
              }
              t = t | 0;
              t = rotl(t, sl[i]);
              t = t + el | 0;
              al = el;
              el = dl;
              dl = rotl(cl, 10);
              cl = bl;
              bl = t;
              t = ar + M[offset + zr[i]] | 0;
              if (i < 16) {
                t += f5(br, cr, dr) + hr[0];
              } else if (i < 32) {
                t += f4(br, cr, dr) + hr[1];
              } else if (i < 48) {
                t += f3(br, cr, dr) + hr[2];
              } else if (i < 64) {
                t += f2(br, cr, dr) + hr[3];
              } else {
                t += f1(br, cr, dr) + hr[4];
              }
              t = t | 0;
              t = rotl(t, sr[i]);
              t = t + er | 0;
              ar = er;
              er = dr;
              dr = rotl(cr, 10);
              cr = br;
              br = t;
            }
            t = H[1] + cl + dr | 0;
            H[1] = H[2] + dl + er | 0;
            H[2] = H[3] + el + ar | 0;
            H[3] = H[4] + al + br | 0;
            H[4] = H[0] + bl + cr | 0;
            H[0] = t;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 5; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function f1(x, y, z) {
          return x ^ y ^ z;
        }
        function f2(x, y, z) {
          return x & y | ~x & z;
        }
        function f3(x, y, z) {
          return (x | ~y) ^ z;
        }
        function f4(x, y, z) {
          return x & z | y & ~z;
        }
        function f5(x, y, z) {
          return x ^ (y | ~z);
        }
        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }
        C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
        C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
      })();
      return CryptoJS.RIPEMD160;
    });
  })(ripemd160);
  return ripemd160.exports;
}
var hmac = { exports: {} };
var hasRequiredHmac;
function requireHmac() {
  if (hasRequiredHmac) return hmac.exports;
  hasRequiredHmac = 1;
  (function(module, exports) {
    (function(root, factory) {
      {
        module.exports = factory(requireCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base2 = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        C_algo.HMAC = Base2.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(hasher, key) {
            hasher = this._hasher = new hasher.init();
            if (typeof key == "string") {
              key = Utf8.parse(key);
            }
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;
            if (key.sigBytes > hasherBlockSizeBytes) {
              key = hasher.finalize(key);
            }
            key.clamp();
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;
            for (var i = 0; i < hasherBlockSize; i++) {
              oKeyWords[i] ^= 1549556828;
              iKeyWords[i] ^= 909522486;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
            this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var hasher = this._hasher;
            hasher.reset();
            hasher.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(messageUpdate) {
            this._hasher.update(messageUpdate);
            return this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(messageUpdate) {
            var hasher = this._hasher;
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac2 = hasher.finalize(this._oKey.clone().concat(innerHash));
            return hmac2;
          }
        });
      })();
    });
  })(hmac);
  return hmac.exports;
}
var pbkdf2 = { exports: {} };
var hasRequiredPbkdf2;
function requirePbkdf2() {
  if (hasRequiredPbkdf2) return pbkdf2.exports;
  hasRequiredPbkdf2 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), sha256Exports, requireHmac());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base2 = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA2562 = C_algo.SHA256;
        var HMAC = C_algo.HMAC;
        var PBKDF2 = C_algo.PBKDF2 = Base2.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: Base2.extend({
            keySize: 128 / 32,
            hasher: SHA2562,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(password, salt) {
            var cfg = this.cfg;
            var hmac2 = HMAC.create(cfg.hasher, password);
            var derivedKey = WordArray.create();
            var blockIndex = WordArray.create([1]);
            var derivedKeyWords = derivedKey.words;
            var blockIndexWords = blockIndex.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              var block = hmac2.update(salt).finalize(blockIndex);
              hmac2.reset();
              var blockWords = block.words;
              var blockWordsLength = blockWords.length;
              var intermediate = block;
              for (var i = 1; i < iterations; i++) {
                intermediate = hmac2.finalize(intermediate);
                hmac2.reset();
                var intermediateWords = intermediate.words;
                for (var j = 0; j < blockWordsLength; j++) {
                  blockWords[j] ^= intermediateWords[j];
                }
              }
              derivedKey.concat(block);
              blockIndexWords[0]++;
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.PBKDF2 = function(password, salt, cfg) {
          return PBKDF2.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.PBKDF2;
    });
  })(pbkdf2);
  return pbkdf2.exports;
}
var evpkdf = { exports: {} };
var hasRequiredEvpkdf;
function requireEvpkdf() {
  if (hasRequiredEvpkdf) return evpkdf.exports;
  hasRequiredEvpkdf = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireSha1(), requireHmac());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base2 = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var MD5 = C_algo.MD5;
        var EvpKDF = C_algo.EvpKDF = Base2.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: Base2.extend({
            keySize: 128 / 32,
            hasher: MD5,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(password, salt) {
            var block;
            var cfg = this.cfg;
            var hasher = cfg.hasher.create();
            var derivedKey = WordArray.create();
            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              if (block) {
                hasher.update(block);
              }
              block = hasher.update(password).finalize(salt);
              hasher.reset();
              for (var i = 1; i < iterations; i++) {
                block = hasher.finalize(block);
                hasher.reset();
              }
              derivedKey.concat(block);
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.EvpKDF = function(password, salt, cfg) {
          return EvpKDF.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.EvpKDF;
    });
  })(evpkdf);
  return evpkdf.exports;
}
var cipherCore = { exports: {} };
var hasRequiredCipherCore;
function requireCipherCore() {
  if (hasRequiredCipherCore) return cipherCore.exports;
  hasRequiredCipherCore = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEvpkdf());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.lib.Cipher || function(undefined$12) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base2 = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var C_enc = C.enc;
        C_enc.Utf8;
        var Base64 = C_enc.Base64;
        var C_algo = C.algo;
        var EvpKDF = C_algo.EvpKDF;
        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: Base2.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(xformMode, key, cfg) {
            this.cfg = this.cfg.extend(cfg);
            this._xformMode = xformMode;
            this._key = key;
            this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(dataUpdate) {
            this._append(dataUpdate);
            return this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(dataUpdate) {
            if (dataUpdate) {
              this._append(dataUpdate);
            }
            var finalProcessedData = this._doFinalize();
            return finalProcessedData;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function selectCipherStrategy(key) {
              if (typeof key == "string") {
                return PasswordBasedCipher;
              } else {
                return SerializableCipher;
              }
            }
            return function(cipher) {
              return {
                encrypt: function(message, key, cfg) {
                  return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                },
                decrypt: function(ciphertext, key, cfg) {
                  return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                }
              };
            };
          }()
        });
        C_lib.StreamCipher = Cipher.extend({
          _doFinalize: function() {
            var finalProcessedBlocks = this._process(true);
            return finalProcessedBlocks;
          },
          blockSize: 1
        });
        var C_mode = C.mode = {};
        var BlockCipherMode = C_lib.BlockCipherMode = Base2.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(cipher, iv) {
            return this.Encryptor.create(cipher, iv);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(cipher, iv) {
            return this.Decryptor.create(cipher, iv);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
          }
        });
        var CBC = C_mode.CBC = function() {
          var CBC2 = BlockCipherMode.extend();
          CBC2.Encryptor = CBC2.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              xorBlock.call(this, words, offset, blockSize);
              cipher.encryptBlock(words, offset);
              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CBC2.Decryptor = CBC2.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var thisBlock = words.slice(offset, offset + blockSize);
              cipher.decryptBlock(words, offset);
              xorBlock.call(this, words, offset, blockSize);
              this._prevBlock = thisBlock;
            }
          });
          function xorBlock(words, offset, blockSize) {
            var block;
            var iv = this._iv;
            if (iv) {
              block = iv;
              this._iv = undefined$12;
            } else {
              block = this._prevBlock;
            }
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= block[i];
            }
          }
          return CBC2;
        }();
        var C_pad = C.pad = {};
        var Pkcs7 = C_pad.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) {
              paddingWords.push(paddingWord);
            }
            var padding = WordArray.create(paddingWords, nPaddingBytes);
            data.concat(padding);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        C_lib.BlockCipher = Cipher.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
          }),
          reset: function() {
            var modeCreator;
            Cipher.reset.call(this);
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              modeCreator = mode.createEncryptor;
            } else {
              modeCreator = mode.createDecryptor;
              this._minBufferSize = 1;
            }
            if (this._mode && this._mode.__creator == modeCreator) {
              this._mode.init(this, iv && iv.words);
            } else {
              this._mode = modeCreator.call(mode, this, iv && iv.words);
              this._mode.__creator = modeCreator;
            }
          },
          _doProcessBlock: function(words, offset) {
            this._mode.processBlock(words, offset);
          },
          _doFinalize: function() {
            var finalProcessedBlocks;
            var padding = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              padding.pad(this._data, this.blockSize);
              finalProcessedBlocks = this._process(true);
            } else {
              finalProcessedBlocks = this._process(true);
              padding.unpad(finalProcessedBlocks);
            }
            return finalProcessedBlocks;
          },
          blockSize: 128 / 32
        });
        var CipherParams = C_lib.CipherParams = Base2.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(cipherParams) {
            this.mixIn(cipherParams);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(formatter) {
            return (formatter || this.formatter).stringify(this);
          }
        });
        var C_format = C.format = {};
        var OpenSSLFormatter = C_format.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(cipherParams) {
            var wordArray;
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;
            if (salt) {
              wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
            } else {
              wordArray = ciphertext;
            }
            return wordArray.toString(Base64);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(openSSLStr) {
            var salt;
            var ciphertext = Base64.parse(openSSLStr);
            var ciphertextWords = ciphertext.words;
            if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
              salt = WordArray.create(ciphertextWords.slice(2, 4));
              ciphertextWords.splice(0, 4);
              ciphertext.sigBytes -= 16;
            }
            return CipherParams.create({ ciphertext, salt });
          }
        };
        var SerializableCipher = C_lib.SerializableCipher = Base2.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: Base2.extend({
            format: OpenSSLFormatter
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(cipher, message, key, cfg) {
            cfg = this.cfg.extend(cfg);
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);
            var cipherCfg = encryptor.cfg;
            return CipherParams.create({
              ciphertext,
              key,
              iv: cipherCfg.iv,
              algorithm: cipher,
              mode: cipherCfg.mode,
              padding: cipherCfg.padding,
              blockSize: cipher.blockSize,
              formatter: cfg.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(cipher, ciphertext, key, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
            return plaintext;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(ciphertext, format) {
            if (typeof ciphertext == "string") {
              return format.parse(ciphertext, this);
            } else {
              return ciphertext;
            }
          }
        });
        var C_kdf = C.kdf = {};
        var OpenSSLKdf = C_kdf.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(password, keySize, ivSize, salt, hasher) {
            if (!salt) {
              salt = WordArray.random(64 / 8);
            }
            if (!hasher) {
              var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
            } else {
              var key = EvpKDF.create({ keySize: keySize + ivSize, hasher }).compute(password, salt);
            }
            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4;
            return CipherParams.create({ key, iv, salt });
          }
        };
        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(cipher, message, password, cfg) {
            cfg = this.cfg.extend(cfg);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);
            cfg.iv = derivedParams.iv;
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
            ciphertext.mixIn(derivedParams);
            return ciphertext;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(cipher, ciphertext, password, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);
            cfg.iv = derivedParams.iv;
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
            return plaintext;
          }
        });
      }();
    });
  })(cipherCore);
  return cipherCore.exports;
}
var modeCfb = { exports: {} };
var hasRequiredModeCfb;
function requireModeCfb() {
  if (hasRequiredModeCfb) return modeCfb.exports;
  hasRequiredModeCfb = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.mode.CFB = function() {
        var CFB = CryptoJS.lib.BlockCipherMode.extend();
        CFB.Encryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CFB.Decryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = thisBlock;
          }
        });
        function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
          var keystream;
          var iv = this._iv;
          if (iv) {
            keystream = iv.slice(0);
            this._iv = void 0;
          } else {
            keystream = this._prevBlock;
          }
          cipher.encryptBlock(keystream, 0);
          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= keystream[i];
          }
        }
        return CFB;
      }();
      return CryptoJS.mode.CFB;
    });
  })(modeCfb);
  return modeCfb.exports;
}
var modeCtr = { exports: {} };
var hasRequiredModeCtr;
function requireModeCtr() {
  if (hasRequiredModeCtr) return modeCtr.exports;
  hasRequiredModeCtr = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.mode.CTR = function() {
        var CTR = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = CTR.Encryptor = CTR.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTR.Decryptor = Encryptor;
        return CTR;
      }();
      return CryptoJS.mode.CTR;
    });
  })(modeCtr);
  return modeCtr.exports;
}
var modeCtrGladman = { exports: {} };
var hasRequiredModeCtrGladman;
function requireModeCtrGladman() {
  if (hasRequiredModeCtrGladman) return modeCtrGladman.exports;
  hasRequiredModeCtrGladman = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      CryptoJS.mode.CTRGladman = function() {
        var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
        function incWord(word) {
          if ((word >> 24 & 255) === 255) {
            var b1 = word >> 16 & 255;
            var b2 = word >> 8 & 255;
            var b3 = word & 255;
            if (b1 === 255) {
              b1 = 0;
              if (b2 === 255) {
                b2 = 0;
                if (b3 === 255) {
                  b3 = 0;
                } else {
                  ++b3;
                }
              } else {
                ++b2;
              }
            } else {
              ++b1;
            }
            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
          } else {
            word += 1 << 24;
          }
          return word;
        }
        function incCounter(counter) {
          if ((counter[0] = incWord(counter[0])) === 0) {
            counter[1] = incWord(counter[1]);
          }
          return counter;
        }
        var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            incCounter(counter);
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTRGladman.Decryptor = Encryptor;
        return CTRGladman;
      }();
      return CryptoJS.mode.CTRGladman;
    });
  })(modeCtrGladman);
  return modeCtrGladman.exports;
}
var modeOfb = { exports: {} };
var hasRequiredModeOfb;
function requireModeOfb() {
  if (hasRequiredModeOfb) return modeOfb.exports;
  hasRequiredModeOfb = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.mode.OFB = function() {
        var OFB = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = OFB.Encryptor = OFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var keystream = this._keystream;
            if (iv) {
              keystream = this._keystream = iv.slice(0);
              this._iv = void 0;
            }
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        OFB.Decryptor = Encryptor;
        return OFB;
      }();
      return CryptoJS.mode.OFB;
    });
  })(modeOfb);
  return modeOfb.exports;
}
var modeEcb = { exports: {} };
var hasRequiredModeEcb;
function requireModeEcb() {
  if (hasRequiredModeEcb) return modeEcb.exports;
  hasRequiredModeEcb = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.mode.ECB = function() {
        var ECB = CryptoJS.lib.BlockCipherMode.extend();
        ECB.Encryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.encryptBlock(words, offset);
          }
        });
        ECB.Decryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.decryptBlock(words, offset);
          }
        });
        return ECB;
      }();
      return CryptoJS.mode.ECB;
    });
  })(modeEcb);
  return modeEcb.exports;
}
var padAnsix923 = { exports: {} };
var hasRequiredPadAnsix923;
function requirePadAnsix923() {
  if (hasRequiredPadAnsix923) return padAnsix923.exports;
  hasRequiredPadAnsix923 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.pad.AnsiX923 = {
        pad: function(data, blockSize) {
          var dataSigBytes = data.sigBytes;
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
          var lastBytePos = dataSigBytes + nPaddingBytes - 1;
          data.clamp();
          data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          data.sigBytes += nPaddingBytes;
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Ansix923;
    });
  })(padAnsix923);
  return padAnsix923.exports;
}
var padIso10126 = { exports: {} };
var hasRequiredPadIso10126;
function requirePadIso10126() {
  if (hasRequiredPadIso10126) return padIso10126.exports;
  hasRequiredPadIso10126 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.pad.Iso10126 = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
          data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Iso10126;
    });
  })(padIso10126);
  return padIso10126.exports;
}
var padIso97971 = { exports: {} };
var hasRequiredPadIso97971;
function requirePadIso97971() {
  if (hasRequiredPadIso97971) return padIso97971.exports;
  hasRequiredPadIso97971 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.pad.Iso97971 = {
        pad: function(data, blockSize) {
          data.concat(CryptoJS.lib.WordArray.create([2147483648], 1));
          CryptoJS.pad.ZeroPadding.pad(data, blockSize);
        },
        unpad: function(data) {
          CryptoJS.pad.ZeroPadding.unpad(data);
          data.sigBytes--;
        }
      };
      return CryptoJS.pad.Iso97971;
    });
  })(padIso97971);
  return padIso97971.exports;
}
var padZeropadding = { exports: {} };
var hasRequiredPadZeropadding;
function requirePadZeropadding() {
  if (hasRequiredPadZeropadding) return padZeropadding.exports;
  hasRequiredPadZeropadding = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.pad.ZeroPadding = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          data.clamp();
          data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },
        unpad: function(data) {
          var dataWords = data.words;
          var i = data.sigBytes - 1;
          for (var i = data.sigBytes - 1; i >= 0; i--) {
            if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
              data.sigBytes = i + 1;
              break;
            }
          }
        }
      };
      return CryptoJS.pad.ZeroPadding;
    });
  })(padZeropadding);
  return padZeropadding.exports;
}
var padNopadding = { exports: {} };
var hasRequiredPadNopadding;
function requirePadNopadding() {
  if (hasRequiredPadNopadding) return padNopadding.exports;
  hasRequiredPadNopadding = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      CryptoJS.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      };
      return CryptoJS.pad.NoPadding;
    });
  })(padNopadding);
  return padNopadding.exports;
}
var formatHex = { exports: {} };
var hasRequiredFormatHex;
function requireFormatHex() {
  if (hasRequiredFormatHex) return formatHex.exports;
  hasRequiredFormatHex = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function(undefined$12) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var CipherParams = C_lib.CipherParams;
        var C_enc = C.enc;
        var Hex = C_enc.Hex;
        var C_format = C.format;
        C_format.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(cipherParams) {
            return cipherParams.ciphertext.toString(Hex);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(input) {
            var ciphertext = Hex.parse(input);
            return CipherParams.create({ ciphertext });
          }
        };
      })();
      return CryptoJS.format.Hex;
    });
  })(formatHex);
  return formatHex.exports;
}
var aes = { exports: {} };
var hasRequiredAes;
function requireAes() {
  if (hasRequiredAes) return aes.exports;
  hasRequiredAes = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = [];
        (function() {
          var d = [];
          for (var i = 0; i < 256; i++) {
            if (i < 128) {
              d[i] = i << 1;
            } else {
              d[i] = i << 1 ^ 283;
            }
          }
          var x = 0;
          var xi = 0;
          for (var i = 0; i < 256; i++) {
            var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
            sx = sx >>> 8 ^ sx & 255 ^ 99;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];
            var t = d[sx] * 257 ^ sx * 16843008;
            SUB_MIX_0[x] = t << 24 | t >>> 8;
            SUB_MIX_1[x] = t << 16 | t >>> 16;
            SUB_MIX_2[x] = t << 8 | t >>> 24;
            SUB_MIX_3[x] = t;
            var t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
            INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
            INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
            INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
            INV_SUB_MIX_3[sx] = t;
            if (!x) {
              x = xi = 1;
            } else {
              x = x2 ^ d[d[d[x8 ^ x2]]];
              xi ^= d[d[xi]];
            }
          }
        })();
        var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        var AES = C_algo.AES = BlockCipher.extend({
          _doReset: function() {
            var t;
            if (this._nRounds && this._keyPriorReset === this._key) {
              return;
            }
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            var nRounds = this._nRounds = keySize + 6;
            var ksRows = (nRounds + 1) * 4;
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
              if (ksRow < keySize) {
                keySchedule[ksRow] = keyWords[ksRow];
              } else {
                t = keySchedule[ksRow - 1];
                if (!(ksRow % keySize)) {
                  t = t << 8 | t >>> 24;
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                  t ^= RCON[ksRow / keySize | 0] << 24;
                } else if (keySize > 6 && ksRow % keySize == 4) {
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                }
                keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
              }
            }
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
              var ksRow = ksRows - invKsRow;
              if (invKsRow % 4) {
                var t = keySchedule[ksRow];
              } else {
                var t = keySchedule[ksRow - 4];
              }
              if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule[invKsRow] = t;
              } else {
                invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t & 255]];
              }
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
          },
          decryptBlock: function(M, offset) {
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
          },
          _doCryptBlock: function(M, offset, keySchedule, SUB_MIX_02, SUB_MIX_12, SUB_MIX_22, SUB_MIX_32, SBOX2) {
            var nRounds = this._nRounds;
            var s0 = M[offset] ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];
            var ksRow = 4;
            for (var round = 1; round < nRounds; round++) {
              var t0 = SUB_MIX_02[s0 >>> 24] ^ SUB_MIX_12[s1 >>> 16 & 255] ^ SUB_MIX_22[s2 >>> 8 & 255] ^ SUB_MIX_32[s3 & 255] ^ keySchedule[ksRow++];
              var t1 = SUB_MIX_02[s1 >>> 24] ^ SUB_MIX_12[s2 >>> 16 & 255] ^ SUB_MIX_22[s3 >>> 8 & 255] ^ SUB_MIX_32[s0 & 255] ^ keySchedule[ksRow++];
              var t2 = SUB_MIX_02[s2 >>> 24] ^ SUB_MIX_12[s3 >>> 16 & 255] ^ SUB_MIX_22[s0 >>> 8 & 255] ^ SUB_MIX_32[s1 & 255] ^ keySchedule[ksRow++];
              var t3 = SUB_MIX_02[s3 >>> 24] ^ SUB_MIX_12[s0 >>> 16 & 255] ^ SUB_MIX_22[s1 >>> 8 & 255] ^ SUB_MIX_32[s2 & 255] ^ keySchedule[ksRow++];
              s0 = t0;
              s1 = t1;
              s2 = t2;
              s3 = t3;
            }
            var t0 = (SBOX2[s0 >>> 24] << 24 | SBOX2[s1 >>> 16 & 255] << 16 | SBOX2[s2 >>> 8 & 255] << 8 | SBOX2[s3 & 255]) ^ keySchedule[ksRow++];
            var t1 = (SBOX2[s1 >>> 24] << 24 | SBOX2[s2 >>> 16 & 255] << 16 | SBOX2[s3 >>> 8 & 255] << 8 | SBOX2[s0 & 255]) ^ keySchedule[ksRow++];
            var t2 = (SBOX2[s2 >>> 24] << 24 | SBOX2[s3 >>> 16 & 255] << 16 | SBOX2[s0 >>> 8 & 255] << 8 | SBOX2[s1 & 255]) ^ keySchedule[ksRow++];
            var t3 = (SBOX2[s3 >>> 24] << 24 | SBOX2[s0 >>> 16 & 255] << 16 | SBOX2[s1 >>> 8 & 255] << 8 | SBOX2[s2 & 255]) ^ keySchedule[ksRow++];
            M[offset] = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
          },
          keySize: 256 / 32
        });
        C.AES = BlockCipher._createHelper(AES);
      })();
      return CryptoJS.AES;
    });
  })(aes);
  return aes.exports;
}
var tripledes = { exports: {} };
var hasRequiredTripledes;
function requireTripledes() {
  if (hasRequiredTripledes) return tripledes.exports;
  hasRequiredTripledes = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var PC1 = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ];
        var PC2 = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ];
        var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
        var SBOX_P = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ];
        var SBOX_MASK = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ];
        var DES = C_algo.DES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keyBits = [];
            for (var i = 0; i < 56; i++) {
              var keyBitPos = PC1[i] - 1;
              keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
            }
            var subKeys = this._subKeys = [];
            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
              var subKey = subKeys[nSubKey] = [];
              var bitShift = BIT_SHIFTS[nSubKey];
              for (var i = 0; i < 24; i++) {
                subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
                subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
              }
              subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
              for (var i = 1; i < 7; i++) {
                subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
              }
              subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
            }
            var invSubKeys = this._invSubKeys = [];
            for (var i = 0; i < 16; i++) {
              invSubKeys[i] = subKeys[15 - i];
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._subKeys);
          },
          decryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._invSubKeys);
          },
          _doCryptBlock: function(M, offset, subKeys) {
            this._lBlock = M[offset];
            this._rBlock = M[offset + 1];
            exchangeLR.call(this, 4, 252645135);
            exchangeLR.call(this, 16, 65535);
            exchangeRL.call(this, 2, 858993459);
            exchangeRL.call(this, 8, 16711935);
            exchangeLR.call(this, 1, 1431655765);
            for (var round = 0; round < 16; round++) {
              var subKey = subKeys[round];
              var lBlock = this._lBlock;
              var rBlock = this._rBlock;
              var f = 0;
              for (var i = 0; i < 8; i++) {
                f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
              }
              this._lBlock = rBlock;
              this._rBlock = lBlock ^ f;
            }
            var t = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = t;
            exchangeLR.call(this, 1, 1431655765);
            exchangeRL.call(this, 8, 16711935);
            exchangeRL.call(this, 2, 858993459);
            exchangeLR.call(this, 16, 65535);
            exchangeLR.call(this, 4, 252645135);
            M[offset] = this._lBlock;
            M[offset + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function exchangeLR(offset, mask) {
          var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
          this._rBlock ^= t;
          this._lBlock ^= t << offset;
        }
        function exchangeRL(offset, mask) {
          var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
          this._lBlock ^= t;
          this._rBlock ^= t << offset;
        }
        C.DES = BlockCipher._createHelper(DES);
        var TripleDES = C_algo.TripleDES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            }
            var key1 = keyWords.slice(0, 2);
            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
            this._des1 = DES.createEncryptor(WordArray.create(key1));
            this._des2 = DES.createEncryptor(WordArray.create(key2));
            this._des3 = DES.createEncryptor(WordArray.create(key3));
          },
          encryptBlock: function(M, offset) {
            this._des1.encryptBlock(M, offset);
            this._des2.decryptBlock(M, offset);
            this._des3.encryptBlock(M, offset);
          },
          decryptBlock: function(M, offset) {
            this._des3.decryptBlock(M, offset);
            this._des2.encryptBlock(M, offset);
            this._des1.decryptBlock(M, offset);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        C.TripleDES = BlockCipher._createHelper(TripleDES);
      })();
      return CryptoJS.TripleDES;
    });
  })(tripledes);
  return tripledes.exports;
}
var rc4 = { exports: {} };
var hasRequiredRc4;
function requireRc4() {
  if (hasRequiredRc4) return rc4.exports;
  hasRequiredRc4 = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var RC4 = C_algo.RC4 = StreamCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keySigBytes = key.sigBytes;
            var S = this._S = [];
            for (var i = 0; i < 256; i++) {
              S[i] = i;
            }
            for (var i = 0, j = 0; i < 256; i++) {
              var keyByteIndex = i % keySigBytes;
              var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
              j = (j + S[i] + keyByte) % 256;
              var t = S[i];
              S[i] = S[j];
              S[j] = t;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(M, offset) {
            M[offset] ^= generateKeystreamWord.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function generateKeystreamWord() {
          var S = this._S;
          var i = this._i;
          var j = this._j;
          var keystreamWord = 0;
          for (var n = 0; n < 4; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256;
            var t = S[i];
            S[i] = S[j];
            S[j] = t;
            keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
          }
          this._i = i;
          this._j = j;
          return keystreamWord;
        }
        C.RC4 = StreamCipher._createHelper(RC4);
        var RC4Drop = C_algo.RC4Drop = RC4.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: RC4.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            RC4._doReset.call(this);
            for (var i = this.cfg.drop; i > 0; i--) {
              generateKeystreamWord.call(this);
            }
          }
        });
        C.RC4Drop = StreamCipher._createHelper(RC4Drop);
      })();
      return CryptoJS.RC4;
    });
  })(rc4);
  return rc4.exports;
}
var rabbit = { exports: {} };
var hasRequiredRabbit;
function requireRabbit() {
  if (hasRequiredRabbit) return rabbit.exports;
  hasRequiredRabbit = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var Rabbit = C_algo.Rabbit = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            for (var i = 0; i < 4; i++) {
              K[i] = (K[i] << 8 | K[i] >>> 24) & 16711935 | (K[i] << 24 | K[i] >>> 8) & 4278255360;
            }
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.Rabbit = StreamCipher._createHelper(Rabbit);
      })();
      return CryptoJS.Rabbit;
    });
  })(rabbit);
  return rabbit.exports;
}
var rabbitLegacy = { exports: {} };
var hasRequiredRabbitLegacy;
function requireRabbitLegacy() {
  if (hasRequiredRabbitLegacy) return rabbitLegacy.exports;
  hasRequiredRabbitLegacy = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
      })();
      return CryptoJS.RabbitLegacy;
    });
  })(rabbitLegacy);
  return rabbitLegacy.exports;
}
var blowfish = { exports: {} };
var hasRequiredBlowfish;
function requireBlowfish() {
  if (hasRequiredBlowfish) return blowfish.exports;
  hasRequiredBlowfish = 1;
  (function(module, exports) {
    (function(root, factory, undef) {
      {
        module.exports = factory(requireCore(), requireEncBase64(), requireMd5(), requireEvpkdf(), requireCipherCore());
      }
    })(commonjsGlobal, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        const N = 16;
        const ORIG_P = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ];
        const ORIG_S = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var BLOWFISH_CTX = {
          pbox: [],
          sbox: []
        };
        function F(ctx, x) {
          let a = x >> 24 & 255;
          let b = x >> 16 & 255;
          let c = x >> 8 & 255;
          let d = x & 255;
          let y = ctx.sbox[0][a] + ctx.sbox[1][b];
          y = y ^ ctx.sbox[2][c];
          y = y + ctx.sbox[3][d];
          return y;
        }
        function BlowFish_Encrypt(ctx, left, right) {
          let Xl = left;
          let Xr = right;
          let temp;
          for (let i = 0; i < N; ++i) {
            Xl = Xl ^ ctx.pbox[i];
            Xr = F(ctx, Xl) ^ Xr;
            temp = Xl;
            Xl = Xr;
            Xr = temp;
          }
          temp = Xl;
          Xl = Xr;
          Xr = temp;
          Xr = Xr ^ ctx.pbox[N];
          Xl = Xl ^ ctx.pbox[N + 1];
          return { left: Xl, right: Xr };
        }
        function BlowFish_Decrypt(ctx, left, right) {
          let Xl = left;
          let Xr = right;
          let temp;
          for (let i = N + 1; i > 1; --i) {
            Xl = Xl ^ ctx.pbox[i];
            Xr = F(ctx, Xl) ^ Xr;
            temp = Xl;
            Xl = Xr;
            Xr = temp;
          }
          temp = Xl;
          Xl = Xr;
          Xr = temp;
          Xr = Xr ^ ctx.pbox[1];
          Xl = Xl ^ ctx.pbox[0];
          return { left: Xl, right: Xr };
        }
        function BlowFishInit(ctx, key, keysize) {
          for (let Row = 0; Row < 4; Row++) {
            ctx.sbox[Row] = [];
            for (let Col = 0; Col < 256; Col++) {
              ctx.sbox[Row][Col] = ORIG_S[Row][Col];
            }
          }
          let keyIndex = 0;
          for (let index = 0; index < N + 2; index++) {
            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
            keyIndex++;
            if (keyIndex >= keysize) {
              keyIndex = 0;
            }
          }
          let Data1 = 0;
          let Data2 = 0;
          let res = 0;
          for (let i = 0; i < N + 2; i += 2) {
            res = BlowFish_Encrypt(ctx, Data1, Data2);
            Data1 = res.left;
            Data2 = res.right;
            ctx.pbox[i] = Data1;
            ctx.pbox[i + 1] = Data2;
          }
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 256; j += 2) {
              res = BlowFish_Encrypt(ctx, Data1, Data2);
              Data1 = res.left;
              Data2 = res.right;
              ctx.sbox[i][j] = Data1;
              ctx.sbox[i][j + 1] = Data2;
            }
          }
          return true;
        }
        var Blowfish = C_algo.Blowfish = BlockCipher.extend({
          _doReset: function() {
            if (this._keyPriorReset === this._key) {
              return;
            }
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
          },
          encryptBlock: function(M, offset) {
            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
            M[offset] = res.left;
            M[offset + 1] = res.right;
          },
          decryptBlock: function(M, offset) {
            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
            M[offset] = res.left;
            M[offset + 1] = res.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        C.Blowfish = BlockCipher._createHelper(Blowfish);
      })();
      return CryptoJS.Blowfish;
    });
  })(blowfish);
  return blowfish.exports;
}
(function(module, exports) {
  (function(root, factory, undef) {
    {
      module.exports = factory(requireCore(), requireX64Core(), requireLibTypedarrays(), requireEncUtf16(), requireEncBase64(), requireEncBase64url(), requireMd5(), requireSha1(), sha256Exports, requireSha224(), requireSha512(), requireSha384(), requireSha3(), requireRipemd160(), requireHmac(), requirePbkdf2(), requireEvpkdf(), requireCipherCore(), requireModeCfb(), requireModeCtr(), requireModeCtrGladman(), requireModeOfb(), requireModeEcb(), requirePadAnsix923(), requirePadIso10126(), requirePadIso97971(), requirePadZeropadding(), requirePadNopadding(), requireFormatHex(), requireAes(), requireTripledes(), requireRc4(), requireRabbit(), requireRabbitLegacy(), requireBlowfish());
    }
  })(commonjsGlobal, function(CryptoJS) {
    return CryptoJS;
  });
})(cryptoJs);
var cryptoJsExports = cryptoJs.exports;
var __importDefault$4 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(Base$1, "__esModule", { value: true });
Base$1.Base = void 0;
const buffer_1$2 = buffer;
const crypto_js_1 = __importDefault$4(cryptoJsExports);
class Base {
  /**
   * print
   * @desc Prints out a visual representation of the merkle tree.
   * @example
   *```js
   *tree.print()
   *```
   */
  print() {
    Base.print(this);
  }
  /**
   * bufferIndexOf
   * @desc Returns the first index of which given buffer is found in array.
   * @param {Buffer[]} haystack - Array of buffers.
   * @param {Buffer} needle - Buffer to find.
   * @return {Number} - Index number
   *
   * @example
   * ```js
   *const index = tree.bufferIndexOf(haystack, needle)
   *```
   */
  bufferIndexOf(array, element, isSorted = false) {
    if (isSorted) {
      return this.binarySearch(array, element, buffer_1$2.Buffer.compare);
    }
    const eqChecker = (buffer1, buffer2) => buffer1.equals(buffer2);
    return this.linearSearch(array, element, eqChecker);
  }
  /**
   * binarySearch
   * @desc Returns the first index of which given item is found in array using binary search.
   * @param {Buffer[]} array - Array of items.
   * @param {Buffer} element - Item to find.
   * @param {Function} compareFunction
   * @return {Number} - Index number
   *
   * @example
   * ```js
   *const index = MerkleTree.binarySearch(array, element, Buffer.compare)
   *```
   */
  static binarySearch(array, element, compareFunction) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const ordering = compareFunction(array[mid], element);
      if (ordering === 0) {
        for (let i = mid - 1; i >= 0; i--) {
          if (compareFunction(array[i], element) === 0)
            continue;
          return i + 1;
        }
        return 0;
      } else if (ordering < 0) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return -1;
  }
  /**
   * binarySearch
   * @desc Returns the first index of which given item is found in array using binary search.
   * @param {Buffer[]} array - Array of items.
   * @param {Buffer} element - Item to find.
   * @param {Function} compareFunction
   * @return {Number} - Index number
   *
   * @example
   * ```js
   *const index = tree.binarySearch(array, element, Buffer.compare)
   *```
   */
  binarySearch(array, element, compareFunction) {
    return Base.binarySearch(array, element, compareFunction);
  }
  /**
   * linearSearch
   * @desc Returns the first index of which given item is found in array using linear search.
   * @param {Buffer[]} array - Array of items.
   * @param {Buffer} element - Item to find.
   * @param {Function} eqChecker
   * @return {Number} - Index number
   *
   * @example
   * ```js
   *const index = MerkleTree.linearSearch(array, element, (a, b) => a === b)
   *```
   */
  static linearSearch(array, element, eqChecker) {
    for (let i = 0; i < array.length; i++) {
      if (eqChecker(array[i], element)) {
        return i;
      }
    }
    return -1;
  }
  /**
   * linearSearch
   * @desc Returns the first index of which given item is found in array using linear search.
   * @param {Buffer[]} array - Array of items.
   * @param {Buffer} element - Item to find.
   * @param {Function} eqChecker
   * @return {Number} - Index number
   *
   * @example
   * ```js
   *const index = tree.linearSearch(array, element, (a, b) => a === b)
   *```
   */
  linearSearch(array, element, eqChecker) {
    return Base.linearSearch(array, element, eqChecker);
  }
  /**
   * bufferify
   * @desc Returns a buffer type for the given value.
   * @param {String|Number|Object|Buffer|ArrayBuffer} value
   * @return {Buffer}
   *
   * @example
   * ```js
   *const buf = MerkleTree.bufferify('0x1234')
   *```
   */
  static bufferify(value) {
    if (!buffer_1$2.Buffer.isBuffer(value)) {
      if (typeof value === "object" && value.words) {
        return buffer_1$2.Buffer.from(value.toString(crypto_js_1.default.enc.Hex), "hex");
      } else if (Base.isHexString(value)) {
        const hexString = value.replace("0x", "");
        const paddedHexString = hexString.length % 2 ? "0" + hexString : hexString;
        return buffer_1$2.Buffer.from(paddedHexString, "hex");
      } else if (typeof value === "string") {
        return buffer_1$2.Buffer.from(value);
      } else if (typeof value === "bigint") {
        const hexString = value.toString(16).length % 2 ? "0" + value.toString(16) : value.toString(16);
        return buffer_1$2.Buffer.from(hexString, "hex");
      } else if (value instanceof Uint8Array) {
        return buffer_1$2.Buffer.from(value.buffer, value.byteOffset, value.byteLength);
      } else if (typeof value === "number") {
        let s = value.toString();
        if (s.length % 2) {
          s = `0${s}`;
        }
        return buffer_1$2.Buffer.from(s, "hex");
      } else if (ArrayBuffer.isView(value)) {
        return buffer_1$2.Buffer.from(value.buffer, value.byteOffset, value.byteLength);
      }
    }
    return value;
  }
  bigNumberify(value) {
    return Base.bigNumberify(value);
  }
  static bigNumberify(value) {
    if (typeof value === "bigint") {
      return value;
    }
    if (typeof value === "string") {
      if (value.startsWith("0x") && Base.isHexString(value)) {
        const hexString = value.replace("0x", "");
        const paddedHexString = hexString.length % 2 ? "0" + hexString : hexString || "0";
        return BigInt("0x" + paddedHexString);
      }
      return BigInt(value);
    }
    if (buffer_1$2.Buffer.isBuffer(value)) {
      const hexString = value.toString("hex");
      const paddedHexString = hexString.length % 2 ? "0" + hexString : hexString || "0";
      return BigInt("0x" + paddedHexString);
    }
    if (value instanceof Uint8Array) {
      const hexString = buffer_1$2.Buffer.from(value).toString("hex");
      const paddedHexString = hexString.length % 2 ? "0" + hexString : hexString || "0";
      return BigInt("0x" + paddedHexString);
    }
    if (typeof value === "number") {
      return BigInt(value);
    }
    throw new Error("cannot bigNumberify");
  }
  /**
   * isHexString
   * @desc Returns true if value is a hex string.
   * @param {String} value
   * @return {Boolean}
   *
   * @example
   * ```js
   *console.log(MerkleTree.isHexString('0x1234'))
   *```
   */
  static isHexString(v) {
    return typeof v === "string" && /^(0x)?[0-9A-Fa-f]*$/.test(v);
  }
  /**
   * print
   * @desc Prints out a visual representation of the given merkle tree.
   * @param {Object} tree - Merkle tree instance.
   * @return {String}
   * @example
   *```js
   *MerkleTree.print(tree)
   *```
   */
  static print(tree) {
    console.log(tree.toString());
  }
  /**
   * bufferToHex
   * @desc Returns a hex string with 0x prefix for given buffer.
   * @param {Buffer} value
   * @return {String}
   * @example
   *```js
   *const hexStr = tree.bufferToHex(Buffer.from('A'))
   *```
   */
  bufferToHex(value, withPrefix = true) {
    return Base.bufferToHex(value, withPrefix);
  }
  /**
   * bufferToHex
   * @desc Returns a hex string with 0x prefix for given buffer.
   * @param {Buffer} value
   * @return {String}
   * @example
   *```js
   *const hexStr = MerkleTree.bufferToHex(Buffer.from('A'))
   *```
   */
  static bufferToHex(value, withPrefix = true) {
    return `${withPrefix ? "0x" : ""}${(value || buffer_1$2.Buffer.alloc(0)).toString("hex")}`;
  }
  /**
   * bufferify
   * @desc Returns a buffer type for the given value.
   * @param {String|Number|Object|Buffer} value
   * @return {Buffer}
   *
   * @example
   * ```js
   *const buf = tree.bufferify('0x1234')
   *```
   */
  bufferify(value) {
    return Base.bufferify(value);
  }
  /**
   * bufferifyFn
   * @desc Returns a function that will bufferify the return value.
   * @param {Function}
   * @return {Function}
   *
   * @example
   * ```js
   *const fn = tree.bufferifyFn((value) => sha256(value))
   *```
   */
  bufferifyFn(f) {
    return (value) => {
      const v = f(value);
      if (buffer_1$2.Buffer.isBuffer(v)) {
        return v;
      }
      if (this.isHexString(v)) {
        const hexString = v.replace("0x", "");
        const paddedHexString = hexString.length % 2 ? "0" + hexString : hexString;
        return buffer_1$2.Buffer.from(paddedHexString, "hex");
      }
      if (typeof v === "string") {
        return buffer_1$2.Buffer.from(v);
      }
      if (typeof v === "bigint") {
        const hexString = v.toString(16).length % 2 ? "0" + v.toString(16) : v.toString(16);
        return buffer_1$2.Buffer.from(hexString, "hex");
      }
      if (ArrayBuffer.isView(v)) {
        return buffer_1$2.Buffer.from(v.buffer, v.byteOffset, v.byteLength);
      }
      return buffer_1$2.Buffer.from(f(crypto_js_1.default.enc.Hex.parse(value.toString("hex"))).toString(crypto_js_1.default.enc.Hex), "hex");
    };
  }
  /**
   * isHexString
   * @desc Returns true if value is a hex string.
   * @param {String} value
   * @return {Boolean}
   *
   * @example
   * ```js
   *console.log(MerkleTree.isHexString('0x1234'))
   *```
   */
  isHexString(value) {
    return Base.isHexString(value);
  }
  /**
   * log2
   * @desc Returns the log2 of number.
   * @param {Number} value
   * @return {Number}
   */
  log2(n) {
    return n === 1 ? 0 : 1 + this.log2(n / 2 | 0);
  }
  /**
   * zip
   * @desc Returns true if value is a hex string.
   * @param {String[]|Number[]|Buffer[]} a - first array
   * @param {String[]|Number[]|Buffer[]} b -  second array
   * @return {String[][]|Number[][]|Buffer[][]}
   *
   * @example
   * ```js
   *const zipped = tree.zip(['a', 'b'],['A', 'B'])
   *console.log(zipped) // [ [ 'a', 'A' ], [ 'b', 'B' ] ]
   *```
   */
  zip(a, b) {
    return a.map((e, i) => [e, b[i]]);
  }
  static hexZeroPad(hexStr, length) {
    return "0x" + hexStr.replace("0x", "").padStart(length, "0");
  }
  bufferArrayIncludes(bufferArray, targetBuffer) {
    return bufferArray.some((buffer2) => buffer2.equals(targetBuffer !== null && targetBuffer !== void 0 ? targetBuffer : buffer_1$2.Buffer.alloc(0)));
  }
}
Base$1.Base = Base;
Base$1.default = Base;
var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(MerkleTree$1, "__esModule", { value: true });
MerkleTree$1.MerkleTree = void 0;
const buffer_1$1 = buffer;
const buffer_reverse_1 = __importDefault$3(bufferReverse);
const sha256_1$1 = __importDefault$3(sha256Exports);
const treeify_1$1 = __importDefault$3(treeifyExports);
const Base_1$4 = __importDefault$3(Base$1);
class MerkleTree extends Base_1$4.default {
  /**
   * @desc Constructs a Merkle Tree.
   * All nodes and leaves are stored as Buffers.
   * Lonely leaf nodes are promoted to the next level up without being hashed again.
   * @param {Buffer[]} leaves - Array of hashed leaves. Each leaf must be a Buffer.
   * @param {Function} hashFunction - Hash function to use for hashing leaves and nodes
   * @param {Object} options - Additional options
   * @example
   *```js
   *const MerkleTree = require('merkletreejs')
   *const crypto = require('crypto')
   *
   *function sha256(data) {
   *  // returns Buffer
   *  return crypto.createHash('sha256').update(data).digest()
   *}
   *
   *const leaves = ['a', 'b', 'c'].map(value => keccak(value))
   *
   *const tree = new MerkleTree(leaves, sha256)
   *```
   */
  constructor(leaves, hashFn = sha256_1$1.default, options = {}) {
    super();
    this.duplicateOdd = false;
    this.hashLeaves = false;
    this.isBitcoinTree = false;
    this.leaves = [];
    this.layers = [];
    this.sortLeaves = false;
    this.sortPairs = false;
    this.sort = false;
    this.fillDefaultHash = null;
    this.complete = false;
    if (options.complete) {
      if (options.isBitcoinTree) {
        throw new Error('option "complete" is incompatible with "isBitcoinTree"');
      }
      if (options.duplicateOdd) {
        throw new Error('option "complete" is incompatible with "duplicateOdd"');
      }
    }
    this.isBitcoinTree = !!options.isBitcoinTree;
    this.hashLeaves = !!options.hashLeaves;
    this.sortLeaves = !!options.sortLeaves;
    this.sortPairs = !!options.sortPairs;
    this.complete = !!options.complete;
    if (options.fillDefaultHash) {
      if (typeof options.fillDefaultHash === "function") {
        this.fillDefaultHash = options.fillDefaultHash;
      } else if (buffer_1$1.Buffer.isBuffer(options.fillDefaultHash) || typeof options.fillDefaultHash === "string") {
        this.fillDefaultHash = (idx, hashFn2) => options.fillDefaultHash;
      } else {
        throw new Error('method "fillDefaultHash" must be a function, Buffer, or string');
      }
    }
    this.sort = !!options.sort;
    if (this.sort) {
      this.sortLeaves = true;
      this.sortPairs = true;
    }
    this.duplicateOdd = !!options.duplicateOdd;
    if (options.concatenator) {
      this.concatenator = options.concatenator;
    } else {
      this.concatenator = buffer_1$1.Buffer.concat;
    }
    if (typeof hashFn !== "function") {
      throw new Error("hashFn must be a function");
    }
    this.hashFn = this.bufferifyFn(hashFn);
    this.processLeaves(leaves);
  }
  getOptions() {
    var _a, _b;
    return {
      complete: this.complete,
      isBitcoinTree: this.isBitcoinTree,
      hashLeaves: this.hashLeaves,
      sortLeaves: this.sortLeaves,
      sortPairs: this.sortPairs,
      sort: this.sort,
      fillDefaultHash: (_b = (_a = this.fillDefaultHash) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : null,
      duplicateOdd: this.duplicateOdd
    };
  }
  processLeaves(leaves) {
    if (this.hashLeaves) {
      leaves = leaves.map(this.hashFn);
    }
    this.leaves = leaves.map(this.bufferify);
    if (this.sortLeaves) {
      this.leaves = this.leaves.sort(buffer_1$1.Buffer.compare);
    }
    if (this.fillDefaultHash) {
      for (let i = this.leaves.length; i < Math.pow(2, Math.ceil(Math.log2(this.leaves.length))); i++) {
        this.leaves.push(this.bufferify(this.fillDefaultHash(i, this.hashFn)));
      }
    }
    this.createHashes(this.leaves);
  }
  createHashes(nodes) {
    this.layers = [nodes];
    while (nodes.length > 1) {
      const layerIndex = this.layers.length;
      this.layers.push([]);
      const layerLimit = this.complete && layerIndex === 1 && !Number.isInteger(Math.log2(nodes.length)) ? 2 * nodes.length - Math.pow(2, Math.ceil(Math.log2(nodes.length))) : nodes.length;
      for (let i = 0; i < nodes.length; i += 2) {
        if (i >= layerLimit) {
          this.layers[layerIndex].push(...nodes.slice(layerLimit));
          break;
        } else if (i + 1 === nodes.length) {
          if (nodes.length % 2 === 1) {
            const data = nodes[nodes.length - 1];
            let hash2 = data;
            if (this.isBitcoinTree) {
              hash2 = this.hashFn(this.concatenator([buffer_reverse_1.default(data), buffer_reverse_1.default(data)]));
              hash2 = buffer_reverse_1.default(this.hashFn(hash2));
              this.layers[layerIndex].push(hash2);
              continue;
            } else {
              if (this.duplicateOdd) ;
              else {
                this.layers[layerIndex].push(nodes[i]);
                continue;
              }
            }
          }
        }
        const left = nodes[i];
        const right = i + 1 === nodes.length ? left : nodes[i + 1];
        let combined = null;
        if (this.isBitcoinTree) {
          combined = [buffer_reverse_1.default(left), buffer_reverse_1.default(right)];
        } else {
          combined = [left, right];
        }
        if (this.sortPairs) {
          combined.sort(buffer_1$1.Buffer.compare);
        }
        let hash = this.hashFn(this.concatenator(combined));
        if (this.isBitcoinTree) {
          hash = buffer_reverse_1.default(this.hashFn(hash));
        }
        this.layers[layerIndex].push(hash);
      }
      nodes = this.layers[layerIndex];
    }
  }
  /**
   * addLeaf
   * @desc Adds a leaf to the tree and re-calculates layers.
   * @param {String|Buffer} - Leaf
   * @param {Boolean} - Set to true if the leaf should be hashed before being added to tree.
   * @example
   *```js
   *tree.addLeaf(newLeaf)
   *```
   */
  addLeaf(leaf, shouldHash = false) {
    if (shouldHash) {
      leaf = this.hashFn(leaf);
    }
    this.processLeaves(this.leaves.concat(leaf));
  }
  /**
   * addLeaves
   * @desc Adds multiple leaves to the tree and re-calculates layers.
   * @param {String[]|Buffer[]} - Array of leaves
   * @param {Boolean} - Set to true if the leaves should be hashed before being added to tree.
   * @example
   *```js
   *tree.addLeaves(newLeaves)
   *```
   */
  addLeaves(leaves, shouldHash = false) {
    if (shouldHash) {
      leaves = leaves.map(this.hashFn);
    }
    this.processLeaves(this.leaves.concat(leaves));
  }
  /**
   * getLeaves
   * @desc Returns array of leaves of Merkle Tree.
   * @return {Buffer[]}
   * @example
   *```js
   *const leaves = tree.getLeaves()
   *```
   */
  getLeaves(values) {
    if (Array.isArray(values)) {
      if (this.hashLeaves) {
        values = values.map(this.hashFn);
        if (this.sortLeaves) {
          values = values.sort(buffer_1$1.Buffer.compare);
        }
      }
      return this.leaves.filter((leaf) => this.bufferIndexOf(values, leaf, this.sortLeaves) !== -1);
    }
    return this.leaves;
  }
  removeLeaf(index) {
    if (!this.isValidLeafIndex(index)) {
      throw new Error(`"${index}" is not a valid leaf index. Expected to be [0, ${this.getLeafCount() - 1}]`);
    }
    const result = this.leaves.splice(index, 1);
    this.processLeaves(this.leaves);
    return result[0];
  }
  updateLeaf(index, value, shouldHash = false) {
    if (!this.isValidLeafIndex(index)) {
      throw new Error(`"${index}" is not a valid leaf index. Expected to be [0, ${this.getLeafCount() - 1}]`);
    }
    if (shouldHash)
      value = this.hashFn(value);
    this.leaves[index] = value;
    this.processLeaves(this.leaves);
  }
  /**
   * getLeaf
   * @desc Returns the leaf at the given index.
   * @param {Number} - Index number
   * @return {Buffer}
   * @example
   *```js
   *const leaf = tree.getLeaf(1)
   *```
   */
  getLeaf(index) {
    if (index < 0 || index > this.leaves.length - 1) {
      return buffer_1$1.Buffer.from([]);
    }
    return this.leaves[index];
  }
  /**
   * getLeafIndex
   * @desc Returns the index of the given leaf, or -1 if the leaf is not found.
   * @param {String|Buffer} - Target leaf
   * @return {number}
   * @example
   *```js
   *const leaf = Buffer.from('abc')
   *const index = tree.getLeafIndex(leaf)
   *```
   */
  getLeafIndex(target) {
    target = this.bufferify(target);
    const leaves = this.getLeaves();
    for (let i = 0; i < leaves.length; i++) {
      const leaf = leaves[i];
      if (leaf.equals(target)) {
        return i;
      }
    }
    return -1;
  }
  /**
   * getLeafCount
   * @desc Returns the total number of leaves.
   * @return {number}
   * @example
   *```js
   *const count = tree.getLeafCount()
   *```
   */
  getLeafCount() {
    return this.leaves.length;
  }
  /**
   * getHexLeaves
   * @desc Returns array of leaves of Merkle Tree as hex strings.
   * @return {String[]}
   * @example
   *```js
   *const leaves = tree.getHexLeaves()
   *```
   */
  getHexLeaves() {
    return this.leaves.map((leaf) => this.bufferToHex(leaf));
  }
  /**
   * marshalLeaves
   * @desc Returns array of leaves of Merkle Tree as a JSON string.
   * @param {String[]|Buffer[]} - Merkle tree leaves
   * @return {String} - List of leaves as JSON string
   * @example
   *```js
   *const jsonStr = MerkleTree.marshalLeaves(leaves)
   *```
   */
  static marshalLeaves(leaves) {
    return JSON.stringify(leaves.map((leaf) => MerkleTree.bufferToHex(leaf)), null, 2);
  }
  /**
   * unmarshalLeaves
   * @desc Returns array of leaves of Merkle Tree as a Buffers.
   * @param {String|Object} - JSON stringified leaves
   * @return {Buffer[]} - Unmarshalled list of leaves
   * @example
   *```js
   *const leaves = MerkleTree.unmarshalLeaves(jsonStr)
   *```
   */
  static unmarshalLeaves(jsonStr) {
    let parsed = null;
    if (typeof jsonStr === "string") {
      parsed = JSON.parse(jsonStr);
    } else if (jsonStr instanceof Object) {
      parsed = jsonStr;
    } else {
      throw new Error("Expected type of string or object");
    }
    if (!parsed) {
      return [];
    }
    if (!Array.isArray(parsed)) {
      throw new Error("Expected JSON string to be array");
    }
    return parsed.map(MerkleTree.bufferify);
  }
  /**
   * getLayers
   * @desc Returns multi-dimensional array of all layers of Merkle Tree, including leaves and root.
   * @return {Buffer[][]}
   * @example
   *```js
   *const layers = tree.getLayers()
   *```
   */
  getLayers() {
    return this.layers;
  }
  /**
   * getHexLayers
   * @desc Returns multi-dimensional array of all layers of Merkle Tree, including leaves and root as hex strings.
   * @return {String[][]}
   * @example
   *```js
   *const layers = tree.getHexLayers()
   *```
   */
  getHexLayers() {
    return this.layers.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc.push(item.map((layer) => this.bufferToHex(layer)));
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  }
  /**
   * getLayersFlat
   * @desc Returns single flat array of all layers of Merkle Tree, including leaves and root.
   * @return {Buffer[]}
   * @example
   *```js
   *const layers = tree.getLayersFlat()
   *```
   */
  getLayersFlat() {
    const layers = this.layers.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc.unshift(...item);
      } else {
        acc.unshift(item);
      }
      return acc;
    }, []);
    layers.unshift(buffer_1$1.Buffer.from([0]));
    return layers;
  }
  /**
   * getHexLayersFlat
   * @desc Returns single flat array of all layers of Merkle Tree, including leaves and root as hex string.
   * @return {String[]}
   * @example
   *```js
   *const layers = tree.getHexLayersFlat()
   *```
   */
  getHexLayersFlat() {
    return this.getLayersFlat().map((layer) => this.bufferToHex(layer));
  }
  /**
   * getLayerCount
   * @desc Returns the total number of layers.
   * @return {number}
   * @example
   *```js
   *const count = tree.getLayerCount()
   *```
   */
  getLayerCount() {
    return this.getLayers().length;
  }
  /**
   * getRoot
   * @desc Returns the Merkle root hash as a Buffer.
   * @return {Buffer}
   * @example
   *```js
   *const root = tree.getRoot()
   *```
   */
  getRoot() {
    if (this.layers.length === 0) {
      return buffer_1$1.Buffer.from([]);
    }
    return this.layers[this.layers.length - 1][0] || buffer_1$1.Buffer.from([]);
  }
  /**
   * getHexRoot
   * @desc Returns the Merkle root hash as a hex string.
   * @return {String}
   * @example
   *```js
   *const root = tree.getHexRoot()
   *```
   */
  getHexRoot() {
    return this.bufferToHex(this.getRoot());
  }
  /**
   * getProof
   * @desc Returns the proof for a target leaf.
   * @param {Buffer} leaf - Target leaf
   * @param {Number} [index] - Target leaf index in leaves array.
   * Use if there are leaves containing duplicate data in order to distinguish it.
   * @return {Object[]} - Array of objects containing a position property of type string
   * with values of 'left' or 'right' and a data property of type Buffer.
   * @example
   * ```js
   *const proof = tree.getProof(leaves[2])
   *```
   *
   * @example
   *```js
   *const leaves = ['a', 'b', 'a'].map(value => keccak(value))
   *const tree = new MerkleTree(leaves, keccak)
   *const proof = tree.getProof(leaves[2], 2)
   *```
   */
  getProof(leaf, index) {
    if (typeof leaf === "undefined") {
      throw new Error("leaf is required");
    }
    leaf = this.bufferify(leaf);
    const proof = [];
    if (!Number.isInteger(index)) {
      index = -1;
      for (let i = 0; i < this.leaves.length; i++) {
        if (buffer_1$1.Buffer.compare(leaf, this.leaves[i]) === 0) {
          index = i;
        }
      }
    }
    if (index <= -1) {
      return [];
    }
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      const isRightNode = index % 2;
      const pairIndex = isRightNode ? index - 1 : this.isBitcoinTree && index === layer.length - 1 && i < this.layers.length - 1 ? index : index + 1;
      if (pairIndex < layer.length) {
        proof.push({
          position: isRightNode ? "left" : "right",
          data: layer[pairIndex]
        });
      }
      index = index / 2 | 0;
    }
    return proof;
  }
  /**
   * getHexProof
   * @desc Returns the proof for a target leaf as hex strings.
   * @param {Buffer} leaf - Target leaf
   * @param {Number} [index] - Target leaf index in leaves array.
   * Use if there are leaves containing duplicate data in order to distinguish it.
   * @return {String[]} - Proof array as hex strings.
   * @example
   * ```js
   *const proof = tree.getHexProof(leaves[2])
   *```
   */
  getHexProof(leaf, index) {
    return this.getProof(leaf, index).map((item) => this.bufferToHex(item.data));
  }
  /**
   * getProofs
   * @desc Returns the proofs for all leaves.
   * @return {Object[]} - Array of objects containing a position property of type string
   * with values of 'left' or 'right' and a data property of type Buffer for all leaves.
   * @example
   * ```js
   *const proofs = tree.getProofs()
   *```
   *
   * @example
   *```js
   *const leaves = ['a', 'b', 'a'].map(value => keccak(value))
   *const tree = new MerkleTree(leaves, keccak)
   *const proofs = tree.getProofs()
   *```
   */
  getProofs() {
    const proof = [];
    const proofs = [];
    this.getProofsDFS(this.layers.length - 1, 0, proof, proofs);
    return proofs;
  }
  /**
   * getProofsDFS
   * @desc Get all proofs through single traverse
   * @param {Number} currentLayer - Current layer index in traverse.
   * @param {Number} index - Current tarvese node index in traverse.
   * @param {Object[]} proof - Proof chain for single leaf.
   * @param {Object[]} proofs - Proofs for all leaves
   * @example
   * ```js
   *const layers = tree.getLayers()
   *const index = 0;
   *let proof = [];
   *let proofs = [];
   *const proof = tree.getProofsDFS(layers, index, proof, proofs)
   *```
   */
  getProofsDFS(currentLayer, index, proof, proofs) {
    const isRightNode = index % 2;
    if (currentLayer === -1) {
      if (!isRightNode)
        proofs.push([...proof].reverse());
      return;
    }
    if (index >= this.layers[currentLayer].length)
      return;
    const layer = this.layers[currentLayer];
    const pairIndex = isRightNode ? index - 1 : index + 1;
    let pushed = false;
    if (pairIndex < layer.length) {
      pushed = true;
      proof.push({
        position: isRightNode ? "left" : "right",
        data: layer[pairIndex]
      });
    }
    const leftchildIndex = index * 2;
    const rightchildIndex = index * 2 + 1;
    this.getProofsDFS(currentLayer - 1, leftchildIndex, proof, proofs);
    this.getProofsDFS(currentLayer - 1, rightchildIndex, proof, proofs);
    if (pushed)
      proof.splice(proof.length - 1, 1);
  }
  /**
   * getHexProofs
   * @desc Returns the proofs for all leaves as hex strings.
   * @return {String[]} - Proofs array as hex strings.
   * @example
   * ```js
   *const proofs = tree.getHexProofs()
   *```
   */
  getHexProofs() {
    return this.getProofs().map((item) => this.bufferToHex(item.data));
  }
  /**
  * getPositionalHexProof
  * @desc Returns the proof for a target leaf as hex strings and the position in binary (left == 0).
  * @param {Buffer} leaf - Target leaf
  * @param {Number} [index] - Target leaf index in leaves array.
  * Use if there are leaves containing duplicate data in order to distinguish it.
  * @return {(string | number)[][]} - Proof array as hex strings. position at index 0
  * @example
  * ```js
  *const proof = tree.getPositionalHexProof(leaves[2])
  *```
  */
  getPositionalHexProof(leaf, index) {
    return this.getProof(leaf, index).map((item) => {
      return [
        item.position === "left" ? 0 : 1,
        this.bufferToHex(item.data)
      ];
    });
  }
  /**
   * marshalProof
   * @desc Returns proof array as JSON string.
   * @param {String[]|Object[]} proof - Merkle tree proof array
   * @return {String} - Proof array as JSON string.
   * @example
   * ```js
   *const jsonStr = MerkleTree.marshalProof(proof)
   *```
   */
  static marshalProof(proof) {
    const json = proof.map((item) => {
      if (typeof item === "string") {
        return item;
      }
      if (buffer_1$1.Buffer.isBuffer(item)) {
        return MerkleTree.bufferToHex(item);
      }
      return {
        position: item.position,
        data: MerkleTree.bufferToHex(item.data)
      };
    });
    return JSON.stringify(json, null, 2);
  }
  /**
   * unmarshalProof
   * @desc Returns the proof for a target leaf as a list of Buffers.
   * @param {String|Object} - Merkle tree leaves
   * @return {String|Object} - Marshalled proof
   * @example
   * ```js
   *const proof = MerkleTree.unmarshalProof(jsonStr)
   *```
   */
  static unmarshalProof(jsonStr) {
    let parsed = null;
    if (typeof jsonStr === "string") {
      parsed = JSON.parse(jsonStr);
    } else if (jsonStr instanceof Object) {
      parsed = jsonStr;
    } else {
      throw new Error("Expected type of string or object");
    }
    if (!parsed) {
      return [];
    }
    if (!Array.isArray(parsed)) {
      throw new Error("Expected JSON string to be array");
    }
    return parsed.map((item) => {
      if (typeof item === "string") {
        return MerkleTree.bufferify(item);
      } else if (item instanceof Object) {
        return {
          position: item.position,
          data: MerkleTree.bufferify(item.data)
        };
      } else {
        throw new Error("Expected item to be of type string or object");
      }
    });
  }
  static marshalTree(tree) {
    const root = tree.getHexRoot();
    const leaves = tree.leaves.map((leaf) => MerkleTree.bufferToHex(leaf));
    const layers = tree.getHexLayers();
    const options = tree.getOptions();
    return JSON.stringify({
      options,
      root,
      layers,
      leaves
    }, null, 2);
  }
  static unmarshalTree(jsonStr, hashFn = sha256_1$1.default, options = {}) {
    let parsed = null;
    if (typeof jsonStr === "string") {
      parsed = JSON.parse(jsonStr);
    } else if (jsonStr instanceof Object) {
      parsed = jsonStr;
    } else {
      throw new Error("Expected type of string or object");
    }
    if (!parsed) {
      throw new Error("could not parse json");
    }
    options = Object.assign({}, parsed.options || {}, options);
    return new MerkleTree(parsed.leaves, hashFn, options);
  }
  /**
   * getProofIndices
   * @desc Returns the proof indices for given tree indices.
   * @param {Number[]} treeIndices - Tree indices
   * @param {Number} depth - Tree depth; number of layers.
   * @return {Number[]} - Proof indices
   * @example
   * ```js
   *const proofIndices = tree.getProofIndices([2,5,6], 4)
   *console.log(proofIndices) // [ 23, 20, 19, 8, 3 ]
   *```
   */
  getProofIndices(treeIndices, depth) {
    const leafCount = Math.pow(2, depth);
    let maximalIndices = /* @__PURE__ */ new Set();
    for (const index of treeIndices) {
      let x = leafCount + index;
      while (x > 1) {
        maximalIndices.add(x ^ 1);
        x = x / 2 | 0;
      }
    }
    const a = treeIndices.map((index) => leafCount + index);
    const b = Array.from(maximalIndices).sort((a2, b2) => a2 - b2).reverse();
    maximalIndices = a.concat(b);
    const redundantIndices = /* @__PURE__ */ new Set();
    const proof = [];
    for (let index of maximalIndices) {
      if (!redundantIndices.has(index)) {
        proof.push(index);
        while (index > 1) {
          redundantIndices.add(index);
          if (!redundantIndices.has(index ^ 1))
            break;
          index = index / 2 | 0;
        }
      }
    }
    return proof.filter((index) => {
      return !treeIndices.includes(index - leafCount);
    });
  }
  getProofIndicesForUnevenTree(sortedLeafIndices, leavesCount) {
    const depth = Math.ceil(Math.log2(leavesCount));
    const unevenLayers = [];
    for (let index = 0; index < depth; index++) {
      const unevenLayer = leavesCount % 2 !== 0;
      if (unevenLayer) {
        unevenLayers.push({ index, leavesCount });
      }
      leavesCount = Math.ceil(leavesCount / 2);
    }
    const proofIndices = [];
    let layerNodes = sortedLeafIndices;
    for (let layerIndex = 0; layerIndex < depth; layerIndex++) {
      const siblingIndices = layerNodes.map((index) => {
        if (index % 2 === 0) {
          return index + 1;
        }
        return index - 1;
      });
      let proofNodeIndices = siblingIndices.filter((index) => !layerNodes.includes(index));
      const unevenLayer = unevenLayers.find(({ index }) => index === layerIndex);
      if (unevenLayer && layerNodes.includes(unevenLayer.leavesCount - 1)) {
        proofNodeIndices = proofNodeIndices.slice(0, -1);
      }
      proofIndices.push(proofNodeIndices);
      layerNodes = [...new Set(layerNodes.map((index) => {
        if (index % 2 === 0) {
          return index / 2;
        }
        if (index % 2 === 0) {
          return (index + 1) / 2;
        }
        return (index - 1) / 2;
      }))];
    }
    return proofIndices;
  }
  /**
   * getMultiProof
   * @desc Returns the multiproof for given tree indices.
   * @param {Number[]} indices - Tree indices.
   * @return {Buffer[]} - Multiproofs
   * @example
   * ```js
   *const indices = [2, 5, 6]
   *const proof = tree.getMultiProof(indices)
   *```
   */
  getMultiProof(tree, indices) {
    if (!this.complete) {
      console.warn("Warning: For correct multiProofs it's strongly recommended to set complete: true");
    }
    if (!indices) {
      indices = tree;
      tree = this.getLayersFlat();
    }
    const isUneven = this.isUnevenTree();
    if (isUneven) {
      if (indices.every(Number.isInteger)) {
        return this.getMultiProofForUnevenTree(indices);
      }
    }
    if (!indices.every(Number.isInteger)) {
      let els = indices;
      if (this.sortPairs) {
        els = els.sort(buffer_1$1.Buffer.compare);
      }
      let ids = els.map((el) => this.bufferIndexOf(this.leaves, el, this.sortLeaves)).sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
      if (!ids.every((idx) => idx !== -1)) {
        throw new Error("Element does not exist in Merkle tree");
      }
      const hashes = [];
      const proof = [];
      let nextIds = [];
      for (let i = 0; i < this.layers.length; i++) {
        const layer = this.layers[i];
        for (let j = 0; j < ids.length; j++) {
          const idx = ids[j];
          const pairElement = this.getPairNode(layer, idx);
          hashes.push(layer[idx]);
          if (pairElement) {
            proof.push(pairElement);
          }
          nextIds.push(idx / 2 | 0);
        }
        ids = nextIds.filter((value, i2, self2) => self2.indexOf(value) === i2);
        nextIds = [];
      }
      return proof.filter((value) => !hashes.includes(value));
    }
    return this.getProofIndices(indices, Math.log2(tree.length / 2 | 0)).map((index) => tree[index]);
  }
  getMultiProofForUnevenTree(tree, indices) {
    if (!indices) {
      indices = tree;
      tree = this.getLayers();
    }
    let proofHashes = [];
    let currentLayerIndices = indices;
    for (const treeLayer of tree) {
      const siblings = [];
      for (const index of currentLayerIndices) {
        if (index % 2 === 0) {
          const idx2 = index + 1;
          if (!currentLayerIndices.includes(idx2)) {
            if (treeLayer[idx2]) {
              siblings.push(treeLayer[idx2]);
              continue;
            }
          }
        }
        const idx = index - 1;
        if (!currentLayerIndices.includes(idx)) {
          if (treeLayer[idx]) {
            siblings.push(treeLayer[idx]);
            continue;
          }
        }
      }
      proofHashes = proofHashes.concat(siblings);
      const uniqueIndices = /* @__PURE__ */ new Set();
      for (const index of currentLayerIndices) {
        if (index % 2 === 0) {
          uniqueIndices.add(index / 2);
          continue;
        }
        if (index % 2 === 0) {
          uniqueIndices.add((index + 1) / 2);
          continue;
        }
        uniqueIndices.add((index - 1) / 2);
      }
      currentLayerIndices = Array.from(uniqueIndices);
    }
    return proofHashes;
  }
  /**
   * getHexMultiProof
   * @desc Returns the multiproof for given tree indices as hex strings.
   * @param {Number[]} indices - Tree indices.
   * @return {String[]} - Multiproofs as hex strings.
   * @example
   * ```js
   *const indices = [2, 5, 6]
   *const proof = tree.getHexMultiProof(indices)
   *```
   */
  getHexMultiProof(tree, indices) {
    return this.getMultiProof(tree, indices).map((x) => this.bufferToHex(x));
  }
  /**
   * getProofFlags
   * @desc Returns list of booleans where proofs should be used instead of hashing.
   * Proof flags are used in the Solidity multiproof verifiers.
   * @param {Number[]|Buffer[]} leaves
   * @param {Buffer[]} proofs
   * @return {Boolean[]} - Boolean flags
   * @example
   * ```js
   *const indices = [2, 5, 6]
   *const proof = tree.getMultiProof(indices)
   *const proofFlags = tree.getProofFlags(leaves, proof)
   *```
   */
  getProofFlags(leaves, proofs) {
    if (!Array.isArray(leaves) || leaves.length <= 0) {
      throw new Error("Invalid Inputs!");
    }
    let ids;
    if (leaves.every(Number.isInteger)) {
      ids = [...leaves].sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
    } else {
      ids = leaves.map((el) => this.bufferIndexOf(this.leaves, el, this.sortLeaves)).sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
    }
    if (!ids.every((idx) => idx !== -1)) {
      throw new Error("Element does not exist in Merkle tree");
    }
    const proofBufs = proofs.map((item) => this.bufferify(item));
    const tested = [];
    const flags = [];
    for (let index = 0; index < this.layers.length; index++) {
      const layer = this.layers[index];
      ids = ids.reduce((ids2, idx) => {
        const skipped = tested.includes(layer[idx]);
        if (!skipped) {
          const pairElement = this.getPairNode(layer, idx);
          const proofUsed = this.bufferArrayIncludes(proofBufs, layer[idx]) || this.bufferArrayIncludes(proofBufs, pairElement);
          pairElement && flags.push(!proofUsed);
          tested.push(layer[idx]);
          tested.push(pairElement);
        }
        ids2.push(idx / 2 | 0);
        return ids2;
      }, []);
    }
    return flags;
  }
  /**
   * verify
   * @desc Returns true if the proof path (array of hashes) can connect the target node
   * to the Merkle root.
   * @param {Object[]} proof - Array of proof objects that should connect
   * target node to Merkle root.
   * @param {Buffer} targetNode - Target node Buffer
   * @param {Buffer} root - Merkle root Buffer
   * @return {Boolean}
   * @example
   *```js
   *const root = tree.getRoot()
   *const proof = tree.getProof(leaves[2])
   *const verified = tree.verify(proof, leaves[2], root)
   *```
   */
  verify(proof, targetNode, root) {
    let hash = this.bufferify(targetNode);
    root = this.bufferify(root);
    if (!Array.isArray(proof) || !targetNode || !root) {
      return false;
    }
    for (let i = 0; i < proof.length; i++) {
      const node = proof[i];
      let data = null;
      let isLeftNode = null;
      if (typeof node === "string") {
        data = this.bufferify(node);
        isLeftNode = true;
      } else if (Array.isArray(node)) {
        isLeftNode = node[0] === 0;
        data = this.bufferify(node[1]);
      } else if (buffer_1$1.Buffer.isBuffer(node)) {
        data = node;
        isLeftNode = true;
      } else if (node instanceof Object) {
        data = this.bufferify(node.data);
        isLeftNode = node.position === "left";
      } else {
        throw new Error("Expected node to be of type string or object");
      }
      const buffers = [];
      if (this.isBitcoinTree) {
        buffers.push(buffer_reverse_1.default(hash));
        buffers[isLeftNode ? "unshift" : "push"](buffer_reverse_1.default(data));
        hash = this.hashFn(this.concatenator(buffers));
        hash = buffer_reverse_1.default(this.hashFn(hash));
      } else {
        if (this.sortPairs) {
          if (buffer_1$1.Buffer.compare(hash, data) === -1) {
            buffers.push(hash, data);
            hash = this.hashFn(this.concatenator(buffers));
          } else {
            buffers.push(data, hash);
            hash = this.hashFn(this.concatenator(buffers));
          }
        } else {
          buffers.push(hash);
          buffers[isLeftNode ? "unshift" : "push"](data);
          hash = this.hashFn(this.concatenator(buffers));
        }
      }
    }
    return buffer_1$1.Buffer.compare(hash, root) === 0;
  }
  /**
   * verifyMultiProof
   * @desc Returns true if the multiproofs can connect the leaves to the Merkle root.
   * @param {Buffer} root - Merkle tree root
   * @param {Number[]} proofIndices - Leave indices for proof
   * @param {Buffer[]} proofLeaves - Leaf values at indices for proof
   * @param {Number} leavesCount - Count of original leaves
   * @param {Buffer[]} proof - Multiproofs given indices
   * @return {Boolean}
   * @example
   *```js
   *const leaves = tree.getLeaves()
   *const root = tree.getRoot()
   *const treeFlat = tree.getLayersFlat()
   *const leavesCount = leaves.length
   *const proofIndices = [2, 5, 6]
   *const proofLeaves = proofIndices.map(i => leaves[i])
   *const proof = tree.getMultiProof(treeFlat, indices)
   *const verified = tree.verifyMultiProof(root, proofIndices, proofLeaves, leavesCount, proof)
   *```
   */
  verifyMultiProof(root, proofIndices, proofLeaves, leavesCount, proof) {
    const isUneven = this.isUnevenTree();
    if (isUneven) {
      return this.verifyMultiProofForUnevenTree(root, proofIndices, proofLeaves, leavesCount, proof);
    }
    const depth = Math.ceil(Math.log2(leavesCount));
    root = this.bufferify(root);
    proofLeaves = proofLeaves.map((leaf) => this.bufferify(leaf));
    proof = proof.map((leaf) => this.bufferify(leaf));
    const tree = {};
    for (const [index, leaf] of this.zip(proofIndices, proofLeaves)) {
      tree[Math.pow(2, depth) + index] = leaf;
    }
    for (const [index, proofitem] of this.zip(this.getProofIndices(proofIndices, depth), proof)) {
      tree[index] = proofitem;
    }
    let indexqueue = Object.keys(tree).map((value) => +value).sort((a, b) => a - b);
    indexqueue = indexqueue.slice(0, indexqueue.length - 1);
    let i = 0;
    while (i < indexqueue.length) {
      const index = indexqueue[i];
      if (index >= 2 && {}.hasOwnProperty.call(tree, index ^ 1)) {
        let pair = [tree[index - index % 2], tree[index - index % 2 + 1]];
        if (this.sortPairs) {
          pair = pair.sort(buffer_1$1.Buffer.compare);
        }
        const hash = pair[1] ? this.hashFn(this.concatenator(pair)) : pair[0];
        tree[index / 2 | 0] = hash;
        indexqueue.push(index / 2 | 0);
      }
      i += 1;
    }
    return !proofIndices.length || {}.hasOwnProperty.call(tree, 1) && tree[1].equals(root);
  }
  verifyMultiProofWithFlags(root, leaves, proofs, proofFlag) {
    root = this.bufferify(root);
    leaves = leaves.map(this.bufferify);
    proofs = proofs.map(this.bufferify);
    const leavesLen = leaves.length;
    const totalHashes = proofFlag.length;
    const hashes = [];
    let leafPos = 0;
    let hashPos = 0;
    let proofPos = 0;
    for (let i = 0; i < totalHashes; i++) {
      const bufA = proofFlag[i] ? leafPos < leavesLen ? leaves[leafPos++] : hashes[hashPos++] : proofs[proofPos++];
      const bufB = leafPos < leavesLen ? leaves[leafPos++] : hashes[hashPos++];
      const buffers = [bufA, bufB].sort(buffer_1$1.Buffer.compare);
      hashes[i] = this.hashFn(this.concatenator(buffers));
    }
    return buffer_1$1.Buffer.compare(hashes[totalHashes - 1], root) === 0;
  }
  verifyMultiProofForUnevenTree(root, indices, leaves, leavesCount, proof) {
    root = this.bufferify(root);
    leaves = leaves.map((leaf) => this.bufferify(leaf));
    proof = proof.map((leaf) => this.bufferify(leaf));
    const computedRoot = this.calculateRootForUnevenTree(indices, leaves, leavesCount, proof);
    return root.equals(computedRoot);
  }
  /**
   * getDepth
   * @desc Returns the tree depth (number of layers)
   * @return {Number}
   * @example
   *```js
   *const depth = tree.getDepth()
   *```
   */
  getDepth() {
    return this.getLayers().length - 1;
  }
  /**
   * getLayersAsObject
   * @desc Returns the layers as nested objects instead of an array.
   * @example
   *```js
   *const layersObj = tree.getLayersAsObject()
   *```
   */
  getLayersAsObject() {
    const layers = this.getLayers().map((layer) => layer.map((value) => this.bufferToHex(value, false)));
    const objs = [];
    for (let i = 0; i < layers.length; i++) {
      const arr = [];
      for (let j = 0; j < layers[i].length; j++) {
        const obj = { [layers[i][j]]: null };
        if (objs.length) {
          obj[layers[i][j]] = {};
          const a = objs.shift();
          const akey = Object.keys(a)[0];
          obj[layers[i][j]][akey] = a[akey];
          if (objs.length) {
            const b = objs.shift();
            const bkey = Object.keys(b)[0];
            obj[layers[i][j]][bkey] = b[bkey];
          }
        }
        arr.push(obj);
      }
      objs.push(...arr);
    }
    return objs[0];
  }
  /**
   * verify
   * @desc Returns true if the proof path (array of hashes) can connect the target node
   * to the Merkle root.
   * @param {Object[]} proof - Array of proof objects that should connect
   * target node to Merkle root.
   * @param {Buffer} targetNode - Target node Buffer
   * @param {Buffer} root - Merkle root Buffer
   * @param {Function} hashFunction - Hash function for hashing leaves and nodes
   * @param {Object} options - Additional options
   * @return {Boolean}
   * @example
   *```js
   *const verified = MerkleTree.verify(proof, leaf, root, sha256, options)
   *```
   */
  static verify(proof, targetNode, root, hashFn = sha256_1$1.default, options = {}) {
    const tree = new MerkleTree([], hashFn, options);
    return tree.verify(proof, targetNode, root);
  }
  /**
   * getMultiProof
   * @desc Returns the multiproof for given tree indices.
   * @param {Buffer[]} tree - Tree as a flat array.
   * @param {Number[]} indices - Tree indices.
   * @return {Buffer[]} - Multiproofs
   *
   *@example
   * ```js
   *const flatTree = tree.getLayersFlat()
   *const indices = [2, 5, 6]
   *const proof = MerkleTree.getMultiProof(flatTree, indices)
   *```
   */
  static getMultiProof(tree, indices) {
    const t = new MerkleTree([]);
    return t.getMultiProof(tree, indices);
  }
  /**
   * resetTree
   * @desc Resets the tree by clearing the leaves and layers.
   * @example
   *```js
   *tree.resetTree()
   *```
   */
  resetTree() {
    this.leaves = [];
    this.layers = [];
  }
  /**
   * getPairNode
   * @desc Returns the node at the index for given layer.
   * @param {Buffer[]} layer - Tree layer
   * @param {Number} index - Index at layer.
   * @return {Buffer} - Node
   *
   *@example
   * ```js
   *const node = tree.getPairNode(layer, index)
   *```
   */
  getPairNode(layer, idx) {
    const pairIdx = idx % 2 === 0 ? idx + 1 : idx - 1;
    if (pairIdx < layer.length) {
      return layer[pairIdx];
    } else {
      return null;
    }
  }
  /**
   * toTreeString
   * @desc Returns a visual representation of the merkle tree as a string.
   * @return {String}
   * @example
   *```js
   *console.log(tree.toTreeString())
   *```
   */
  toTreeString() {
    const obj = this.getLayersAsObject();
    return treeify_1$1.default.asTree(obj, true);
  }
  /**
   * toString
   * @desc Returns a visual representation of the merkle tree as a string.
   * @example
   *```js
   *console.log(tree.toString())
   *```
   */
  toString() {
    return this.toTreeString();
  }
  isUnevenTree(treeLayers) {
    const depth = (treeLayers === null || treeLayers === void 0 ? void 0 : treeLayers.length) || this.getDepth();
    return !this.isPowOf2(depth);
  }
  isPowOf2(v) {
    return v && !(v & v - 1);
  }
  isValidLeafIndex(idx) {
    return idx >= 0 && idx < this.getLeafCount();
  }
  calculateRootForUnevenTree(leafIndices, leafHashes, totalLeavesCount, proofHashes) {
    const leafTuples = this.zip(leafIndices, leafHashes).sort(([indexA], [indexB]) => indexA - indexB);
    const leafTupleIndices = leafTuples.map(([index]) => index);
    const proofIndices = this.getProofIndicesForUnevenTree(leafTupleIndices, totalLeavesCount);
    let nextSliceStart = 0;
    const proofTuplesByLayers = [];
    for (let i = 0; i < proofIndices.length; i++) {
      const indices = proofIndices[i];
      const sliceStart = nextSliceStart;
      nextSliceStart += indices.length;
      proofTuplesByLayers[i] = this.zip(indices, proofHashes.slice(sliceStart, nextSliceStart));
    }
    const tree = [leafTuples];
    for (let layerIndex = 0; layerIndex < proofTuplesByLayers.length; layerIndex++) {
      const currentLayer = proofTuplesByLayers[layerIndex].concat(tree[layerIndex]).sort(([indexA], [indexB]) => indexA - indexB).map(([, hash]) => hash);
      const s = tree[layerIndex].map(([layerIndex2]) => layerIndex2);
      const parentIndices = [...new Set(s.map((index) => {
        if (index % 2 === 0) {
          return index / 2;
        }
        if (index % 2 === 0) {
          return (index + 1) / 2;
        }
        return (index - 1) / 2;
      }))];
      const parentLayer = [];
      for (let i = 0; i < parentIndices.length; i++) {
        const parentNodeTreeIndex = parentIndices[i];
        const bufA = currentLayer[i * 2];
        const bufB = currentLayer[i * 2 + 1];
        const hash = bufB ? this.hashFn(this.concatenator([bufA, bufB])) : bufA;
        parentLayer.push([parentNodeTreeIndex, hash]);
      }
      tree.push(parentLayer);
    }
    return tree[tree.length - 1][0][1];
  }
}
MerkleTree$1.MerkleTree = MerkleTree;
if (typeof window !== "undefined") {
  window.MerkleTree = MerkleTree;
}
MerkleTree$1.default = MerkleTree;
var MerkleMountainRange$1 = {};
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(MerkleMountainRange$1, "__esModule", { value: true });
MerkleMountainRange$1.MerkleMountainRange = void 0;
const buffer_1 = buffer;
const sha256_1 = __importDefault$2(sha256Exports);
const Base_1$3 = __importDefault$2(Base$1);
class MerkleMountainRange extends Base_1$3.default {
  constructor(hashFn = sha256_1.default, leaves = [], hashLeafFn, peakBaggingFn, hashBranchFn) {
    super();
    this.root = buffer_1.Buffer.alloc(0);
    this.size = 0;
    this.width = 0;
    this.hashes = {};
    this.data = {};
    leaves = leaves.map(this.bufferify);
    this.hashFn = this.bufferifyFn(hashFn);
    this.hashLeafFn = hashLeafFn;
    this.peakBaggingFn = peakBaggingFn;
    this.hashBranchFn = hashBranchFn;
    for (const leaf of leaves) {
      this.append(leaf);
    }
  }
  /**
   * @desc This only stores the hashed value of the leaf.
   * If you need to retrieve the detail data later, use a map to store them.
   */
  append(data) {
    data = this.bufferify(data);
    const dataHash = this.hashFn(data);
    const dataHashHex = this.bufferToHex(dataHash);
    if (!this.data[dataHashHex] || this.bufferToHex(this.hashFn(this.data[dataHashHex])) !== dataHashHex) {
      this.data[dataHashHex] = data;
    }
    const leaf = this.hashLeaf(this.size + 1, dataHash);
    this.hashes[this.size + 1] = leaf;
    this.width += 1;
    const peakIndexes = this.getPeakIndexes(this.width);
    this.size = this.getSize(this.width);
    const peaks = [];
    for (let i = 0; i < peakIndexes.length; i++) {
      peaks[i] = this._getOrCreateNode(peakIndexes[i]);
    }
    this.root = this.peakBagging(this.width, peaks);
  }
  /**
   * @desc It returns the hash of a leaf node with hash(M | DATA )
   *       M is the index of the node.
   */
  hashLeaf(index, dataHash) {
    dataHash = this.bufferify(dataHash);
    if (this.hashLeafFn) {
      return this.bufferify(this.hashLeafFn(index, dataHash));
    }
    return this.hashFn(buffer_1.Buffer.concat([this.bufferify(index), dataHash]));
  }
  /**
   * @desc It returns the hash a parent node with hash(M | Left child | Right child)
   *       M is the index of the node.
   */
  hashBranch(index, left, right) {
    if (this.hashBranchFn) {
      return this.bufferify(this.hashBranchFn(index, left, right));
    }
    return this.hashFn(buffer_1.Buffer.concat([this.bufferify(index), this.bufferify(left), this.bufferify(right)]));
  }
  getPeaks() {
    const peakIndexes = this.getPeakIndexes(this.width);
    const peaks = [];
    for (let i = 0; i < peakIndexes.length; i++) {
      peaks[i] = this.hashes[peakIndexes[i]];
    }
    return peaks;
  }
  getLeafIndex(width) {
    if (width % 2 === 1) {
      return this.getSize(width);
    }
    return this.getSize(width - 1) + 1;
  }
  /**
   * @desc It returns all peaks of the smallest merkle mountain range tree which includes
   *       the given index(size).
   */
  getPeakIndexes(width) {
    const numPeaks = this.numOfPeaks(width);
    const peakIndexes = [];
    let count = 0;
    let size = 0;
    for (let i = 255; i > 0; i--) {
      if ((width & 1 << i - 1) !== 0) {
        size = size + (1 << i) - 1;
        peakIndexes[count++] = size;
        if (peakIndexes.length >= numPeaks) {
          break;
        }
      }
    }
    if (count !== peakIndexes.length) {
      throw new Error("invalid bit calculation");
    }
    return peakIndexes;
  }
  numOfPeaks(width) {
    let bits = width;
    let num = 0;
    while (bits > 0) {
      if (bits % 2 === 1) {
        num++;
      }
      bits = bits >> 1;
    }
    return num;
  }
  peakBagging(width, peaks) {
    const size = this.getSize(width);
    if (this.numOfPeaks(width) !== peaks.length) {
      throw new Error("received invalid number of peaks");
    }
    if (width === 0 && !peaks.length) {
      return buffer_1.Buffer.alloc(0);
    }
    if (this.peakBaggingFn) {
      return this.bufferify(this.peakBaggingFn(size, peaks));
    }
    return this.hashFn(buffer_1.Buffer.concat([this.bufferify(size), ...peaks.map(this.bufferify)]));
  }
  /**
   * @desc It returns the size of the tree.
   */
  getSize(width) {
    return (width << 1) - this.numOfPeaks(width);
  }
  /**
   * @desc It returns the root value of the tree.
   */
  getRoot() {
    return this.root;
  }
  getHexRoot() {
    return this.bufferToHex(this.getRoot());
  }
  /**
   * @dev It returns the hash value of a node for the given position. Note that the index starts from 1.
   */
  getNode(index) {
    return this.hashes[index];
  }
  /**
   * @desc It returns the height of the highest peak.
   */
  mountainHeight(size) {
    let height = 1;
    while (1 << height <= size + height) {
      height++;
    }
    return height - 1;
  }
  /**
   * @desc It returns the height of the index.
   */
  heightAt(index) {
    let reducedIndex = index;
    let peakIndex = 0;
    let height = 0;
    while (reducedIndex > peakIndex) {
      reducedIndex -= (1 << height) - 1;
      height = this.mountainHeight(reducedIndex);
      peakIndex = (1 << height) - 1;
    }
    return height - (peakIndex - reducedIndex);
  }
  /**
   * @desc It returns whether the index is the leaf node or not
   */
  isLeaf(index) {
    return this.heightAt(index) === 1;
  }
  /**
   * @desc It returns the children when it is a parent node.
   */
  getChildren(index) {
    const left = index - (1 << this.heightAt(index) - 1);
    const right = index - 1;
    if (left === right) {
      throw new Error("not a parent");
    }
    return [left, right];
  }
  /**
   * @desc It returns a merkle proof for a leaf. Note that the index starts from 1.
   */
  getMerkleProof(index) {
    if (index > this.size) {
      throw new Error("out of range");
    }
    if (!this.isLeaf(index)) {
      throw new Error("not a leaf");
    }
    const root = this.root;
    const width = this.width;
    const peaks = this.getPeakIndexes(this.width);
    const peakBagging = [];
    let cursor = 0;
    for (let i = 0; i < peaks.length; i++) {
      peakBagging[i] = this.hashes[peaks[i]];
      if (peaks[i] >= index && cursor === 0) {
        cursor = peaks[i];
      }
    }
    let left = 0;
    let right = 0;
    let height = this.heightAt(cursor);
    const siblings = [];
    while (cursor !== index) {
      height--;
      [left, right] = this.getChildren(cursor);
      cursor = index <= left ? left : right;
      siblings[height - 1] = this.hashes[index <= left ? right : left];
    }
    return {
      root,
      width,
      peakBagging,
      siblings
    };
  }
  /**
   * @desc It returns true when the given params verifies that the given value exists in the tree or reverts the transaction.
   */
  verify(root, width, index, value, peaks, siblings) {
    value = this.bufferify(value);
    const size = this.getSize(width);
    if (size < index) {
      throw new Error("index is out of range");
    }
    if (!root.equals(this.peakBagging(width, peaks))) {
      throw new Error("invalid root hash from the peaks");
    }
    let cursor = 0;
    let targetPeak;
    const peakIndexes = this.getPeakIndexes(width);
    for (let i = 0; i < peakIndexes.length; i++) {
      if (peakIndexes[i] >= index) {
        targetPeak = peaks[i];
        cursor = peakIndexes[i];
        break;
      }
    }
    if (!targetPeak) {
      throw new Error("target not found");
    }
    let height = siblings.length + 1;
    const path = new Array(height);
    let left = 0;
    let right = 0;
    while (height > 0) {
      path[--height] = cursor;
      if (cursor === index) {
        break;
      } else {
        [left, right] = this.getChildren(cursor);
        cursor = index > left ? right : left;
        continue;
      }
    }
    let node;
    while (height < path.length) {
      cursor = path[height];
      if (height === 0) {
        node = this.hashLeaf(cursor, this.hashFn(value));
      } else if (cursor - 1 === path[height - 1]) {
        node = this.hashBranch(cursor, siblings[height - 1], node);
      } else {
        node = this.hashBranch(cursor, node, siblings[height - 1]);
      }
      height++;
    }
    if (!node.equals(targetPeak)) {
      throw new Error("hashed peak is invalid");
    }
    return true;
  }
  peaksToPeakMap(width, peaks) {
    const peakMap = {};
    let bitIndex = 0;
    let peakRef = 0;
    let count = peaks.length;
    for (let height = 1; height <= 32; height++) {
      bitIndex = 32 - height;
      peakRef = 1 << height - 1;
      if ((width & peakRef) !== 0) {
        peakMap[bitIndex] = peaks[--count];
      } else {
        peakMap[bitIndex] = 0;
      }
    }
    if (count !== 0) {
      throw new Error("invalid number of peaks");
    }
    return peakMap;
  }
  peakMapToPeaks(width, peakMap) {
    const arrLength = this.numOfPeaks(width);
    const peaks = new Array(arrLength);
    let count = 0;
    for (let i = 0; i < 32; i++) {
      if (peakMap[i] !== 0) {
        peaks[count++] = peakMap[i];
      }
    }
    if (count !== arrLength) {
      throw new Error("invalid number of peaks");
    }
    return peaks;
  }
  peakUpdate(width, prevPeakMap, itemHash) {
    const nextPeakMap = {};
    const newWidth = width + 1;
    let cursorIndex = this.getLeafIndex(newWidth);
    let cursorNode = this.hashLeaf(cursorIndex, itemHash);
    let bitIndex = 0;
    let peakRef = 0;
    let prevPeakExist = false;
    let nextPeakExist = false;
    let obtained = false;
    for (let height = 1; height <= 32; height++) {
      bitIndex = 32 - height;
      if (obtained) {
        nextPeakMap[bitIndex] = prevPeakMap[bitIndex];
      } else {
        peakRef = 1 << height - 1;
        prevPeakExist = (width & peakRef) !== 0;
        nextPeakExist = (newWidth & peakRef) !== 0;
        cursorIndex++;
        if (prevPeakExist) {
          cursorNode = this.hashBranch(cursorIndex, prevPeakMap[bitIndex], cursorNode);
        }
        if (nextPeakExist) {
          if (prevPeakExist) {
            nextPeakMap[bitIndex] = prevPeakMap[bitIndex];
          } else {
            nextPeakMap[bitIndex] = cursorNode;
          }
          obtained = true;
        } else {
          nextPeakMap[bitIndex] = 0;
        }
      }
    }
    return nextPeakMap;
  }
  rollUp(root, width, peaks, itemHashes) {
    if (!root.equals(this.peakBagging(width, peaks))) {
      throw new Error("invalid root hash from the peaks");
    }
    let tmpWidth = width;
    let tmpPeakMap = this.peaksToPeakMap(width, peaks);
    for (let i = 0; i < itemHashes.length; i++) {
      tmpPeakMap = this.peakUpdate(tmpWidth, tmpPeakMap, itemHashes[i]);
      tmpWidth++;
    }
    return this.peakBagging(tmpWidth, this.peakMapToPeaks(tmpWidth, tmpPeakMap));
  }
  /**
   * @desc It returns the hash value of the node for the index.
   *      If the hash already exists it simply returns the stored value. On the other hand,
   *      it computes hashes recursively downward.
   *      Only appending an item calls this function.
   */
  _getOrCreateNode(index) {
    if (index > this.size) {
      throw new Error("out of range");
    }
    if (!this.hashes[index]) {
      const [leftIndex, rightIndex] = this.getChildren(index);
      const leftHash = this._getOrCreateNode(leftIndex);
      const rightHash = this._getOrCreateNode(rightIndex);
      this.hashes[index] = this.hashBranch(index, leftHash, rightHash);
    }
    return this.hashes[index];
  }
}
MerkleMountainRange$1.MerkleMountainRange = MerkleMountainRange;
if (typeof window !== "undefined") {
  window.MerkleMountainRange = MerkleMountainRange;
}
MerkleMountainRange$1.default = MerkleMountainRange;
var IncrementalMerkleTree$1 = {};
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(IncrementalMerkleTree$1, "__esModule", { value: true });
IncrementalMerkleTree$1.IncrementalMerkleTree = void 0;
const Base_1$2 = __importDefault$1(Base$1);
const treeify_1 = __importDefault$1(treeifyExports);
class IncrementalMerkleTree extends Base_1$2.default {
  constructor(hashFn, options) {
    super();
    this.hashFn = hashFn;
    if (options.depth) {
      this.depth = options.depth;
    }
    if (options.arity) {
      this.arity = options.arity;
    }
    if (this.depth < 1) {
      throw new Error("depth must be greater than 0");
    }
    if (this.arity < 1) {
      throw new Error("arity must be greater than 0");
    }
    const nodes = [];
    let zeroValue = options.zeroValue;
    this.zeroValue = zeroValue;
    this.zeroes = [];
    if (this.depth) {
      for (let i = 0; i < this.depth; i++) {
        this.zeroes.push(zeroValue);
        nodes[i] = [];
        zeroValue = this.hashFn(Array(this.arity).fill(zeroValue));
      }
    }
    this.nodes = nodes;
    this.root = zeroValue;
  }
  getRoot() {
    return this.root;
  }
  getHexRoot() {
    return this.bufferToHex(this.bufferify(this.getRoot()));
  }
  insert(leaf) {
    if (this.depth && this.arity) {
      if (this.nodes[0].length >= this.getMaxLeaves()) {
        throw new Error("tree is full");
      }
    }
    let node = leaf;
    let index = this.nodes[0].length;
    for (let level = 0; level < this.depth; level += 1) {
      const position = index % this.arity;
      const levelStartIndex = index - position;
      const levelEndIndex = levelStartIndex + this.arity;
      const children = [];
      this.nodes[level][index] = node;
      for (let i = levelStartIndex; i < levelEndIndex; i += 1) {
        if (i < this.nodes[level].length) {
          children.push(this.nodes[level][i]);
        } else {
          children.push(this.zeroes[level]);
        }
      }
      node = this.hashFn(children);
      index = Math.floor(index / this.arity);
    }
    this.root = node;
  }
  delete(index) {
    this.update(index, this.zeroValue);
  }
  update(index, newLeaf) {
    if (index < 0 || index >= this.nodes[0].length) {
      throw new Error("out of bounds");
    }
    let node = newLeaf;
    for (let level = 0; level < this.depth; level += 1) {
      const position = index % this.arity;
      const levelStartIndex = index - position;
      const levelEndIndex = levelStartIndex + this.arity;
      const children = [];
      this.nodes[level][index] = node;
      for (let i = levelStartIndex; i < levelEndIndex; i += 1) {
        if (i < this.nodes[level].length) {
          children.push(this.nodes[level][i]);
        } else {
          children.push(this.zeroes[level]);
        }
      }
      node = this.hashFn(children);
      index = Math.floor(index / this.arity);
    }
    this.root = node;
  }
  getDepth() {
    return this.depth;
  }
  getArity() {
    return this.arity;
  }
  getMaxLeaves() {
    return Math.pow(this.depth, this.arity);
  }
  indexOf(leaf) {
    return this.nodes[0].indexOf(leaf);
  }
  getLeaves() {
    const leaves = this.copyList(this.nodes[0]);
    const index = this.nodes[0].length;
    for (let i = index; i < this.getMaxLeaves(); i++) {
      leaves[i] = this.zeroValue;
    }
    return leaves;
  }
  copyList(list) {
    return list.map((x) => BigInt(x));
  }
  getLayers() {
    const layers = [];
    for (const list of this.nodes) {
      layers.push(this.copyList(list));
    }
    if (layers[0].length < this.getMaxLeaves()) {
      let index = layers[0].length;
      for (let i = index; i < this.getMaxLeaves(); i++) {
        layers[0][i] = this.zeroValue;
      }
      for (let level = 0; level < this.depth; level++) {
        const position = index % this.arity;
        const levelStartIndex = index - position;
        const levelEndIndex = levelStartIndex + this.arity;
        for (let i = levelStartIndex; i < levelEndIndex; i++) {
          if (i >= layers[level].length) {
            layers[level][i] = this.zeroes[level];
          }
        }
        index = Math.floor(index / this.arity);
      }
    }
    layers.push([this.root]);
    return layers;
  }
  getHexLayers() {
    return this.getLayers().reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc.push(item.map((layer) => this.bufferToHex(this.bufferify(layer))));
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  }
  getLayersAsObject() {
    const layers = this.getLayers().map((layer) => layer.map((value) => this.bufferToHex(this.bufferify(value), false)));
    const objs = [];
    for (let i = 0; i < layers.length; i++) {
      const arr = [];
      for (let j = 0; j < layers[i].length; j++) {
        const obj = { [layers[i][j]]: null };
        if (objs.length) {
          obj[layers[i][j]] = {};
          const a = objs.shift();
          const akey = Object.keys(a)[0];
          obj[layers[i][j]][akey] = a[akey];
          if (objs.length) {
            const b = objs.shift();
            const bkey = Object.keys(b)[0];
            obj[layers[i][j]][bkey] = b[bkey];
          }
        }
        arr.push(obj);
      }
      objs.push(...arr);
    }
    return objs[0];
  }
  computeRoot() {
    let node;
    let index = this.nodes[0].length;
    for (let level = 0; level < this.depth; level += 1) {
      const position = index % this.arity;
      const levelStartIndex = index - position;
      const levelEndIndex = levelStartIndex + this.arity;
      const children = [];
      for (let i = levelStartIndex; i < levelEndIndex; i += 1) {
        if (i < this.nodes[level].length) {
          children.push(this.nodes[level][i]);
        } else {
          children.push(this.zeroes[level]);
        }
      }
      node = this.hashFn(children);
      index = Math.floor(index / this.arity);
    }
    return node;
  }
  getProof(index) {
    if (index < 0 || index >= this.nodes[0].length) {
      throw new Error("The leaf does not exist in this tree");
    }
    const siblings = [];
    const pathIndices = [];
    const leafIndex = index;
    for (let level = 0; level < this.depth; level += 1) {
      const position = index % this.arity;
      const levelStartIndex = index - position;
      const levelEndIndex = levelStartIndex + this.arity;
      pathIndices[level] = position;
      siblings[level] = [];
      for (let i = levelStartIndex; i < levelEndIndex; i += 1) {
        if (i !== index) {
          if (i < this.nodes[level].length) {
            siblings[level].push(this.nodes[level][i]);
          } else {
            siblings[level].push(this.zeroes[level]);
          }
        }
      }
      index = Math.floor(index / this.arity);
    }
    return { root: this.root, leaf: this.nodes[0][leafIndex], pathIndices, siblings };
  }
  verify(proof) {
    let node = proof.leaf;
    for (let i = 0; i < proof.siblings.length; i += 1) {
      const children = proof.siblings[i].slice();
      children.splice(proof.pathIndices[i], 0, node);
      node = this.hashFn(children);
    }
    return proof.root === node;
  }
  toString() {
    return this.toTreeString();
  }
  toTreeString() {
    const obj = this.getLayersAsObject();
    return treeify_1.default.asTree(obj, true);
  }
}
IncrementalMerkleTree$1.IncrementalMerkleTree = IncrementalMerkleTree;
if (typeof window !== "undefined") {
  window.IncrementalMerkleTree = IncrementalMerkleTree;
}
IncrementalMerkleTree$1.default = IncrementalMerkleTree;
var MerkleSumTree$1 = {};
Object.defineProperty(MerkleSumTree$1, "__esModule", { value: true });
MerkleSumTree$1.MerkleSumTree = MerkleSumTree$1.ProofStep = MerkleSumTree$1.Leaf = MerkleSumTree$1.Bucket = void 0;
const Base_1$1 = Base$1;
class Bucket {
  constructor(size, hashed) {
    this.size = BigInt(size);
    this.hashed = hashed;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}
MerkleSumTree$1.Bucket = Bucket;
class Leaf {
  constructor(hashFn, rng, data) {
    this.hashFn = hashFn;
    this.rng = rng.map((x) => BigInt(x));
    this.data = data;
  }
  getBucket() {
    let hashed;
    if (this.data) {
      hashed = this.hashFn(this.data);
    } else {
      hashed = Buffer.alloc(32);
    }
    return new Bucket(BigInt(this.rng[1]) - BigInt(this.rng[0]), hashed);
  }
}
MerkleSumTree$1.Leaf = Leaf;
class ProofStep {
  constructor(bucket, right) {
    this.bucket = bucket;
    this.right = right;
  }
}
MerkleSumTree$1.ProofStep = ProofStep;
class MerkleSumTree extends Base_1$1.Base {
  constructor(leaves, hashFn) {
    super();
    this.leaves = leaves;
    this.hashFn = hashFn;
    MerkleSumTree.checkConsecutive(leaves);
    this.buckets = [];
    for (const l of leaves) {
      this.buckets.push(l.getBucket());
    }
    let buckets = [];
    for (const bucket of this.buckets) {
      buckets.push(bucket);
    }
    while (buckets.length !== 1) {
      const newBuckets = [];
      while (buckets.length) {
        if (buckets.length >= 2) {
          const b1 = buckets.shift();
          const b2 = buckets.shift();
          const size = b1.size + b2.size;
          const hashed = this.hashFn(Buffer.concat([this.sizeToBuffer(b1.size), this.bufferify(b1.hashed), this.sizeToBuffer(b2.size), this.bufferify(b2.hashed)]));
          const b = new Bucket(size, hashed);
          b2.parent = b;
          b1.parent = b2.parent;
          b1.right = b2;
          b2.left = b1;
          newBuckets.push(b);
        } else {
          newBuckets.push(buckets.shift());
        }
      }
      buckets = newBuckets;
    }
    this.root = buckets[0];
  }
  sizeToBuffer(size) {
    const buf = Buffer.alloc(8);
    const view = new DataView(buf.buffer);
    view.setBigInt64(0, BigInt(size), false);
    return buf;
  }
  static checkConsecutive(leaves) {
    let curr = BigInt(0);
    for (const leaf of leaves) {
      if (leaf.rng[0] !== curr) {
        throw new Error("leaf ranges are invalid");
      }
      curr = BigInt(leaf.rng[1]);
    }
  }
  // gets inclusion/exclusion proof of a bucket in the specified index
  getProof(index) {
    let curr = this.buckets[Number(index)];
    const proof = [];
    while (curr && curr.parent) {
      const right = !!curr.right;
      const bucket = curr.right ? curr.right : curr.left;
      curr = curr.parent;
      proof.push(new ProofStep(bucket, right));
    }
    return proof;
  }
  sum(arr) {
    let total = BigInt(0);
    for (const value of arr) {
      total += BigInt(value);
    }
    return total;
  }
  // validates the suppplied proof for a specified leaf according to the root bucket
  verifyProof(root, leaf, proof) {
    const rng = [this.sum(proof.filter((x) => !x.right).map((x) => x.bucket.size)), BigInt(root.size) - this.sum(proof.filter((x) => x.right).map((x) => x.bucket.size))];
    if (!(rng[0] === leaf.rng[0] && rng[1] === leaf.rng[1])) {
      return false;
    }
    let curr = leaf.getBucket();
    let hashed;
    for (const step of proof) {
      if (step.right) {
        hashed = this.hashFn(Buffer.concat([this.sizeToBuffer(curr.size), this.bufferify(curr.hashed), this.sizeToBuffer(step.bucket.size), this.bufferify(step.bucket.hashed)]));
      } else {
        hashed = this.hashFn(Buffer.concat([this.sizeToBuffer(step.bucket.size), this.bufferify(step.bucket.hashed), this.sizeToBuffer(curr.size), this.bufferify(curr.hashed)]));
      }
      curr = new Bucket(BigInt(curr.size) + BigInt(step.bucket.size), hashed);
    }
    return curr.size === root.size && curr.hashed.toString("hex") === root.hashed.toString("hex");
  }
}
MerkleSumTree$1.MerkleSumTree = MerkleSumTree;
if (typeof window !== "undefined") {
  window.MerkleSumTree = MerkleSumTree;
}
MerkleSumTree$1.default = MerkleSumTree;
var MerkleRadixTree$1 = {};
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(MerkleRadixTree$1, "__esModule", { value: true });
MerkleRadixTree$1.MerkleRadixTree = void 0;
const Base_1 = __importDefault(Base$1);
class MerkleRadixNode {
  constructor(key = "", value = null, hashFn) {
    this.key = key;
    this.value = value;
    this.children = /* @__PURE__ */ new Map();
    this.hashFn = hashFn;
    this.hash = this.computeHash();
  }
  computeHash() {
    let hash = this.hashFn("");
    hash = Buffer.concat([hash, Base_1.default.bufferify(this.key), this.value != null ? Base_1.default.bufferify(this.value) : Buffer.alloc(0)]);
    for (const child of this.children.values()) {
      hash = Buffer.concat([hash, child.hash]);
    }
    const result = this.hashFn(hash);
    return result;
  }
  updateHash() {
    this.hash = this.computeHash();
  }
}
class MerkleRadixTree extends Base_1.default {
  constructor(hashFn) {
    super();
    this.hashFn = this.bufferifyFn(hashFn);
    this.root = new MerkleRadixNode("", null, this.hashFn);
  }
  insert(key, value) {
    let node = this.root;
    let commonPrefixLength = 0;
    while (key.length > 0) {
      const child = [...node.children.values()].find((child2) => key.startsWith(child2.key));
      if (!child) {
        node.children.set(key, new MerkleRadixNode(key, value, this.hashFn));
        node.updateHash();
        return;
      }
      commonPrefixLength = this.commonPrefixLength(key, child.key);
      if (commonPrefixLength === child.key.length) {
        node = child;
        key = key.slice(commonPrefixLength);
      } else {
        const commonPrefix = key.slice(0, commonPrefixLength);
        const childSuffix = child.key.slice(commonPrefixLength);
        const newNode = new MerkleRadixNode(commonPrefix, null, this.hashFn);
        node.children.delete(child.key);
        node.children.set(commonPrefix, newNode);
        newNode.children.set(childSuffix, child);
        child.key = childSuffix;
        if (commonPrefixLength < key.length) {
          const suffix = key.slice(commonPrefixLength);
          newNode.children.set(suffix, new MerkleRadixNode(suffix, value, this.hashFn));
        } else {
          newNode.value = value;
        }
        node.updateHash();
        newNode.updateHash();
        return;
      }
    }
    node.value = value;
    node.updateHash();
  }
  lookup(key) {
    let node = this.root;
    while (key.length > 0) {
      const child = [...node.children.values()].find((child2) => key.startsWith(child2.key));
      if (!child) {
        return null;
      }
      const commonPrefixLength = this.commonPrefixLength(key, child.key);
      if (commonPrefixLength === child.key.length) {
        node = child;
        key = key.slice(commonPrefixLength);
      } else {
        return null;
      }
    }
    return node.value;
  }
  commonPrefixLength(str1, str2) {
    let length = 0;
    while (length < str1.length && length < str2.length && str1[length] === str2[length]) {
      length++;
    }
    return length;
  }
  generateProof(key) {
    let node = this.root;
    const proof = [];
    while (key.length > 0) {
      const siblings = [];
      for (const child2 of node.children.values()) {
        if (child2.key !== key) {
          siblings.push({
            key: child2.key,
            hash: child2.hash
          });
        }
      }
      proof.push({
        key: node.key,
        hash: node.hash,
        siblings
      });
      const child = [...node.children.values()].find((child2) => key.startsWith(child2.key));
      if (!child) {
        return null;
      }
      const commonPrefixLength = this.commonPrefixLength(key, child.key);
      if (commonPrefixLength === child.key.length) {
        node = child;
        key = key.slice(commonPrefixLength);
      } else {
        return null;
      }
    }
    proof.push({
      key: node.key,
      hash: node.hash,
      siblings: []
    });
    return proof;
  }
  verifyProof(proof, rootHash) {
    if (!proof || proof.length === 0) {
      return false;
    }
    let currentHash = proof[proof.length - 1].hash;
    for (let i = proof.length - 2; i >= 0; i--) {
      const item = proof[i];
      let concatenatedHash = Buffer.concat([this.hashFn(""), this.bufferify(item.key), currentHash]);
      for (const sibling of item.siblings) {
        concatenatedHash = Buffer.concat([concatenatedHash, sibling.hash]);
      }
      currentHash = this.hashFn(concatenatedHash);
    }
    return currentHash.equals(rootHash);
  }
}
MerkleRadixTree$1.MerkleRadixTree = MerkleRadixTree;
(function(exports) {
  var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.MerkleTree = void 0;
  const MerkleTree_1 = __importDefault2(MerkleTree$1);
  exports.MerkleTree = MerkleTree_1.default;
  var MerkleMountainRange_1 = MerkleMountainRange$1;
  Object.defineProperty(exports, "MerkleMountainRange", { enumerable: true, get: function() {
    return MerkleMountainRange_1.MerkleMountainRange;
  } });
  var IncrementalMerkleTree_1 = IncrementalMerkleTree$1;
  Object.defineProperty(exports, "IncrementalMerkleTree", { enumerable: true, get: function() {
    return IncrementalMerkleTree_1.IncrementalMerkleTree;
  } });
  var MerkleSumTree_1 = MerkleSumTree$1;
  Object.defineProperty(exports, "MerkleSumTree", { enumerable: true, get: function() {
    return MerkleSumTree_1.MerkleSumTree;
  } });
  var MerkleRadixTree_1 = MerkleRadixTree$1;
  Object.defineProperty(exports, "MerkleRadixTree", { enumerable: true, get: function() {
    return MerkleRadixTree_1.MerkleRadixTree;
  } });
  exports.default = MerkleTree_1.default;
})(dist);
const createMerkleTree = (recipients) => {
  const leaves = recipients.map((recipient) => {
    const leafData = `${recipient.address}:${recipient.amount}`;
    return SHA256(leafData);
  });
  const tree = new dist.MerkleTree(leaves, SHA256);
  const root = tree.getRoot().toString("hex");
  console.log("root", root);
  console.log("leaves", leaves);
  console.log("tree", tree);
  return { leaves, tree, root };
};
const verifyMerkleProof = (recipient, root, tree) => {
  const leafData = `${recipient.address}:${recipient.amount}`;
  const hashedData = SHA256(leafData);
  const proof = tree.getProof(hashedData);
  const isValid = tree.verify(proof, hashedData, Buffer.from(root, "hex"));
  console.log(
    "proof",
    proof.map((p) => p.data.toString("hex"))
  );
  console.log("isValid", isValid);
  return { isValid, proof: proof.map((p) => p.data.toString("hex")) };
};
const generateProof = (recipient, tree) => {
  const leafData = `${recipient.address}:${recipient.amount}`;
  const hashedData = SHA256(leafData);
  const proof = tree.getProof(hashedData);
  return proof.map((p) => `0x${p.data.toString("hex")}`);
};
export {
  TestContractFactory as T,
  TestContract as a,
  createMerkleTree as c,
  generateProof as g,
  verifyMerkleProof as v
};
