import { useState, useCallback, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import db from "../libraries/firebase";
import copyArray from "../helpers/copyArray.helper";
import { ascDate } from "../helpers/sort.helper";

const useSingleEvent = () => {
  const [edit, setEdit] = useState(false);
  const [canUpdate, setCanUpdate] = useState(false);
  const [text, setText] = useState("");
  const [curEvent, setCurEvent] = useState(null);
  const [eventComments, setEventComments] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  const handleEditBtn = useCallback(() => {
    setEdit((prevEdit) => !prevEdit);
  }, []);

  const handleDeleteBtn = useCallback(() => {
    const ref = db.database().ref("/events/" + id);

    ref.remove();

    history.push("/");
  }, [history, id]);

  const handleDoneBtn = useCallback(() => {
    if (text.trim().length >= 50 && text !== curEvent.content) {
      const ref = db.database().ref("/events/" + id);

      ref.update({ content: text });

      setEdit(false);
      setCanUpdate(false);
    }
  }, [text, id, curEvent]);

  const handleTextInput = useCallback(
    ({ target: { value } }) => {
      setText(value);
      if (!canUpdate) {
        setCanUpdate(true);
      }
    },
    [canUpdate]
  );

  useEffect(() => {
    const refEvent = db.database().ref("/events/" + id);

    refEvent.once("value").then((snap) => {
      const { title, content, createdBy, date, comments = {} } = snap.val();

      setCurEvent({ title, content, createdBy, date, comments });
      setText(content);
    });

    refEvent.child("comments").on("value", (snap) => {
      const comments = snap.val();

      if (comments) {
        const arrComs = Object.values(comments);

        const dataCopy = copyArray(arrComs);

        setEventComments(dataCopy.sort(ascDate));
      } else {
        setEventComments(null);
      }
    });
  }, [id]);

  return {
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
  };
};

export default useSingleEvent;
