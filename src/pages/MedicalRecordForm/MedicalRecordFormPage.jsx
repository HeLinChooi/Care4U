import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const PatientForm = () => {
  // let currentAccount, sendTransaction;
  const navigate = useNavigate();
  const url = window.location.pathname.split("/")[3];
  const profileId = window.location.pathname.split("/")[2];
  console.log(url[0].toUpperCase());

  const handleOnSubmit = async (formData) => {
    if (!formData) {
      return;
    } else {
      const requestOptions = {
        method: url === "create" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(url !== "create"
            ? { id: window.location.pathname.split("/")[2] }
            : {}),
          patient_id: profileId,
          description: "THIS IS bad",
          severity: "severity string",
          symptom: "severe symptom here",
          diagnosis: "diagnosis string",
          treatment: "treatment string",
        }),
      };
      console.log(formData);
      const response = await fetch(
        "http://localhost:8080/medical-record",
        requestOptions
      ).then((response) => response.json());
      console.log("response", response);
      navigate("/");
    }
  };

  // async function createMarket() {
  //   navigate("/create");
  // }

  return (
    <PageLayout
      title={`${url[0].toUpperCase()}${url.substring(1)} Medical Record`}
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
