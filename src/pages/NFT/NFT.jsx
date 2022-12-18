import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InfoCard from "@Components/InfoCard";
import MDBreadcrumbs from "@Components/MDBreadcrumbs";
import MDNFTList from "@Components/MDNFTList";
import nftAccessLog from "@Mock/nftAccessLog";

const NFT = () => {
  const title = "Regular Health Check NFT";
  const description = "The patient has suffered for weeks";
  return (
    <PageLayout>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ m: 2, mb: 0 }}>
          <MDBreadcrumbs
            list={[{ label: "Home", link: "/" }]}
            currentDirectory="NFT"
          />
          <Typography
            variant="h3"
            fontWeight="bold"
            textTransform="capitalize"
            sx={{ pt: 1 }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <InfoCard description={description} />
        </Grid>
        <Grid item xs={12} md={6}>
          <MDNFTList
            title="NFT Access Log"
            list={nftAccessLog.filter((log) => log.title === title)}
            icon="history"
            noViewMore
          />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default NFT;
