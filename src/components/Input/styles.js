export const useStyles = () => ({
  input: {
    m: 1,
    background: "#F1FAF7",
    borderRadius: "5px",
    width: "100%",

    "& fieldset": {
      border: "none",
    },

    "&:hover": {
      border: "none",
    },

    "&:valid": {
      border: "1px solid #30B78D",
    },

    "&:invalid": {
      border: "1px solid #F62727",
    },
  },
  searchInput: {
    background: "#fff",
    borderRadius: "5px",
    height: "45px",
    width: "400px",
    "& fieldset": {
      border: "none",
    },

    "&:hover": {
      border: "none",
    },

    "&:valid": {
      border: "1px solid #30B78D",
    },

    "&:invalid": {
      border: "1px solid #F62727",
    },
  },
});
