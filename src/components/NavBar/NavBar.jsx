import React, { useState } from "react";
import Global from "../../images/Global";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Button,
  Menu,
  Select,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Information from "../../images/Information";
import { useButtonStyles } from "../Button/styles";

import Account from "../../images/Account";
import { languageMenu, languageSelect, useNavBarStyles } from "./Styles";
import { theme } from "../../styles/Theme";

export default function NavBar() {
  const navigate = useNavigate();

  const classes = useButtonStyles();
  const navBarClasses = useNavBarStyles();
  const langMenu = languageMenu();
  const langSelect = languageSelect();

  const [language, setLanguage] = useState("EN");
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <AppBar position="static" sx={navBarClasses.appBar}>
      <Toolbar sx={navBarClasses.toolBar}>
        <Typography color={theme.palette.grey.grey}>Tenants</Typography>
        <Stack direction="row" marginLeft="auto">
          <Select
            className={langSelect.root}
            value={language}
            onChange={handleChange}
            renderValue={(value) => value}
            MenuProps={{
              getContentAnchorEl: null,
              anchorOrigin: {
                vertical: 37,
                horizontal: 40,
              },
              className: langMenu.root,
            }}
            IconComponent={() => null}
            startAdornment={
              <InputAdornment position="start">
                <Global />
              </InputAdornment>
            }
          >
            <MenuItem value={"EN"} sx={{ fontSize: "14px" }}>
              EN⠀English
            </MenuItem>
            <MenuItem value={"RU"} sx={{ fontSize: "14px" }}>
              RU⠀Russian
            </MenuItem>
          </Select>

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
