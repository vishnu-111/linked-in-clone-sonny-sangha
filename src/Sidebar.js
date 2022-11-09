import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://cdn.pixabay.com/photo/2022/09/28/10/43/sea-7484743__340.jpg"
          alt="background-profile"
        />
        <Avatar className="sidebar__avatar" />
        <h2>Vishnu Yedke</h2>
        <h4>vishnuyedke14@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">300</p>
        </div>
        <div className="sidebar__stat">
          <p>View on post</p>
          <p className="sidebar__statNumber">300</p>
        </div>
      </div>
      <div className="sidebar__button">
        <p>Repost</p>
      </div>
    </div>
  );
};

export default Sidebar;
