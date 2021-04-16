import { useState, useEffect, useCallback } from "react";
import db from "../libraries/firebase";
import { ascDate, ascMail, ascTitle } from "../helpers/sort.helper";
import copyArray from "../helpers/copyArray.helper";

const useEvents = () => {
  const [events, setEvents] = useState(null);
  const [sortType, setSortType] = useState("date");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSortEmail = useCallback(() => {
    if (sortType !== "email") {
      const eventsCopy = copyArray(events);

      setSortType("email");
      setEvents(eventsCopy.sort(ascMail));
    }
  }, [events, sortType]);

  const handleSortDate = useCallback(() => {
    if (sortType !== "date") {
      const eventsCopy = copyArray(events);

      setSortType("date");
      setEvents(eventsCopy.sort(ascDate));
    }
  }, [events, sortType]);

  const handleSortTitle = useCallback(() => {
    if (sortType !== "title") {
      const eventsCopy = copyArray(events);

      setSortType("title");
      setEvents(eventsCopy.sort(ascTitle));
    }
  }, [events, sortType]);

  useEffect(() => {
    const ref = db.database().ref().child("events");

    ref
      .once("value")
      .then((snap) => {
        const res = snap.val();

        const arrEvents = Object.values(res);

        const dataCopy = copyArray(arrEvents);

        setEvents(dataCopy.sort(ascDate));
      })
      .catch(() => {
        setErrorMessage("Ինչ որ բան այն չէ: Խնդրում ենք փորձել մի քիչ հետո:");
      });
  }, []);

  return {
    events,
    setEvents,
    sortType,
    setSortType,
    errorMessage,
    setErrorMessage,
    handleSortEmail,
    handleSortDate,
    handleSortTitle,
  };
};

export default useEvents;
