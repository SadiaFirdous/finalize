import React, { Component } from "react";
import "../../stylesheets/inApp/createGroup.css";
class CreateGroup extends React.Component {
  render() {
    return (
      <div>
        <div className="projectTitleDiv">
          <span className="ProjectTitle">Project Title :</span>
          <input className="projectField" placeholder></input>
        </div>
        <div className="titleDiv">
          <span className="AboutTitle">About Project :</span>
          <textarea columns="50" rows="10" className="aboutField"></textarea>
        </div>
        <div className="projectDiv">
          <span className="projectDeadine">Project Deadline: </span>
          <input className="projectDeadineField" placeholder></input>
        </div>
        <div className="linkDiv">
          <span className="linkText">
            Share the below link for people to join:
          </span>
          <input className="linkField" placeholder="Link"></input>
        </div>
        <div className="saveButtonDiv">
          <button className="saveButton">Save</button>
        </div>
      </div>
    );
  }
}

export default CreateGroup;
