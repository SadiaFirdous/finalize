import React, { Component } from "react";
import SubmittedAndDuplicates from "./SubmittedAndDuplicates";
import "../../stylesheets/inApp/groupInfo.css";
import Approved from "./Approved";
import About from "./About";
class GroupInfo extends React.Component {
  computeApprovedData = () => {};
  render() {
    return (
      <div className="GroupInfoMainDiv">
        <div className="sectionsDiv">
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
          <button
            onClick={this.props.handleAbout}
            className={this.props.aboutDisplay ? "about active" : "about"}
          >
            About
          </button>
        </div>
        <div className="listDiv">
          {this.props.duplicatesDisplay && (
            <div className="notifyButtonDiv">
              <button className="notifyAllButton">Notify All</button>
            </div>
          )}

          {this.props.duplicatesDisplay && (
            <SubmittedAndDuplicates
              Data={this.props.groupData.duplicatesData}
            />
          )}
          {this.props.submittedDisplay && (
            <SubmittedAndDuplicates Data={this.props.groupData.submittedData} />
          )}

          {this.props.approvedDisplay && (
            <Approved Data={this.props.groupData.submittedData} />
          )}
          {this.props.aboutDisplay && (
            <About groupData={this.props.groupData} />
          )}
        </div>
      </div>
    );
  }
}

export default GroupInfo;
