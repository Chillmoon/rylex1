import React, { MouseEventHandler } from "react";
import { Button, Box } from "@mui/material";
import { useButtonStyles } from "./styles";
import { PropsButton } from "../../types/types";

export default function ButtonWithIcon({
  type,
  icon,
  text,
  onClick,
}: PropsButton) {
  const classes = useButtonStyles();

  return (
    <Button
      disableRipple
      variant="contained"
      type={type}
      onClick={onClick}
      endIcon={<Box sx={classes.iconInButton}>{icon}</Box>}
      sx={text == "Cancel" ? classes.cancel : classes.button}
    >
      {text}
    </Button>
  );
}
