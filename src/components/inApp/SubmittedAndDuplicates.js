import React, { Component } from "react";
class SubmittedAndDuplicates extends React.Component {
  render() {
    return <div>{this.props.submittedData ? "Submmited" : "Duplicated"}</div>;
  }
}

export default SubmittedAndDuplicates;
