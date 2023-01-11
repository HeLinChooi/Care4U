import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import md from "@Mock/boxShadow";
import BasicSelect from "./Select";

const Form = ({ onSubmit = (formData) => {} }) => {
  const [formData, setFormData] = useState({
    description: "",
    severity: "",
    symptom: "",
    diagnosis: "",
    treatment: "",
  });
  let isMounted = false;

  useEffect(() => {
    if (window.location.pathname.split("/")[4] === "edit") {
      const id = window.location.pathname.split("/")[3];
      const getMedicalRecordById = async () => {
        const response = await fetch(
          `http://localhost:8080/medical-record-by-id/${id}`
        ).then((response) => response.json());
        console.log("response", response);
        if (!isMounted) {
          setFormData({
            patient_id: response.patient.id,
            description: response.description,
            severity: response.severity,
            symptom: response.symptom,
            diagnosis: response.diagnosis,
            treatment: response.treatment,
          });
        }
      };
      getMedicalRecordById();
      return () => (isMounted = true);
    }
  }, []);

  const handleSeverityChange = (severity) => {
    setFormData({ ...formData, severity });
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
            label="Description"
            variant="outlined"
            multiline
            maxRows={4}
            minRows={4}
            fullWidth
            value={formData.description}
            onChange={(event) =>
              setFormData({ ...formData, description: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <BasicSelect
            onSeverityChange={handleSeverityChange}
            oldData={formData.severity ? formData.severity : ""}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="First Symptoms"
            variant="outlined"
            value={formData.symptom}
            onChange={(event) =>
              setFormData({ ...formData, symptom: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Diagnosis"
            variant="outlined"
            value={formData.diagnosis}
            onChange={(event) =>
              setFormData({ ...formData, diagnosis: event.target.value })
            }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Treatment"
            variant="outlined"
            helperText="Brief Description Of Treatment Already Given"
            fullWidth
            value={formData.treatment}
            onChange={(event) =>
              setFormData({ ...formData, treatment: event.target.value })
            }
          />
        </Grid>
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
