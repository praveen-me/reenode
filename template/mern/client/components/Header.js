import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { logOut } from "../store/actions/auth.action";

const Header = props => {
  const userData = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    props.history.push("/login");
  };

  return (
    <header className="header">
      <h1>React Node Boilerplate</h1>
      <div className="auth-btns">
        {userData ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default withRouter(Header);
