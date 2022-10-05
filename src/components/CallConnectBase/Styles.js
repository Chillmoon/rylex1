import { makeStyles } from "@mui/styles";
import { theme } from "../../styles/Theme";

export const accordion = makeStyles({
  root: {
    "& [class*=MuiAccordion-root]": {
      borderRadius: "1px !important",
      boxShadow: "none",
    },
  },
});
