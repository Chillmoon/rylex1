import { makeStyles } from "@mui/styles";
import { theme } from "../../styles/Theme";

export const useNavBarStyles = () => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none !important",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    height: "60px",
  },
  toolBar: {
    justifyContent: "left",
    paddingRight: 0,
    marginRight: "6%",
    boxShadow: "none !important",
  },
});

export const languageSelect = makeStyles({
  root: {
    fontSize: "14px",
    padding: "5px",
    textTransform: "uppercase",

    "& .MuiOutlinedInput-input": {
      padding: "0px !important",
      display: "flex",
      alignItems: "center",
    },
    "&>fieldset": {
      borderWidth: "1px !important",
      borderColor: `transparent !important`,
    },
    "&.Mui-focused": {
      "&>fieldset": {
        borderColor: `transparent !important`,
      },
      "&.Mui-active": {
        color: theme.palette.primary.main,
      },
    },
    "&:hover": {
      cursor: "pointer",
      "&>fieldset": {
        borderColor: `transparent !important`,
      },
    },
  },
});

export const languageMenu = makeStyles({
  root: {
    "& .MuiPopover-paper": {
      borderRadius: "1px",
      boxShadow:
        "10px 10px 10px rgba(145, 151, 150, 0.15), 4px 5px 10px rgba(71, 75, 75, 0.2)",
    },
    "& .MuiMenu-list": {
      display: "flex",
      flexDirection: "column",
      padding: "0px",
      borderRadius: "1px",

      "& > li": {
        padding: "10px 20px",
        justifyContent: "left",

        "&.Mui-selected": {
          border: `1px solid transparent`,
          backgroundColor: theme.palette.primary.white,
          color: theme.palette.primary.main,
        },
        "&:hover": {
          backgroundColor: theme.palette.secondary.lightGreen,
          color: theme.palette.primary.main,
          textDecoration: "underline",
        },
        "&.Mui-focused": {
          backgroundColor: theme.palette.secondary.lightGreen,
          color: theme.palette.primary.main,
          border: `1px solid ${theme.palette.primary.main}`,
          textDecoration: "underline",
        },
      },
    },
  },
});
