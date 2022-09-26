import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useStyles } from "./styles";
import { Field } from "formik";

export default function MyInput({ placeholder, icon, name, helperText, id }) {
  const classes = useStyles();
  return (
    <Field
      as={TextField}
      name={name}
      id={id}
      helperText={helperText}
      color="secondary"
      autoComplete="off"
      sx={classes.input}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      placeholder={placeholder}
    />
  );
}

//
