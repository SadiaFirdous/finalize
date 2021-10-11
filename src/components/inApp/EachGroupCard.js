import React, { Component } from "react";
import "../../stylesheets/inApp/eachGroupCard.css";
import ProjectSettings from "../../media/Settings_Project.svg";
import PeopleLogo from "../../media/PeopleLogo.svg";

class EachGroupCard extends React.Component {
  state = {
    count: 0,
  };

  evaluatePeople = () => {
    let len = this.props.groupData.people.length;
    if (len > 2) {
      this.state.count = len - 2;
    }
  };
  render() {
    this.evaluatePeople();
    return (
      <div className="groupDiv">
        <div className="projectSettingsDiv">
          <img
            className="projectSettingsIcon"
            src={ProjectSettings}
            alt="img"
          />
        </div>
        <div className="projectDetails">
          <span className="projectName">
            {this.props.groupData.projectName}
          </span>
          <span className="aboutTheProject">
            {this.props.groupData.aboutTheProject}
          </span>
        </div>
        <div className="projectStatsDiv">
          <img className="peopleIconFirst" src={PeopleLogo} alt="img" />
          <img className="peopleIconSecond" src={PeopleLogo} alt="img" />
          <span>{this.state.count + "+"}</span>
        </div>
      </div>
    );
  }
}

export default EachGroupCard;
