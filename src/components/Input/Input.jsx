import React from "react";
import { TextField, InputAdornment, Box } from "@mui/material";
import { useStyles } from "./styles";
import { theme } from "../../styles/Theme";

export default function Input({ icon, onChange }) {
  const classes = useStyles();
  return (
    <TextField
      name="Search"
      placeholder="Search"
      sx={classes.searchInput}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {
              <Box
                sx={{
                  fill: theme.palette.primary.black,
                  "& path": {
                    fill: theme.palette.primary.black,
                  },
                }}
              >
                {icon}
              </Box>
            }
          </InputAdornment>
        ),
      }}
    />
  );
}
