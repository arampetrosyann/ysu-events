import React from "react";
import classNames from "classnames/bind";
import styles from "./Loader.module.css";

const bind = classNames.bind(styles);

export default function Loader({ className, style }) {
  const classes = bind({
    root: true,
    [className]: className,
  });

  return (
    <div className={styles.container}>
      <div className={classes} style={style}></div>
    </div>
  );
}
