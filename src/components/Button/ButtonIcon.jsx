import React from "react";
import { IconButton, Box } from "@mui/material";

export default function ButtonIcon({ icon, size, color, disabled, onClick }) {
  return (
    <IconButton disableRipple onClick={onClick} disabled={disabled} size={size}>
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
    </IconButton>
  );
}
