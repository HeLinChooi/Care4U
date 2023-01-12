import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import routes from "../../router";

const PatientListItem = ({ id, title, desc, onClick = () => {} }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentPathArray] = useState(window.location.pathname.split("/"));

  const handleOnDelete = async (event) => {
    event.stopPropagation();
    if (currentPathArray[1] === "patient") {
      const response = await fetch(
        `http://localhost:8080/medical-record/${id}`,
        { method: "DELETE" }
      ).then((response) => response.text());
      console.log("response", response);
      navigate(routes.patient.replace(":profileId", currentPathArray[2]));
    } else {
      const response = await fetch(
        `http://localhost:8080/delete-patient-by-id/${id}`,
        { method: "DELETE" }
      ).then((response) => response.text());
      console.log("response", response);
    }
    window.location.reload();
  };

  const handleOnEdit = async (event) => {
    event.stopPropagation();
    if (currentPathArray[1] === "patient") {
      navigate(
        routes.editRecord
          .replace(":profileId", currentPathArray[2])
          .replace(":medicalRecordId", id)
      );
    } else {
      navigate(routes.editPatient.replace(":profileId", id));
    }
  };

  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            backgroundColor: theme.palette.grey["100"],
            cursor: "pointer",
          },
        }}
        onClick={onClick}
      >
        <ListItemAvatar>
          <Avatar alt={title} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body1">{title}</Typography>
              </Grid>
              <Grid item>
                {/* <Typography component="span" variant="body2">
                  {date.toLocaleDateString("en-gb")}
                </Typography> */}
              </Grid>
            </Grid>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {desc}
              </Typography>
              {/* <Typography component="span" variant="body2">
                &nbsp;-&nbsp;
                {reason}
              </Typography> */}
            </React.Fragment>
          }
        />
        <>
          <Button
            variant="contained"
            color="info"
            sx={{
              margin: "10px",
              paddingTop: "8px",
            }}
            onClick={(event) => handleOnEdit(event)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            sx={{
              margin: "10px",
              paddingTop: "8px",
            }}
            onClick={(event) => handleOnDelete(event)}
          >
            Delete
          </Button>
        </>
      </ListItem>
    </>
  );
};

export default PatientListItem;
