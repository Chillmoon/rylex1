import { theme } from "../../styles/Theme";

export const useButtonStyles = () => ({
  button: {
    maxWidth: "100px",
    padding: "10px 30px !important",
    borderRadius: "40px !important",
    backgroundColor: `${theme.palette.primary.main} !important`,
    boxShadow: "none",
    color: `${theme.palette.common.white} !important`,
    border: `1px solid ${theme.palette.primary.main} !important`,
    textAlign: "center",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
      background: `${theme.palette.common.white} !important`,
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
      backgroundColor: `${theme.palette.primary.dark} !important`,
      borderColor: `${theme.palette.primary.dark} !important`,
      color: `${theme.palette.common.white} !important`,
      transition: "none",
      boxShadow: "none",
    },
    "&:disabled": {
      border: "2px solid transparent",
      background: theme.palette.grey.A700,
      boxShadow: "none",
    },
  },
  signbutton: {
    width: "270px",
    height: "60px",
    // padding: "13px 90px",
    border: `2px solid ${theme.palette.common.white}`,
    borderRadius: "40px",
    boxShadow: "none",
    margin: "10px auto",
    color: theme.palette.common.white,
    "&:hover": {
      border: `2px solid ${theme.palette.primary.main}`,
      background: theme.palette.common.white,
      boxShadow: "none",
      color: theme.palette.primary.main,
    },
    "&:active": {
      background: theme.palette.primary.dark,
      transition: "none",
      boxShadow: "none",
    },
    "&:disabled": {
      border: "2px solid transparent",
      background: theme.palette.grey.A700,
      boxShadow: "none",
    },
  },
  cancel: {
    maxWidth: "100px",
    padding: "10px 30px !important",
    borderRadius: "40px !important",
    backgroundColor: `${theme.palette.common.white} !important`,
    boxShadow: "none",
    color: `${theme.palette.grey.A700} !important`,
    border: `1px solid ${theme.palette.grey.A700} !important`,
    textAlign: "center",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main} !important`,
      background: `${theme.palette.common.white} !important`,
      boxShadow: "none",
      color: `${theme.palette.primary.main} !important`,
      transition: "all 200ms ease-in-out !important",
    },
    "&:active": {
      backgroundColor: `${theme.palette.primary.dark} !important`,
      borderColor: `${theme.palette.primary.dark} !important`,
      color: `${theme.palette.common.white} !important`,
      transition: "none",
      boxShadow: "none",
    },
    "&:disabled": {
      border: "2px solid transparent",
      background: theme.palette.grey.A700,
      boxShadow: "none",
    },
  },
  // signbutton: {
  //   width: "270px",
  //   height: "60px",
  //   // padding: "13px 90px",
  //   border: `2px solid ${theme.palette.common.white}`,
  //   borderRadius: "40px",
  //   boxShadow: "none",
  //   margin: "10px auto",
  //   color: theme.palette.common.white,
  //   "&:hover": {
  //     border: `2px solid ${theme.palette.primary.main}`,
  //     background: theme.palette.common.white,
  //     boxShadow: "none",
  //     color: theme.palette.primary.main,
  //   },
  //   "&:active": {
  //     background: theme.palette.primary.dark,
  //     transition: "none",
  //     boxShadow: "none",
  //   },
  //   "&:disabled": {
  //     border: "2px solid transparent",
  //     background: theme.palette.grey.A700,
  //     boxShadow: "none",
  //   },
  // },
  iconButton: {
    color: `${theme.palette.primary.main} !important`,
    border: "1px solid transparent",
    borderRadius: "5px !important",
    padding: "7px !important",
    margin: "2px",
    "&:hover": {
      backgroundColor: "transparent !important",
      cursor: "pointer",
    },
    "&:disabled": {
      color: `${theme.palette.grey.A700} !important`,
    },
  },
  buttonLink: {
    active: {
      color: `${theme.palette.common.white} !important`,
      fontWeight: "700 !important",
      fontSize: "18px !important",
      justifyContent: "left !important",
      marginBottom: "30px !important",
      textTransform: "none",
      whiteSpace: "nowrap",
    },
    nonActive: {
      color: `${theme.palette.common.white} !important`,
      fontSize: "16px !important",
      fontWeight: "400 !important",
      margin: "15px 0px",
      justifyContent: "left !important",
      whiteSpace: "nowrap",
    },
    grey: {
      color: theme.palette.grey.A700,
      fontSize: "16px",
      fontWeight: "400",
      justifyContent: "left",
    },
  },

  iconInButton: {
    fill: theme.palette.common.white,
    "& path": {
      cursor: "pointer",
      fill: theme.palette.common.white,
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
