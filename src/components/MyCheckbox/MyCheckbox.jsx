import React from "react";
import { FormControlLabel, Checkbox, Link } from "@mui/material";
import CheckboxEmpty from "../../images/CheckboxEmpty";
import CheckboxDone from "../../images/CheckboxDone";
import { theme } from "../../styles/Theme";

export default function MyCheckbox(name) {
  return (
    <FormControlLabel
      sx={{ m: 2 }}
      control={
        <Checkbox
          name={name}
          icon={<CheckboxEmpty />}
          checkedIcon={<CheckboxDone />}
        />
      }
      label={
        <div>
          I agree to the{" "}
          <Link
            sx={{
              color: theme.palette.primary.black,
              textDecoration: "none",
              fontWeight: "700",
            }}
            href="#"
          >
            Terms of User
          </Link>
        </div>
      }
    />
  );
}
