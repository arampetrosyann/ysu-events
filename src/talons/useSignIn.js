import { useState, useCallback, useContext } from "react";
import { useHistory } from "react-router-dom";
import db from "../libraries/firebase";
import {
  limitText,
  isValidEmail,
  hasAnySpaces,
} from "../helpers/validation.helper";
import UserContext from "../context/UserContext";

const useSignIn = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");
  const [error, setError] = useState("");
  const { user, setIsFinished } = useContext(UserContext);

  const history = useHistory();

  const handleEmailInput = useCallback(({ target: { value } }) => {
    let message = "";

    if (value.length === 0) {
      message = "Տվյալ դաշտի լրացումը պարտադիր է";
    } else if (!isValidEmail(value)) {
      message = "Սխալ Էլ. հասցե";
    } else {
      message = "";
    }

    setEmailErr(message);
    setEmail(value);
  }, []);

  const handlePassInput = useCallback(({ target }) => {
    const normValue = limitText(target.value, 20);

    let message = "";

    if (hasAnySpaces(normValue)) {
      message = "Բացատ չի թույլատրվում";
    } else if (normValue.length === 0) {
      message = "Տվյալ դաշտի լրացումը պարտադիր է";
    } else if (normValue.length < 6) {
      message = "Գաղտնաբառը պետք է ունենա առնվազն 6 սիմվոլ";
    } else {
      message = "";
    }

    setPassErr(message);
    setPass(normValue);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email && !emailErr && pass && !passErr) {
      db.auth()
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          setIsFinished(false);

          history.push("/");
        })
        .catch(() => {
          setError("Սխալ Էլ. հասցե կամ գաղտնաբառ");
        });
    }
  };

  return {
    email,
    emailErr,
    pass,
    passErr,
    error,
    handleEmailInput,
    handlePassInput,
    handleSubmit,
    user,
  };
};

export default useSignIn;
