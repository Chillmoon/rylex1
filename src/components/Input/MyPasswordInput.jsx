import React, { useState } from "react";
import {
  InputAdornment,
  IconButton,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import { ErrorMessage, Field } from "formik";
import { useStyles } from "./styles";
import VisibilityOn from "../../images/VisibilityOn";
import VisibilityOff from "../../images/VisibilityOff";
import Lock from "../../images/Lock";
import { theme } from "../../styles/Theme";

export default function MyPasswordInput({ name, placeholder, error, touched }) {
  const [password, setPassword] = useState("");
  const [isRevealPassword, setIsRevealPassword] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Field
        as={TextField}
        sx={classes.input}
        name={name}
        error={touched && error ? true : false}
        // helperText={<ErrorMessage name={name} />}
        type={isRevealPassword ? "text" : "password"}
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Lock />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end" sx={{ marginTop: 0.3 }}>
              <IconButton
                title={isRevealPassword ? "Hide password" : "Show password"}
                onClick={() => setIsRevealPassword((prevState) => !prevState)}
                edge="end"
              >
                {isRevealPassword ? (
                  <Box
                    sx={{
                      fill: theme.palette.primary.main,
                      "& path": {
                        cursor: "pointer",
                        fill: theme.palette.primary.main,
                      },
                    }}
                  >
                    <VisibilityOn />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      fill: theme.palette.grey.grey,
                      "& path": {
                        cursor: "pointer",
                        fill: theme.palette.grey.grey,
                      },
                    }}
                  >
                    <VisibilityOff />
                  </Box>
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
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
