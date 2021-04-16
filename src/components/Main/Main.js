import React from "react";
import classNames from "classnames/bind";
import styles from "./Main.module.css";

const bind = classNames.bind(styles);

export default function Main({ bgColor, className, style, children }) {
  const classes = bind({
    main: true,
    [className]: className,
  });

  return (
    <main className={classes} style={{ ...style, backgroundColor: bgColor }}>
      {children}
    </main>
  );
}
