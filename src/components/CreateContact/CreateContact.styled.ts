const styles = {
  container: {
    width: "280px",
  },
  heading: {
    textTransform: "capitalize",
    mb: "2px",
  },
  inputLabel: (isError: boolean | undefined) => ({
    color: isError ? "error.main" : "text.primary",
  }),
  input: {
    "&:not(:last-of-type)": {
      mb: "10px",
    },
  },
  btn: {
    textTransform: "capitalize",
    mt: "20px",
  },
};

export default styles;
