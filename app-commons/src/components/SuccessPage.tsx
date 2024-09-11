import { Button, Stack } from "@mui/material";
import { Text } from "./Text";
import { useOnboardingFlowContext } from "./OnboardingFlowProvider";

type SuccessPageProps = {
  message?: string;
};

export const SuccessPage = ({ message }: SuccessPageProps) => {
  const { setOpenDialog } = useOnboardingFlowContext();
  
  return (
    <Stack spacing={2} className="items-center w-full">
      {message && <Text>{message}</Text>}
      <Button
        className="btn-primary h-12 w-3/4 text-black"
        onClick={() => setOpenDialog(false)}
      >
        Continue to App
      </Button>
    </Stack>
  );
};
