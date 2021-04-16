import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  iconText: {
    marginLeft: 5,
    fontSize: 22,
    fontWeight: 600,
  },
  errText: {
    margin: "auto 0",
    maxWidth: 422,
    padding: "20px 28px",
    fontSize: 40,
    opacity: 0.6,
    textAlign: "center",
  },
  btn: {
    margin: "8px 0",
    marginLeft: 12,
    color: "#3e6181",
    borderWidth: 2,
    borderColor: "#3e6181",
    borderRadius: 17,
    transition: "400ms",
    "&:hover": {
      color: "#3e6181",
    },
  },
  date: {
    backgroundColor: "#3e6181",
    color: "#ffffff",
  },
  title: {
    backgroundColor: "#3e6181",
    color: "#ffffff",
  },
  email: {
    backgroundColor: "#3e6181",
    color: "#ffffff",
  },
});

export default useStyles;
