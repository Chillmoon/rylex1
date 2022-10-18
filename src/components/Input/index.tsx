import React from "react";
import { TextField, InputAdornment, Typography, Box } from "@mui/material";
import { useStyles } from "./styles";
import { ErrorMessage, Field } from "formik";
import { theme } from "../../styles/Theme";
import { PropsInput } from "../../types/types";

export default function MyInput({
  placeholder,
  icon,
  name,
  error,
  touched,
}: PropsInput) {
  const classes = useStyles();

  return (
    <>
      <Field
        as={TextField}
        required
        name={name}
        error={touched && error ? true : false}
        autoComplete="off"
        sx={classes.input}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        placeholder={`${placeholder}`}
      />
      <Box sx={{ fontSize: "12px", color: theme.palette.error.main }}>
        <ErrorMessage component={Typography} name={name} />
      </Box>
    </>
  );
}

//
