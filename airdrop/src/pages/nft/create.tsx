import { UploadButton } from "@/components/UploadButton";
import { useUploadFile } from "@/hooks/useUploadFile";
import { IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import clsx from "clsx";
import { useIsMutating } from "@tanstack/react-query";

import { Button } from "@/components/Button";
import { Input, inputStyle } from "@/components/Input";
import { useActiveWallet } from "@/hooks/useActiveWallet";
import { NFTImage } from "@/components/NFTImage";
import { Text } from "@/components/Text";
import { NFTQueryKeys } from "@/queryKeys";

export default function Create() {
  const [file, setFile] = useState<File>();
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [decimals, setDecimals] = useState("");
  const [totalSupply, setTotalSupply] = useState("");

  const [description, setDescription] = useState("");
  const { isConnected, isPending } = useActiveWallet();

  const isCreatingToken = Boolean(
    useIsMutating({
      mutationKey: [NFTQueryKeys.createToken],
    })
  );
  const uploadFile = useUploadFile();

  const isCreateButtonDisabled = !name || !symbol || isCreatingToken;

  return (
    <>
      {isPending ? (
        <Text>Loading...</Text>
      ) : isConnected ? (
        <div className="gradient-border rounded-2xl">
          <div className="grain rounded-2xl p-1.5 drop-shadow-xl">
            <Stack
              spacing={2}
              className={clsx(
                "gradient-border",
                "h-full",
                "rounded-xl",
                "bg-gradient-to-b",
                "from-zinc-900",
                "to-zinc-950/80",
                "px-4",
                "py-8"
              )}
            >
              <Text variant="h4" sx={{ paddingBottom: "28px" }}>
                Create and Mint new token
              </Text>
              <Text>Name</Text>
              <Input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Crypto Kitty"
              />
              <Text>Symbol</Text>
              <Input
                value={symbol}
                onChange={(event) => setSymbol(event.target.value)}
                placeholder="CK"
              />

              <Text>Decimals</Text>
              <Input
                type="number"
                value={decimals}
                onChange={(event) => setDecimals(event.target.value)}
                placeholder="8"
              />
              <Text>Total Supply</Text>
              <Input
                type="number"
                value={totalSupply}
                onChange={(event) => setTotalSupply(event.target.value)}
                placeholder="10000000"
              />
              <Button
                disabled={isCreateButtonDisabled}
                onClick={() => {
                  if (file) {
                    uploadFile.mutateAsync({
                      fileToUpload: file,
                      name,
                      description,
                      symbol,
                    });
                  }
                }}
              >
                {uploadFile.isPending
                  ? "Loading the Supply..."
                  : isCreatingToken
                  ? "Creating Token..."
                  : "Mint Token "}
              </Button>
            </Stack>
          </div>
        </div>
      ) : (
        <Text>
          Please connect your wallet to create and mint an SRC20 token
        </Text>
      )}
    </>
  );
}
