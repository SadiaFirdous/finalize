import React, { Component } from "react";
import NotifyBell from "../../media/Bell.svg";
import User from "../../media/User.svg";
import Arrow from "../../media/Arrow.svg";
import MagnifyingGlass from "../../media/Magnifying Glass.svg"
import "../../stylesheets/inApp/topbar.css";
class Topbar extends React.Component{
    render() {
      return (
        <div className="topDiv">
        <div className="searchWithArrowDiv">

        <img className="arrow" src={Arrow} alt="img" />
        <div className="searchBoxDiv">
        <img className="magnifyingGlass" src={MagnifyingGlass} alt="img" />

        <input className="searchBar" placeholder="Search Anything"></input>
          </div>
        </div>
         <div className="iconsDiv">
          <img className="notification" src={NotifyBell} alt="img" />
          <img className="profilePhoto" src={User} alt="img" />
          <h2>Name</h2>
        </div>
        {/* <button className="">Sign In</button> */}
        </div>
      );
    }
  }

export default Topbar;
