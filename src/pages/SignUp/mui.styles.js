import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 600,
    margin: "0 auto",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#ffffff",
    marginTop: 18,
  },
  submit: {
    marginTop: 20,
    color: "#125212",
    borderColor: "#125212",
    borderWidth: 2,
    fontWeight: 700,
  },
  alertBox: {
    position: "absolute",
    top: 0,
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  alertClass: {
    marginTop: 7,
  },
});

export default useStyles;
