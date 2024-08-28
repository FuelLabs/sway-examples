import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import Home from "./screens";
import { NFTRoutes } from "./routes";
import Explore from "./screens/nft";
import Create from "./screens/nft/create";
import Faucet from "./screens/nft/faucet";
import Collection from "./screens/nft/collection";
import Address from "./screens/nft/collection/address";
import Mint from "./screens/nft/mint/id/fileId";

export const App = () => {
  console.log("APPPPPPP");

  console.log(`window.location.href`, window.location.href);
  console.log(`window.location.pathname`, window.location.pathname);
  console.log(`import.meta.env.VITE_BASE_URL`, import.meta.env.VITE_BASE_URL);
  
  return (
    <Routes>
      <Route path="/nft/" element={<Layout />}>
        <Route index element={<Explore />} />
        <Route path={NFTRoutes.explore} element={<Explore />} />
        <Route path={NFTRoutes.create} element={<Create />} />
        <Route path={NFTRoutes.faucet} element={<Faucet />} />
        <Route path={NFTRoutes.collection}>
          <Route index element={<Collection />} />
          <Route path=":address" element={<Address />} />
        </Route>
        <Route path={NFTRoutes.mint}>
          <Route path=":id">
            <Route path=":fileId" element={<Mint />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};
