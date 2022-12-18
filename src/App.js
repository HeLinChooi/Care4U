import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import NFT from "@Pages/NFT";
import NFTCreation from "@Pages/NFTCreation";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/nft"} element={<NFT />} />
        <Route path={"/nft-creation"} element={<NFTCreation />} />
      </Routes>
    </>
  );
}

export default App;
