import { IconButton, Box } from "@mui/material";
import React from "react";
import { PropsButton } from "../../types/types";

export default function ButtonIcon({
  icon,
  size,
  color,
  disabled,
  onClick,
}: PropsButton) {
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
