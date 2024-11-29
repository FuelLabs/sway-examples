import { r as reactExports, e as _default, f as Provider, N as NODE_URL, W as Wallet, F as FAUCET_PRIVATE_KEY, c as createLazyFileRoute, h as useBrowserWallet, j as jsxRuntimeExports, C as CURRENT_ENVIRONMENT, E as Environments, B as Button, T as TESTNET_FAUCET_LINK, i as _t, k as bn } from "./index-BOmIvw9P.js";
import { I as Input } from "./input-BlzvuV_C.js";
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
  const { wallet, refreshWalletBalance } = useBrowserWallet();
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
    await (refreshWalletBalance == null ? void 0 : refreshWalletBalance());
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
