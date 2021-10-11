import React, { Component } from "react";
import "../../stylesheets/inApp/body.css";
import CreateGroup from "./CreateGroup";
import YourGroups from "./YourGroups";
import GroupInfo from "./GroupInfo";
class Body extends React.Component {
  state = {
    submittedDisplay: true,
    duplicatesDisplay: false,
    approvedDisplay: false,
    aboutDisplay: false,
  };
  handleSubmissions = () => {
    this.setState({
      submittedDisplay: true,
      duplicatesDisplay: false,
      approvedDisplay: false,
      aboutDisplay: false,
    });
  };
  handleDuplicates = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: true,
      approvedDisplay: false,
      aboutDisplay: false,
    });
  };
  handleApproved = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: false,
      approvedDisplay: true,
      aboutDisplay: false,
    });
  };
  handleAbout = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: false,
      approvedDisplay: false,
      aboutDisplay: true,
    });
  };

  render() {
    return (
      <div className="bodyDiv">
        <div className="headingForDiv">
          <span className="createGroupHeading">{this.props.bodyName}</span>
        </div>
        <div className="contentArea">
          {this.props.createGroupDisplay && <CreateGroup />}
          {this.props.groupsDisplay && (
            <GroupInfo
              handleSubmissions={this.handleSubmissions}
              handleDuplicates={this.handleDuplicates}
              handleApproved={this.handleApproved}
              handleAbout={this.handleAbout}
              submittedDisplay={this.state.submittedDisplay}
              duplicatesDisplay={this.state.duplicatesDisplay}
              approvedDisplay={this.state.approvedDisplay}
              aboutDisplay={this.state.aboutDisplay}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Body;
