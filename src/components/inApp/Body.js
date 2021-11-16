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
          projectName: "Library Mang.",
          names: ["106", "91"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
        },
        {
          projectName: "Library Mang.",
          names: ["106", "91"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
        },
        {
          projectName: "Library Mang.",
          names: ["106", "91"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
        },
        {
          projectName: "Library Mang.",
          names: ["106", "91"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
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
      projectName: "Project Management",
      aboutTheProject: "About the project",
      people: ["A", "B", "C"],
    },
    {
      projectName: "Project Management",
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
    //groupInfo display and data
    groupData: {},
  };
  handleSubmissions = () => {
    this.setState({
      submittedDisplay: true,
      duplicatesDisplay: false,
      approvedDisplay: false,
      aboutDisplay: false,
    });
  };
  handleDuplicates = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: true,
      approvedDisplay: false,
      aboutDisplay: false,
    });
  };
  handleApproved = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: false,
      approvedDisplay: true,
      aboutDisplay: false,
    });
  };
  handleAbout = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: false,
      approvedDisplay: false,
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
      groupData: groupData,
    });
    this.props.setGroupInfoDisplay(true, groupData.projectName);
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
              submittedDisplay={this.state.submittedDisplay}
              duplicatesDisplay={this.state.duplicatesDisplay}
              approvedDisplay={this.state.approvedDisplay}
              aboutDisplay={this.state.aboutDisplay}
              groupData={this.state.groupData}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Body;
