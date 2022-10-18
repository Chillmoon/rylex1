import React from "react";
import { TextField, Typography, Box } from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { useStyles } from "./styles";
import { theme } from "../../styles/Theme";
import { PropsInput } from "../../types/types";

export default function Input({ name, error, touched }: PropsInput) {
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
      <Box
        sx={{
          fontSize: "12px",
          color: theme.palette.error.main,
          margin: "-9px",
        }}
      >
        <ErrorMessage component={Typography} name={name} />
      </Box>
    </>
  );
}
