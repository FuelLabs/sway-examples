import { c as createLazyFileRoute, u as useFaucet, a as useActiveWallet, r as reactExports, j as jsxRuntimeExports, C as CURRENT_ENVIRONMENT, E as Environments, T as TESTNET_FAUCET_LINK } from "./index-CHHLXHD_.js";
const Route = createLazyFileRoute("/faucet")({
  component: Index
});
function Index() {
  useFaucet();
  const { wallet, refreshWalletBalance } = useActiveWallet();
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
