import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "@Pages/Home";
import Patient from "@Pages/Patient";
import PatientForm from "@Pages/PatientForm";
import CssBaseline from "@mui/material/CssBaseline";
import MedicalRecordForm from "@Pages/MedicalRecordForm";
import LoginPage from "@Pages/Auth";
import routes from "./router";
import SignUpPage from "./pages/Auth/SignUpPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        {/* <Route path={routes.login} element={<LoginPage />} /> */}
        <Route path={routes.login} element={<Home />} />
        <Route path={routes.signUp} element={<SignUpPage />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.patient} element={<Patient />} />
        <Route path={routes.medicalRecord} element={<Patient />} />
        <Route path={routes.createPatient} element={<PatientForm />} />
        <Route path={routes.editPatient} element={<PatientForm />} />
        <Route path={routes.createRecord} element={<MedicalRecordForm />} />
      </Routes>
    </>
  );
}

export default App;
