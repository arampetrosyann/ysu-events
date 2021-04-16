import React from "react";
import classNames from "classnames/bind";
import { BiTimeFive } from "react-icons/bi";
import date from "date-and-time";
import { IoMailOutline } from "react-icons/io5";
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./Post.module.css";

const bind = classNames.bind(styles);

export default function Post({ data = {}, className, style, onClick }) {
  const { id, title = "", createdBy = "", content = "", date: dateCode } = data;

  const classes = bind({
    post: true,
    [className]: className,
  });

  return (
    <div className={classes} style={style} onClick={onClick}>
      <Link to={`/events/${id}`} className={styles.link}>
        <Box padding="7px 17px">
          <Box borderBottom="1px solid black">
            <Typography component="h3" variant="h4" align="center">
              {title}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            padding="6px 0"
          >
            <Box display="flex" alignItems="center">
              <IoMailOutline color="#004904" style={{ marginRight: 8 }} />

              <Typography>{createdBy}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <BiTimeFive
                color="#6e6219"
                style={{ marginBottom: 2, marginRight: 8 }}
              />
              <Typography>
                {date.format(new Date(dateCode), "DD/MM/YYYY")}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box bgcolor="#3e618150" padding="7px 17px" overflow="hidden">
          <pre className={styles.content}>{content}</pre>
        </Box>
      </Link>
    </div>
  );
}
