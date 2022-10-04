import { theme } from "../../styles/Theme";

export const useStyles = () => ({
  input: {
    m: 1,
    background: theme.palette.secondary.lightGreen,
    borderRadius: "5px",
    width: "100%",
    // border: `none`,

    "& fieldset": {
      border: `1px solid transparent !important`,

      "&:hover": {
        borderColor: "transparent ",
      },
    },

    "& .Mui-error": {
      "& fieldset": {
        borderColor: `${theme.palette.error.main} !important`,
        border: `1px solid ${theme.palette.error.main}`,
      },
      "&.Mui-focused": {
        "& fieldset": {
          border: "1px solid transparent",
        },
      },
    },
  },

  searchInput: {
    borderRadius: "5px",
    "&.MuiFormControl-root": {
      height: "40px !important",
      width: "100%", // width: "295px",
      margin: "3px 10px",
    },

    "& .MuiOutlinedInput-input": {
      padding: "7px 10px",
      backgroundColor: theme.palette.primary.white,
    },

    "& fieldset": {
      border: `1px solid ${theme.palette.secondary.lostGreen} !important`,
    },
    "&.Mui-focused": {
      "&>fieldset": {
        borderColor: `${theme.palette.primary.main} !important`,
      },
    },
    "&:hover": {
      cursor: "pointer",
      "& fieldset": {
        borderColor: `${theme.palette.secondary.lostGreen} !important`,
      },
    },
  },

  errorMessage: {
    position: "absolute",
    color: theme.palette.primary.main,
  },
});
