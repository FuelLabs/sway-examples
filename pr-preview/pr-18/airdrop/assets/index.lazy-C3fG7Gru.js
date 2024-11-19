import { c as createLazyFileRoute, j as jsxRuntimeExports, b as useNavigate, r as reactExports, B as Button } from "./index-OViWMWHH.js";
import { T as Text } from "./Text-DcZ5ZG-Q.js";
import { u as useGetAirdropData, G as Grid, H as HomeCard } from "./HomeCard-B3e90Ry2.js";
const Route = createLazyFileRoute("/airdrop/")({
  component: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Airdrop, {})
});
function Airdrop() {
  const { data: airdropData, isFetching, isError } = useGetAirdropData();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    console.log("airdropData: ", airdropData);
  }, [airdropData, isFetching]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    isFetching && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h4", sx: { paddingBottom: "28px", width: "full" }, children: "Fetching Airdrop ContractIds..." }),
    isError && /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h4", sx: { paddingBottom: "28px", width: "full" }, children: "Error fetching Airdrop ContractIds" }),
    !isFetching && !isError && airdropData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen overflow-y-auto items-center p-20 flex flex-col gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: () => navigate({
            // to:  VITE_BASE_URL + "/airdrop/create",
            to: "/airdrop/create"
          }),
          children: "Create New Airdrop"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h4", sx: { paddingBottom: "28px", width: "full" }, children: "Below are the open Airdrops" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, overflow: "auto", spacing: 3, children: airdropData == null ? void 0 : airdropData.map(({ contractId, recipients }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { className: "m-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        HomeCard,
        {
          title: "Airdrop " + (index + 1),
          href: `/airdrop/claim/${contractId}?recipient=${JSON.stringify(
            recipients
          )}`,
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { children: [
            contractId.toString().slice(0, 10),
            "....",
            contractId.toString().slice(-3)
          ] }, index)
        }
      ) })) })
    ] })
  ] });
}
export {
  Route
};
