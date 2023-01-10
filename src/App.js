import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import Patient from "@Pages/Patient";
import PatientForm from "@Pages/PatientForm";
import CssBaseline from "@mui/material/CssBaseline";
import MedicalRecordForm from "@Pages/MedicalRecordForm";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/patient/:profileId"} element={<Patient />} />
        <Route path={"/create"} element={<PatientForm />} />
        <Route path={"/edit/:profileId"} element={<PatientForm />} />
        <Route
          path={"/patient/:profileId/create"}
          element={<MedicalRecordForm />}
        />
      </Routes>
    </>
  );
}

export default App;
