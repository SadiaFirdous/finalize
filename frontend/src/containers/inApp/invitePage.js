import React, { Component } from "react";

class InvitePage extends React.Component {
  addMeToGroup = async () => {
    const response = await fetch("/invite", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        groupId: this.props.match.params.groupid,
      }),
    }).then((res) => window.open("http://localhost:3000/dashboard", "_top"));
  };
  render() {
    return (
      <div className="invitePageMainDiv">
        <button onClick={() => this.addMeToGroup()}>
          Accept Invite {this.props.match.params.groupid}
        </button>
      </div>
    );
  }
}

export default InvitePage;
