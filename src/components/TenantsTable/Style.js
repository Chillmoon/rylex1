import { makeStyles } from "@mui/styles";
import { theme } from "../../styles/Theme";

export const useTableStyles = () => ({
  table: {
    fontFamily: "Mulish !important",
    boxShadow: "none",
    margin: "0 8% 0 2%",
    backgoundColor: "blue",
    "& .MuiTableBody-root": {
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    "& [class*=MTableToolbar]": {
      padding: "0 !important",
    },
    "& tbody>.MuiTableRow-root:hover": {
      backgroundColor: theme.palette.secondary.lightGreen,
      "& .MuiTableCell-root": {
        borderRightColor: `transparent`,
        "&:last-child": {
          borderRightColor: theme.palette.secondary.main,
        },
      },
    },
    "& tbody>tr>.MuiTableCell-root": {
      borderRight: `1px solid ${theme.palette.secondary.main}`,
      "&:last-child": {
        borderRight: "none",
      },
    },
  },
  row: {
    fontSize: "14px",
    lineHeight: "50px",
    "&:hover": {
      border: "none",
      backgroundColor: theme.palette.secondary.lightGreen,
    },
  },
});

export const pagination = makeStyles({
  root: {
    "& .MuiButtonBase-root": {
      padding: "10px",
      margin: "0px 7px",
      border: `1px solid transparent`,
      borderRadius: "5px",

      "&:hover": {
        backgroundColor: theme.palette.secondary.lightGreen,
        borderColor: "transparent !important",
      },
      "&:active": {
        border: `1px solid ${theme.palette.primary.main} !important`,
        borderRadius: "5px",
      },
    },
    "& .Mui-selected": {
      color: theme.palette.primary.main,
      backgroundColor: "transparent",
      borderBottomLeftRadius: "1px",
      borderBottomRightRadius: "1px",
      borderBottomColor: `${theme.palette.primary.main} `,
    },
  },
});

export const paginationArrows = makeStyles({
  root: {
    color: `${theme.palette.primary.main} !important`,
    padding: "2px 3px 2px 2px !important",
    border: `1px solid transparent`,
    borderRadius: "3px !important",

    "&:hover": {
      backgroundColor: `${theme.palette.secondary.lightGreen} !important`,
    },

    "&:active": {
      borderColor: `${theme.palette.primary.main} !important`,
      borderRadius: "5px",
      backgroundColor: theme.palette.secondary.lightGreen,
    },
    "&:disabled": {
      color: `${theme.palette.grey.grey} !important`,
    },
  },
});

export const selectMenu = makeStyles({
  root: {
    "& .MuiPopover-paper": {
      borderRadius: "1px",
      boxShadow:
        "4px 4px 10px rgba(145, 151, 150, 0.15), 4px 5px 20px rgba(71, 75, 75, 0.3)",
    },
    "& .MuiMenu-list": {
      display: "flex",
      flexDirection: "column",
      padding: "0px",
      borderRadius: "1px",

      "& > li": {
        padding: "7px 28px 7px 7px",

        "&.Mui-selected": {
          border: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.secondary.lightGreen,
          color: theme.palette.primary.main,
          textDecoration: "underline",
        },
        "&:hover": {
          backgroundColor: theme.palette.secondary.lightGreen,
          color: theme.palette.primary.main,
          textDecoration: "underline",
        },
      },
    },
  },
});

export const select = makeStyles({
  root: {
    height: "35px !important",
    padding: "5px 0px 0px 0px",

    "& .MuiOutlinedInput-input": {
      padding: "8px 0px 10px 12px",
    },
    "&>fieldset": {
      borderWidth: "1px !important",
      borderColor: `${theme.palette.secondary.main} !important`,
    },
    "&.Mui-focused": {
      "&>fieldset": {
        borderColor: `${theme.palette.primary.main} !important`,
      },
    },
    "&:hover": {
      cursor: "pointer",
      "&>fieldset": {
        borderColor: `${theme.palette.secondary.main} !important`,
      },
    },

    "&&&>div": {
      paddingRight: 0,
    },
  },
});

export const search = makeStyles({
  root: {
    marginTop: "10px",

    "&&&&&>fieldset": {
      borderWidth: "1px !important",
      borderColor: `transparent !important`,
      backgroundColor: theme.palette.primary.white,
      borderRadius: "5px",
      height: "45px",
      width: "400px",
    },
    "&&&&&.Mui-focused": {
      "&>fieldset": {
        borderColor: `${theme.palette.primary.main} !important`,
      },
    },
    "&:hover": {
      cursor: "pointer",
      "&&&&&>fieldset": {
        borderColor: `transparent !important`,
      },
    },
  },
});
