import React, { Component } from "react";
import "../../stylesheets/inApp/createGroup.css";
class createGroup extends React.Component{
    render() {
      return (
        <div className="createGroupDiv">
            <div className="headingForDiv">
            <span className="createGroupHeading">Create Group</span>
            </div>

            <div className="contentArea">
                <div className="projectTitleDiv">
                <span className="ProjectTitle">Project Title :</span>
                <input className="projectField" placeholder></input>
                </div>
             <div className="titleDiv">
             <span className="AboutTitle">About Project :</span>
                <input className="aboutField" placeholder></input>
             </div>
               <div className="projectDiv">
               <span className="projectDeadine">Project Deadline: </span>
                <input className="projectDeadineField" placeholder></input>
               </div>
            <div className="linkDiv">
            <span className="linkText">Share the below link for people to join</span>
                <input className="linkField" placeholder="Link"></input>
            </div>
           
                <button className="saveButton">Save</button>
             </div>
          

        </div>
      );
    }
  }

export default createGroup;
