import React, { Component } from "react";
import WhiteTick from "../../media/WhiteTick.svg";
import LoadingWhite from "../../media/LoadingWhite.svg";
import "../../stylesheets/inApp/approved.css";
class Approved extends React.Component {
  render() {
    return (
      <div className="approvedMainDiv">
        {this.props.Data.map((data) => {
          return (
            <div className="listProjects" key={this.props.Data.indexOf(data)}>
              <div className="leftDiv">
                <div className="projectNameDiv">
                  <span className="projectTitle">{data.projectName}</span>
                </div>
              </div>
              <div className="rightDiv">
                <div className="rollNumbersDiv">
                  <span className="rollnumbers">
                    {data.names[0] + " " + data.names[1]}
                  </span>
                </div>

                <div className="options">
                  <div
                    className={
                      data.completed ? "green buttonDiv" : "blue buttonDiv"
                    }
                  >
                    <img
                      className="statusLogo"
                      src={data.completed ? WhiteTick : LoadingWhite}
                      alt="img"
                    />
                    <button
                      className={
                        data.completed ? "green button" : "blue button"
                      }
                    >
                      {data.completed ? "Completed" : "In Progress"}
                    </button>
                  </div>

                  <div className="declineDiv">
                    <button
                      className="decline"
                      onClick={
                        data.completed
                          ? this.props.handleViewSubmissions
                          : this.props.handleComments
                      }
                    >
                      {data.completed ? "View Submission" : "Comment"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Approved;
