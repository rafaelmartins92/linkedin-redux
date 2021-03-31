import React from "react";
import { useDispatch } from "react-redux";

import "./Header.css";

import HeaderOption from "../HeaderOption/HeaderOption";
import { auth } from "../../firebase";
import { logout } from "../../features/userSlice";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  const dispatch = useDispatch();

  function logoutOfApp() {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className="header">
      <div className="header-left">
        <img src="icon.png" alt="" />

        <div className="header-search">
          <SearchIcon />
          <input type="text" placeholder="Pesquisar" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Início" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Minha rede" />
        <HeaderOption Icon={WorkIcon} title="Vagas" />
        <HeaderOption Icon={SmsIcon} title="Mensagens" />
        <HeaderOption Icon={NotificationsIcon} title="Notificações" />
        <HeaderOption avatar={true} title="Eu" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
