import React from "react";
import classNames from "classnames/bind";
import styles from "./ImageLogo.module.css";

const bind = classNames.bind(styles);

export default function ImageLogo({
  src,
  alt,
  width,
  className,
  style,
  onClick,
  onFocus,
  onBlur,
}) {
  const classes = bind({
    root: true,
    [className]: className,
  });

  return (
    <img
      src={src}
      alt={alt}
      width={`${width}px`}
      className={classes}
      style={style}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
