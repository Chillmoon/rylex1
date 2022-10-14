import React from "react";
import { Box, Link } from "@mui/material";
import Facebook from "../../images/Facebook";
import GooglePlus from "../../images/GooglePlus";
import { theme } from "../../styles/Theme";

export default function SocialLinks() {
  return (
    <section>
      <Link href="#">
        <Box
          sx={{
            fill: theme.palette.primary.black,
            "& path": {
              cursor: "pointer",
              fill: theme.palette.primary.black,
            },
            display: "inline-block",
            margin: "30px 20px",
          }}
        >
          <Facebook />
        </Box>
      </Link>
      <Link href="#">
        <Box
          sx={{
            fill: theme.palette.primary.black,
            "& path": {
              cursor: "pointer",
              fill: theme.palette.primary.black,
            },
            display: "inline-block",
          }}
        >
          <GooglePlus />
        </Box>
      </Link>
    </section>
  );
}
