import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  transitions: {
    // So we have `transition: none;` everywhere
    create: () => "none",
  },
  palette: {
    primary: {
      black: "#0A0B0B",
      white: "#fff",
      main: "#1AAA8D",
      greenActive: "#30B78D",
      clickButton: "#08795A",
    },
    secondary: {
      main: "#C0CECA",
      lightGreen: "#F1FAF7",
      lostGreen: "#C8C3C3",
    },
    error: {
      main: "#F62727",
    },
    grey: {
      grey: "#949494",
    },
  },
  typography: {
    fontFamily: "Mulish !important",
    button: {
      fontWeight: "400",
      textTransform: "none !important",
      lineHeight: "23px",
    },
  },
});
