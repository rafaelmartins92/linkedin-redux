import React from "react";
import { useSelector } from "react-redux";

import "./Sidebar.css";

import { selectUser } from "../../features/userSlice";

import { Avatar } from "@material-ui/core";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar-recentItem">
      <span className="sidebar-hashtag">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1611095564985-89765398121e?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar-avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.emaik}</h4>
      </div>

      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Quem viu seu perfil</p>
          <p className="sidebar-statNumber">251</p>
        </div>
        <div className="sidebar-stat">
          <p>Viram sua publicação</p>
          <p className="sidebar-statNumber">1.555</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recentes</p>
        {recentItem("React JS")}
        {recentItem("React Native")}
        {recentItem("Node.js")}
      </div>
    </div>
  );
}

export default Sidebar;
