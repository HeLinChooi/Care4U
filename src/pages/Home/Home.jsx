import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import MDNFTList from "@Components/MDNFTList";
import "./Home.scss";
import nftAccessLog from "@Mock/nftAccessLog";
import nftList from "@Mock/nftList";

const Home = () => {
  return (
    <PageLayout title={"Home"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <MDNFTList
            title="NFT Access Log"
            list={nftAccessLog}
            icon="history"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MDNFTList title="My NFT" list={nftList} icon="token" />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
