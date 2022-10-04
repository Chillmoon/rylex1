import React from "react";
import { Button, Box } from "@mui/material";
import { useButtonStyles } from "./styles";

export default function ButtonWithIcon({ type, icon, text, onClick }) {
  const classes = useButtonStyles();

  return (
    <Button
      disableRipple
      variant="contained"
      type={type}
      onClick={onClick}
      endIcon={<Box sx={classes.iconInButton}>{icon}</Box>}
      sx={type == "cancel" ? classes.cancel : classes.button}
    >
      {text}
    </Button>
  );
}
