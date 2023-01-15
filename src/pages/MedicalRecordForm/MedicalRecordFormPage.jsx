import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import routes from "../../router";

const PatientForm = () => {
  // let currentAccount, sendTransaction;
  const navigate = useNavigate();
  const currentPathArray = window.location.pathname.split("/");
  const urlOrRecordId = currentPathArray[3];
  const profileId = currentPathArray[2];

  const handleOnSubmit = async (formData) => {
    if (!formData) {
      return;
    } else {
      const requestOptions = {
        method: urlOrRecordId === "create-medical-record" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(urlOrRecordId === "create-medical-record"
            ? { patient_id: profileId }
            : { id: urlOrRecordId }),
          description: formData.description,
          severity: formData.severity,
          symptom: formData.symptom,
          diagnosis: formData.diagnosis,
          treatment: formData.treatment,
        }),
      };
      const response = await fetch(
        "https://care4u-spring-boot-production.up.railway.app/medical-record",
        requestOptions
      ).then((response) => response.json());
      console.log("response", response);
      navigate(
        routes.medicalRecord
          .replace(":profileId", profileId)
          .replace(":medicalRecordId", response.id)
      );
    }
  };

  // async function createMarket() {
  //   navigate("/create");
  // }

  return (
    <PageLayout
      title={
        urlOrRecordId === "create-medical-record"
          ? `${urlOrRecordId[0].toUpperCase()}${urlOrRecordId.substring(
              1
            )}`.replaceAll("-", " ")
          : `Edit Medical Record`
      }
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Form onSubmit={handleOnSubmit} />
          {/* <Form onSubmit={createMarket} /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <InfoCard description="The patient has suffered for weeks" /> */}
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default PatientForm;
