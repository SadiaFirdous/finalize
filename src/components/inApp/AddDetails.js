import React, { Component } from "react";
import "../../stylesheets/inApp/addDetails.css";
class AddDetails extends React.Component {
  render() {
    return (
      <div className="addMainDiv">
        <div className="addprojectTitleDv">
          <span className="addProjectNameText">Project Name: </span>
          <input className="aboutProjectField" placeholder></input>
        </div>

        <div className="addAbstractProjectDiv">
          <span className="addAbstractText">Abstract :</span>
          <textarea columns="10" rows="10" className="abstractField"></textarea>
        </div>
        <div className="addTeamMembersDiv">
          <span className="addTeamMembers">Team Members: </span>
          <input className="membersField1"></input>
          <input className="membersField2"></input>
          <input className="membersField3"></input>
          <input className="membersField4"></input>
        </div>

        <div className="addLinkProjectDiv">
          <span className="addLink">Link: </span>
          <input className="addLinkField" placeholder="Link"></input>
        </div>
      </div>
    );
  }
}

export default AddDetails;
