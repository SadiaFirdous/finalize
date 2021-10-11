import React, { Component } from "react";
import "../../stylesheets/inApp/yourgroups.css";

import ProjectSettings from "../../media/Settings_Project.svg";
import PeopleLogo from "../../media/PeopleLogo.svg";
import PeopleLogoNumber from "../../media/PeopleLogoNumber.svg";

class YourGroups extends React.Component{
    render() {
      return (
        <div className="groupDiv">
          <div className="projectSetitngsDiv">
          <img className ="projectSettingsIcon" src={ProjectSettings} alt="img" />
          </div>
      <div className="projectDetails">
        <span className="projectName">Project Name</span>
        <span className="aboutTheProject">About the project</span>
        </div>
        <div className="projectStatsDiv"> 
        <img className="peopleIconFirst" src={PeopleLogo} alt="img" />
        <img className="peopleIconSecond" src={PeopleLogo} alt="img" />
        <img className="peopleIconNumber" src={PeopleLogoNumber} alt="img" />
        </div>
   

        </div>
      );
    }
  }

export default YourGroups;
