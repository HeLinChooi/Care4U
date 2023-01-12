import React, { useEffect, useState } from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoCard from "@Components/InfoCard";
import MDBreadcrumbs from "@Components/MDBreadcrumbs";
import PatientList from "@Components/PatientList";
import routes from "../../router";

const Patient = () => {
  const title = "Regular Health Check Patient Profile";
  const [patientProfile, setPatientProfile] = useState({});
  const [medicalRecordData, setMedicalRecordData] = useState([
    {
      id: "",
      description: "",
      severity: "",
      symptom: "",
      diagnosis: "",
      treatment: "",
      patients: {},
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath] = useState(window.location.pathname);
  const currentPathArray = currentPath.split("/");
  const profileId = currentPathArray[2];
  let unmounted = false;

  useEffect(() => {
    getPatientById();
    getMedicalRecordsByPatientId();
    return () => {
      unmounted = true;
    };
  }, []);

  const getPatientById = async () => {
    if (unmounted) return;
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
    if (unmounted) return;
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
          <MDBreadcrumbs
            currentDirectory={
              currentPathArray.length === 3
                ? "Patient Profile"
                : "Medical Record"
            }
            list={
              currentPathArray.length === 3
                ? [{ label: "Home", link: routes.home }]
                : [
                    { label: "Home", link: routes.home },
                    {
                      label: "Patient Profile",
                      link: routes.patient.replace(
                        ":profileId",
                        currentPathArray[2]
                      ),
                    },
                  ]
            }
          />
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
          <InfoCard props={patientProfile} />
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
