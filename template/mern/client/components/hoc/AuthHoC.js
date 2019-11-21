import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

const AuthHoc = Component => {
  const WrappedComponent = props => {
    const token = useSelector(state => state.token);
    if (!token) {
      return <Component {...props} />;
    } else {
      props.history.push("/");
      return <></>;
    }
  };

  return withRouter(WrappedComponent);
};

export default AuthHoc;
