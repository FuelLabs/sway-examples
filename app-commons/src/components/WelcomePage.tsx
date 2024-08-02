import { Box, Button, Stack } from "@mui/material";

import { Text, TextProps } from "./Text";

type WelcomePageProps = {
  message?: string;
  messageProps?: TextProps;
};

export const WelcomePage = ({ message, messageProps }: WelcomePageProps) => {
  return (
    <Stack spacing={3} className="w-5/6 items-center">
      {message && <Text {...messageProps}>{message}</Text>}
      <Button className="btn-primary h-12 w-full">Temporary Wallet</Button>
      <Box className="border-b-2 border-slate-600 w-full" />
      <Button variant="outlined" className="text-white h-12 w-full border-slate-600">
        Connect
      </Button>
    </Stack>
  );
};
