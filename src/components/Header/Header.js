import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/images/header-logo.png";
import { ImageLogo, Navigation } from "../";

const bind = classNames.bind(styles);

export default function Header({ bgColor, className, style }) {
  const classes = bind({
    root: true,
    [className]: className,
  });

  return (
    <header className={classes} style={{ ...style, backgroundColor: bgColor }}>
      <div className={styles.container}>
        <Link to="/">
          <ImageLogo src={logo} alt="Գլխավոր" width={62} />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
