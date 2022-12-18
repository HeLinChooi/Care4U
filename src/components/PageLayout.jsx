import React from "react";
import Header from "@Components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ClippedDrawer from "@Components/SideNav/ClippedDrawer";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("sm"));
  if (isMdUp) {
    return (
      <ClippedDrawer title={title}>
        <PageTitle title={title} />
        {children}
      </ClippedDrawer>
    );
  }
  return (
    <>
      <Header />
      <Box
        sx={{
          padding: { xs: "10px", md: "20px" },
          paddingBottom: "67px",
          // margin: "10px",
          // marginBottom: "67px",
          height: "calc(100% - 56px)",
        }}
      >
        <PageTitle title={title} />
        {children}
      </Box>
    </>
  );
};

export default PageLayout;
