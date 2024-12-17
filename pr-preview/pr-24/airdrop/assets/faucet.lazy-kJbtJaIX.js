import { A as getAugmentedNamespace, C as tslib_es6, r as reactExports, D as Provider, N as NODE_URL, W as Wallet, F as FAUCET_PRIVATE_KEY, c as createLazyFileRoute, u as useActiveWallet, j as jsxRuntimeExports, E as CURRENT_ENVIRONMENT, G as Environments, I as Input, B as Button, H as TESTNET_FAUCET_LINK, J as _t, K as bn } from "./index-CJv696qc.js";
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(tslib_es6);
var useAsync$1 = {};
var useAsyncFn = {};
var useMountedState = {};
var hasRequiredUseMountedState;
function requireUseMountedState() {
  if (hasRequiredUseMountedState) return useMountedState;
  hasRequiredUseMountedState = 1;
  Object.defineProperty(useMountedState, "__esModule", { value: true });
  var react_12 = reactExports;
  function useMountedState$1() {
    var mountedRef = react_12.useRef(false);
    var get = react_12.useCallback(function() {
      return mountedRef.current;
    }, []);
    react_12.useEffect(function() {
      mountedRef.current = true;
      return function() {
        mountedRef.current = false;
      };
    }, []);
    return get;
  }
  useMountedState.default = useMountedState$1;
  return useMountedState;
}
var hasRequiredUseAsyncFn;
function requireUseAsyncFn() {
  if (hasRequiredUseAsyncFn) return useAsyncFn;
  hasRequiredUseAsyncFn = 1;
  Object.defineProperty(useAsyncFn, "__esModule", { value: true });
  var tslib_12 = require$$0;
  var react_12 = reactExports;
  var useMountedState_1 = tslib_12.__importDefault(requireUseMountedState());
  function useAsyncFn$1(fn, deps, initialState) {
    if (deps === void 0) {
      deps = [];
    }
    if (initialState === void 0) {
      initialState = { loading: false };
    }
    var lastCallId = react_12.useRef(0);
    var isMounted = useMountedState_1.default();
    var _a = react_12.useState(initialState), state = _a[0], set = _a[1];
    var callback = react_12.useCallback(function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var callId = ++lastCallId.current;
      if (!state.loading) {
        set(function(prevState) {
          return tslib_12.__assign(tslib_12.__assign({}, prevState), { loading: true });
        });
      }
      return fn.apply(void 0, args).then(function(value) {
        isMounted() && callId === lastCallId.current && set({ value, loading: false });
        return value;
      }, function(error) {
        isMounted() && callId === lastCallId.current && set({ error, loading: false });
        return error;
      });
    }, deps);
    return [state, callback];
  }
  useAsyncFn.default = useAsyncFn$1;
  return useAsyncFn;
}
Object.defineProperty(useAsync$1, "__esModule", { value: true });
var tslib_1 = require$$0;
var react_1 = reactExports;
var useAsyncFn_1 = tslib_1.__importDefault(requireUseAsyncFn());
function useAsync(fn, deps) {
  if (deps === void 0) {
    deps = [];
  }
  var _a = useAsyncFn_1.default(fn, deps, {
    loading: true
  }), state = _a[0], callback = _a[1];
  react_1.useEffect(function() {
    callback();
  }, [callback]);
  return state;
}
var _default = useAsync$1.default = useAsync;
const useFaucet = () => {
  const [faucetWallet, setFaucetWallet] = reactExports.useState();
  _default(async () => {
    if (!faucetWallet) {
      const provider = await Provider.create(NODE_URL);
      const wallet = Wallet.fromPrivateKey(FAUCET_PRIVATE_KEY, provider);
      setFaucetWallet(wallet);
    }
  }, [faucetWallet]);
  return {
    faucetWallet
  };
};
const Route = createLazyFileRoute("/airdrop/faucet")({
  component: Index
});
function Index() {
  const { faucetWallet } = useFaucet();
  const { wallet, refetchBalance } = useActiveWallet();
  const [receiverAddress, setReceiverAddress] = reactExports.useState("");
  const [amountToSend, setAmountToSend] = reactExports.useState("5");
  reactExports.useEffect(() => {
    if (wallet) {
      setReceiverAddress(wallet.address.toB256());
    }
  }, [wallet]);
  const sendFunds = async () => {
    if (!faucetWallet) {
      return _t.error("Faucet wallet not found.");
    }
    if (!receiverAddress) {
      return _t.error("Receiver address not set");
    }
    if (!amountToSend) {
      return _t.error("Amount cannot be empty");
    }
    const tx = await faucetWallet.transfer(
      receiverAddress,
      bn.parseUnits(amountToSend.toString())
    );
    await tx.waitForResult();
    _t.success("Funds sent!");
    await (refetchBalance == null ? void 0 : refetchBalance());
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    CURRENT_ENVIRONMENT === Environments.LOCAL && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: "Local Faucet" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "receiver-address-input", className: "text-gray-400", children: "Receiving address:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "w-full",
            value: receiverAddress,
            onChange: (e) => setReceiverAddress(e.target.value),
            placeholder: "0x...",
            id: "receiver-address-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "amount-input", className: "text-gray-400", children: "Amount (ETH):" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            className: "w-full",
            value: amountToSend,
            onChange: (e) => setAmountToSend(e.target.value),
            placeholder: "5",
            type: "number",
            id: "amount-input"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: sendFunds, children: "Send Funds" })
    ] }),
    CURRENT_ENVIRONMENT === Environments.TESTNET && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        src: wallet ? `${TESTNET_FAUCET_LINK}?address=${wallet.address.toB256()}` : TESTNET_FAUCET_LINK,
        title: "faucet",
        className: "w-full h-screen overflow-scroll"
      }
    ) })
  ] });
}
export {
  Route
};
