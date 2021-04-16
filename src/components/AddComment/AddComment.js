import { TextField, Button } from "@material-ui/core";
import classNames from "classnames/bind";
import useStyles from "./mui.styles";
import styles from "./AddComment.module.css";
import useAddComment from "./useAddComment";

const bind = classNames.bind(styles);

export default function AddComment({ forID = "" }) {
  const { content, handleInput, handleBtnClick, className } = useAddComment(
    forID
  );

  const bindClasses = bind({
    root: true,
    [className]: className,
  });

  const classes = useStyles();

  return (
    <div className={bindClasses}>
      <TextField
        value={content}
        onChange={handleInput}
        label="Մեկնաբանություն"
        variant="outlined"
        rows={4}
        className={classes.commField}
        placeholder="..."
        multiline
      />
      <div>
        <Button
          variant="outlined"
          size="large"
          className={classes.addBtn}
          onClick={handleBtnClick}
          disabled={content.trim() === ""}
        >
          Ավելացնել
        </Button>
      </div>
    </div>
  );
}
