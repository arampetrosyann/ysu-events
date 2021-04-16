import { useCallback } from "react";
import db from "../../libraries/firebase";

const useComment = (eventId, commId) => {
  const handleDeleteBtn = useCallback(() => {
    const ref = db.database().ref("/events/" + eventId + "/comments/" + commId);

    ref.remove();
  }, [eventId, commId]);

  return { handleDeleteBtn };
};

export default useComment;
