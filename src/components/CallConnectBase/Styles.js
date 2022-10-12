import { makeStyles } from "@mui/styles";
import { theme } from "../../styles/Theme";

export const accordion = makeStyles({
  root: {
    "& .Mui-expanded": {
      backgroundColor: "blue",
    },
    "& .MuiPaper-root": {
      height: "100px !important",
    },
    "& [class*=MuiAccordion-root]": {
      boxShadow: "none",
    },
  },
});
