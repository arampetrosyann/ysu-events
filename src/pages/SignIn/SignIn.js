import { Box, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { Loader } from "../../components";
import useSignIn from "../../talons/useSignIn";
import useStyles from "./mui.styles";

export default function SignIn() {
  const {
    email,
    emailErr,
    pass,
    passErr,
    error,
    handleEmailInput,
    handlePassInput,
    handleSubmit,
    user,
  } = useSignIn();

  const classes = useStyles();

  return (
    <>
      {!user ? (
        <form
          action="/"
          method="POST"
          onSubmit={handleSubmit}
          className={classes.form}
          noValidate
        >
          <Box color="#333333">
            <AiOutlineUser fontSize={54} />
          </Box>
          <TextField
            value={email}
            onChange={handleEmailInput}
            className={classes.input}
            variant="outlined"
            id="email"
            name="email"
            label="Էլ. փոստ"
            type="email"
            error={Boolean(emailErr)}
            helperText={emailErr}
            fullWidth
            required
            autoFocus
          />
          <TextField
            value={pass}
            onChange={handlePassInput}
            className={classes.input}
            variant="outlined"
            id="password"
            name="password"
            label="Գաղտնաբառ"
            type="password"
            error={Boolean(passErr)}
            helperText={passErr}
            fullWidth
            required
          />
          <Box width="100%">
            <Link to="/sign-up" style={{ textDecoration: "none" }}>
              <Typography className={classes.text}>
                <span style={{ color: "#000" }}>Չունես հաշիվ - </span>Գրանցվել
              </Typography>
            </Link>
          </Box>
          {error ? (
            <Box
              display="flex"
              width="100%"
              alignItems="center"
              marginBottom="10px"
              color="#f44336"
            >
              <AiOutlineClose fontSize={25} style={{ marginRight: 8 }} />
              <Typography>{error}</Typography>
            </Box>
          ) : null}

          <Button
            type="submit"
            variant="outlined"
            disabled={!(email && !emailErr && pass && !passErr)}
            fullWidth
            className={classes.submit}
          >
            Մուտք
          </Button>
        </form>
      ) : (
        <Loader />
      )}
    </>
  );
}
