import React from "react";
import { TextField, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { useStyles } from "./styles";
import { theme } from "../../styles/Theme";

export default function Input({ name, error, touched }) {
  const classes = useStyles();
  return (
    <>
      <Field
        as={TextField}
        sx={classes.searchInput}
        name={name}
        error={touched && error ? true : false}
        autoComplete="off"
      />
      <ErrorMessage
        sx={{
          fontSize: "12px",
          color: theme.palette.error.main,
          margin: "-9px",
        }}
        component={Typography}
        name={name}
      />
    </>
  );
}
