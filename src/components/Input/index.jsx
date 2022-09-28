import React from "react";
import { TextField, InputAdornment, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { ErrorMessage, Field } from "formik";
import { theme } from "../../styles/Theme";

export default function MyInput({ placeholder, icon, name }) {
  const classes = useStyles();

  return (
    <>
      <Field
        as={TextField}
        required
        name={name}
        color="secondary"
        autoComplete="off"
        sx={classes.input}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        placeholder={`${placeholder}`}
      />
      <ErrorMessage
        sx={{
          fontSize: "12px",
          color: theme.palette.error.main,
        }}
        component={Typography}
        name={name}
      />
    </>
  );
}

//
