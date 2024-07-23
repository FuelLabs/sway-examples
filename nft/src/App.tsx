import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Layout } from "./components/Layout";
import Home from "./pages";
import { NFTRoutes } from "./routes";
import Explore from "./pages/nft";
import Create from "./pages/nft/create";
import Faucet from "./pages/nft/faucet";
import Collection from "./pages/nft/collection";
import Address from "./pages/nft/collection/address";
import Mint from "./pages/nft/mint/id/fileId";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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
