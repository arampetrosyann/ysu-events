import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 600,
    margin: "0 auto",
    alignItems: "center",
    overflow: "hidden",
  },
  input: {
    backgroundColor: "#ffffff",
    marginTop: 18,
  },
  text: {
    display: "inline-block",
    padding: "14px 0",
    color: "#0f4a28",
    fontWeight: 700,
    transition: "400ms",
    "&:hover": {
      paddingLeft: "14px",
    },
  },
  submit: {
    color: "#125212",
    borderColor: "#125212",
    borderWidth: 2,
    fontWeight: 700,
  },
});

export default useStyles;
