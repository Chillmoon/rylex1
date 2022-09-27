import React from "react";
import { TextField, InputAdornment, Typography } from "@mui/material";
import { useStyles } from "./styles";
import { ErrorMessage, Field } from "formik";
import { theme } from "../../styles/Theme";

export default function MyInput({
  placeholder,
  icon,
  error,
  name,
  id,
  touched,
}) {
  const classes = useStyles();
  console.log(error);
  return (
    <>
      <Field
        required
        error={error}
        as={TextField}
        name={name}
        id={id}
        // helperText={<ErrorMessage name={name} />}
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
      {{ error } && { touched } && (
        <Typography
          sx={{
            fontSize: "12px",
          }}
          variant="subtitle2"
          color={theme.palette.error.main}
        >
          {error}
        </Typography>
      )}
    </>
  );
}

//
