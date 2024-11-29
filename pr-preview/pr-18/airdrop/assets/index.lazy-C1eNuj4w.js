import { c as createLazyFileRoute, u as useActiveWallet, a as useNavigate, j as jsxRuntimeExports, T as Text, B as Button, b as checkEligibility, g as getTruncatedAddress } from "./index-DzmYrdPe.js";
import { u as useGetAirdropData, F as FuelLogo, G as Grid, H as HomeCard } from "./HomeCard-CVQbW0L3.js";
const Route = createLazyFileRoute("/")({
  component: Index
});
function Index() {
  const { wallet } = useActiveWallet();
  const { data: airdropData, isFetching, isError } = useGetAirdropData();
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FuelLogo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold ali", children: "Fuel Airdrop" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-400 text-center", children: [
      "These are all the airdrops that have been created.",
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Check your eligibility and claim them by visiting each airdrop." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      isFetching && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h6", sx: { paddingBottom: "28px", width: "full" }, children: "Fetching Airdrop ContractIds..." }),
      isError && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h6", sx: { paddingBottom: "28px", width: "full" }, children: "Error fetching Airdrop ContractIds" }),
      !isFetching && !isError && airdropData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen overflow-y-auto items-center p-20 pt-0 flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: () => navigate({
              to: "/airdrop/create"
            }),
            children: "Create new Airdrop"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h6", sx: { paddingBottom: "28px", width: "full" }, children: "Below are the open Airdrops" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, overflow: "auto", spacing: 3, children: airdropData == null ? void 0 : airdropData.map(({ contractId, recipients }, index) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { className: "m-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            HomeCard,
            {
              title: "Airdrop " + (index + 1),
              href: `/airdrop/claim/${contractId}?recipient=${JSON.stringify(
                recipients
              )}`,
              isEligible: checkEligibility(recipients, wallet),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: getTruncatedAddress(contractId) }, index)
            }
          ) });
        }) })
      ] })
    ] })
  ] });
}
export {
  Route
};
