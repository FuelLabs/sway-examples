import { r as reactExports, _ as _default, P as Provider, N as NODE_URL, W as Wallet, F as FAUCET_PRIVATE_KEY, c as createLazyFileRoute, u as useBrowserWallet, j as jsxRuntimeExports, C as CURRENT_ENVIRONMENT, E as Environments, T as TESTNET_FAUCET_LINK } from "./index-BD1p-hYR.js";
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
const Route = createLazyFileRoute("/faucet")({
  component: Index
});
function Index() {
  useFaucet();
  const { wallet, refreshWalletBalance } = useBrowserWallet();
  const [receiverAddress, setReceiverAddress] = reactExports.useState("");
  reactExports.useState("5");
  reactExports.useEffect(() => {
    if (wallet) {
      setReceiverAddress(wallet.address.toB256());
    }
  }, [wallet]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    CURRENT_ENVIRONMENT === Environments.LOCAL,
    /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
