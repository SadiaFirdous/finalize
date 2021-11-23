import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/inApp/viewSubmissions.css";
class ViewSubmission extends React.Component {
  render() {
    return (
      <div className="ViewSubmissionMainDiv">
        <div className="projectTitleDv">
          <span className="projectNameText">Project Name: </span>
          <span>{this.props.teamData.projectName}</span>
        </div>

        <div className="abstractProjectDiv">
          <span className="abstractText">Abstract :</span>
          <span>{this.props.teamData.abstract}</span>
        </div>
        <div className="commentsProjectDiv">
          <span className="commentsText">Comments :</span>
          <textarea columns="50" rows="10" class="commentsField">
            {this.props.teamData.comments}
          </textarea>
        </div>

        <div className="teamMembersDiv">
          <span className="teamMembers">Team Members: </span>
          {this.props.teamData.names.map((name) => {
            return <span className="name">{name}</span>;
          })}
        </div>

        <div className="linkProjectDiv">
          <span className="link">Link: </span>
          <a href={this.props.teamData.link} target="_blank">
            {this.props.teamData.link}
          </a>
        </div>
      </div>
    );
  }
}

export default ViewSubmission;
