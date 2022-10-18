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

export const useStyles = () => ({
  listItemType: {
    listStyle: "none",
    padding: "0px",
    color: theme.palette.grey.A700,
    "& li": {
      height: "40px",
    },
  },
  listItemState: {
    listStyle: "none",
    padding: "0px",
    color: theme.palette.common.black,
    "& li": {
      height: "40px ",
    },
  },
});
