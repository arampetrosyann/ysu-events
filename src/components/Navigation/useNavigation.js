import { useCallback } from "react";
import db from "../../libraries/firebase";

const useNavigation = (setIsFinished) => {
  const handleUserSignOut = useCallback(() => {
    db.auth().signOut();

    setIsFinished(false);
  }, [setIsFinished]);

  return { handleUserSignOut };
};

export default useNavigation;
