import React from "react";
import classNames from "classnames/bind";
import styles from "./Input.module.css";

const bind = classNames.bind(styles);

export default function Input({
  value,
  name,
  placeholder,
  id,
  type,
  maxLength,
  className,
  style,
  onChange,
  onFocus,
  fullWidth,
  autoMargin,
}) {
  const classes = bind({
    root: true,
    width: fullWidth,
    margin: autoMargin,
    [className]: className,
  });

  return (
    <input
      className={classes}
      value={value}
      type={type}
      maxLength={maxLength}
      name={name}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      style={style}
    />
  );
}
