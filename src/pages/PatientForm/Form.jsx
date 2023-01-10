import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import md from "@Mock/boxShadow";
import BasicSelect from "./Select";

const Form = ({ onSubmit = (formData) => {} }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phoneNo: "",
    email: "",
    gender: "",
  });
  let isMounted = false;

  useEffect(() => {
    if (window.location.pathname.split("/")[1] === "edit") {
      const id = window.location.pathname.split("/")[2];
      const getPatientById = async () => {
        const response = await fetch(
          `http://localhost:8080/patient-by-id/${id}`
        ).then((response) => response.json());
        console.log("response", response);
        if (!isMounted) {
          setFormData({
            name: response.name,
            age: response.age,
            phoneNo: response.phoneNo,
            email: response.email,
            gender: response.gender,
          });
        }
      };
      getPatientById();
      return () => (isMounted = true);
    }
  }, []);

  const handleGenderChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleOnSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Card
      sx={{
        height: "100%",
        bgcolor: "background.paper",
        borderRadius: "0.75rem",
        boxShadow: md,
        p: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            fullWidth
            value={formData.name}
            onChange={(event) =>
              setFormData({ ...formData, name: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <BasicSelect
            onGenderChange={handleGenderChange}
            oldData={
              formData.gender === true || formData.gender === false
                ? formData.gender * 1
                : ""
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            type="number"
            fullWidth
            value={formData.age}
            onChange={(event) =>
              setFormData({ ...formData, age: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            type="text"
            fullWidth
            value={formData.phoneNo}
            onChange={(event) =>
              setFormData({ ...formData, phoneNo: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
        </Grid>

        {/* <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Treatment"
            variant="outlined"
            helperText="Brief Description Of Treatment Already Given"
            fullWidth
          />
        </Grid> */}
        <Grid item xs={12} container justifyContent="flex-end">
          <Button variant="contained" onClick={handleOnSubmit}>
            Done
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Form;
