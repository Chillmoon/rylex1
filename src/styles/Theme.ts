import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  transitions: {
    create: () => "none",
  },
  palette: {
    primary: {
      main: "#1AAA8D",
      //greenActive
      light: "#30B78D",
      //clickButton
      dark: "#08795A",
    },
    secondary: {
      main: "#C0CECA",
      //lightGreen
      light: "#F1FAF7",
      //lostGreen
      dark: "#C8C3C3",
    },
    error: {
      main: "#F62727",
    },
    grey: {
      A700: "#949494",
    },
  },
  typography: {
    fontFamily: "Mulish !important",
    button: {
      fontWeight: "400",
      textTransform: "none",
      lineHeight: "23px",
      textAlign: "center",
    },
  },
});
