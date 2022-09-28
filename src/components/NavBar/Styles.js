import { theme } from "../../styles/Theme";

export const useNavBarStyles = () => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none !important",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    height: "60px",
  },
  toolBar: {
    justifyContent: "left",
    paddingRight: 0,
    marginRight: "6%",
    boxShadow: "none !important",
  },
});
