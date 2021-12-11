import React, { Component } from "react";
import "../../stylesheets/inApp/submittedAndDuplicates.css";
import GreenTick from "../../media/GreenTick.svg";
import Cross from "../../media/Cross.svg";
class SubmittedAndDuplicates extends React.Component {
  render() {
    console.log(this.props.isTeacher);
    return (
      <div className="submittedAndDuplicatesMainDiv">
        {this.props.Data.map((data) => {
          return (
            <div className="listProjects" key={this.props.Data.indexOf(data)}>
              <div className="leftDiv">
                <div className="projectNameDiv">
                  <span className="projectTitle">{data.projectTitle}</span>
                </div>
              </div>
              <div className="rightDiv">
                <div className="rollNumbersDiv">
                  <span className="rollnumbers">{data.teamMem1}</span>
                </div>

                {this.props.isTeacher && (
                  <div className="options">
                    <div className="acceptDiv">
                      <img
                        className="greenTickLogo"
                        src={GreenTick}
                        alt="img"
                      />
                      <button className="accept">Accept</button>
                    </div>

                    <div className="declineDiv">
                      <img className="CrossLogo" src={Cross} alt="img" />
                      <button className="decline">Decline</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SubmittedAndDuplicates;
