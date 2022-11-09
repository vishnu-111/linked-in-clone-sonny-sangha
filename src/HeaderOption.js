import React from "react";
import "./HeaderOption.css";
import { Avatar } from '@mui/material'
const HeaderOption = ({ avatar, title, Icon }) => {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__Icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
