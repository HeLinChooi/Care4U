import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import MDNFTList from "@Components/MDNFTList";
import "./Home.scss";
import nftAccessLog from "@Mock/nftAccessLog";

const Home = () => {
  return (
    <PageLayout title={"Home"}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <MDNFTList title="Patient Profile" list={nftAccessLog} icon="list" />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
