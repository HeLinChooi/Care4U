import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import md from "@Mock/boxShadow";

const InfoCard = ({ props }) => {
  const [data, setData] = useState(props);
  const [medicalRecord, setMedicalRecord] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const currentPathArray = currentPath.split("/");
  const profileId = currentPathArray[2];
  const [medicalRecordId, setMedicalRecordId] = useState(null);
  const labels = [];
  const values = [];
  const info = medicalRecordId
    ? {
        "First Symptoms": data.symptom,
        Diagnosis: data.diagnosis,
        // "Has the patient previously suffered from the same complaints": "Yes",
        "Brief description of treatment already given": data.treatment,
        // "Reason for referral for specialist treatment": "-",
      }
    : {
        age: 80,
        gender: true,
        phoneNo: "012-3456799",
        email: "GreatDickson@gmail.com",
      };

  useEffect(() => {
    if (currentPathArray.length === 4) {
      setMedicalRecordId(currentPathArray[3]);
    } else {
      setMedicalRecordId(null);
    }
  }, [currentPath]);

  useEffect(() => {
    if (medicalRecordId) {
      getMedicalRecordsById();
    }
  }, [medicalRecordId]);

  const getMedicalRecordsById = async () => {
    const response = await fetch(
      `http://localhost:8080/medical-record-by-id/${medicalRecordId}`
    ).then((response) => response.json());
    console.log("response", response);
    setData(response);
  };

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(
        uppercaseLetter,
        ` ${uppercaseLetter.toLowerCase()}`
      );

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <Box key={label} py={1} pr={2}>
      <Typography variant="button" fontWeight="bold" textTransform="capitalize">
        {label}: &nbsp;
      </Typography>
      <Typography variant="body1" fontWeight="regular" color="text">
        {values[key] === true
          ? "Male"
          : values[key] === false
          ? "Female"
          : values[key]}
      </Typography>
    </Box>
  ));

  return (
    <Card
      sx={{
        height: "100%",
        bgcolor: "background.paper",
        borderRadius: "0.75rem",
        boxShadow: md,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pt={2}
        px={2}
      >
        <Typography variant="h6" fontWeight="bold" textTransform="capitalize">
          {medicalRecordId ? "Description" : "Patient Name"}
        </Typography>
      </Box>
      <Box p={2}>
        <Box mb={2} lineHeight={1}>
          <Typography variant="body1" color="text" fontWeight="light">
            {medicalRecordId ? data.description : data.name}
          </Typography>
        </Box>
        <Box opacity={0.3}>
          <Divider />
        </Box>
        {medicalRecordId ? (
          <Box>
            <Grid container alignItems="center" py={1} pr={2}>
              <Typography
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
              >
                {"Severity"}: &nbsp;
              </Typography>
              <Chip
                label={data.severity}
                color="warning"
                size="small"
                sx={{ color: "white" }}
              />
            </Grid>
          </Box>
        ) : (
          <></>
        )}
        <Box>{renderItems}</Box>
      </Box>
    </Card>
  );
};

export default InfoCard;
