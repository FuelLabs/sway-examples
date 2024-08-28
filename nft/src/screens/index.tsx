import { FuelLogo } from "components/FuelLogo";
import { HomeCard } from "components/HomeCard";
import { Text } from "components/Text";
import { Box, Grid, Stack } from "@mui/material";

export default function Home() {
  console.log("home");
  return (
    <Stack className="w-full">
      <nav
        className="flex justify-between items-center p-4 bg-black text-white gap-6 gradient-border
            bg-gradient-to-b
            from-zinc-900
            to-zinc-950/80"
      >
        <Box className="flex content-center flex-wrap justify-center items-center py-1 w-full">
          <FuelLogo />
          <Text className="text-3xl">Sway Applications</Text>
        </Box>
      </nav>
      <div className="min-h-screen items-center p-20 flex flex-col gap-6">
        <Grid container spacing={2}>
          <Grid item>
            <HomeCard href="/nft" title="NFT">
              Create and mint NFTs.
            </HomeCard>
          </Grid>
        </Grid>
      </div>
    </Stack>
  );
}
