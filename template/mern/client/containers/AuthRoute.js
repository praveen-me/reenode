import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = props => {
  const token = useSelector(state => state.token);

  return token ? <Route {...props} /> : <Redirect to="/login" />;
};

export default AuthRoute;
