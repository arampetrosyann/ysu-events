import React from "react";
import classNames from "classnames/bind";
import styles from "./ImageCard.module.css";

const bind = classNames.bind(styles);

export default function ImageLogo({
  src,
  alt,
  size,
  className,
  style,
  onClick,
  onFocus,
  onBlur,
}) {
  const classes = bind({
    container: true,
    [className]: className,
  });

  return (
    <div
      className={classes}
      style={{ ...style, width: size, height: size }}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <img
        width={`${size ? size * 2.5 : 535}px`}
        src={src}
        alt={alt}
        className={styles.img}
      />
    </div>
  );
}
