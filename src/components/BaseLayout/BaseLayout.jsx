import { Grid } from "@mui/material";
import React from "react";
import LogoWithName from "../LogoWithName/LogoWithName";
import NavBar from "../NavBar/NavBar";
import { useButtonStyles } from "../Button/styles";
import { theme } from "../../styles/Theme";

export default function BaseLayout({ baseComponent, links }) {
  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sm={2}
        xs={5}
        display="flex"
        flexDirection="column"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <LogoWithName color={theme.palette.primary.white} />
        {links}
      </Grid>
      <Grid sm={10} xs={7} display="flex" flexDirection="column">
        <NavBar />
        {baseComponent}
      </Grid>
    </Grid>
  );
}
