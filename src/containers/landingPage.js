import React, { Component } from "react";
import "../stylesheets/landingPage.css";
import Logo from "../media/Logo.svg";
import LandingPageImage from "../media/LandingPageImage.svg";
import FacebookLogo from "../media/FacebookLogo.svg";
import TwitterLogo from "../media/TwitterLogo.svg";
import WhatsappLogo from "../media/WhatsappLogo.svg";
class LandingPage extends React.Component {
  state = {
    signInDisplay: true,
    registerDisplay: false,
  };
  handleSignin = () => {
    this.setState({ signInDisplay: true, registerDisplay: false });
  };
  handleRegister = () => {
    this.setState({ signInDisplay: false, registerDisplay: true });
  };
  render() {
    return (
      <div className="mainDiv">
        <div className="header">
          <div className="logoAndAppNameDiv">
            <img className="logo" src={Logo} alt="img" />
            <p className="appName">Finalize</p>
          </div>
          <div className="headerButtonsDiv">
            <div className="signInButtonDiv">
              <button
                className="signInButton headerButton"
                onClick={this.handleSignin}
              >
                Sign In
              </button>
              <div className="borderBottom"></div>
            </div>
            <button
              className="registerButton headerButton"
              onClick={this.handleRegister}
            >
              Register
            </button>
          </div>
        </div>
        <div className="landingPageBodyDiv">
          <div className="landingPageImageDiv">
            <span className="landingPageText">
              Administer and Manage Projects Efficiently
            </span>
            <img
              src={LandingPageImage}
              className="landingPageImage"
              alt="img"
            />
          </div>
          <div className="signInRegisterContainerDiv">
            {this.state.signInDisplay && <h1>Sign In</h1>}
            {this.state.registerDisplay && <h1>Register</h1>}
          </div>
        </div>
        <div className="footer">
          <div className="footerLogoDiv">
            <img className="logoFooter" src={Logo} alt="img" />
            <div className="appNameAndTaglineDiv">
              <span className="appNameFooter">Finalize</span>
              <span className="taglineFooter">
                Handling projects made simpler.
              </span>
            </div>
          </div>
          <div className="contactFooterDiv">
            <span className="contactHeadingFooter">Contact :</span>
            <span>support.finalize@gmail.com</span>
            <div className="contactMediaLogosDiv">
              <img className="contactMediaLogo" src={FacebookLogo} alt="img" />
              <img className="contactMediaLogo" src={TwitterLogo} alt="img" />
              <img className="contactMediaLogo" src={WhatsappLogo} alt="img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
