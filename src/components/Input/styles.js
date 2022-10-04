import { theme } from "../../styles/Theme";

export const useStyles = () => ({
  input: {
    m: 1,
    background: theme.palette.secondary.lightGreen,
    borderRadius: "5px",
    width: "100%",
    // border: `none`,

    "& fieldset": {
      border: `1px solid `,
      borderColor: "transparent !important",
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
    height: "45px",
    width: "400px",
    marginTop: "10px",
    backgroundColor: theme.palette.primary.white,
    "& fieldset": {
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
      "& fieldset": {
        borderColor: `red !important`,
      },
    },
  },

  errorMessage: {
    position: "absolute",
    color: theme.palette.primary.main,
  },
});
