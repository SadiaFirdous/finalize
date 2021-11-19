import React, { Component } from "react";
import "../../stylesheets/inApp/body.css";
import CreateGroup from "./CreateGroup";
import GroupsList from "./GroupsList";
import GroupInfo from "./GroupInfo";
class Body extends React.Component {
  yourGroupsData = [
    {
      projectName: "Project Management",
      aboutTheProject: "About the project",
      people: ["A", "B", "C"],
      submittedData: [
        {
          projectName: ".ffasfsfsf",
          names: ["106", "91"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
          isApproved: false,
          completed: false,
          link: "www.google.com",
        },
        {
          projectName: "helloasfhasjfshjfdsfdsgdsgdh",
          names: ["106", "526"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
          completed: true,
          isApproved: true,
          link: "www.google.com",
        },
      ],
      duplicatesData: [
        {
          projectName: "a",
          names: ["106", "91"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
          isApproved: false,
          completed: false,
          link: "www.google.com",
        },
        {
          projectName: "b",
          names: ["106", "526"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
          completed: true,
          isApproved: false,
          link: "www.google.com",
        },
      ],
    },
    {
      projectName: "asfasfasjas",
      aboutTheProject: "About the project",
      people: ["A", "B", "C"],
    },
    {
      projectName: "bbbbbb",
      aboutTheProject: "About the project",
      people: ["A", "B", "C"],
    },
    {
      projectName: "Proafas",
      aboutTheProject: "About the project",
      people: ["A", "B", "C"],
    },
    {
      projectName: "noway",
      aboutTheProject: "About the project",
      people: ["A", "B", "C"],
    },
  ];
  state = {
    //inside group info sections
    submittedDisplay: true,
    duplicatesDisplay: false,
    approvedDisplay: false,
    aboutDisplay: false,
    viewSubmissionDisplay: false,
    //groupInfo display and data
    groupData: {},
    teamData: {},
  };
  handleSubmissions = () => {
    this.setState({
      submittedDisplay: true,
      duplicatesDisplay: false,
      approvedDisplay: false,
      aboutDisplay: false,
      viewSubmissionDisplay: false,
    });
  };
  handleDuplicates = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: true,
      approvedDisplay: false,
      aboutDisplay: false,
      viewSubmissionDisplay: false,
    });
  };
  handleApproved = () => {
    console.log("approvedCalled");
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: false,
      approvedDisplay: true,
      aboutDisplay: false,
      viewSubmissionDisplay: false,
    });
  };
  handleAbout = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: false,
      approvedDisplay: false,
      viewSubmissionDisplay: false,
      aboutDisplay: true,
    });
  };
  openGroupInfo = (groupData) => {
    this.props.handleGroupInfo(groupData.projectName);
    this.setState({
      submittedDisplay: true,
      duplicatesDisplay: false,
      approvedDisplay: false,
      aboutDisplay: false,
      viewSubmissionDisplay: false,
      groupData: groupData,
    });
    this.props.setGroupInfoDisplay(true, groupData.projectName);
  };
  handleViewSubmissions = (data) => {
    console.log(data);
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: false,
      approvedDisplay: false,
      viewSubmissionDisplay: true,
      aboutDisplay: false,
      teamData: data,
    });
  };
  handleComments = () => {
    console.log("hello");
  };

  render() {
    return (
      <div className="bodyDiv">
        <div className="headingForDiv">
          <span className="createGroupHeading">{this.props.bodyName}</span>
        </div>
        <div className="contentArea">
          {this.props.createGroupDisplay && <CreateGroup />}
          {this.props.groupsDisplay && (
            <GroupsList
              yourGroupsData={this.yourGroupsData}
              openGroupInfo={this.openGroupInfo}
            />
          )}
          {this.props.groupInfoDisplay && (
            <GroupInfo
              handleSubmissions={this.handleSubmissions}
              handleDuplicates={this.handleDuplicates}
              handleApproved={this.handleApproved}
              handleAbout={this.handleAbout}
              handleViewSubmissions={this.handleViewSubmissions}
              handleComments={this.handleComments}
              submittedDisplay={this.state.submittedDisplay}
              duplicatesDisplay={this.state.duplicatesDisplay}
              approvedDisplay={this.state.approvedDisplay}
              aboutDisplay={this.state.aboutDisplay}
              viewSubmissionDisplay={this.state.viewSubmissionDisplay}
              groupData={this.state.groupData}
              teamData={this.state.teamData}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Body;
