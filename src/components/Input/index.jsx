import React from "react";
import { TextField, InputAdornment, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { ErrorMessage, Field } from "formik";
import { theme } from "../../styles/Theme";
import { useState } from "react";

export default function MyInput({ placeholder, icon, name, error, touched }) {
  const classes = useStyles();

  return (
    <>
      <Field
        as={TextField}
        required
        name={name}
        error={touched && error ? true : false}
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
