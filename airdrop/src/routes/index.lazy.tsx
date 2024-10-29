import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
// import contractIds from "../sway-api/contract-ids.json";
import { FuelLogo } from "../components/FuelLogo";
// import { bn } from "fuels";
import { useGetAirdropData } from "@/hooks/useGetAirdropData";
import { useEffect } from "react";
import useAsync from "react-use/lib/useAsync";
import { Button } from "../components/Button";
import { useActiveWallet } from "../hooks/useActiveWallet";
import { Text } from "@/components/Text";
import { Grid } from "@mui/material";
import { HomeCard } from "@/components/HomeCard";
import { VITE_BASE_URL } from "@/lib";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { wallet } = useActiveWallet();
  const { data: airdropData, isFetching, isError } = useGetAirdropData();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("airdropData: ", airdropData);
  }, [airdropData, isFetching]);

  /**
   * useAsync is a wrapper around useEffect that allows us to run asynchronous code
   * See: https://github.com/streamich/react-use/blob/master/docs/useAsync.md
   */
  useAsync(async () => {
    if (wallet) {
      // Create a new instance of the contract
      // const testContract = new TestContract(contractId, wallet);
      // setContract(testContract);
    }
  }, [wallet]);

  return (
    <>
      <div className="flex gap-4 items-center">
        <FuelLogo />
        <h1 className="text-3xl font-semibold ali">Fuel Airdrop</h1>
      </div>

      <span className="text-gray-400 text-center">
        These are all the airdrops that have been created.
        <p>Check your eligibility and claim them by visiting each airdrop.</p>
      </span>

      <div>
        {isFetching && (
          <Text variant="h6" sx={{ paddingBottom: "28px", width: "full" }}>
            Fetching Airdrop ContractIds...
          </Text>
        )}
        {isError && (
          <Text variant="h6" sx={{ paddingBottom: "28px", width: "full" }}>
            Error fetching Airdrop ContractIds
          </Text>
        )}
        {!isFetching && !isError && airdropData && (
          <div className="min-h-screen overflow-y-auto items-center p-20 pt-0 flex flex-col gap-6">
            <Text variant="h6" sx={{ paddingBottom: "28px", width: "full" }}>
              Below are the open Airdrops
            </Text>
            <Grid container overflow={"auto"} spacing={3}>
              {/* @ts-expect-error will fix it once the build succeeds */}
              {airdropData?.map(({ contractId, recipients }, index) => (
                <Grid className="m-3">
                  <HomeCard
                    title={"Airdrop " + (index + 1)}
                    href={`/airdrop/claim/${contractId}?recipient=${JSON.stringify(
                      recipients
                    )}`}
                  >
                    <Text key={index}>
                      {contractId.toString().slice(0, 10)}....
                      {contractId.toString().slice(-3)}
                    </Text>
                  </HomeCard>
                </Grid>
              ))}
            </Grid>
            <Button
              onClick={() =>
                navigate({
                  to: "/airdrop/create",
                  // to: VITE_BASE_URL + "/airdrop/create",
                })
              }
            >
              Create your own Airdrop
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
