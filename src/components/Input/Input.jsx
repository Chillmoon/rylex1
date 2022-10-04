import React from "react";
import { TextField, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { useStyles } from "./styles";
import { theme } from "../../styles/Theme";

export default function Input({ name, onChange, error, touched }) {
  const classes = useStyles();
  return (
    <>
      <Field
        as={TextField}
        sx={classes.searchInput}
        name={name}
        onChange={onChange}
        error={error}
        touched={touched}
        autoComplete="off"
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
