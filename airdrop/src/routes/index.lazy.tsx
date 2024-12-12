import { useGetAirdropData } from "@/hooks/useGetAirdropData";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { FuelLogo } from "../components/FuelLogo";

import { Text } from "@/components/Text";
import { Button } from "@/components/ui/button";
import { checkEligibility } from "@/utils/airdropEligibility";
import { Grid } from "@mui/material";

import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Card,
} from "@/components/ui/card";
import { getTruncatedAddress } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useActiveWallet } from "../hooks/useActiveWallet";

export const Route = createLazyFileRoute("/")({
  component: Index,
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
          <FuelLogo className="w-12 h-12" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Create new Airdrop
              </Button>
            </div>

            <div className="text-center mb-8">
              <Text
                variant="h6"
                className="text-xl font-semibold text-gray-200"
              >
                Available Airdrops
              </Text>
            </div>

            <Grid container spacing={4} className="justify-center">
              {airdropData?.map(({ contractId, recipients }, index) => (
                <Grid item xs={12} sm={6} md={4} key={contractId as string}>
                  <Card
                    className="hover:border-blue-500/50 transition-all duration-200 group cursor-pointer"
                    onClick={() =>
                      navigate({
                        to: `/airdrop/claim/${contractId}?recipient=${JSON.stringify(
                          recipients
                        )}`,
                      })
                    }
                  >
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-xl font-semibold">
                          Airdrop {index + 1}
                        </CardTitle>
                        <Badge
                          variant={
                            checkEligibility(recipients, wallet!)
                              ? "default"
                              : "destructive"
                          }
                        >
                          {checkEligibility(recipients, wallet!)
                            ? "Eligible"
                            : "Not Eligible"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Text className="text-gray-400 font-mono">
                        {getTruncatedAddress(contractId as string)}
                      </Text>
                    </CardContent>
                    <CardFooter className="flex justify-end text-gray-400 group-hover:text-blue-500">
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
