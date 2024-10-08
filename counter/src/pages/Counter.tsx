import { TestContract, TestContractFactory} from "../sway-api";
import contractIds from "../sway-api/contract-ids.json";
import { FuelLogo } from "../components/FuelLogo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { useActiveWallet } from "../hooks/useActiveWallet";
import useAsync from "react-use/lib/useAsync";
import { CURRENT_ENVIRONMENT, VITE_BASE_URL } from "../lib";
import { useIncrementCounter } from "../hooks/useIncrementCounter";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const contractId =
  CURRENT_ENVIRONMENT === "local"
    ? contractIds.testContract
    : (process.env.VITE_PUBLIC_TESTNET_COUNTER_CONTRACT_ID as string);

export default function Home() {
  const { wallet, walletBalance, refetchBalance, isConnected } =
    useActiveWallet();
  const [contract, setContract] = useState<TestContract>();
  const [counter, setCounter] = useState<number>();

  useAsync(async () => {
    if (wallet) {
      const testContract = new TestContract(contractId, wallet);
      setContract(testContract);
      const { value } = await testContract.functions.get_count().get();
      setCounter(value.toNumber());
    }
  }, [wallet]);

  const { onIncrementPressed, isLoading } = useIncrementCounter({
    contract,
    isConnected,
    walletBalance,
    setCounter,
    refetchBalance,
  });

  return (
    <>
      <div className="flex gap-4 items-center">
        <FuelLogo />
        <h1 className="text-2xl font-semibold">Welcome to Fuel</h1>
      </div>

      <span className="text-gray-400 text-center">
        Get started by editing <i>sway-programs/contract/main.sw</i> or{" "}
        <i>src/pages/index.tsx</i>.
      </span>

      <span className="text-gray-400 text-center">
        This template uses the new{" "}
        <Link to="https://docs.fuel.network/docs/fuels-ts/fuels/#fuels-cli">
          Fuels CLI <OpenInNewIcon fontSize="small" />
        </Link>{" "}
        to enable type-safe hot-reloading for your Sway programs.
      </span>

      <>
        <h3 className="text-xl font-semibold">Counter</h3>

        <span data-testid="counter" className="text-gray-400 text-6xl">
          {counter}
        </span>

        <Button
          onClick={onIncrementPressed}
          className={`mt-6 ${
            isLoading
              ? "bg-buttontransition border border-gray-400 pointer-events-none"
              : !isConnected
                ? "bg-gray-500"
                : ""
          }`}
        >
          {isLoading ? "Incrementing..." : "Increment Counter"}
        </Button>
      </>

      <Link
        to={`${VITE_BASE_URL}/counter/predicate`}
        className="text-fuel-green hover:underline"
      >
        Predicate Example
      </Link>

      <Link
        to={`${VITE_BASE_URL}/counter/script`}
        className="text-fuel-green hover:underline"
      >
        Script Example
      </Link>
    </>
  );
}
