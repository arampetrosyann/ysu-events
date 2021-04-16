import React from "react";
import classNames from "classnames/bind";
import { Box, Link } from "@material-ui/core";
import { AiFillGithub } from "react-icons/ai";
import styles from "./Footer.module.css";
import { Copyright } from "../";

const bind = classNames.bind(styles);

export default function Footer({ bgColor, className, style }) {
  const classes = bind({
    footer: true,
    [className]: className,
  });

  return (
    <footer className={classes} style={{ ...style, backgroundColor: bgColor }}>
      <div className={styles.container}>
        <Copyright
          text={
            new Date().getFullYear() + " | Բոլոր իրավունքները պաշտպանված են"
          }
        />
        <Box
          display="flex"
          padding="4px 9px"
          alignItems="center"
          fontSize="0.8em"
        >
          <Box component="span" marginRight="7px">
            Կայքը պատրաստված է`
          </Box>
          <Link
            href="https://github.com/arampetrosyann"
            role="button"
            target="_blank"
            color="inherit"
          >
            <AiFillGithub fontSize={21} />
          </Link>
        </Box>
      </div>
    </footer>
  );
}
