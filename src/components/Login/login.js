import React from "react";
import "./login.css";

import Input from "../Input/input";
import Button from "../Button/button";
import SignIn from "../Signin/signin";
import Title from "../Title/title";
import Or from "../or/or";

export const Login = () => {
  return (
    <div className="wrap-l">
      <div className="title">
        <Title />
      </div>

      <div className="login">
        <div className="sign">
          <SignIn />
        </div>

        <Input type="email" text="Email" />
        <Input type="password" text="Password" />
        <Button />
      </div>
      <Or />
    </div>
  );
};

export default Login;
