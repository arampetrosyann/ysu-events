import { TextField, Button, Typography } from "@material-ui/core";
import useStyles from "./mui.styles";
import styles from "./CreateEvent.module.css";
import useCreateEvent from "../../talons/useCreateEvent";

export default function CreateEvent() {
  const {
    title,
    content,
    disableBtn,
    handleTitleInput,
    handleContentInput,
    handleButtonClick,
  } = useCreateEvent();
  const classes = useStyles();

  return (
    <div className={styles.createEvent}>
      <Typography component="h2" variant="h3" align="center"></Typography>
      <TextField
        value={title}
        onChange={handleTitleInput}
        label="Վերնագիր"
        placeholder="..."
        style={{ padding: "0 10px" }}
      />
      <TextField
        value={content}
        onChange={handleContentInput}
        label="Բովանդակություն"
        variant="outlined"
        rows={14}
        helperText="Առնվազն 50 սիմվոլ"
        className={classes.contentField}
        multiline
      />
      <Button
        onClick={handleButtonClick}
        variant="outlined"
        size="large"
        className={classes.button}
        disabled={
          disableBtn || title.trim() === "" || content.trim().length < 50
        }
      >
        ՍՏԵՂԾԵԼ
      </Button>
    </div>
  );
}
