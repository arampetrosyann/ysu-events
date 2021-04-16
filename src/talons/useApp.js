import { useState, useEffect } from "react";
import db from "../libraries/firebase";

const useApp = () => {
  const [user, setUser] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    db.auth().languageCode = "hy";

    db.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setIsFinished(true);
    });
  }, []);

  return { user, isFinished, setIsFinished };
};

export default useApp;
