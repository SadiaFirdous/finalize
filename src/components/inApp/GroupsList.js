import React, { Component } from "react";
import EachGroupCard from "./EachGroupCard";
import "../../stylesheets/inApp/groupsList.css";
class GroupsList extends React.Component {
  render() {
    return (
      <div className="groupsListMainDiv">
        {this.props.yourGroupsData.map((groupData) => {
          return (
            <EachGroupCard
              groupData={groupData}
              // onClick={this.props.openGroupInfo(groupData)}
            />
          );
        })}
      </div>
    );
  }
}

export default GroupsList;
