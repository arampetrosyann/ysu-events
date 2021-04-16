import { useContext } from "react";
import { Link } from "react-router-dom";
import useNavigation from "./useNavigation";
import classNames from "classnames/bind";
import { Button } from "@material-ui/core";
import useStyles from "./mui.styles.js";
import styles from "./Navigation.module.css";
import UserContext from "../../context/UserContext";

const bind = classNames.bind(styles);

export default function Navigation({ className, style }) {
  const { user, isFinished, setIsFinished } = useContext(UserContext);
  const { handleUserSignOut } = useNavigation(setIsFinished);

  const bindClasses = bind({
    root: true,
    [className]: className,
  });

  const classes = useStyles();

  return (
    <nav className={bindClasses} style={style}>
      {isFinished ? (
        <ul className={styles.list}>
          <li>
            <Link
              to="/create-event"
              className={styles.link}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                size="large"
                className={classes.button}
              >
                Ստեղծել
              </Button>
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className={styles.link}
              style={{ textDecoration: "none" }}
            >
              <span>Միջոցառումներ</span>
            </Link>
          </li>
          <li>
            {user ? (
              <span className={styles.link} onClick={handleUserSignOut}>
                Դուրս գալ
              </span>
            ) : (
              <Link
                to="/sign-in"
                className={styles.link}
                style={{ textDecoration: "none" }}
              >
                <span>Մուտք</span>
              </Link>
            )}
          </li>
        </ul>
      ) : null}
    </nav>
  );
}
