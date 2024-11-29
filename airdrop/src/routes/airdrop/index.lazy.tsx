import { createLazyFileRoute } from "@tanstack/react-router";
import { Text } from "../../components/Text";

import { FuelLogo } from "@/components/FuelLogo";

import { useActiveWallet } from "@/hooks/useActiveWallet";
import { getTruncatedAddress } from "@/lib/utils";
import { checkEligibility } from "@/utils/airdropEligibility";
import { Grid } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { HomeCard } from "../../components/HomeCard";
import { Button } from "../../components/ui/button";
import { useGetAirdropData } from "../../hooks/useGetAirdropData";

export const Route = createLazyFileRoute("/airdrop/")({
  component: () => <Index />,
});

function Index() {
  const { wallet } = useActiveWallet();
  const { data: airdropData, isFetching, isError } = useGetAirdropData();
  const navigate = useNavigate();
  
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
            <Button
              onClick={() =>
                navigate({
                  to: "/airdrop/create",
                })
              }
            >
              Create your own Airdrop
            </Button>
            <Text variant="h6" sx={{ paddingBottom: "28px", width: "full" }}>
              Below are the open Airdrops
            </Text>
            <Grid container overflow={"auto"} spacing={3}>
              {/* @ts-expect-error will fix it once the build succeeds */}
              {airdropData?.map(({ contractId, recipients }, index) => {
                {
                  console.log({ recipients });
                }

                return (
                  <Grid className="m-3">
                    <HomeCard
                      title={"Airdrop " + (index + 1)}
                      href={`/airdrop/claim/${contractId}?recipient=${JSON.stringify(
                        recipients
                      )}`} isEligible={checkEligibility(recipients, wallet!)}
                    >
                      <Text key={index}>
                        {getTruncatedAddress(contractId)}
                      </Text>
                    </HomeCard>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        )}
      </div>
    </>
  );
}
