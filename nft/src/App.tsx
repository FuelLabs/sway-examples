import { Routes, Route } from "react-router-dom";

import { VITE_BASE_URL } from "./lib";
import { Layout } from "./components/Layout";
import { NFTRoutes } from "./routes";
import Explore from "./screens/nft";
import Create from "./screens/nft/create";
import Faucet from "./screens/nft/faucet";
import Collection from "./screens/nft/collection";
import Address from "./screens/nft/collection/address";
import Mint from "./screens/nft/mint/id/fileId";

export const App = () => {
  
  return (
    <Routes>
      <Route path={VITE_BASE_URL} element={<Layout />}>
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
