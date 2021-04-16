import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = function ({ rend = true, children, to, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return rend ? children : <Redirect to={to} />;
      }}
    />
  );
};

export default PrivateRoute;
