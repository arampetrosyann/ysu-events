import { useState, useEffect } from "react";
import db from "../libraries/firebase";

const useHome = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const ref = db.database().ref("/events").limitToFirst(4);
    let isMounted = true;

    ref
      .once("value")
      .then((snap) => {
        const events = snap.val();

        const arrEvents = Object.values(events);

        if (isMounted) {
          setEvents(arrEvents);
        }
      })
      .catch(() => {});

    return () => {
      isMounted = false;
    };
  }, []);

  return { events };
};

export default useHome;
