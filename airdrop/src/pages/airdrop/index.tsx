import { HomeCard } from "@/components/HomeCard";
import { Text } from "@/components/Text";
import { useGetAirdropData } from "@/hooks/useGetAirdropData";

import { Grid } from "@mui/material";
import { useEffect } from "react";

export default function Claim() {
  const { data: airdropData, isFetching, isError } = useGetAirdropData();

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
        <div className="min-h-screen items-center p-20 flex flex-col gap-6">
          <Text variant="h4" sx={{ paddingBottom: "28px", width: "full" }}>
            Below are the open Airdrops
          </Text>
          <Grid container spacing={3}>
            {/* @ts-expect-error */}
            {airdropData?.map(({ contractId, recipients }, index) => (
              <Grid className="m-3">
                <HomeCard
                  title={"Airdrop " + (index + 1)}
                  href={`/airdrop/claim/${contractId}?recipient=${JSON.stringify(
                    recipients
                  )}`}
                >
                  <Text key={index}>
                    {contractId.slice(0, 10)}....{contractId.slice(-3)}
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
