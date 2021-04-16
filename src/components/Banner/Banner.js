import React from "react";
import classNames from "classnames/bind";
import styles from "./Banner.module.css";

const bind = classNames.bind(styles);

export default function Banner({
  src = "",
  height,
  className,
  style,
  children,
  onClick,
}) {
  const classes = bind({
    root: true,
    [className]: className,
  });

  return (
    <div
      className={classes}
      style={{
        ...style,
        backgroundImage: `linear-gradient(#00000040, #00000073), url(${src})`,
        height,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
