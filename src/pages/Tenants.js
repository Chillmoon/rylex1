import React from "react";
import { Grid, Stack, Button, Box } from "@mui/material";
import { useButtonStyles } from "../components/Button/styles";
import LogoWithName from "../components/LogoWithName";
import NavBar from "../components/NavBar/NavBar";
import TenantsTable from "../components/TenantsTable/TenantsTable";
import CarbonHome from "../images/CarbonHome";
import Search from "../images/Search";
import MuiTable from "../components/TenantsTable/MuiTable";

export default function Tenants() {
  const classes = useButtonStyles();
  return (
    <>
      <Grid container height={"100vh"}>
        <Grid
          sm={2}
          xs={5}
          display="flex"
          flexDirection="column"
          sx={{ backgroundColor: "#1AAA8D" }}
        >
          <LogoWithName color="#fff" />
          <Stack margin="90px 30% 0 15%">
            <Button
              href="#"
              startIcon={<CarbonHome />}
              sx={classes.buttonLink.active}
            >
              Tenants
            </Button>
            <Button
              href="#"
              startIcon={<Search />}
              sx={classes.buttonLink.nonActive}
            >
              Search
            </Button>
          </Stack>
        </Grid>
        <Grid sm={10} xs={7} display="flex" flexDirection="column">
          <NavBar />

          {/* <TenantsTable /> */}
          {/* <MuiTable /> */}
        </Grid>
      </Grid>
    </>
  );
}
