import { useContext } from "react";
import { Box, Typography, IconButton } from "@material-ui/core";
import { IoMailOutline } from "react-icons/io5";
import { MdDelete, MdEdit, MdDone } from "react-icons/md";
import UserContext from "../../context/UserContext";
import useSingleEvent from "../../talons/useSingleEvent";
import useStyles from "./mui.styles";
import { AddComment, Comment, Loader } from "../../components";
import styles from "./SingleEvent.module.css";

export default function SingleEvent() {
  const {
    edit,
    canUpdate,
    text,
    curEvent,
    eventComments,
    id,
    handleEditBtn,
    handleDeleteBtn,
    handleDoneBtn,
    handleTextInput,
  } = useSingleEvent();

  const classes = useStyles();

  const { user } = useContext(UserContext);

  return (
    <section className={styles.root}>
      {curEvent ? (
        <>
          <div className={styles.event}>
            <Box>
              <Box
                display="flex"
                borderBottom="1px solid black"
                padding="6px 10px"
              >
                <Typography
                  component="h3"
                  variant="h4"
                  style={{ width: "100%" }}
                >
                  {user &&
                  (user.email === curEvent.createdBy ||
                    user.email === process.env.REACT_APP_ADM) ? (
                    <aside className={styles.sideContainer}>
                      <div>
                        <IconButton
                          aria-label="delete"
                          onClick={handleDeleteBtn}
                          className={classes.buttonDelete}
                        >
                          <MdDelete />
                        </IconButton>
                      </div>
                      <div>
                        <IconButton
                          aria-label="delete"
                          onClick={handleEditBtn}
                          className={classes.buttonEdit}
                        >
                          <MdEdit />
                        </IconButton>
                      </div>
                      <div>
                        <IconButton
                          aria-label="delete"
                          onClick={handleDoneBtn}
                          className={classes.buttonDone}
                          disabled={text.trim().length < 50 || !canUpdate}
                        >
                          <MdDone />
                        </IconButton>
                      </div>
                    </aside>
                  ) : null}
                  {curEvent.title}
                </Typography>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
                padding="4px 10px"
              >
                <IoMailOutline
                  color="#004904"
                  style={{ marginBottom: 2, marginRight: 8 }}
                />
                <Typography>{curEvent.createdBy}</Typography>
              </Box>
            </Box>
            <Box flex={1} bgcolor="#3e618150">
              {edit ? (
                <textarea
                  rows={21}
                  value={text}
                  onChange={handleTextInput}
                  className={styles.contentEdit}
                />
              ) : (
                <pre className={styles.content}>{text}</pre>
              )}
            </Box>
          </div>
          <AddComment forID={id} />
          {eventComments && (
            <div className={styles.comments}>
              {eventComments.map((comment) => {
                return (
                  <Comment
                    key={comment.id}
                    eventId={id}
                    commId={comment.id}
                    text={comment.content}
                    email={comment.createdBy}
                  />
                );
              })}
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}
