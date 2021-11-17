import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleLogo from "../media/GoogleLogo.svg";
import FacebookLogo from "../media/FacebookLogo.svg";
import Line from "../media/Line.svg";
import "../stylesheets/signIn.css";
class SignIn extends React.Component {
  render() {
    return (
      <div className="signInMainDiv">
        <input className="emailInput" placeholder="Enter email"></input>
        <input
          className="passwordInput"
          placeholder="Password"
          type="password"
        ></input>
        <div className="forgotPasswordDiv">
          <Link className="forgotPasswordLink">Forgot password?</Link>
        </div>
        <button className="signInButtonInComponent">Sign In</button>
        <div className="signInContinueWithDiv">
          <img src={Line} alt="img" />
          <span className="orContinueWithText">or continue with</span>
          <img src={Line} alt="img" />
        </div>
        <div className="signInWithMediaDiv">
          <img className="googleLogoSignIn" src={GoogleLogo} alt="img" />
          <img className="facebookLogoSignIn" src={FacebookLogo} alt="img" />
        </div>
      </div>
    );
  }
}

export default SignIn;
