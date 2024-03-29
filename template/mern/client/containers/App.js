import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "../scss/index.scss";

import Login from "../components/Login";
import HomePage from "../components/HomePage";
import Signup from "../components/Signup";

import AuthRoute from "./AuthRoute";
import Loader from "./Loader";
import { verifyUser } from "../store/actions/auth.action";

import Header from "./../components/Header";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      setIsLoading(false);
    } else {
      dispatch(verifyUser()).then(setIsLoading(false));
    }
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <AuthRoute exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
