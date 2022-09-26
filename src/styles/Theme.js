import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      white: "#fff",
      greenPrime: "#1AAA8D",
      greenActive: "#30B78D",
      clickButton: "#08795A",
    },
    secondary: {
      greenStroke: "#C0CECA",
      lightGreen: "#F1FAF7",
    },
    error: {
      main: "#F62727",
    },
    grey: {
      grey: "#949494",
    },
  },
  typography: {
    fontFamily: "Mulish",
    button: {
      fontWeight: "400",
      textTransform: "none",
      lineHeight: "23px",
    },
  },
});
