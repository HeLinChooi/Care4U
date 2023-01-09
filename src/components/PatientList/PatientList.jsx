import React from "react";
import PatientListItem from "./PatientListItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { useNavigate } from "react-router-dom";
import md from "@Mock/boxShadow";
import { Button } from "@mui/material";

const PatientList = ({ title, list = [], icon, noViewMore = false }) => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 1, pl: 0 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", fontWeight: "bold" }}>
          <Icon>{icon}</Icon>
          <Typography variant="h6" sx={{ pl: 1 }}>
            {title}
          </Typography>
        </Box>
        {!noViewMore && (
          <>
            <Button variant="contained" onClick={() => navigate("/create")}>
              Create
            </Button>
          </>
        )}
      </Grid>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          borderRadius: "0.75rem",
          boxShadow: md,
          padding: 0,
        }}
      >
        {list.map((item, idx) => {
          const { id, name, phoneNo } = item;
          const onClick = () => navigate(`/patient/${id}`);
          return (
            <React.Fragment key={idx}>
              <PatientListItem
                id={id}
                name={name}
                phoneNo={phoneNo}
                onClick={onClick}
              />
              {idx !== list.length - 1 && <Divider />}
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};

export default PatientList;
