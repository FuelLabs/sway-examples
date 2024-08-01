import { Button, Dialog, Box, Stack } from "@mui/material";
import { useState } from "react";

import { Text } from "./Text";

type OnboardingFlowProps = {
  container?: Element | (() => Element | null) | null;
};

export const OnboardingFlow = ({ container }: OnboardingFlowProps) => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog
      container={container}
      open={open}
      id="onboarding"
      PaperProps={{ className: "p-4 w-full bg-black" }}
    >
      <Stack spacing={8}>
        {/* <Box sx={{ justifyContent: "space-around" }} className="flex">
          <Typography>1. Welcome</Typography>
          <Typography>2. Faucet</Typography>
          <Typography>3. Success</Typography>
        </Box> */}
        <Box className="flex items-center justify-around bg-white">
          <Text>1. Welcome</Text>
          <Text>2. Faucet</Text>
          <Text>3. Success</Text>
        </Box>

        <Stack spacing={2}>
          <Button className="btn-primary">Temporary Wallet</Button>
          <Box className="border-4 border-white">hello</Box>
          <Button>Connect</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};
