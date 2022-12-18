import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TokenIcon from "@mui/icons-material/Token";
import { useNavigate } from "react-router";

import { useContext } from "react";

import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { styled, alpha } from "@mui/material/styles";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const SideBarList = ({ toggleDrawer = () => {} }) => {
  function sendTransaction() {}
  let formData;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    formData.addressTo = "0xa48cC8b41b1887Ac2d012751018Db9B495A5887c"; //seller acc
    formData.amount = "0.000001"; //price of product in ETH
    formData.keyword = "test";
    formData.message = "test";

    console.log(formData);

    e.preventDefault();

    // if (!addressTo || !amount || !keyword || !message) return;
    sendTransaction();
  };

  const goTo = (text) => {
    console.log("go to: " + text);
    if (text == "My Cart") {
      console.log("wallet");
    }
  };

  const navigations = [
    {
      link: "/nft-creation",
      label: "Create NFT",
      icon: <TokenIcon />,
    },
    {
      link: "/my-cart",
      label: "My Cart",
      icon: <ShoppingCartIcon />,
    },
  ];

  const toTwoDigit = (number) => {
    return number.toFixed(2);
  };

  const shortenString = (str) => {
    return str.slice(0, 18) + "...";
  };

  return (
    <>
      <Box
        sx={{ width: { xs: 250, sm: "auto" } }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {navigations.map((navItem, index) => (
            <ListItem
              button
              key={navItem.label}
              onClick={() => {
                if (!navItem.link) return;
                navigate(navItem.link);
              }}
            >
              <ListItemIcon>{navItem.icon}</ListItemIcon>
              <ListItemText primary={navItem.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default SideBarList;
