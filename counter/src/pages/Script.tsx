"use client";

import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { FuelLogo } from "../components/FuelLogo";
import { Input } from "../components/Input";
import { useActiveWallet } from "../hooks/useActiveWallet";
import { useRunScript } from "../hooks/useRunScript";
import { useState } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function ScriptExample() {
  const { wallet, walletBalance, isConnected } = useActiveWallet();

  const [input, setInput] = useState<string>();
  const [result, setResult] = useState<string>();

  const { runScript, isLoading } = useRunScript({
    wallet,
    walletBalance,
    isConnected,
    input: input ?? "",
    setResult,
  });

  return (
    <>
      <div className="flex gap-4 items-center">
        <FuelLogo />
        <h3 className="text-2xl font-semibold">Script</h3>
      </div>

      <Input
        className="mt-8"
        value={input as string}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a number"
        type="number"
      />

      <Button
        className={`${
          isLoading
            ? "bg-buttontransition border border-gray-400 pointer-events-none"
            : !isConnected
              ? "bg-gray-500"
              : ""
        }`}
        onClick={runScript}
      >
        {isLoading ? "Running..." : "Run Script"}
      </Button>

      {result && (
        <div className="flex gap-2 align-bottom">
          <h5 className="font-semibold text-xl">Result:</h5>
          <span className="text-gray-400 text-center flex justify-center items-center">
            {result}
          </span>
        </div>
      )}

      <span className="text-gray-400">
        This script takes a number and simply echoes it back.
      </span>

      <Link
        to="https://docs.fuel.network/docs/intro/glossary/#script"
        target="_blank"
        className="text-fuel-green hover:underline"
      >
        Learn more about Scripts
        <OpenInNewIcon fontSize="small" className="ml-1" />
      </Link>
    </>
  );
}
