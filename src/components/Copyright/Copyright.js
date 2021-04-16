import React from "react";
import classNames from "classnames/bind";
import styles from "./Copyright.module.css";

const bind = classNames.bind(styles);

export default function Copyright({
  text,
  color,
  className,
  style,
  onClick,
  onFocus,
  onBlur,
}) {
  const classes = bind({
    copyright: true,
    [className]: className,
  });

  return (
    <small
      className={classes}
      style={{ ...style, color }}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      &copy; {text}
    </small>
  );
}
