import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";
// import { HomeCard } from "@/components/HomeCard";
import { Text } from "../../components/Text";

import { Button } from "../../components/Button";
import { Grid } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { HomeCard } from "../../components/HomeCard";
import { useGetAirdropData } from "../../hooks/useGetAirdropData";

export const Route = createLazyFileRoute("/airdrop/")({
  component: () => <Claim />,
});

function Claim() {
  const { data: airdropData, isFetching, isError } = useGetAirdropData();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("airdropData: ", airdropData);
  }, [airdropData, isFetching]);

  return (
    <div>
      {isFetching && (
        <Text variant="h4" sx={{ paddingBottom: "28px", width: "full" }}>
          Fetching Airdrop ContractIds...
        </Text>
      )}
      {isError && (
        <Text variant="h4" sx={{ paddingBottom: "28px", width: "full" }}>
          Error fetching Airdrop ContractIds
        </Text>
      )}
      {!isFetching && !isError && airdropData && (
        <div className="min-h-screen overflow-y-auto items-center p-20 flex flex-col gap-6">
          <Button
            onClick={() =>
              navigate({
                to: "/airdrop/create",
              })
            }
          >
            Create New Airdrop
          </Button>
          <Text variant="h4" sx={{ paddingBottom: "28px", width: "full" }}>
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
        </div>
      )}
    </div>
  );
}
