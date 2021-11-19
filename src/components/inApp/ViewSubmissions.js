import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/inApp/viewSubmissions.css";
class ViewSubmission extends React.Component {
  render() {
    return (
      <div className="ViewSubmissionMainDiv">
        <div className="projectTitleDiv">
          <span className="projectNameText">Project Name: </span>
          <span>{this.props.teamData.projectName}</span>
        </div>

        <div className="abstractProjectDiv">
          <span className="abstractText">Abstract :</span>
          <span>{this.props.teamData.abstract}</span>
        </div>
        <div className="commentsProjectDiv">
          <span className="commentsText">Comments :</span>
          <textarea columns="50" rows="10" class="commentsField"></textarea>
        </div>

        <div className="teamMembersDiv">
          <span className="teamMembers">Team Members: </span>
          <span className="button1">1602-19-733-091</span>
          <button className="button2">1602-19-733-091</button>
          <button className="button3">1602-19-733-091</button>
          <button className="button4">1602-19-733-091</button>
          <button className="button5">1602-19-733-091</button>
        </div>

        <div className="linkProjectDiv">
          <span className="link">Link: </span>
          {/* <Link to={this.props.teamData.link}>{this.props.teamData.link}</Link> */}
        </div>
      </div>
    );
  }
}

export default ViewSubmission;
