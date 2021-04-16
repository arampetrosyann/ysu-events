import { useState, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { limitText } from "../helpers/validation.helper";
import db from "../libraries/firebase";
import UserContext from "../context/UserContext";

const useCreateEvent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const { user } = useContext(UserContext);

  const history = useHistory();

  const handleTitleInput = useCallback(({ target }) => {
    const normValue = limitText(target.value, 50);

    setTitle(normValue);
  }, []);

  const handleContentInput = useCallback(({ target: { value } }) => {
    setContent(value);
  }, []);

  const handleButtonClick = useCallback(() => {
    if (title.trim() !== "" && content.trim().length > 50) {
      const id = uuidv4();

      const ref = db.database().ref("/events/" + id);

      ref.set({
        id,
        title: title.trim(),
        createdBy: user.email,
        content: content.trim(),
        date: Date(),
        comments: null,
      });

      history.push("/events");

      setDisableBtn(true);
    }
  }, [title, content, history, user]);

  return {
    title,
    content,
    disableBtn,
    handleTitleInput,
    handleContentInput,
    handleButtonClick,
  };
};

export default useCreateEvent;
