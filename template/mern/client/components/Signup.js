import React, { useState } from "react";
import FormTextInput from "./FormTextInput";
import { Link } from "react-router-dom";

const Signup = ({ history }) => {
  const isLoginPage = location.href.includes("login");
  const [userCreds, setUserCreds] = useState({
    username: "",
    password: ""
  });

  const handleChange = ({ target: { value, name } }) => {
    setUserCreds({
      ...userCreds,
      [name]: value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/v1/signup`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(userCreds)
      });

      const userData = await response.json();

      if (!userData.err) {
        history.push("/login");
      }
    } catch (e) {}
  };

  return (
    <div className="auth">
      <h4 className="center">Register Now</h4>
      <form onSubmit={handleSubmit} className="auth__form row center">
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
        <>
          <FormTextInput
            placeholder="Email"
            type="email"
            name="email"
            handleChange={handleChange}
          />
          <FormTextInput
            type="text"
            placeholder="FullName"
            name="fullName"
            handleChange={handleChange}
          />
        </>
        <button
          type="submit"
          onClick={handleSubmit}
          className="button button-primary"
        >
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

export default Signup;
