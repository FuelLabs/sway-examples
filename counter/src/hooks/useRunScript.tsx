import { useState } from "react";
import toast from "react-hot-toast";
import { BN, BigNumberish, Script, bn, Account } from "fuels";
import { TestScriptAbi__factory } from "../sway-api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useAsync from "react-use/lib/useAsync";

interface UseRunScriptProps {
  wallet: Account | null | undefined;
  walletBalance: BN | null;
  isConnected: boolean | null;
  input: string;
  setResult: (result: string) => void;
}

export function useRunScript({
  wallet,
  walletBalance,
  isConnected,
  input,
  setResult,
}: UseRunScriptProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [script, setScript] = useState<Script<[input: BigNumberish], BN>>();

  useAsync(async () => {
    if (wallet) {
      const scriptInstance = TestScriptAbi__factory.createInstance(wallet);
      setScript(scriptInstance);
    }
  }, [wallet]);

  const runScript = async () => {
    try {
      if (!isConnected)
        return toast.error("Please connect your wallet to run the script");
      if (!script) {
        return toast.error("Script not loaded");
      }
      if (walletBalance?.eq(0)) {
        return toast.error(
          "Your wallet does not have enough funds. Please click the 'Faucet' button in the top right corner, or use the local faucet."
        );
      }

      setIsLoading(true);

      const { waitForResult } = await script.functions.main(bn(input)).call();
      const { value, transactionId } = await waitForResult();

      setResult(value.toString());
      toast(() => (
        <span>
          <CheckCircleIcon color="success" />
          Transaction Success! View it on the
          <a
            className="pl-1 underline"
            target="_blank"
            href={`https://app.fuel.network/tx/${transactionId}`}
          >
            block explorer
          </a>
        </span>
      ));
    } catch (error) {
      console.error(error);
      toast.error("Error running script.");
    } finally {
      setIsLoading(false);
    }
  };

  return { runScript, isLoading };
}
