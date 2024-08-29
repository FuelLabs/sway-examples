// testContractId=0xa857304d0215a3814161807bc5cfc845744ea6baa4c19cfaab534e861399e467

import { useGetAirdropData } from "@/hooks/useGetAirdropData";
import { useEffect } from "react";

export default function ClaimAirdrop() {
  const {data} = useGetAirdropData();
  useEffect(() => {
    console.log('airdropData: ', data);
  }
  , [data]);
  return (
    <div>
      <h1>Claim Airdrop</h1>
    </div>
  );
}