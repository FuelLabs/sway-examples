import { d as createLucideIcon, L as or, M as useMutation, S as Src20Factory, J as _t, O as Src20$1, K as bn, c as createLazyFileRoute, j as jsxRuntimeExports, r as reactExports, Q as NumberCoder, a as useNavigate, T as Text, I as Input, B as Button, g as getTruncatedAddress, R as copyToClipboard, U as getMintedAssetId } from "./index-B9zjkOUl.js";
import { C as Card } from "./card-CdasTWhi.js";
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Copy = createLucideIcon("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
const useDeploySrc20 = () => {
  const { wallet } = or();
  const mutation = useMutation({
    mutationFn: async (args) => {
      if (!wallet) {
        throw new Error("Wallet not connected!");
      }
      const { options } = args;
      const result = await Src20Factory.deploy(wallet, options);
      const { contract, transactionResult } = await result.waitForResult();
      return { contract, transactionResult };
    },
    onSuccess: () => {
      _t.success(`SRC20 Contract deployed successfully!`);
    },
    onError: (err) => {
      console.error("Error deploying contract:", err);
      _t.error(err.message);
    }
  });
  return mutation;
};
const useMint = () => {
  const { wallet } = or();
  const mutation = useMutation({
    mutationFn: async (args) => {
      if (!wallet) {
        throw new Error("Wallet not connected!");
      }
      const { amount, contractId, subId } = args;
      const recipient = { Address: { bits: wallet.address.toB256() } };
      const contract = new Src20$1(contractId, wallet);
      const result = await contract.functions.mint(recipient, subId, bn(amount)).call();
      const transactionResult = await result.waitForResult();
      return transactionResult;
    },
    onSuccess: () => {
      _t.success("Successfully minted Src20!");
    },
    onError: (err) => {
      console.error("Error minting Src20:", err);
      _t.error(err.message);
    }
  });
  return mutation;
};
const useInitializeOwner = () => {
  const { wallet } = or();
  const mutation = useMutation({
    mutationFn: async (args) => {
      if (!wallet) {
        throw new Error("Wallet not connected!");
      }
      const owner = { Address: { bits: wallet.address.toB256() } };
      const contract = new Src20$1(args.contractId, wallet);
      const result = await contract.functions.constructor(owner).call();
      const transactionResult = await result.waitForResult();
      return transactionResult;
    },
    onSuccess: () => {
      _t.success("Owner initialized successfully!");
    },
    onError: (err) => {
      console.error("Error initializing owner:", err);
      _t.error(err.message);
    }
  });
  return mutation;
};
const Route = createLazyFileRoute("/airdrop/deploy-src20")({
  component: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Src20, {})
});
const Src20 = () => {
  const [tokenName, setTokenName] = reactExports.useState("");
  const [symbol, setSymbol] = reactExports.useState("");
  const [mintAmount, setMintAmount] = reactExports.useState("");
  const {
    mutate: deploySrc20,
    error: deploySrc20Error,
    status: deploySrc20Status,
    isPending: deploySrc20IsPending,
    isSuccess: deploySrc20IsSuccess,
    data: deploySrc20Data
  } = useDeploySrc20();
  const { mutate: mint, isPending: isMinting } = useMint();
  const {
    mutate: initializeOwner,
    isPending: isInitializing,
    isSuccess: isInitialized
  } = useInitializeOwner();
  const u8Coder = new NumberCoder("u8");
  const navigate = useNavigate();
  const DEFAULT_SUB_ID = "0x0000000000000000000000000000000000000000000000000000000000000000";
  const handleMintSuccess = async () => {
    if (deploySrc20Data == null ? void 0 : deploySrc20Data.contract.id.toB256()) {
      const mintedAssetId = getMintedAssetId(
        deploySrc20Data == null ? void 0 : deploySrc20Data.contract.id.toB256(),
        DEFAULT_SUB_ID
      );
      navigate({
        to: "/airdrop/create",
        search: {
          deployedTokenId: mintedAssetId
        }
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full flex-col gap-6 items-center", children: !deploySrc20IsSuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h4", children: "Deploy an SRC20 token" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center w-max ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: "w-full text-center", children: "Enter Token Name:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          maxLength: 7,
          value: tokenName,
          onChange: (e) => setTokenName(e.target.value),
          placeholder: "Fuel"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center w-max ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: "w-full text-center", children: "Enter Symbol:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          maxLength: 5,
          value: symbol,
          onChange: (e) => setSymbol(e.target.value),
          placeholder: "Fuel"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        variant: "secondary",
        disabled: deploySrc20IsPending || !tokenName.trim() || !symbol.trim() || tokenName.length > 7 || symbol.length > 5,
        onClick: () => {
          if (!tokenName.trim() || !symbol.trim()) {
            return;
          }
          const configurableConstants = {
            DECIMALS: u8Coder.encode(9),
            NAME: tokenName.trim(),
            SYMBOL: symbol.trim()
          };
          deploySrc20({
            options: {
              configurableConstants
            }
          });
        },
        children: deploySrc20IsPending ? "Deploying..." : "Deploy SRC20 contract"
      }
    )
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "w-full max-w-md p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h4", className: "text-center", children: "Token Deployed Successfully!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { className: "text-sm text-muted-foreground", children: [
          "Contract ID:",
          " ",
          getTruncatedAddress(
            (deploySrc20Data == null ? void 0 : deploySrc20Data.contract.id.toB256()) || ""
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => copyToClipboard((deploySrc20Data == null ? void 0 : deploySrc20Data.contract.id.toB256()) || ""),
            className: "p-1 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 rounded-md transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-4 w-4" })
          }
        )
      ] })
    ] }),
    !isInitialized ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: "text-sm text-muted-foreground text-center", children: "Initialize the contract to start minting tokens" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "secondary",
          disabled: isInitializing,
          onClick: () => {
            if (!(deploySrc20Data == null ? void 0 : deploySrc20Data.contract.id.toB256())) return;
            initializeOwner({
              contractId: deploySrc20Data.contract.id.toB256()
            });
          },
          children: isInitializing ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Initializing..." }) }) : "Initialize Contract"
        }
      )
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h5", children: "Mint Tokens" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: "text-sm", children: "Amount to mint:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: "number",
            value: mintAmount,
            onChange: (e) => setMintAmount(e.target.value),
            placeholder: "Enter amount",
            min: "0"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          variant: "secondary",
          disabled: isMinting || !mintAmount || Number(mintAmount) <= 0,
          onClick: () => {
            if (!(deploySrc20Data == null ? void 0 : deploySrc20Data.contract.id.toB256())) return;
            mint(
              {
                contractId: deploySrc20Data.contract.id.toB256(),
                amount: Number(mintAmount) * 10 ** 9,
                // 9 decimals
                subId: DEFAULT_SUB_ID
              },
              {
                onSuccess: handleMintSuccess
              }
            );
          },
          children: isMinting ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Minting..." }) }) : "Mint Tokens"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex text-center flex-col gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h5", className: "text-muted-foreground", children: "Token Details:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm flex flex-col gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Name: ",
          tokenName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "Symbol: ",
          symbol
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Decimals: 9" })
      ] })
    ] })
  ] }) }) });
};
export {
  Route
};
