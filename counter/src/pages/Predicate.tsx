import { Button } from "../components/Button";
import { FuelLogo } from "../components/FuelLogo";
import { Input } from "../components/Input";
import { useActiveWallet } from "../hooks/useActiveWallet";
import { TestPredicate } from "../sway-api/predicates/index";
import { BN, InputValue, Predicate } from "fuels";
import { bn } from "fuels";
import { useState } from "react";
import useAsync from "react-use/lib/useAsync";
import { Link } from "react-router-dom";
import { useTransferFundsToPredicate } from "../hooks/useTransferFundsToPredicate";
import { useUnlockPredicateAndTransferFundsBack } from "../hooks/useUnlockPredicateAndTransferFundsBack";

export default function PredicateExample() {
  const { wallet, walletBalance, refetchBalance, isConnected } =
    useActiveWallet();
  const [predicate, setPredicate] = useState<Predicate<InputValue[]>>();
  const [predicateBalance, setPredicateBalance] = useState<BN>();
  const [pin, setPin] = useState<string>("");

  useAsync(async () => {
    if (wallet) {
      let provider = wallet.provider
      const predicateInstance = new TestPredicate({provider});
      setPredicate(predicateInstance);
      setPredicateBalance(await predicateInstance.getBalance());
    }
  }, [wallet]);

  const { transferFundsToPredicate, isLoadingTransfer } =
    useTransferFundsToPredicate({
      predicate,
      setPredicateBalance,
      refetchBalance,
    });

  const { unlockPredicateAndTransferFundsBack, isLoadingUnlock } =
    useUnlockPredicateAndTransferFundsBack({
      predicate,
      predicateBalance,
      setPredicateBalance,
      refetchBalance,
    });

  const isButtonDisabled =
    !isConnected ||
    !predicateBalance ||
    predicateBalance.lt(bn.parseUnits("0.0009"));

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <FuelLogo />
        <h3 className="text-2xl font-semibold">Predicate</h3>
      </div>

      <div className="mt-8 items-baseline flex gap-2">
        <h5 className="font-semibold text-xl">Wallet Balance:</h5>
        <span className="text-gray-400">
          {walletBalance?.format({ precision: 3 })} ETH
        </span>
      </div>

      <div className="items-baseline flex gap-2">
        <h5 className="font-semibold text-xl">Predicate Balance:</h5>
        <span className="text-gray-400">
          {predicateBalance?.format({ precision: 3 })} ETH
        </span>
      </div>

      <Button
        className={`${
          isLoadingTransfer
            ? "bg-transparent border border-gray-400 pointer-events-none"
            : !isConnected
            ? "bg-gray-500"
            : ""
        }`}
        onClick={async () =>
          await transferFundsToPredicate(bn.parseUnits("0.001"))
        }
      >
        {isLoadingTransfer
          ? "Transferring to Predicate..."
          : "Transfer 0.001 ETH to Predicate"}
      </Button>

      <Input
        className="w-[300px] mt-8"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Hint - the correct pin is 1337"
      />

      <Button
        className={`w-11/12 sm:w-fit ${
          isLoadingUnlock
            ? "bg-transparent border border-gray-400 pointer-events-none"
            : isButtonDisabled
            ? "bg-gray-500"
            : ""
        }`}
        onClick={async () =>
          await unlockPredicateAndTransferFundsBack(
            bn.parseUnits("0.0009"),
            pin
          )
        }
      >
        {isLoadingUnlock
          ? "Unlocking Predicate and Transferring to Wallet..."
          : "Unlock Predicate and Transfer 0.0009 ETH back to Wallet"}
      </Button>

      <span className="mt-4 w-[360px] text-center text-gray-400">
        Do note that when you 'unlock' a predicate, the predicate also pays for
        the gas of the transaction. <br />
        This is why you will notice that the balance of the predicate gets
        reduced by 0.0009 ETH + a nominal gas fee.
      </span>

      <Link
        to="https://docs.fuel.network/docs/intro/glossary/#predicate"
        target="_blank"
        className="text-fuel-green hover:underline"
      >
        Learn more about Predicates
      </Link>
    </>
  );
}
