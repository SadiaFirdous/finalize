import React, { Component } from "react";
import Sidebar from "../../components/inApp/Sidebar";
import Topbar from "../../components/inApp/Topbar";
import Body from "../../components/inApp/Body";
import "../../stylesheets/inApp/dashboard.css";
class Dashboard extends React.Component {
  yourGroupsData = [
    {
      projectName: "Project Management",
      aboutTheProject: "About the project",
      people: ["A", "B", "C"],
      projectDeadline: "25-11-2021 11:59 PM",
      groupLink: "https://bit.ly/3MCKij",
      submittedData: [
        {
          projectName: ".ffasfsfsf",
          names: ["1602-19-733-106", "1602-19-733-091"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
          isApproved: false,
          completed: false,
          link: "https://www.google.com",
        },
        {
          projectName: "helloasfhasjfshjfdsfdsgdsgdh",
          names: [
            "1602-19-733-106",
            "1602-19-733-091",
            "1602-19-733-106",
            "1602-19-733-091",
            "1602-19-733-106",
          ],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
          completed: true,
          isApproved: true,
          link: "https://www.google.com",
        },
        {
          projectName: "nowayhome",
          names: ["106", "526"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
          completed: true,
          isApproved: true,
          link: "https://www.google.com",
        },
        {
          projectName: "tobey",
          names: ["106", "526"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
          completed: true,
          isApproved: true,
          link: "https://www.google.com",
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
          link: "https://www.google.com",
        },
        {
          projectName: "b",
          names: ["106", "526"],
          abstract: "askfhasfgasgfasfhashfiasfgasufgiasf",
          comments: ["kfdsjfsdgjdskjklgjlkgsdjkgjsdkgjkdsjkdsjkgj"],
          completed: true,
          isApproved: false,
          link: "https://www.google.com",
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
    //from db
    isTeacher: true,
    groupsActive: true,
    createGroupActive: false,
    groupInfoDisplay: false,
    bodyName: "YOUR GROUPS",
    //regarding body
    submittedDisplay: true,
    duplicatesDisplay: false,
    approvedDisplay: false,
    aboutDisplay: false,
    viewSubmissionDisplay: false,
    addDetailsDisplay: false,
    //groupInfo display and data
    // groupData: {},
    teamData: {},
  };
  handleCreateGroup = () => {
    this.setState({
      bodyName: "Create Group",
      groupsActive: false,
      createGroupActive: true,
      submittedDisplay: true,
      duplicatesDisplay: false,
      approvedDisplay: false,
      aboutDisplay: false,
      viewSubmissionDisplay: false,
      groupInfoDisplay: false,
      addDetailsDisplay: false,
      //groupInfo display and data
      // groupData: {},
      teamData: {},
    });
  };
  handleGroups = () => {
    this.setState({
      bodyName: "YOUR GROUPS",
      groupsActive: true,
      createGroupActive: false,
      groupInfoDisplay: false,
      projectDeadline: "",
    });
  };
  handleGroupInfo = (groupName, projectDeadline) => {
    this.setState({
      bodyName: groupName,
      projectDeadline: projectDeadline,
      groupsActive: false,
      createGroupActive: false,
    });
  };
  setGroupInfoDisplay = (bool, groupName, projectDeadline) => {
    let newState = { ...this.state };
    newState.groupInfoDisplay = bool;
    newState.bodyName = groupName;
    newState.projectDeadline = projectDeadline;
    newState.groupsActive = false;
    this.setState(newState);
  };

  //regarding body
  handleSubmissions = () => {
    this.setState({
      submittedDisplay: true,
      duplicatesDisplay: false,
      approvedDisplay: false,
      aboutDisplay: false,
      viewSubmissionDisplay: false,
      addDetailsDisplay: false,
    });
  };
  handleDuplicates = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: true,
      approvedDisplay: false,
      aboutDisplay: false,
      viewSubmissionDisplay: false,
      addDetailsDisplay: false,
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
      addDetailsDisplay: false,
    });
  };
  handleAbout = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: false,
      approvedDisplay: false,
      viewSubmissionDisplay: false,
      addDetailsDisplay: false,
      aboutDisplay: true,
    });
  };
  openGroupInfo = (groupData) => {
    this.handleGroupInfo(groupData.projectName, groupData.projectDeadline);
    console.log(groupData);
    this.setState({
      submittedDisplay: true,
      duplicatesDisplay: false,
      approvedDisplay: false,
      aboutDisplay: false,
      viewSubmissionDisplay: false,
      addDetailsDisplay: false,
      groupData: groupData,
    });
    this.setGroupInfoDisplay(
      true,
      groupData.projectName,
      groupData.projectDeadline
    );
  };
  handleViewSubmissions = (data) => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: false,
      approvedDisplay: false,
      viewSubmissionDisplay: true,
      aboutDisplay: false,
      addDetailsDisplay: false,
      teamData: data,
    });
  };
  handleComments = () => {
    console.log("hello");
  };
  handleAddDetails = () => {
    this.setState({
      submittedDisplay: false,
      duplicatesDisplay: false,
      approvedDisplay: false,
      viewSubmissionDisplay: false,
      aboutDisplay: false,
      addDetailsDisplay: true,
    });
  };

  render() {
    console.log("sending from dashboard");
    console.log(this.state);
    return (
      <div className="dashboardMainDiv">
        <Sidebar
          handleCreateGroup={this.handleCreateGroup}
          handleGroups={this.handleGroups}
          isTeacher={this.state.isTeacher}
        />
        <div className="contentDiv">
          <div className="topbarDiv">
            <Topbar />
          </div>
          <div className="bodyDiv">
            <Body
              handleGroupInfo={this.handleGroupInfo}
              bodyName={this.state.bodyName}
              projectDeadline={this.state.projectDeadline}
              groupsDisplay={this.state.groupsActive}
              createGroupDisplay={this.state.createGroupActive}
              groupInfoDisplay={this.state.groupInfoDisplay}
              setGroupInfoDisplay={this.setGroupInfoDisplay}
              isTeacher={this.state.isTeacher}
              submittedDisplay={this.state.submittedDisplay}
              duplicatesDisplay={this.state.duplicatesDisplay}
              approvedDisplay={this.state.approvedDisplay}
              aboutDisplay={this.state.aboutDisplay}
              viewSubmissionDisplay={this.state.viewSubmissionDisplay}
              addDetailsDisplay={this.state.addDetailsDisplay}
              //groupInfo display and data
              groupData={this.state.groupData}
              teamData={this.state.teamData}
              yourGroupsData={this.yourGroupsData}
              handleSubmissions={this.handleSubmissions}
              handleDuplicates={this.handleDuplicates}
              handleApproved={this.handleApproved}
              handleAbout={this.handleAbout}
              handleViewSubmissions={this.handleViewSubmissions}
              handleComments={this.handleComments}
              handleAddDetails={this.handleAddDetails}
              openGroupInfo={this.openGroupInfo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
