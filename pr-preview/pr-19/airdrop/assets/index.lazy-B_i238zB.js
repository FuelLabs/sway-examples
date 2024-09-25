import { j as jsxRuntimeExports, c as createLazyFileRoute, a as useActiveWallet, r as reactExports, d as _default, L as Link, D as DOCS_URL, B as Button, _ as _t, F as FAUCET_LINK } from "./index-Dxj79x6i.js";
const FuelLogo = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 344 344",
      className: "PJLV PJLV-iiWunJk-css fuel_Logo w-[50px]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "25", y: "37", width: "292", height: "284", fill: "black" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M22.8744 0C10.2181 0 0 10.218 0 22.8744V344H284.626C294.246 344 303.497 340.179 310.308 333.368L333.368 310.308C340.179 303.497 344 294.246 344 284.626V0H22.8744ZM224.608 44.231L112.718 156.121C109.956 158.882 106.182 160.447 102.27 160.447C96.5631 160.447 91.3157 157.134 88.8763 151.978L45.5194 60.3402C41.9756 52.8383 47.4525 44.231 55.7374 44.231H224.608ZM44.231 299.769V190.916C44.231 185.117 48.9257 180.422 54.7249 180.422H163.577L44.231 299.769ZM172.598 160.447H136.559L244.998 52.0097C249.968 47.0382 256.734 44.231 263.776 44.231H299.814L191.377 152.668C186.407 157.64 179.64 160.447 172.598 160.447Z",
            fill: "#00F58C"
          }
        )
      ]
    }
  );
};
const Route = createLazyFileRoute("/")({
  component: Index
});
function Index() {
  const { wallet, walletBalance, refreshWalletBalance } = useActiveWallet();
  const [contract] = reactExports.useState();
  const [counter] = reactExports.useState();
  _default(async () => {
  }, [wallet]);
  const onIncrementPressed = async () => {
    if (!contract) {
      return _t.error("Contract not loaded");
    }
    if (walletBalance == null ? void 0 : walletBalance.eq(0)) {
      return _t.error(
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Your wallet does not have enough funds. Please top it up using the",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: FAUCET_LINK, target: "_blank", children: "faucet." })
        ] })
      );
    }
    await (refreshWalletBalance == null ? void 0 : refreshWalletBalance());
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FuelLogo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold ali", children: "Welcome to Fuel" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400", children: [
      "Get started by editing ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "sway-programs/contract/main.sw" }),
      " or",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "src/pages/index.tsx" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400", children: [
      "This template uses the new",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: `${DOCS_URL}/docs/fuels-ts/fuels/#fuels-cli`, children: "Fuels CLI" }),
      " ",
      "to enable type-safe hot-reloading for your Sway programs."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold", children: "Counter" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": "counter", className: "text-gray-400 text-6xl", children: counter }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: onIncrementPressed, className: "mt-6", children: "Increment Counter" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/predicate", className: "mt-4", children: "Predicate Example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: "/script", className: "mt-4", children: "Script Example" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { href: DOCS_URL, target: "_blank", className: "mt-12", children: "Fuel Docs" })
  ] });
}
export {
  Route
};
