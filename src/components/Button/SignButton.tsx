import React, { MouseEventHandler } from "react";
import { Button } from "@mui/material";
import { useButtonStyles } from "./styles";
import { PropsButton } from "../../types/types";

export default function SignButton({ text, onClick, type }: PropsButton) {
  const classes = useButtonStyles();

  return (
    <Button
      disableRipple
      variant="contained"
      sx={classes.signbutton}
      onClick={onClick}
      type={type}
    >
      {text}
    </Button>
  );
}
