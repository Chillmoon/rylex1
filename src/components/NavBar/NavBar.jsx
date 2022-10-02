import React from "react";
import Global from "../../images/Global";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Information from "../../images/Information";
import { useButtonStyles } from "../Button/styles";

import Account from "../../images/Account";
import { useNavBarStyles } from "./Styles";
import { theme } from "../../styles/Theme";

export default function NavBar() {
  const navigate = useNavigate();
  const classes = useButtonStyles();
  const navBarClasses = useNavBarStyles();
  return (
    <AppBar position="static" sx={navBarClasses.appBar}>
      <Toolbar sx={navBarClasses.toolBar}>
        <Typography color={theme.palette.grey.grey}>Tenants</Typography>
        <Stack direction="row" marginLeft="auto">
          <Button href="#" startIcon={<Global />} sx={classes.iconButton}>
            EN
          </Button>
          <IconButton href="#" sx={classes.iconButton}>
            <Information />
          </IconButton>
          <IconButton
            href="#"
            sx={classes.iconButton}
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/signin");
            }}
          >
            <Account />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
