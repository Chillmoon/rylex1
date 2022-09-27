import { theme } from "../../styles/Theme";

export const useStyles = () => ({
  input: {
    m: 1,
    background: theme.palette.secondary.lightGreen,
    borderRadius: "5px",
    width: "100%",
    border: `none`,
    borderColor: "bluePurple",

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
    "&:valid": {
      boxShadow: `0 0 0 1px ${theme.palette.primary.greenActive}`,
    },

    // "&:invalid": {
    //   boxShadow: `0 0 0 1px ${theme.palette.error.main}`,
    // },
  },
  searchInput: {
    margin: "20px 0px 20px 0px",
    border: "red !important",
    background: theme.palette.primary.white,
    borderRadius: "5px",
    height: "45px",
    width: "400px",

    "& fieldset": {
      border: "none !important",
    },

    "&:active": {
      border: `1px solid ${theme.palette.secondary.lostGreen} !important`,
    },

    "&:hover": {
      border: "none",
    },

    "&:invalid": {
      border: `1px solid ${theme.palette.error.main}`,
    },
  },
  errorMessage: {
    position: "absolute",
    color: theme.palette.primary.main,
  },
});
