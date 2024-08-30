import { Text } from "@/components/Text";
import { useGetAirdropContractId } from "@/hooks/useGetAirdropContractId";
import { useEffect } from "react";

export default function Claim() {
  const {
    data: contractIdData,
    isFetching,
    isError,
  } = useGetAirdropContractId();

  useEffect(() => {
    console.log("contractIdData: ", contractIdData);
  }, [contractIdData, isFetching]);

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
      {!isFetching && !isError && (
        <>
          <Text variant="h4" sx={{ paddingBottom: "28px", width: "full" }}>
            Below are the open Airdrops
          </Text>
          {(contractIdData)?.map((contractId, index) => (
            <div key={index}>
              <Text variant="h4" sx={{ paddingBottom: "28px", width: "full" }}>
                {contractId as unknown as string}
              </Text>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
