import { createLazyFileRoute } from "@tanstack/react-router";
import { Text } from "../../components/Text";

import { FuelLogo } from "@/components/FuelLogo";

import { useActiveWallet } from "@/hooks/useActiveWallet";
import { getTruncatedAddress } from "@/lib/utils";
import { checkEligibility } from "@/utils/airdropEligibility";
import { Grid } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useGetAirdropData } from "../../hooks/useGetAirdropData";

export const Route = createLazyFileRoute("/airdrop/")({
  component: () => <Index />,
});

function Index() {
  const { wallet } = useActiveWallet();
  const { data: airdropData, isFetching, isError } = useGetAirdropData();
  const navigate = useNavigate();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-4 mb-6">
          <FuelLogo />
          <h1 className="text-4xl font-bold text-white">
            Fuel Airdrop
          </h1>
        </div>
        
        <div className="max-w-2xl">
          <p className="text-gray-400 text-lg mb-2">
            These are all the airdrops that have been created.
          </p>
          <p className="text-gray-400 text-lg">
            Check your eligibility and claim them by visiting each airdrop.
          </p>
        </div>
      </div>

      <div className="w-full">
        {/* Loading and Error States */}
        {isFetching && (
          <div className="text-center py-8 animate-pulse">
            <Text variant="h6" className="text-gray-400">
              Fetching Airdrop ContractIds...
            </Text>
          </div>
        )}
        
        {isError && (
          <div className="text-center py-8">
            <Text variant="h6" className="text-red-500">
              Error fetching Airdrop ContractIds
            </Text>
          </div>
        )}

        {/* Main Content */}
        {!isFetching && !isError && airdropData && (
          <div className="space-y-8">
            <div className="flex justify-center">
              <Button
                onClick={() => navigate({ to: "/airdrop/create" })}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Create new Airdrop
              </Button>
            </div>

            <div className="text-center mb-8">
              <Text variant="h6" className="text-xl font-semibold text-foreground">
                Available Airdrops
              </Text>
            </div>

            <Grid container spacing={4} className="justify-center">
              {airdropData?.map(({ contractId, recipients }, index) => (
                <Grid item xs={12} sm={6} md={4} key={contractId as string}>
                  <Card className="hover:border-green-500/50 transition-all duration-200 group cursor-pointer"
                        onClick={() => navigate({
                          to: `/airdrop/claim/${contractId}?recipient=${JSON.stringify(
                        recipients
                      )}`,
                        })}>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl font-semibold">
                          Airdrop {index + 1}
                        </CardTitle>
                        <Badge variant={checkEligibility(recipients, wallet!) ? "default" : "destructive"}>
                          {checkEligibility(recipients, wallet!) ? "Eligible" : "Not Eligible"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Text className="text-gray-400 font-mono">
                        {getTruncatedAddress(contractId as string)}
                      </Text>
                    </CardContent>
                    <CardFooter className="flex justify-end text-gray-400 group-hover:text-green-500">
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </CardFooter>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}
