import React from "react";
import { Button, Box } from "@mui/material";
import { useButtonStyles } from "./styles";

export default function ButtonWithIcon({ type, icon, text }) {
  const classes = useButtonStyles();

  return (
    <Button
      variant="contained"
      type={type}
      endIcon={<Box sx={classes.iconInButton}>{icon}</Box>}
      sx={classes.button}
    >
      {text}
    </Button>
  );
}
