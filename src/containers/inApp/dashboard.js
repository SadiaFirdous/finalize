import React, { Component } from "react";
import Sidebar from "../../components/inApp/Sidebar";
import Topbar from "../../components/inApp/Topbar";
import Body from "../../components/inApp/Body";
import "../../stylesheets/inApp/dashboard.css";
class Dashboard extends React.Component {
  state = {
    groupsActive: true,
    createGroupActive: false,
    bodyName: "YOUR GROUPS",
  };
  handleCreateGroup = () => {
    this.setState({
      bodyName: "Create Group",
      groupsActive: false,
      createGroupActive: true,
    });
  };
  handleGroups = () => {
    this.setState({
      bodyName: "YOUR GROUPS",
      groupsActive: true,
      createGroupActive: false,
    });
  };
  handleGroupInfo = (groupName) => {
    this.setState({
      bodyName: groupName,
      groupsActive: false,
      createGroupActive: false,
    });
  };
  render() {
    return (
      <div className="dashboardMainDiv">
        <Sidebar
          handleCreateGroup={this.handleCreateGroup}
          handleGroups={this.handleGroups}
        />
        <div className="contentDiv">
          <Topbar />
          <Body
            handleGroupInfo={this.handleGroupInfo}
            bodyName={this.state.bodyName}
            groupsDisplay={this.state.groupsActive}
            createGroupDisplay={this.state.createGroupActive}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
