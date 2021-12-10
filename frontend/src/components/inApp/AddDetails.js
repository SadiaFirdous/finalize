import React, { Component } from "react";
import "../../stylesheets/inApp/addDetails.css";
class AddDetails extends React.Component {
  state = {
    projectTitle: "",
    abstract: "",
    teamMem1: "",
    teamMem2: "",
    teamMem3: "",
    teamMem4: "",
    projectLink: "",
  };
  render() {
    return (
      <div className="addMainDiv">
        <div className="addprojectTitleDv">
          <span className="addProjectNameText">Project Name: </span>
          <input
            className="aboutProjectField"
            onChange={(e) => {
              this.setState({ projectTitle: e.target.value });
            }}
          ></input>
        </div>

        <div className="addAbstractProjectDiv">
          <span className="addAbstractText">Abstract :</span>
          <textarea
            columns="10"
            rows="10"
            className="abstractField"
            onChange={(e) => {
              this.setState({ abstract: e.target.value });
            }}
          ></textarea>
        </div>
        <div className="addTeamMembersDiv">
          <span className="addTeamMembers">Team Members: </span>
          <input
            className="membersField1"
            onChange={(e) => {
              this.setState({ teamMem1: e.target.value });
            }}
          ></input>
          <input
            className="membersField2"
            onChange={(e) => {
              this.setState({ teamMem2: e.target.value });
            }}
          ></input>
          <input
            className="membersField3"
            onChange={(e) => {
              this.setState({ teamMem3: e.target.value });
            }}
          ></input>
          <input
            className="membersField4"
            onChange={(e) => {
              this.setState({ teamMem4: e.target.value });
            }}
          ></input>
        </div>

        <div className="addLinkProjectDiv">
          <span className="addLink">Link: </span>
          <input
            className="addLinkField"
            placeholder="Your Project Link"
            onChange={(e) => {
              this.setState({ projectLink: e.target.value });
            }}
          ></input>
        </div>
        <div className="addButtonDiv">
          <button className="addButton">Add</button>
        </div>
      </div>
    );
  }
}

export default AddDetails;
