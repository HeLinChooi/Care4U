import React from "react";
import BottomNavigation from "@Components/BottomNavigation";
import Header from "@Components/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ClippedDrawer from "@Components/SideNav/ClippedDrawer";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const PageTitle = ({ title }) => {
  if (!title) return <></>;
  return (
    <>
      <Box sx={{ mb: 1, ml: { xs: 0 } }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          textTransform="capitalize"
          sx={{ pt: 1 }}
        >
          {title}
        </Typography>
      </Box>
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
      <BottomNavigation />
    </>
  );
};

export default PageLayout;
