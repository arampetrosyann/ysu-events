import React from "react";
import classNames from "classnames/bind";
import styles from "./BackgroundVideo.module.css";

const bind = classNames.bind(styles);

export default function BackgroundVideo({
  src,
  autoPlay,
  loop,
  muted,
  poster,
  className,
  style,
  itemPosition = "",
  children,
}) {
  const classes = bind({
    container: true,
    [className]: className,
  });

  return (
    <div className={classes} style={style}>
      <video
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        poster={poster}
        className={styles.video}
        muted={muted}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support video.
      </video>
      <div
        className={
          styles[itemPosition]
            ? `${styles.child} ${styles[itemPosition]}`
            : styles.child
        }
      >
        {children}
      </div>
    </div>
  );
}
