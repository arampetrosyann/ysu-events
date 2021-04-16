import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    color: "#55aa88",
    borderWidth: 2,
    borderColor: "#55aa88",
    borderRadius: 17,
    transition: "300ms",
    "&:hover": {
      borderRadius: 7,
    },
  },
});

export default useStyles;
