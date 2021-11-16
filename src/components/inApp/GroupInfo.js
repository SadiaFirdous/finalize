import React, { Component } from "react";
import SubmittedAndDuplicates from "./SubmittedAndDuplicates";
import "../../stylesheets/inApp/groupInfo.css";
import Approved from "./Approved";
import About from "./About";
class GroupInfo extends React.Component {
  render() {
    return (
      <div className="GroupInfoMainDiv">
        <div className="sectionsDiv">
          <button onClick={this.props.handleSubmissions} className="submitted">
            {"Submitted " + "(" + "60" + ")"}
          </button>
          <button onClick={this.props.handleDuplicates} className="duplicates">
            {"Duplicated " + "(" + "60" + ")"}
          </button>
          <button onClick={this.props.handleApproved} className="approved">
            {"Approved " + "(" + "60" + ")"}
          </button>
          <button onClick={this.props.handleAbout} className="about">
            About
          </button>
        </div>
        <div>
          {this.props.submittedDisplay ? (
            <SubmittedAndDuplicates
              submittedData={this.props.groupData.submittedData}
            />
          ) : this.props.duplicatesDisplay ? (
            <SubmittedAndDuplicates
              duplicatesData={this.props.groupData.duplicatesData}
            />
          ) : (
            ""
          )}
          {this.props.approvedDisplay && <Approved />}
          {this.props.aboutDisplay && (
            <About groupData={this.props.groupData} />
          )}
        </div>
      </div>
    );
  }
}

export default GroupInfo;
