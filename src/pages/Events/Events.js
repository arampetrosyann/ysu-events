import { v1 as uuidv1 } from "uuid";
import { Post, Loader } from "../../components";
import { MdSort } from "react-icons/md";
import { Typography, Box, Button } from "@material-ui/core";
import styles from "./Events.module.css";
import useEvents from "../../talons/useEvents";
import useStyles from "./mui.styles";

export default function Events() {
  const {
    events,
    sortType,
    errorMessage,
    handleSortEmail,
    handleSortDate,
    handleSortTitle,
  } = useEvents();

  const classes = useStyles();

  return (
    <section className={styles.events}>
      {errorMessage ? (
        <Typography className={classes.errText}>{errorMessage}</Typography>
      ) : (
        <>
          {events ? (
            <>
              <Box
                display="flex"
                width="100%"
                padding="8px 0"
                alignItems="center"
                justifyContent="space-evenly"
                flexWrap="wrap"
                borderBottom="0.5px solid #50505050"
              >
                <Box
                  display="flex"
                  padding="8px 0"
                  alignItems="center"
                  color="#3e6181"
                  fontSize={25}
                >
                  <MdSort />
                  <Typography className={classes.iconText}>
                    Տեսակավորել
                  </Typography>
                </Box>
                <Box display="flex" flexWrap="wrap" alignItems="center">
                  <Button
                    variant="outlined"
                    size="medium"
                    className={
                      sortType === "email"
                        ? `${classes.btn} ${classes[sortType]}`
                        : classes.btn
                    }
                    onClick={handleSortEmail}
                  >
                    Էլ. փոստ
                  </Button>
                  <Button
                    variant="outlined"
                    size="medium"
                    className={
                      sortType === "date"
                        ? `${classes.btn} ${classes[sortType]}`
                        : classes.btn
                    }
                    onClick={handleSortDate}
                  >
                    Ամսաթիվ
                  </Button>
                  <Button
                    variant="outlined"
                    size="medium"
                    className={
                      sortType === "title"
                        ? `${classes.btn} ${classes[sortType]}`
                        : classes.btn
                    }
                    onClick={handleSortTitle}
                  >
                    Վերնագիր
                  </Button>
                </Box>
              </Box>
              {events.map((data, ind) => {
                return <Post key={ind + uuidv1()} data={data} />;
              })}
            </>
          ) : (
            <Loader />
          )}
        </>
      )}
    </section>
  );
}
