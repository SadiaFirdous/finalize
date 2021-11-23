import React, { Component } from "react";
class AddDetails extends React.Component {
  render() {
    return (
      <div className="ViewSubmissionMainDiv">
        <div className="projectTitleDv">
          <span className="projectNameText">Project Name: </span>
          <input type="text"></input>
        </div>

        <div className="abstractProjectDiv">
          <span className="abstractText">Abstract :</span>
          <input type="text"></input>
        </div>
        <div className="teamMembersDiv">
          <span className="teamMembers">Team Members: </span>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
        </div>

        <div className="linkProjectDiv">
          <span className="link">Link: </span>
          {/* <a href={this.props.teamData.link} target="_blank">
            {this.props.teamData.link}
          </a> */}
        </div>
      </div>
    );
  }
}

export default AddDetails;
