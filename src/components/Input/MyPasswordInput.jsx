import React, { useState } from "react";
import { InputAdornment, IconButton, Box, TextField } from "@mui/material";
import { Field } from "formik";
import { useStyles } from "./styles";
import VisibilityOn from "../../images/VisibilityOn";
import VisibilityOff from "../../images/VisibilityOff";
import Lock from "../../images/Lock";

export default function MyPasswordInput({ name, placeholder, helperText, id }) {
  const [password, setPassword] = useState("");
  const [isRevealPassword, setIsRevealPassword] = useState(false);

  const classes = useStyles();

  return (
    <Field
      as={TextField}
      sx={classes.input}
      name={name}
      id={id}
      helperText={helperText}
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
                    fill: "#949494",
                    "& path": {
                      cursor: "pointer",
                      fill: "#949494",
                    },
                  }}
                >
                  <VisibilityOff />
                </Box>
              ) : (
                <Box
                  sx={{
                    fill: "#949494",
                    "& path": {
                      cursor: "pointer",
                      fill: "#949494",
                    },
                  }}
                >
                  <VisibilityOn />
                </Box>
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
