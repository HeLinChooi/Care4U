import React from "react";
import MDListItem from "./MDListItem";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Link, useNavigate } from "react-router-dom";
import md from "@Mock/boxShadow";

const MDNFTList = ({ title, list = [], icon, noViewMore = false }) => {
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
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography variant="body2">View More</Typography>
            </Link>
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
          const { title, date, reason, accessorName, redirect } = item;
          const onClick = redirect ? () => navigate("/nft") : () => {};
          return (
            <React.Fragment key={idx}>
              <MDListItem
                title={title}
                date={date}
                reason={reason}
                accessorName={accessorName}
                onClick={onClick}
                redirect={redirect}
              />
              {idx !== list.length - 1 && <Divider />}
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};

export default MDNFTList;
