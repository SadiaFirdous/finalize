import React, { Component } from "react";
import NotifyBell from "../../media/Bell.svg";
import User from "../../media/User.svg";
import Arrow from "../../media/Arrow.svg";
import MagnifyingGlass from "../../media/Magnifying Glass.svg";
import "../../stylesheets/inApp/topbar.css";
import NotificationPanel from "./NotificationPanel";
class Topbar extends React.Component {
  state = {
    name: "Sadia Firdous",
    notificationPanelDisplay: false,
  };
  handleNotificationDisplay = () => {
    let bool = this.state.notificationPanelDisplay;
    this.setState({
      name: "Sadia Firdous",
      notificationPanelDisplay: !bool,
    });
  };
  logoutUser=()=>{

  }
  render() {
    return (
      <div className="topDiv">
        <div className="searchWithArrowDiv">
          <img className="arrow" src={Arrow} alt="img" />
          <div className="searchBoxDiv">
            <img className="magnifyingGlass" src={MagnifyingGlass} alt="img" />
            <input
              className="searchBar"
              placeholder="Search anything..."
            ></input>
          </div>
        </div>
        <div className="iconsDiv">
          <img
            className={
              this.state.notificationPanelDisplay
                ? "notification notificationActive"
                : "notification"
            }
            src={NotifyBell}
            alt="img"
            onClick={this.handleNotificationDisplay}
          />
          <div className="notificationPanelComponent">
            {this.state.notificationPanelDisplay && <NotificationPanel />}
          </div>

          <img className="profilePhoto" src={User} alt="img" />
          <span className="nameText">{this.state.name}</span>
          <button className="logoutButton" onClick={()=>this.logoutUser()}>
            <span className="logoutText">Log Out</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Topbar;
