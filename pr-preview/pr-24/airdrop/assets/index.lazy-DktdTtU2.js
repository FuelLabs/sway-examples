import { c as createLazyFileRoute, u as useActiveWallet, a as useNavigate, j as jsxRuntimeExports, T as Text, B as Button, b as checkEligibility, g as getTruncatedAddress } from "./index-DAnpaQVx.js";
import { u as useGetAirdropData, F as FuelLogo, G as Grid, B as Badge, A as ArrowRight } from "./badge-aaO-kPSo.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardFooter } from "./card-DBR5eIvQ.js";
const Route = createLazyFileRoute("/")({
  component: Index
});
function Index() {
  const { wallet } = useActiveWallet();
  const { data: airdropData, isFetching, isError } = useGetAirdropData();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FuelLogo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-white", children: "Fuel Airdrop" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg mb-2", children: "These are all the airdrops that have been created." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-lg", children: "Check your eligibility and claim them by visiting each airdrop." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
      isFetching && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 animate-pulse", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h6", className: "text-gray-400", children: "Fetching Airdrop ContractIds..." }) }),
      isError && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h6", className: "text-red-500", children: "Error fetching Airdrop ContractIds" }) }),
      !isFetching && !isError && airdropData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => navigate({ to: "/airdrop/create" }),
            className: "bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all",
            children: "Create new Airdrop"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h6", className: "text-xl font-semibold text-gray-200", children: "Available Airdrops" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, spacing: 4, className: "justify-center", children: airdropData == null ? void 0 : airdropData.map(({ contractId, recipients }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Card,
          {
            className: "hover:border-green-500/50 transition-all duration-200 group cursor-pointer",
            onClick: () => navigate({
              to: `/airdrop/claim/${contractId}?recipient=${JSON.stringify(
                recipients
              )}`
            }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-xl font-semibold", children: [
                  "Airdrop ",
                  index + 1
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: checkEligibility(recipients, wallet) ? "default" : "destructive", children: checkEligibility(recipients, wallet) ? "Eligible" : "Not Eligible" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { className: "text-gray-400 font-mono", children: getTruncatedAddress(contractId) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardFooter, { className: "flex justify-end text-gray-400 group-hover:text-green-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 transition-transform group-hover:translate-x-1" }) })
            ]
          }
        ) }, contractId)) })
      ] })
    ] })
  ] });
}
export {
  Route
};
