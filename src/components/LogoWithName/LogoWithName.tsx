import React from "react";
import { Typography, Box } from "@mui/material";
import Logo from "../../images/Logo";

export default function LogoWithName({ color }: any) {
  return (
    <Box className="logo" sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "inline-block",
          position: "relative",
          left: "20%",
          top: "33px",

          // left: "130px",
          // top: "33px",
        }}
      >
        <Logo />
      </Box>

      <Typography
        sx={{
          fontSize: "18px !important",
          color: { color },
          fontWeight: "700 !important",
          display: "inline-block",
          position: "relative",
          left: "22%",
          top: "20px",
        }}
      >
        Rylex
      </Typography>
    </Box>
  );
}
