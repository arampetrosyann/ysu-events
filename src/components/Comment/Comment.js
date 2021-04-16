import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import classNames from "classnames/bind";
import styles from "./Comment.module.css";
import { IconButton } from "@material-ui/core";
import useStyles from "./mui.styles";
import UserContext from "../../context/UserContext";
import useComment from "./useComment";

const bind = classNames.bind(styles);

export default function Comment({
  email,
  text,
  eventId,
  commId,
  className,
  style,
}) {
  const { handleDeleteBtn } = useComment(eventId, commId);
  const { user, isFinished } = useContext(UserContext);

  const bindClasses = bind({
    root: true,
    [className]: className,
  });

  const classes = useStyles();

  return (
    <div className={bindClasses} style={style}>
      <span className={styles.user}>{email}</span>
      <pre className={styles.text}>{text}</pre>
      {isFinished &&
      (user.email === email || user.email === process.env.REACT_APP_ADM) ? (
        <div className={styles.but}>
          <IconButton
            aria-label="delete"
            className={classes.button}
            onClick={handleDeleteBtn}
          >
            <MdDelete />
          </IconButton>
        </div>
      ) : null}
    </div>
  );
}
