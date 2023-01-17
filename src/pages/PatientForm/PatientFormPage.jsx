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
  const url = window.location.pathname.split("/")[1];

  const handleOnSubmit = async (formData) => {
    if (!formData) {
      return;
    } else {
      const requestOptions = {
        method: url === "create-patient" ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...(url !== "create-patient"
            ? { id: window.location.pathname.split("/")[2] }
            : {}),
          name: formData.name,
          age: formData.age,
          gender: formData.gender,
          phoneNo: formData.phoneNo,
          email: formData.email,
        }),
      };
      const response = await fetch(
        `https://care4u-spring-boot-production.up.railway.app/patient`,
        requestOptions
      ).then((response) => {
        console.log("response", response);
        response.json();
      });
      console.log("response", response);
      if (response && response.error !== null) {
        alert(response.error);
      } else {
        // TODO: check
        navigate(routes.home);
      }
    }
  };

  // async function createMarket() {
  //   navigate("/create");
  // }

  return (
    <PageLayout
      title={`${url[0].toUpperCase()}${url.substring(1)}`.replace("-", " ")}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Form onSubmit={handleOnSubmit} />
          {/* <Form onSubmit={createMarket} /> */}
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default PatientForm;
