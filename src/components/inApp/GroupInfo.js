import React, { Component } from "react";
import SubmittedAndDuplicates from "./SubmittedAndDuplicates";
import Approved from "./Approved";
import About from "./About";
class GroupInfo extends React.Component {
  render() {
    return (
      <div className="GroupInfoMainDiv">
        <div className="sectionsDiv">
          <button onClick={this.props.handleSubmissions}>
            {"Submitted " + "(" + "60" + ")"}
          </button>
          <button onClick={this.props.handleDuplicates}>
            {"Duplicated " + "(" + "60" + ")"}
          </button>
          <button onClick={this.props.handleApproved}>
            {"Approved " + "(" + "60" + ")"}
          </button>
          <button onClick={this.props.handleAbout}>About</button>
        </div>
        <div>
          {this.props.submittedDisplay ? (
            <SubmittedAndDuplicates submittedData="Submitted" />
          ) : this.props.duplicatesDisplay ? (
            <SubmittedAndDuplicates duplicatesData="Duplicates" />
          ) : (
            ""
          )}
          {this.props.approvedDisplay && <Approved />}
          {this.props.aboutDisplay && <About />}
        </div>
      </div>
    );
  }
}

export default GroupInfo;
