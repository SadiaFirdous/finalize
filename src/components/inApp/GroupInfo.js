import React, { Component } from "react";
import SubmittedAndDuplicates from "./SubmittedAndDuplicates";
import "../../stylesheets/inApp/groupInfo.css";
import Approved from "./Approved";
import About from "./About";
import ViewSubmissions from "./ViewSubmissions";
import AddDetails from "./AddDetails";
class GroupInfo extends React.Component {
  computeApprovedData = () => {};

  render() {
    // console.log(this.props.isTeacher);
    console.log("in groupInfo");
    console.log(this.props);
    return (
      <div className="GroupInfoMainDiv">
        <div className="sectionsDiv">
          <div className="leftSection">
            <button
              onClick={this.props.handleSubmissions}
              className={
                this.props.submittedDisplay ? "submitted active" : "submitted"
              }
            >
              {"Submitted " +
                "(" +
                this.props.groupData.submittedData.length +
                ")"}
            </button>
            <button
              onClick={this.props.handleDuplicates}
              className={
                this.props.duplicatesDisplay ? "duplicates active" : "submitted"
              }
            >
              {"Duplicates " +
                "(" +
                this.props.groupData.duplicatesData.length +
                ")"}
            </button>
            {this.props.isTeacher && (
              <button
                onClick={this.props.handleApproved}
                className={
                  this.props.approvedDisplay ? "approved active" : "approved"
                }
              >
                {"Approved " +
                  "(" +
                  this.props.groupData.submittedData.length +
                  ")"}
              </button>
            )}

            <button
              onClick={this.props.handleAbout}
              className={this.props.aboutDisplay ? "about active" : "about"}
            >
              About
            </button>
          </div>
          {!this.props.isTeacher && (
            <div className="rightButtonDiv">
              <button
                className={
                  this.props.addDetailsDisplay
                    ? "addDetailsButton active"
                    : "addDetailsButton"
                }
                onClick={this.props.handleAddDetails}
              >
                Add details
              </button>
            </div>
          )}
        </div>
        <div className="listDiv">
          {this.props.duplicatesDisplay && this.props.isTeacher && (
            <div className="notifyButtonDiv">
              <button className="notifyAllButton">Notify All</button>
            </div>
          )}

          {this.props.duplicatesDisplay && (
            <SubmittedAndDuplicates
              isTeacher={this.props.isTeacher}
              Data={this.props.groupData.duplicatesData}
            />
          )}
          {this.props.submittedDisplay && (
            <SubmittedAndDuplicates
              isTeacher={this.props.isTeacher}
              Data={this.props.groupData.submittedData}
            />
          )}

          {this.props.approvedDisplay && (
            <Approved
              isTeacher={this.props.isTeacher}
              Data={this.props.groupData.submittedData}
              handleViewSubmissions={this.props.handleViewSubmissions}
              handleComments={this.props.handleComments}
            />
          )}
          {this.props.aboutDisplay && (
            <About
              groupData={this.props.groupData}
              isTeacher={this.props.isTeacher}
            />
          )}
          {this.props.viewSubmissionDisplay && (
            <ViewSubmissions teamData={this.props.teamData} />
          )}
          {this.props.addDetailsDisplay && <AddDetails />}
        </div>
      </div>
    );
  }
}

export default GroupInfo;
