import React, { Component } from "react";
import "../../stylesheets/inApp/about.css";
class About extends React.Component {
  render() {
    return (
      <div className="aboutMainDiv">
        <div className="projectTitleDiv">
          <span className="projectTitleText">Project Title: </span>
          <span>{this.props.groupData.projectName}</span>
        </div>
        <div className="aboutProjectDiv">
          <span className="aboutText">About project:</span>
          <span>{this.props.groupData.aboutTheProject}</span>
        </div>
      </div>
    );
  }
}

export default About;
