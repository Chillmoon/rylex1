import { theme } from "../../styles/Theme";

export const useStyles = () => ({
  input: {
    m: 1,
    background: theme.palette.secondary.lightGreen,
    borderRadius: "5px",
    width: "100%",

    "& fieldset": {
      border: "none",
    },

    "&:hover": {
      border: "none",
    },

    "&:valid": {
      border: `1px solid ${theme.palette.primary.greenActive}`,
    },

    "&:invalid": {
      border: `1px solid ${theme.palette.grey.grey}`,
    },
  },
  searchInput: {
    background: theme.palette.primary.white,
    borderRadius: "5px",
    height: "45px",
    width: "400px",
    "& fieldset": {
      border: "none",
    },

    "&:hover": {
      border: "none",
    },

    "&:valid": {
      border: `1px solid ${theme.palette.primary.greenActive}`,
    },

    "&:invalid": {
      border: `1px solid ${theme.palette.error.main}`,
    },
  },
});
