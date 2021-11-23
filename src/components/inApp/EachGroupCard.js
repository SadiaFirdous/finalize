import React, { Component } from "react";
import "../../stylesheets/inApp/eachGroupCard.css";
import "../../stylesheets/inApp/cardSettings.css";
import PeopleLogo from "../../media/PeopleLogo.svg";
import DeleteIcon from "../../media/Delete.svg";
import CardSettings from "../../media/CardSettings.svg";

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
      <div
        className="groupDiv"
        onClick={() => {
          console.log("inEachGroupInfo");
          console.log(this.props.groupData);
          this.props.openGroupInfo(this.props.groupData);
        }}
      >
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
        {this.props.isTeacher && (
          <div className="cardSettingDiv">
            <img
              className="deleteicon"
              src={DeleteIcon}
              alt="img"
              onClick={() => {
                alert(
                  `Are you sure you want delete ${this.props.groupData.projectName} ?`
                );
              }}
            />
            <img className="cardSettingsIcon" src={CardSettings} alt="img" />
          </div>
        )}
      </div>
    );
  }
}

export default EachGroupCard;
