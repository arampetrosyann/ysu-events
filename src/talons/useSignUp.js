import { useState, useCallback, useContext } from "react";
import db from "../libraries/firebase";
import {
  limitText,
  hasAnySpaces,
  isValidEmail,
} from "../helpers/validation.helper";
import UserContext from "../context/UserContext";

const useSignUp = () => {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [pass, setPass] = useState("");
  const [passErr, setPassErr] = useState("");
  const [repPass, setRepPass] = useState("");
  const [repPassErr, setRepPassErr] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  const { user, setIsFinished } = useContext(UserContext);

  const handleEmailInput = useCallback(({ target: { value } }) => {
    let message = "";

    if (value.length === 0) {
      message = "Այս դաշտը դատարկ լինել չի կարող";
    } else if (!isValidEmail(value)) {
      message = "Սխալ Էլ. հասցե";
    } else {
      message = "";
    }

    setEmailErr(message);
    setEmail(value);
  }, []);

  const handlePassInput = useCallback(
    ({ target }) => {
      const normValue = limitText(target.value, 20);

      let message = "";

      if (hasAnySpaces(normValue)) {
        message = "Բացատ չի թույլատրվում";
      } else if (normValue.length === 0) {
        message = "Այս դաշտը դատարկ լինել չի կարող";
      } else if (normValue.length < 6) {
        message = "Գաղտնաբառը պետք է ունենա առնվազն 6 սիմվոլ";
      } else {
        message = "";
      }

      if (repPass && normValue !== repPass) {
        setRepPassErr("Գաղտնաբառերը չեն համընկնում");
      } else {
        setRepPassErr("");
      }

      setPassErr(message);
      setPass(normValue);
    },
    [repPass]
  );

  const handleRepPassInput = useCallback(
    ({ target }) => {
      const normValue = limitText(target.value, 20);

      let message = "";

      if (normValue.length === 0) {
        message = "Այս դաշտը դատարկ լինել չի կարող";
      } else if (pass !== normValue) {
        message = "Գաղտնաբառերը չեն համընկնում";
      } else {
        message = "";
      }

      setRepPassErr(message);
      setRepPass(normValue);
    },
    [pass]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email && !emailErr && pass && !passErr && repPass && !repPassErr) {
      setDisableBtn(true);

      db.auth()
        .createUserWithEmailAndPassword(email, pass)
        .then((res) => {
          res.user
            .sendEmailVerification()
            .then(() => {
              setAlert("Հաստատեք Ձեր Էլ. Հասցեն");
              setEmail("");
              setPass("");
              setRepPass("");
              setTimeout(() => {
                setAlert("");
              }, 3000);
            })
            .catch(() => {
              setAlert("Խնդիր Կապված Ձեր Էլ. Հասցեի հետ");
              setTimeout(() => {
                setAlert("");
              }, 3000);
            });
          setIsFinished(false);
        })
        .catch(() => {
          setError("Տվյալները սխալ են");
        });
    }
  };

  return {
    email,
    emailErr,
    pass,
    passErr,
    repPass,
    repPassErr,
    disableBtn,
    error,
    alert,
    handleEmailInput,
    handlePassInput,
    handleRepPassInput,
    handleSubmit,
    user,
  };
};

export default useSignUp;
