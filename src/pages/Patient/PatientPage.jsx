import React, { useEffect, useState } from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoCard from "@Components/InfoCard";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import PatientList from "@Components/PatientList";
import nftAccessLog from "@Mock/nftAccessLog";

const Patient = () => {
  const title = "Regular Health Check Patient Profile";
  const [patientProfile, setPatientProfile] = useState({});
  const [medicalRecordData, setMedicalRecordData] = useState({
    id: "",
    description: "",
    severity: "",
    symptom: "",
    diagnosis: "",
    treatment: "",
    patients: {},
  });
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const currentPathArray = currentPath.split("/");
  const profileId = currentPathArray[2];
  const [medicalRecordId, setMedicalRecordId] = useState(null);

  useEffect(() => {
    getPatientById();
    getMedicalRecordsByPatientId();
  }, []);

  const getPatientById = async () => {
    const response = await fetch(
      `http://localhost:8080/patient-by-id/${profileId}`
    ).then((response) => response.json());
    console.log("response", response);
    setPatientProfile({
      name: response.name,
      age: response.age,
      phoneNo: response.phoneNo,
      email: response.email,
      gender: response.gender,
    });
  };

  const getMedicalRecordsByPatientId = async () => {
    const response = await fetch(
      `http://localhost:8080/medical-record-by-patient-id/${profileId}`
    ).then((response) => response.json());
    console.log("response", response);
    // update the state
    setMedicalRecordData(response);
    setIsLoading(false);
  };

  return isLoading ? (
    <PageLayout>
      <Typography
        variant="h3"
        fontWeight="bold"
        textTransform="capitalize"
        sx={{ pt: 1 }}
      >
        Loading...
      </Typography>
    </PageLayout>
  ) : (
    <PageLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ m: 2, mb: 0 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Patient Profile</Typography>
          </Breadcrumbs>
          <Typography
            variant="h3"
            fontWeight="bold"
            textTransform="capitalize"
            sx={{ pt: 1 }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoCard
            props={
              medicalRecordId
                ? medicalRecordData.filter((record) => {
                    return medicalRecordId == record.id;
                  })[0]
                : patientProfile
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PatientList
            title="Medical Record"
            list={medicalRecordData}
            icon="history"
            noViewMore={false}
          />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Patient;
