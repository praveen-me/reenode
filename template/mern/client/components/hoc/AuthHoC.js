import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const AuthHoc = Component => {
  const WrappedComponent = ({ history }) => {
    const token = useSelector(state => state.token);

    if (!token) {
      return <Component />;
    } else {
      history.push("/");
      return <></>;
    }
  };

  return withRouter(WrappedComponent);
};

export default AuthHoc;
