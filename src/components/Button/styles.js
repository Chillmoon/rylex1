import { theme } from "../../styles/Theme";

export const useButtonStyles = () => ({
  button: {
    maxWidth: "100px",
    padding: "10px 30px !important",
    borderRadius: "40px !important",
    backgroundColor: `${theme.palette.primary.main} !important`,
    boxShadow: "none",
    color: `${theme.palette.primary.white} !important`,
    border: `1px solid ${theme.palette.primary.main} !important`,
    textAlign: "center",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
      background: `${theme.palette.primary.white} !important`,
      boxShadow: "none",
      color: `${theme.palette.primary.main} !important`,
      transition: "all 200ms ease-in-out !important",
      "& svg": {
        transition: "all 200ms ease-in-out !important",
        fill: theme.palette.primary.main,
        "& path": {
          cursor: "pointer",
          fill: theme.palette.primary.main,
        },
      },
    },
    "&:active": {
      backgroundColor: `${theme.palette.primary.clickButton} !important`,
      borderColor: `${theme.palette.primary.clickButton} !important`,
      color: `${theme.palette.primary.white} !important`,
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
    width: "270px",
    height: "60px",
    // padding: "13px 90px",
    border: `2px solid ${theme.palette.primary.white}`,
    borderRadius: "40px",
    boxShadow: "none",
    margin: "10px auto",
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
  cancel: {
    maxWidth: "100px",
    padding: "10px 30px !important",
    borderRadius: "40px !important",
    backgroundColor: `${theme.palette.primary.white} !important`,
    boxShadow: "none",
    color: `${theme.palette.grey.grey} !important`,
    border: `1px solid ${theme.palette.grey.grey} !important`,
    textAlign: "center",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main} !important`,
      background: `${theme.palette.primary.white} !important`,
      boxShadow: "none",
      color: `${theme.palette.primary.main} !important`,
      transition: "all 200ms ease-in-out !important",
    },
    "&:active": {
      backgroundColor: `${theme.palette.primary.clickButton} !important`,
      borderColor: `${theme.palette.primary.clickButton} !important`,
      color: `${theme.palette.primary.white} !important`,
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
    width: "270px",
    height: "60px",
    // padding: "13px 90px",
    border: `2px solid ${theme.palette.primary.white}`,
    borderRadius: "40px",
    boxShadow: "none",
    margin: "10px auto",
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
    color: `${theme.palette.primary.main} !important`,
    border: "1px solid transparent",
    borderRadius: "5px !important",
    padding: "7px !important",
    margin: "2px",
    "&:hover": {
      backgroundColor: "transparent !important",
    },

    "&:disabled": {
      color: `${theme.palette.grey.grey} !important`,
    },
  },
  buttonLink: {
    active: {
      color: `${theme.palette.primary.white} !important`,
      fontWeight: "700 !important",
      fontSize: "18px !important",
      justifyContent: "left !important",
      marginBottom: "30px !important",
      textTransform: "none",
    },
    nonActive: {
      color: `${theme.palette.primary.white} !important`,
      fontSize: "16px !important",
      fontWeight: "400 !important",
      justifyContent: "left !important",
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
