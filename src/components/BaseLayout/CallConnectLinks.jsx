import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Business from "../../images/Business";
import Search from "../../images/Search";
import { useButtonStyles } from "../Button/styles";
import { theme } from "../../styles/Theme";
import Phone from "../../images/Phone";
import Teamwork from "../../images/Teamwork";
import Privacy from "../../images/Privacy";
import PersonOutline from "../../images/PersonOutline";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function CallConnectLinks() {
  const { t } = useTranslation();
  const classes = useButtonStyles();
  const navigate = useNavigate();
  return (
    <>
      <Stack margin="90px 30% 0 15%">
        <Button
          href="#"
          startIcon={<Business />}
          sx={classes.buttonLink.active}
        >
          {t("call_connect")}
        </Button>
        <div
          style={{
            borderTop: `1px solid ${theme.palette.primary.greenActive} `,
            marginLeft: "-30%",
            marginRight: "-54%",
            marginBottom: "15px",
          }}
        ></div>
        <Button
          href="#"
          startIcon={<Teamwork />}
          sx={classes.buttonLink.nonActive}
        >
          {t("groups")}
        </Button>
        <Button
          startIcon={<Phone />}
          type="submit"
          sx={classes.buttonLink.nonActive}
        >
          {t("phone_number")}
        </Button>
        <Button
          href="#"
          startIcon={<Privacy />}
          sx={classes.buttonLink.nonActive}
        >
          {t("admins")}
        </Button>
        <Button
          href="#"
          startIcon={
            <Box
              sx={{
                fill: theme.palette.primary.white,
                "& path": {
                  fill: theme.palette.primary.white,
                },
              }}
            >
              <PersonOutline />
            </Box>
          }
          sx={classes.buttonLink.nonActive}
        >
          {t("users")}
        </Button>
        <Button
          href="#"
          startIcon={
            <Box
              sx={{
                fill: theme.palette.primary.white,
                "& path": {
                  fill: theme.palette.primary.white,
                },
              }}
            >
              <Search />
            </Box>
          }
          sx={classes.buttonLink.nonActive}
        >
          {t("search")}
        </Button>
      </Stack>
    </>
  );
}
