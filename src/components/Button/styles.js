import { theme } from "../../styles/Theme";

export const useButtonStyles = () => ({
  button: {
    maxWidth: "100px",
    padding: "8px 25px",
    border: `2px solid ${theme.palette.primary.white}`,
    borderRadius: "40px",
    boxShadow: "none",
    color: theme.palette.primary.white,
    "&:hover": {
      border: `2px solid ${theme.palette.primary.main}`,
      background: theme.palette.primary.white,
      boxShadow: "none",
      color: theme.palette.primary.main,
      transition: "all 200ms ease-in-out",
      "& svg": {
        transition: "all 200ms ease-in-out",
        fill: theme.palette.primary.main,
        "& path": {
          cursor: "pointer",
          fill: theme.palette.primary.main,
        },
      },
    },
    "&:active": {
      background: theme.palette.primary.clickButton,
      transition: "none",
      boxShadow: "none",
    },
    "&:disabled": {
      border: "2px solid transparent",
      background: theme.palette.grey.grey,
      boxShadow: "none",
    },
  },
  signbutton: {
    padding: "13px 90px",
    border: `2px solid ${theme.palette.primary.white}`,
    borderRadius: "40px",
    boxShadow: "none",
    margin: "10px",
    color: theme.palette.primary.white,
    "&:hover": {
      border: `2px solid ${theme.palette.primary.main}`,
      background: theme.palette.primary.white,
      boxShadow: "none",
      color: theme.palette.primary.main,
    },
    "&:active": {
      background: theme.palette.primary.clickButton,
      transition: "none",
      boxShadow: "none",
    },
    "&:disabled": {
      border: "2px solid transparent",
      background: theme.palette.grey.grey,
      boxShadow: "none",
    },
  },
  iconButton: {
    color: theme.palette.grey.grey,
    borderRadius: "7px",
    padding: "3px",
    margin: "2px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:active": {
      color: theme.palette.primary.greenActive,
    },
  },
  buttonLink: {
    active: {
      color: theme.palette.primary.white,
      fontWeight: "700",
      fontSize: "18px",
      justifyContent: "left",
      marginBottom: "25px",
    },
    nonActive: {
      color: theme.palette.primary.white,
      fontSize: "16px",
      fontWeight: "400",
      justifyContent: "left",
      marginBottom: "25px",
    },
    grey: {
      color: theme.palette.grey.grey,
      fontSize: "16px",
      fontWeight: "400",
      justifyContent: "left",
    },
  },

  iconInButton: {
    fill: theme.palette.primary.white,
    "& path": {
      cursor: "pointer",
      fill: theme.palette.primary.white,
    },
    "&:hover": {
      fill: theme.palette.primary.main,
      "& path": {
        cursor: "pointer",
        fill: theme.palette.primary.main,
      },
    },
  },
});
