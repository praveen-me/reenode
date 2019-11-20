import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "../Login";

const AuthHoc = Component => {
  const WrappedComponent = ({ history }) => {
    const token = useSelector(state => state.token);

    if (token) {
      return <Component />;
    } else {
      history.push("/login");
      return <Login />;
    }
  };

  return withRouter(WrappedComponent);
};

export default AuthHoc;
