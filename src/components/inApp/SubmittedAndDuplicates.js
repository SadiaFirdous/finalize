import React, { Component } from "react";
import "../../stylesheets/inApp/submittedAndDuplicates.css";
import GreenTick from "../../media/GreenTick.svg";
import Cross from "../../media/Cross.svg";
class SubmittedAndDuplicates extends React.Component {
  render() {
    return (
      <div>
        ({true}?
        {this.props.submittedData.map((data) => {
          return (
            <div className="listProjects">
              <span className="serialNumber">1</span>
              <div className="projectNameDiv">
                <span className="projectTitle">data.projectName</span>
              </div>
              <div className="rollNumbersDiv">
                <span className="rollnumbers">91 106</span>
              </div>

              <div className="options">
                <div className="acceptDiv">
                  <img className="greenTickLogo" src={GreenTick} alt="img" />
                  <button className="accept">Accept</button>
                </div>

                <div className="declineDiv">
                  <img className="CrossLogo" src={Cross} alt="img" />
                  <button className="decline">Decline</button>
                </div>

                <button className="comments">Comment</button>
              </div>
            </div>
          );
        })}
        : {"Duplicated"})
      </div>
    );
  }
}

export default SubmittedAndDuplicates;
