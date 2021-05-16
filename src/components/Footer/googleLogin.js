import React from "react";
import "./googleLogin.css";

import GoogleLogo from "../../images/google.svg";

export const GoogleLogin = () => {
  return (
    <div className="google-login">
      <img className="Google-logo" src={GoogleLogo} alt="google logo" />
      <a href="." className="footer-text">
        Sign in with google
      </a>
    </div>
  );
};

export default GoogleLogin;
