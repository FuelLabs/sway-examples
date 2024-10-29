import { j as jsxRuntimeExports, c as createLazyFileRoute, a as useActiveWallet, b as useNavigate, r as reactExports, _ as _default, B as Button, g as getTruncatedAddress } from "./index-GM8AQeMh.js";
import { u as useGetAirdropData, G as Grid, H as HomeCard } from "./HomeCard-DMZyQJUn.js";
import { T as Text } from "./Text-9DwczbZD.js";
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
  const { wallet } = useActiveWallet();
  const { data: airdropData, isFetching, isError } = useGetAirdropData();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    console.log("airdropData: ", airdropData);
  }, [airdropData, isFetching]);
  _default(async () => {
  }, [wallet]);
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
              // to: VITE_BASE_URL + "/airdrop/create",
            }),
            children: "Create your own Airdrop"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h6", sx: { paddingBottom: "28px", width: "full" }, children: "Below are the open Airdrops" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { container: true, overflow: "auto", spacing: 3, children: airdropData == null ? void 0 : airdropData.map(({ contractId, recipients }, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(Grid, { className: "m-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          HomeCard,
          {
            title: "Airdrop " + (index + 1),
            href: `/airdrop/claim/${contractId}?recipient=${JSON.stringify(
              recipients
            )}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: getTruncatedAddress(contractId, 6) }, index)
          }
        ) })) })
      ] })
    ] })
  ] });
}
export {
  Route
};
