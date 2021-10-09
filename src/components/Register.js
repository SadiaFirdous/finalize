import React, { Component } from "react";
import { Link } from "react-router-dom";
import Line from "../media/Line.svg";
import GoogleLogo from "../media/GoogleLogo.svg";
import FacebookLogo from "../media/FacebookLogo.svg";
import "../stylesheets/register.css";
class Register extends React.Component {
  render() {
    return (
      <div className="registerMainDiv">
        <div className="studentOrTeacherSelectDiv">
          <form>
            <select name="Role" className="selectFormRegister">
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
          </form>
        </div>

        <input className="emailInput" placeholder="Enter email"></input>
        <input className="passwordInput" placeholder="Password"></input>
        <input
          className="confirmPasswordInput"
          placeholder="Confirm Password"
        ></input>
        <button className="registerInButtonComponent">Register</button>
        <div className="registerOrContinueWithDiv">
          <img src={Line} alt="img" />
          <span className="orContinueWithText">or continue with</span>
          <img src={Line} alt="img" />
        </div>
        <div className="registerWithSocials">
          <img className="googleLogoRegister" src={GoogleLogo} alt="img" />
          <img className="facebookLogoRegister" src={FacebookLogo} alt="img" />
        </div>
      </div>
    );
  }
}
export default Register;
