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
  addEachStudentProject = async () => {
    const p = await fetch("/addstudentproject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        projectTitle: this.state.projectTitle,
        abstract: this.state.abstract,
        teamMem1: this.state.teamMem1,
        teamMem2: this.state.teamMem2,
        teamMem3: this.state.teamMem3,
        teamMem4: this.state.teamMem4,
        projectLink: this.state.projectLink,
      }),
    }).then(window.open("http://localhost:3000/dashboard", "_top"));
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
          <button
            className="addButton"
            onClick={() => this.addEachStudentProject()}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default AddDetails;
