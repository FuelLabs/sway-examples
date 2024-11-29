import { X as or, Y as useMutation, i as _t, b as useQuery, f as Provider, N as NODE_URL, c as createLazyFileRoute, j as jsxRuntimeExports, a3 as useParams, r as reactExports, g as getTruncatedAddress, a0 as IconCopy, a1 as copyToClipboard, B as Button, a2 as DateTime } from "./index-BOmIvw9P.js";
import { b as TestContract, u as useInitializeAirdrop, L as LoaderCircle, a as createMerkleTree, g as generateProof } from "./merkleTrees-dRbTHDly.js";
import { c as checkEligibility } from "./airdropEligibility-DNVH7hhj.js";
import { T as Text } from "./Text-BQ4XRdu0.js";
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
        console.log("isInitialized from useGetIsInitialized: ", {
          isInitialized
        });
        return isInitialized.value;
      } catch (error) {
        console.log("error from useGetIsInitialized: ", error);
      }
    }
  });
  return query;
};
const Route = createLazyFileRoute("/airdrop/claim/$slug")({
  component: () => /* @__PURE__ */ jsxRuntimeExports.jsx(ClaimAirdrop, {})
});
function ClaimAirdrop() {
  var _a, _b;
  const { slug } = useParams({ strict: false });
  const { recipient } = Route.useSearch();
  const contractId = slug;
  const recipients = recipient;
  const {
    mutate: claim,
    error: claimError,
    status: claimStatus,
    isPending: claimIsPending,
    isSuccess: claimIsSuccess,
    isError: claimIsError
  } = useClaimAirdrop();
  const [possibleRecipient, setPossibleRecipient] = reactExports.useState();
  const [treeIndex, setTreeIndex] = reactExports.useState();
  const { wallet } = or();
  const { data: owner, isFetching: ownerIsfetching } = useGetOwner({
    contractId
  });
  const { data: endTime, isFetching: endTimeIsFetching } = useGetEndTime({
    contractId
  });
  const { data: isPaused, isFetching: isPausedFetching } = useGetIsPaused({
    contractId
  });
  const { data: merkleRoot, isFetching: merkleRootIsFetching } = useGetMerkleRoot({ contractId });
  const { data: numLeaves, isFetching: numLeavesIsFetching } = useGetNumLeaves({
    contractId
  });
  const {
    mutate: initialize,
    data: initializeData,
    status: initializeStatus,
    isSuccess: initializeSuccess,
    error: initializeError,
    isPending: initializeIsPending
  } = useInitializeAirdrop();
  const {
    data: isInitialized,
    isFetching: fetchingIsInitialized,
    refetch: refetchIsIntialized
  } = useGetIsInitialized({ contractId });
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
  reactExports.useEffect(() => {
    if (initializeStatus === "success" && (initializeData == null ? void 0 : initializeData.transactionId) && initializeSuccess) {
      _t.success("Airdrop initialized successfully");
      refetchIsIntialized();
    }
  }, [
    initializeStatus,
    initializeData,
    initializeIsPending,
    refetchIsIntialized,
    initializeSuccess
  ]);
  const claimHandler = async () => {
    if (!wallet) {
      _t.error("Wallet not connected!");
      return;
    }
    if ((isInitialized == null ? void 0 : isInitialized.toString()) === "false") {
      _t.error("Owner needs to initialize the contract first!");
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
    claim({
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
  console.log((_a = owner == null ? void 0 : owner.Address) == null ? void 0 : _a.bits);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-center flex flex-col justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h4", sx: { paddingBottom: "28px", textAlign: "center" }, children: "Claim Airdrop" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex m-auto items-start gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { variant: "h5", sx: { textAlign: "center" }, children: [
        "Airdrop Contract ID: ",
        getTruncatedAddress(contractId)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconCopy,
        {
          className: "text-[#dddddd] cursor-pointer h-5 mt-2 hover:opacity-80 active:scale-[90%]",
          onClick: () => copyToClipboard(contractId)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8 ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { className: " py-2", children: [
        " ",
        "Contract Initialized:",
        " ",
        fetchingIsInitialized ? "Fetching..." : (isInitialized == null ? void 0 : isInitialized.toString()) === "true" ? "Yes" : "No"
      ] }),
      !fetchingIsInitialized && (isInitialized == null ? void 0 : isInitialized.toString()) === "false" && !!wallet && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          disabled: initializeIsPending || !wallet,
          className: "my-8 mx-auto text-center",
          onClick: () => {
            initialize({ contractId });
          },
          children: initializeIsPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
            "Loading"
          ] }) : "Initialize Airdrop"
        }
      ),
      !wallet ? /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h5", children: "Please connect your wallet to check eligibility and to claim the airdrop" }) : !possibleRecipient ? /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { variant: "h5", children: "You are not eligible for the airdrop" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
          "Your Allocations:",
          " ",
          Number(formatUnits(possibleRecipient.amount, 9))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            onClick: claimHandler,
            disabled: claimIsPending || !wallet || !possibleRecipient,
            className: "my-8 mx-auto text-center",
            children: claimIsPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
              "Loading"
            ] }) : "Claim Airdrop"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-col gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
          "Contract Owner:",
          " ",
          ownerIsfetching ? "Fetching.." : getTruncatedAddress(((_b = owner == null ? void 0 : owner.Address) == null ? void 0 : _b.bits) ?? "")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconCopy,
          {
            className: "text-[#dddddd] cursor-pointer h-5 hover:opacity-80 active:scale-[90%]",
            onClick: () => {
              var _a2;
              return copyToClipboard((_a2 = owner == null ? void 0 : owner.Address) == null ? void 0 : _a2.bits);
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
        "End time:",
        " ",
        endTimeIsFetching ? "Fetching..." : DateTime.fromTai64(
          (endTime == null ? void 0 : endTime.toString()) ?? ""
        ).toLocaleDateString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
        "Paused: ",
        isPausedFetching ? "Fetching..." : isPaused == null ? void 0 : isPaused.toString()
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
          "Merkle Root:",
          " ",
          merkleRootIsFetching ? "Fetching..." : getTruncatedAddress((merkleRoot == null ? void 0 : merkleRoot.toString()) ?? "")
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          IconCopy,
          {
            className: "text-[#dddddd] cursor-pointer h-5 hover:opacity-80 active:scale-[90%]",
            onClick: () => copyToClipboard((merkleRoot == null ? void 0 : merkleRoot.toString()) ?? "")
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Text, { textAlign: "center", children: [
        "Number of Leaves:",
        " ",
        numLeavesIsFetching ? "Fetching..." : numLeaves == null ? void 0 : numLeaves.toString()
      ] })
    ] })
  ] });
}
export {
  Route
};
