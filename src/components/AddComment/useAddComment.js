import { useState, useCallback, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import db from "../../libraries/firebase";
import UserContext from "../../context/UserContext";

const useAddComment = (forID = "") => {
  const [content, setContent] = useState("");
  const { user } = useContext(UserContext);

  const handleInput = useCallback(({ target: { value } }) => {
    setContent(value);
  }, []);

  const handleBtnClick = useCallback(() => {
    const commId = uuidv4();

    const ref = db.database().ref("/events/" + forID + "/comments/" + commId);

    ref.set({
      content: content.trim(),
      createdBy: user.email,
      date: Date(),
      id: commId,
    });

    setContent("");
  }, [content, forID, user]);

  return { content, handleInput, handleBtnClick };
};

export default useAddComment;
