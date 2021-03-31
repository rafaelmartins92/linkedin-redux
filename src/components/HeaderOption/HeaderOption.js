import React from "react";
import { useSelector } from "react-redux";

import "./HeaderOption.css";

import { selectUser } from "../../features/userSlice";

import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption-icon" />}
      {avatar && (
        <Avatar className="headerOption-icon">{user?.displayName[0]}</Avatar>
      )}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
