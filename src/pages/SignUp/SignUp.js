import { Box, Typography, TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { AiOutlineClose } from "react-icons/ai";
import { Loader } from "../../components";
import useStyles from "./mui.styles";
import useSignUp from "../../talons/useSignUp";

export default function SignUp() {
  const {
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
  } = useSignUp();

  const classes = useStyles();

  return (
    <>
      {!user ? (
        <>
          {alert && (
            <Box className={classes.alertBox}>
              <Alert className={classes.alertClass} severity="success">
                {alert}
              </Alert>
            </Box>
          )}
          <form
            action="/"
            method="POST"
            onSubmit={handleSubmit}
            className={classes.form}
            noValidate
          >
            <Box color="#333333">
              <Typography component="h2" variant="h4">
                Գրանցում
              </Typography>
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
            <TextField
              value={repPass}
              onChange={handleRepPassInput}
              className={classes.input}
              variant="outlined"
              id="confirmPassword"
              name="confirmPassword"
              label="Կրկնել Գաղտնաբառը"
              type="password"
              error={Boolean(repPassErr)}
              helperText={repPassErr}
              fullWidth
              required
            />
            {error ? (
              <Box
                display="flex"
                width="100%"
                alignItems="center"
                marginTop="20px"
                color="#f44336"
              >
                <AiOutlineClose fontSize={25} style={{ marginRight: 8 }} />
                <Typography>{error}</Typography>
              </Box>
            ) : null}
            <Button
              type="submit"
              variant="outlined"
              disabled={
                disableBtn ||
                !(
                  email &&
                  !emailErr &&
                  pass &&
                  !passErr &&
                  repPass &&
                  !repPassErr
                )
              }
              fullWidth
              className={classes.submit}
            >
              Գրանցվել
            </Button>
          </form>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
