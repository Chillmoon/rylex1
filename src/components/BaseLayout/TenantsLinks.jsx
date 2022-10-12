import { Box, Button, Stack } from "@mui/material";
import React from "react";
import CarbonHome from "../../images/CarbonHome";
import Search from "../../images/Search";
import { useButtonStyles } from "../Button/styles";
import { theme } from "../../styles/Theme";
import { useTranslation } from "react-i18next";

export default function TenantsLinks() {
  //Translation
  const { t } = useTranslation();

  const classes = useButtonStyles();
  return (
    <Stack margin="90px 30% 0 15%">
      <Button
        href="#"
        startIcon={<CarbonHome />}
        sx={classes.buttonLink.active}
      >
        {t("tenants")}
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
  );
}
