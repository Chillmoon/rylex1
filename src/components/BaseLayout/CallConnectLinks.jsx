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

export default function CallConnectLinks() {
  const classes = useButtonStyles();
  return (
    <>
      <Stack margin="90px 30% 0 15%">
        <Button
          href="#"
          startIcon={<Business />}
          sx={classes.buttonLink.active}
        >
          CallConnect
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
          Groups
        </Button>
        <Button
          href="#"
          startIcon={<Phone />}
          sx={classes.buttonLink.nonActive}
        >
          Phone numbers
        </Button>
        <Button
          href="#"
          startIcon={<Privacy />}
          sx={classes.buttonLink.nonActive}
        >
          Admins
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
          Users
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
          Search
        </Button>
      </Stack>
    </>
  );
}
