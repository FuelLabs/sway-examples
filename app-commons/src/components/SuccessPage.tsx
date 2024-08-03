import { Button, Stack } from "@mui/material";
import { Text } from "./Text";

type SuccessPageProps = {
  message?: string;
  setOpen: (open: boolean) => void;
};

export const SuccessPage = ({ message, setOpen }: SuccessPageProps) => {
  return (
    <Stack spacing={2} className="items-center w-full">
      {message && <Text>{message}</Text>}
      <Button className="btn-primary h-12 w-3/4" onClick={() => setOpen(false)}>
        Continue to App
      </Button>
    </Stack>
  );
};
