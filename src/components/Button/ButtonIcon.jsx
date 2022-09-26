import React from "react";
import { IconButton, Box } from "@mui/material";

export default function ButtonIcon({ icon, size, color }) {
  return (
    <IconButton
      size={size}
      sx={{
        background: "#FFFFFF",
        color: "#FFFFFF",
        border: "1px solid #1AAA8D",
        boxShadow: "none",
        margin: "10px",

        "&:hover": {
          border: "1px solid #1AAA8D",
          background: "#fff !important",
          boxShadow: "none",
          color: "#1AAA8D",
        },
        "&:active": {
          background: "#08795A !important",
          transition: "none",
          boxShadow: "none",
        },
        "&:disabled": {
          border: "2px solid transparent",
          background: "#D1D1D1",
          boxShadow: "none",
        },
      }}
    >
      <Box
        sx={{
          fill: { color },
          "& path": {
            cursor: "pointer",
            fill: { color },
          },
        }}
      >
        {icon}
      </Box>
      {icon}
    </IconButton>
  );
}
