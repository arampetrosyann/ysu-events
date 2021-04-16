import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  commField: {
    width: "100%",
    margin: "4px 0",
    backgroundColor: "#ffffff",
  },
  addBtn: {
    width: "100%",
    marginTop: 2,
    marginBottom: 4,
    color: "#0f4e19",
    borderWidth: 2,
    borderColor: "#0f4e19",
    borderRadius: 17,
    backgroundColor: "#ffffff",
    transition: "300ms",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#0f4e19be",
    },
    "&:disabled": {
      opacity: 0.6,
    },
  },
}));

export default useStyles;
