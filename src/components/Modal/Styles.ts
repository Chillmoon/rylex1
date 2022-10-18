import { makeStyles } from "@mui/styles";
import { theme } from "../../styles/Theme";

export const modalStyles = makeStyles({
  root: {
    position: "fixed",
    width: "480px",
    height: "670px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.secondary.light,
    padding: "40px",
    zIndex: 1000,
  },
});

export const overlayStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000,
  },
});
