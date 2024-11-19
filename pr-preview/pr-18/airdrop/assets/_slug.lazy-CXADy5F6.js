import { A as or, D as useMutation, F as _t, z as useQuery, a8 as Provider, a9 as NODE_URL, c as createLazyFileRoute, j as jsxRuntimeExports, aa as useParams, r as reactExports, g as getTruncatedAddress, a7 as DateTime } from "./index-OViWMWHH.js";
import { d as TestContract, B as Button, a as createMerkleTree, g as generateProof } from "./button-Bb_5GoL0.js";
import { T as Text } from "./Text-DcZ5ZG-Q.js";
import { c as checkEligibility } from "./airdropEligibility-DNVH7hhj.js";
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
  const { wallet } = or();
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
      const temp = await result.waitForResult();
      console.log(`temp`, temp);
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
  isInitialized: "isInitialized",
  endTime: "endTime",
  merkleRoot: "merkleRoot",
  isActive: "isActive",
  numLeaves: "numLeaves"
};
const useGetOwner = ({ contractId }) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.owner, contractId],
    queryFn: async () => {
      console.log("contractId from useGetOwner: ", contractId);
      try {
        const provider = await Provider.create(NODE_URL);
        const contract = new TestContract(contractId, provider);
        const owner = await contract.functions.owner().get();
        console.log("owner from useGetOwner: ", owner);
        return owner.value;
      } catch (error) {
        console.log("error from useGetOwner: ", error);
      }
    }
  });
  return query;
};
const useGetEndTime = ({ contractId }) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.endTime, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);
        const contract = new TestContract(contractId, provider);
        const endTime = await contract.functions.end_time().get();
        return endTime.value;
      } catch (error) {
        console.log("error from useGetEndTime: ", error);
      }
    }
  });
  return query;
};
const useGetIsPaused = ({ contractId }) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.isPaused, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);
        const contract = new TestContract(contractId, provider);
        const isPaused = await contract.functions.is_paused().get();
        return isPaused.value;
      } catch (error) {
        console.log("error from useGetIsPaused: ", error);
      }
    }
  });
  return query;
};
const useGetMerkleRoot = ({ contractId }) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.merkleRoot, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);
        const contract = new TestContract(contractId, provider);
        const merkleRoot = await contract.functions.merkle_root().get();
        return merkleRoot.value;
      } catch (error) {
        console.log("error from useGetMerkleRoot: ", error);
      }
    }
  });
  return query;
};
const useGetNumLeaves = ({ contractId }) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.numLeaves, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);
        const contract = new TestContract(contractId, provider);
        const numLeaves = await contract.functions.num_leaves().get();
        return numLeaves.value;
      } catch (error) {
        console.log("error from useGetNumLeaves: ", error);
      }
    }
  });
  return query;
};
const useGetIsInitialized = ({ contractId }) => {
  const query = useQuery({
    queryKey: [AirdropQueryKeys.isInitialized, contractId],
    queryFn: async () => {
      try {
        const provider = await Provider.create(NODE_URL);
        const contract = new TestContract(contractId, provider);
        const isInitialized = await contract.functions.is_initialized().get();
        return isInitialized.value;
      } catch (error) {
        console.log("error from useGetIsInitialized: ", error);
      }
    }
  });
  return query;
};
const useInitializeAirdrop = () => {
  const { wallet } = or();
  const mutation = useMutation({
    mutationFn: async ({ contractId }) => {
      if (!wallet) {
        throw new Error("Wallet not connected!");
      }
      const contract = new TestContract(contractId, wallet);
      const result = await contract.functions.initialize().call();
      return result;
    },
    onSuccess: (data) => {
      console.log("onSuccess useInitializeAirdrop", data);
      _t.success("Airdrop initialized successfully!");
    },
    onError: (err) => {
      console.error("Error initializing airdrop:", err);
      _t.error(err.message);
    }
  });
  return mutation;
};
const Route = createLazyFileRoute("/airdrop/claim/$slug")({
  // validateSearch: z.array(z.object({ address: z.string(), amount: z.string() })),
  component: () => /* @__PURE__ */ jsxRuntimeExports.jsx(ClaimAirdrop, {})
});
function ClaimAirdrop() {
  var _a;
  const { slug } = useParams({ strict: false });
  const { recipient } = Route.useSearch();
  const contractId = slug;
  const recipients = recipient;
  const { mutate } = useClaimAirdrop();
  const [possibleRecipient, setPossibleRecipient] = reactExports.useState();
  const [treeIndex, setTreeIndex] = reactExports.useState();
  const { wallet } = or();
  const { data: owner } = useGetOwner({ contractId });
  const { data: endTime } = useGetEndTime({ contractId });
  const { data: isPaused } = useGetIsPaused({ contractId });
  const { data: merkleRoot } = useGetMerkleRoot({ contractId });
  const { data: numLeaves } = useGetNumLeaves({ contractId });
  const { mutate: initialize, data: initializeData } = useInitializeAirdrop();
  useGetIsInitialized({ contractId });
  reactExports.useEffect(() => {
    console.log({ wallet });
    if (recipients && wallet) {
      const fallback = (recipient2, index) => {
        setPossibleRecipient(recipient2);
        console.log({ recipient: recipient2 });
        setTreeIndex(index);
      };
      checkEligibility(recipients, wallet, fallback);
    }
  }, [wallet, recipients]);
  const claimHandler = async () => {
    if (!wallet) {
      _t.error("Wallet not connected!");
      return;
    }
    if (!possibleRecipient) {
      _t.error("You are not eligible for the airdrop");
      return;
    }
    const { tree, root, leaves } = createMerkleTree(
      recipients
    );
    const proof = generateProof(possibleRecipient, tree, treeIndex);
    console.log("root", root);
    console.log("tree", tree);
    console.log("proof:", proof);
    console.log(`treeIndex`, treeIndex);
    mutate({
      contractId,
      amount: possibleRecipient == null ? void 0 : possibleRecipient.amount,
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-8", children: !wallet ? /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h5", children: "Please connect your wallet to check eligibility and to claim the airdrop" }) : !possibleRecipient ? /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h5", children: "You are not eligible for the airdrop" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
        "Your Allocations:",
        " ",
        Number(formatUnits(possibleRecipient.amount, 9))
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: claimHandler,
          className: "my-8 mx-auto text-center",
          children: "Claim Airdrop"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
        "Contract Owner: ",
        getTruncatedAddress(((_a = owner == null ? void 0 : owner.Address) == null ? void 0 : _a.bits) ?? "")
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
        "End time:",
        " ",
        DateTime.fromTai64((endTime == null ? void 0 : endTime.toString()) ?? "").toLocaleDateString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
        "Paused: ",
        isPaused == null ? void 0 : isPaused.toString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
        "Merkle Root: ",
        merkleRoot == null ? void 0 : merkleRoot.toString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
        "Number of Leaves: ",
        numLeaves == null ? void 0 : numLeaves.toString()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "my-8 mx-auto text-center",
        onClick: () => {
          initialize({ contractId });
        },
        children: "Initialize Airdrop"
      }
    )
  ] });
}
export {
  Route
};
