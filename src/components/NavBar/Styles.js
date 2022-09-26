import { theme } from "../../styles/Theme";

export const useNavBarStyles = () => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
  },
  toolBar: {
    justifyContent: "left",
    paddingRight: 0,
    marginRight: "6%",
  },
});
