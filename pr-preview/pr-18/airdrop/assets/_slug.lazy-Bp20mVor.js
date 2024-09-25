import { v as Cp, w as useMutation, _ as _t, q as useQuery, a3 as Provider, a4 as NODE_URL, c as createLazyFileRoute, j as jsxRuntimeExports, a5 as useParams, r as reactExports, B as Button } from "./index-DdTn8W7A.js";
import { a as TestContract, c as createMerkleTree, g as generateProof } from "./merkleTrees-Czdl9fXN.js";
import { T as Text } from "./Text-Dfb1nf1_.js";
import "./index-DnUrbDxC.js";
function formatUnits(value, decimals) {
  let display = value.toString();
  const negative = display.startsWith("-");
  if (negative)
    display = display.slice(1);
  display = display.padStart(decimals, "0");
  let [integer, fraction] = [
    display.slice(0, display.length - decimals),
    display.slice(display.length - decimals)
  ];
  fraction = fraction.replace(/(0+)$/, "");
  return `${negative ? "-" : ""}${integer || "0"}${fraction ? `.${fraction}` : ""}`;
}
const useClaimAirdrop = () => {
  const { wallet } = Cp();
  const mutation = useMutation({
    mutationFn: async ({
      contractId,
      amount,
      account,
      treeIndex,
      proof,
      recipient
    }) => {
      if (!wallet) {
        throw new Error("Wallet not connected!");
      }
      const contract = new TestContract(contractId, wallet);
      const result = await contract.functions.claim(amount, account, treeIndex, proof, recipient).call();
      return result;
    },
    onSuccess: (data) => {
      console.log("onSuccess useClaimAirdrop", data);
      _t.success("Airdrop claimed successfully!");
    },
    onError: (err) => {
      console.error("Error claiming airdrop:", err);
      _t.error(err.message);
    }
  });
  return mutation;
};
const AirdropQueryKeys = {
  owner: "owner",
  pendingOwner: "pendingOwner",
  claims: "claims",
  isPaused: "isPaused",
  isInitialized: "isInitialized"
};
const useGetOwner = ({ contractId }) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.owner, contractId],
    queryFn: async () => {
      console.log("contractId from useGetOwner: ", contractId);
      try {
        const provider = await Provider.create(NODE_URL);
        const contract = new TestContract(contractId, provider);
        const owner = await contract.functions.is_paused().get();
        console.log("owner from useGetOwner: ", owner);
        return owner.value;
      } catch (error) {
        console.log("error from useGetOwner: ", error);
      }
    }
  });
  return query;
};
const Route = createLazyFileRoute("/airdrop/claim/$slug")({
  // validateSearch: z.array(z.object({ address: z.string(), amount: z.string() })),
  component: () => /* @__PURE__ */ jsxRuntimeExports.jsx(ClaimAirdrop, {})
});
function ClaimAirdrop() {
  const { slug } = useParams({ strict: false });
  const { recipient } = Route.useSearch();
  console.log("recipient", recipient);
  const contractId = slug;
  const recipients = recipient;
  console.log("recipients", recipients);
  const { mutate } = useClaimAirdrop();
  const [isRecipient, setIsRecipient] = reactExports.useState();
  const [treeIndex, setTreeIndex] = reactExports.useState();
  const { wallet } = Cp();
  console.log("recipients", recipients);
  const { owner } = useGetOwner({ contractId });
  reactExports.useEffect(() => {
    console.log({ wallet });
    if (recipients && wallet) {
      recipients == null ? void 0 : recipients.find((recipient2, index) => {
        const temp = recipient2.address === (wallet == null ? void 0 : wallet.address.toB256());
        if (temp) {
          setIsRecipient(recipient2);
          setTreeIndex(index);
        }
        return temp;
      });
    }
  }, [wallet, recipients]);
  const claimHandler = async () => {
    if (!wallet) {
      _t.error("Wallet not connected!");
      return;
    }
    if (!isRecipient) {
      _t.error("You are not eligible for the airdrop");
      return;
    }
    const { tree } = createMerkleTree(recipients);
    const proof = generateProof(isRecipient, tree);
    console.log("proof:", proof);
    mutate({
      contractId,
      amount: isRecipient == null ? void 0 : isRecipient.amount,
      account: wallet == null ? void 0 : wallet.address.toB256(),
      treeIndex,
      proof,
      recipient: {
        Address: { bits: wallet == null ? void 0 : wallet.address.toB256() }
      }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-center flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h4", sx: { paddingBottom: "28px", textAlign: "center" }, children: "Claim Airdrop" }),
    !wallet ? /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "Please connect your wallet to claim the airdrop" }) : !isRecipient ? /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { children: "You are not eligible for the airdrop" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
        "Your Allocations: ",
        Number(formatUnits(isRecipient.amount, 9))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: claimHandler, className: "my-8 mx-auto text-center", children: "Claim Airdrop" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
      "Contract Owner: ",
      owner
    ] })
  ] });
}
export {
  Route
};
