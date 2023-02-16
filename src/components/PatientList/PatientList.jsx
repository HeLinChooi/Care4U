import React, { useState } from "react";
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
import routes from "../../router";

const PatientList = ({ title, list = [], icon, noViewMore = false }) => {
  const navigate = useNavigate();
  const [currentPath] = useState(window.location.pathname);
  const currentPathArray = currentPath.split("/");
  const profileId = currentPathArray[2];

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
            <Button
              variant="contained"
              onClick={() =>
                navigate(
                  currentPath === "/home"
                    ? routes.createPatient
                    : routes.createRecord.replace(":profileId", profileId)
                )
              }
            >
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
        {list &&
          list.map((item, idx) => {
            const { id } = item;
            const onClick = () => {
              if (currentPath === "/home") {
                navigate(routes.patient.replace(":profileId", id));
              } else {
                // navigate(
                //   routes.medicalRecord
                //     .replace(":profileId", profileId)
                //     .replace(":medicalRecordId", id)
                // );
                window.location.href = routes.medicalRecord
                  .replace(":profileId", profileId)
                  .replace(":medicalRecordId", id);
              }
            };
            return (
              <React.Fragment key={idx}>
                <PatientListItem
                  id={item.id}
                  title={currentPath === "/home" ? item.name : item.diagnosis}
                  desc={currentPath === "/home" ? item.phoneNo : item.symptom}
                  onClick={onClick}
                  // onClick={() => {
                  //   currentPath === "/home"
                  //     ? setPathName(item.id)
                  //     : setPathName(`${profileId}/${item.id}`);
                  // }}
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
