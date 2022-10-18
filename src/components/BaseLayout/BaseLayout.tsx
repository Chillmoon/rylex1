import { Grid } from "@mui/material";
import React from "react";
import LogoWithName from "../LogoWithName/LogoWithName";
import NavBar from "../NavBar/NavBar";
import { theme } from "../../styles/Theme";

type PropsBaseLayout = {
  baseComponent: React.FC;
  links: React.FC;
};

export default function BaseLayout({ baseComponent, links }: PropsBaseLayout) {
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
        <LogoWithName color={theme.palette.common.white} />
        {links}
      </Grid>
      <Grid item sm={10} xs={7} display="flex" flexDirection="column">
        <NavBar />
        {baseComponent}
      </Grid>
    </Grid>
  );
}
