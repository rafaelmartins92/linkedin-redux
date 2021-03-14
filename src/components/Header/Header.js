import React from "react";

import "./Header.css";

import HeaderOption from "../HeaderOption/HeaderOption";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1615699008~hmac=966cf947b59220b63f5f84117af4b329"
          alt=""
        />

        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Início" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Minha rede" />
        <HeaderOption Icon={WorkIcon} title="Vagas" />
        <HeaderOption Icon={SmsIcon} title="Mensagens" />
        <HeaderOption Icon={NotificationsIcon} title="Notificações" />
        <HeaderOption
          avatar="https://media-exp1.licdn.com/dms/image/C4D03AQE4mduF8gZBKg/profile-displayphoto-shrink_100_100/0/1614994553582?e=1621468800&v=beta&t=bsb0DZQZ9IcPdiLnG2FSKZacMJHE0Aed3zEjitG9r4s"
          title="Eu"
        />
      </div>
    </div>
  );
}

export default Header;
