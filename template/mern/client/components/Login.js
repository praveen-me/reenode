import React, { useState } from "react";
import FormTextInput from "./FormTextInput";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginIn } from "../store/actions/auth.action";

const Login = ({ history }) => {
  const isLoginPage = location.href.includes("login");
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    setUserCreds({
      ...userCreds,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(loginIn(userCreds)).then(() => history.push("/"));
  };

  return (
    <div className="auth">
      <h4 className="center">Welcome Back</h4>
      <form className="auth__form row center" onSubmit={handleSubmit}>
        <FormTextInput
          type="text"
          placeholder="Username"
          name="username"
          handleChange={handleChange}
        />
        <FormTextInput
          placeholder="Password"
          type="password"
          name="password"
          handleChange={handleChange}
        />
        <button type="submit" className="button button-primary">
          {isLoginPage ? "Login" : "Signup"}
        </button>
      </form>
      <div className="center">
        <Link to={isLoginPage ? "/signup" : "/login"}>
          {isLoginPage ? "Register Now" : "Login Now"}
        </Link>
      </div>
    </div>
  );
};

export default Login;
