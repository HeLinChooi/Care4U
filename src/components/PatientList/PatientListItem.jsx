import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const PatientListItem = ({ id, name, phoneNo, onClick = () => {} }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleOnDelete = async (event) => {
    event.stopPropagation();
    const response = await fetch(
      `http://localhost:8080/delete-patient-by-id/${id}`,
      { method: "DELETE" }
    ).then((response) => response.text());
    console.log("response", response);
    window.location.reload();
  };

  const handleOnEdit = async (event) => {
    event.stopPropagation();
    navigate(`/edit/${id}`);
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
          <Avatar alt={name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body1">{name}</Typography>
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
                {phoneNo}
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
