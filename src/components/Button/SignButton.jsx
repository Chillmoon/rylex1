import React from "react";
import { Button } from "@mui/material";
import { useButtonStyles } from "./styles";

export default function SignButton({ text, onClick, type }) {
  const classes = useButtonStyles();

  return (
    <Button
      variant="contained"
      sx={classes.signbutton}
      onClick={onClick}
      type={type}
    >
      {text}
    </Button>
  );
}
