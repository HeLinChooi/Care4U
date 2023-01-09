import React, { useEffect, useState } from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import PatientList from "@Components/PatientList";
import "./Home.scss";

const Home = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    getPatients();
  }, []);

  const getPatients = async () => {
    const response = await fetch("http://localhost:8080/patients").then(
      (response) => response.json()
    );
    console.log("response", response);
    // update the state
    setPatients(response);
  };

  return (
    <PageLayout title={"Home"}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <PatientList title="Patient Profile" list={patients} icon="list" />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
