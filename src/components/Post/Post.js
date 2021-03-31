import React from "react";

import "./Post.css";

import InputOptions from "../InputOptions/InputOptions";

import { Avatar } from "@material-ui/core";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post-header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post-body">
        <p>{message}</p>
      </div>

      <div className="post-buttons">
        <InputOptions
          Icon={ThumbUpAltOutlinedIcon}
          title="Gostei"
          color="gray"
        />
        <InputOptions
          Icon={MessageOutlinedIcon}
          title="Comentar"
          color="gray"
        />
        <InputOptions
          Icon={ShareOutlinedIcon}
          title="Compartilhar"
          color="gray"
        />
        <InputOptions Icon={SendOutlinedIcon} title="Enviar" color="gray" />
      </div>
    </div>
  );
}

export default Post;
