import React from "react";
import { TextField, InputAdornment, Box, Icon } from "@mui/material";
import Search from "../../images/Search";
import { useStyles } from "./styles";

export default function Input({ icon, onChange }) {
  const classes = useStyles();
  return (
    <TextField
      name="Search"
      id="search"
      placeholder="Search"
      sx={classes.searchInput}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {
              <Box
                sx={{
                  fill: "#949494",
                  "& path": {
                    fill: "#949494",
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
