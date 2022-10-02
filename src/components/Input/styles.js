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

  errorMessage: {
    position: "absolute",
    color: theme.palette.primary.main,
  },
});
