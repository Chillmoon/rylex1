import React, { useState } from "react";
import Global from "../../images/Global";
import {
  AppBar,
  Stack,
  Toolbar,
  IconButton,
  MenuItem,
  Select,
  InputAdornment,
  Link,
  SelectChangeEvent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Information from "../../images/Information";
import { useButtonStyles } from "../Button/styles";

import Account from "../../images/Account";
import { languageMenu, languageSelect, useNavBarStyles } from "./Styles";
import { theme } from "../../styles/Theme";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const navigate = useNavigate();

  const classes = useButtonStyles();
  const navBarClasses = useNavBarStyles();
  const langMenu = languageMenu();
  const langSelect = languageSelect();

  // const dispatch = useDispatch();
  // const language = useSelector((state) => state.localization.language);

  const [language, setLanguage] = useState("EN");
  const { t } = useTranslation();
  const handleChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value);
    i18next.changeLanguage(event.target.value);
  };

  return (
    <AppBar position="static" sx={navBarClasses.appBar}>
      <Toolbar sx={navBarClasses.toolBar}>
        <Link
          sx={{
            color: theme.palette.grey.A700,
            textDecoration: "none",
            "&:hover": { cursor: "pointer" },
          }}
          onClick={() => {
            navigate("/tenants");
          }}
        >
          {t("tenants")}
        </Link>
        <Stack direction="row" marginLeft="auto">
          <Select
            className={langSelect.root}
            value={language}
            onChange={handleChange}
            renderValue={(value) => value}
            MenuProps={{
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
            <MenuItem value={"en"} sx={{ fontSize: "14px" }}>
              EN⠀English
            </MenuItem>
            <MenuItem value={"ru"} sx={{ fontSize: "14px" }}>
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
