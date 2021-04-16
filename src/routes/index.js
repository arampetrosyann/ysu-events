import { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  SignIn,
  Events,
  CreateEvent,
  SignUp,
  SingleEvent,
  NotFound,
} from "../pages";
import PrivateRoute from "./PrivateRoute";
import UserContext from "../context/UserContext";

export default function Routes() {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute rend={!user} path="/sign-in" to="/">
        <SignIn />
      </PrivateRoute>
      <PrivateRoute rend={!user} path="/sign-up" to="/">
        <SignUp />
      </PrivateRoute>
      <Route exact path="/events">
        <Events />
      </Route>
      <PrivateRoute
        rend={user && user.emailVerified ? true : false}
        path="/events/:id"
        to="/sign-in"
      >
        <SingleEvent />
      </PrivateRoute>
      <PrivateRoute
        rend={user && user.emailVerified ? true : false}
        path="/create-event"
        to="/sign-in"
      >
        <CreateEvent />
      </PrivateRoute>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}
