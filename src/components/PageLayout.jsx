import React from "react";
import Typography from "@mui/material/Typography";

import ClippedDrawer from "@Components/SideNav/ClippedDrawer";
import Grid from "@mui/material/Grid";

const PageTitle = ({ title }) => {
  if (!title) return <></>;
  return (
    <>
      <Grid sx={{ mb: 1 }} justifyContent="center">
        <Typography
          variant="h2"
          fontWeight="bold"
          textTransform="capitalize"
          sx={{ pt: 1, m: { md: "auto" } }}
          width="50%"
        >
          {title}
        </Typography>
      </Grid>
    </>
  );
};
const PageLayout = ({ children, title }) => {
  return (
    <ClippedDrawer title={title}>
      <PageTitle title={title} />
      {children}
    </ClippedDrawer>
  );
};

export default PageLayout;
