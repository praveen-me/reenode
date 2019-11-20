import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const userData = useSelector(state => state.user);

  return (
    <header className="header">
      <h1>React Node Boilerplate</h1>
      <div className="auth-btns">
        {userData ? (
          <button>Logout</button>
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

export default Header;
