import { theme } from "../../styles/Theme";

export const useButtonStyles = () => ({
  button: {
    maxWidth: "100px",
    padding: "8px 25px",
    border: `2px solid ${theme.palette.primary.white}`,
    borderRadius: "40px",
    boxShadow: "none",
    color: "#fff",
    "&:hover": {
      border: `2px solid ${theme.palette.primary.greenPrime}`,
      background: "#fff",
      boxShadow: "none",
      color: theme.palette.primary.greenPrime,
      transition: "all 200ms ease-in-out",
      "& svg": {
        transition: "all 200ms ease-in-out",
        fill: theme.palette.primary.greenPrime,
        "& path": {
          cursor: "pointer",
          fill: theme.palette.primary.greenPrime,
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
    color: "#fff",
    "&:hover": {
      border: "2px solid #1AAA8D",
      background: "#fff",
      boxShadow: "none",
      color: "#1AAA8D",
    },
    "&:active": {
      background: "#08795A !important",
      transition: "none",
      boxShadow: "none",
    },
    "&:disabled": {
      border: "2px solid transparent",
      background: "#D1D1D1",
      boxShadow: "none",
    },
  },
  iconButton: {
    color: "#949494",
    borderRadius: "7px",
    padding: "3px",
    margin: "2px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:active": {
      color: "#30B78D",
    },
  },
  buttonLink: {
    active: {
      color: "#fff",
      fontWeight: "700",
      fontSize: "18px",
      justifyContent: "left",
      marginBottom: "25px",
    },
    nonActive: {
      color: "#fff",
      fontSize: "16px",
      fontWeight: "400",
      justifyContent: "left",
      marginBottom: "25px",
    },
    grey: {
      color: "#949494",
      fontSize: "16px",
      fontWeight: "400",
      justifyContent: "left",
    },
  },

  iconInButton: {
    fill: "#fff",
    "& path": {
      cursor: "pointer",
      fill: "#fff",
    },
    "&:hover": {
      fill: "#1AAA8D",
      "& path": {
        cursor: "pointer",
        fill: "#1AAA8D",
      },
    },
  },
});
