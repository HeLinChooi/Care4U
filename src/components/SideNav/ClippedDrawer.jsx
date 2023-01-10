import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useUserContext } from "../../UserContext";
import routes from "../../router";

function HeaderIcon({ icon, handleClickHeaderNav }) {
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClickHeaderNav}
        color="inherit"
      >
        {icon}
      </IconButton>
    </>
  );
}

export default function ClippedDrawer({ children }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logout } = useUserContext();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ display: { xs: "block" }, pl: 2, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Care4U
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <HeaderIcon
            icon={<AccountCircleIcon />}
            handleClickHeaderNav={handleMenu}
          />
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => navigate(routes.myProfile)}>
              My Profile
            </MenuItem>
            <MenuItem onClick={() => logout()}>Log out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1, p: 3, maxWidth: "calc(100%)" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
