import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const PatientForm = () => {
  let currentAccount, sendTransaction, formData;
  const navigate = useNavigate();

  const onSubmit = () => {
    if (!currentAccount) return;
    formData.addressTo = "0xa48cC8b41b1887Ac2d012751018Db9B495A5887c"; //seller acc
    formData.amount = "0.000016"; //price of product in ETH
    formData.keyword = "test";
    formData.message = "test";
    sendTransaction()
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        navigate("/");
      });
  };

  async function createMarket() {
    navigate("/create");
  }

  return (
    <PageLayout title={"Create Patient"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* <Form onSubmit={onSubmit} /> */}
          <Form onSubmit={createMarket} />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <InfoCard description="The patient has suffered for weeks" /> */}
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default PatientForm;
