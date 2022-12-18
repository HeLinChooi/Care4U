import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import PatientProfile from "@Pages/PatientProfile";
import PatientProfileForm from "@Pages/PatientProfileForm";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/patient/:profileId"} element={<PatientProfile />} />
        <Route path={"/create"} element={<PatientProfileForm />} />
        <Route
          path={"/patient/:profileId/create"}
          element={<PatientProfileForm />}
        />
      </Routes>
    </>
  );
}

export default App;
