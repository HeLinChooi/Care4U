import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import md from "@Mock/boxShadow";
import BasicSelect from "./Select";

const Form = ({ onSubmit = () => {} }) => {
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
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <BasicSelect />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Age"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
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
          <Button variant="contained" onClick={onSubmit}>
            Done
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Form;
