import React, { useState } from "react";

import "./Feed.css";

import InputOptions from "../InputOptions/InputOptions";
import Post from "../Post/Post";

import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";

function Feed() {
  const [posts, setPosts] = useState([]);

  function sendPost(e) {
    e.preventDefault();
    console.log("send post");
  }

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Começar publicação" />
            <button onClick={sendPost} type="submit">
              Enviar
            </button>
          </form>
        </div>
        <div className="feed-inputOptions">
          <InputOptions Icon={ImageIcon} title="Foto" color="#70b5f9" />
          <InputOptions Icon={YouTubeIcon} title="Video" color="#7fc15e" />
          <InputOptions Icon={EventIcon} title="Evento" color="#e7a33e" />
          <InputOptions
            Icon={VerticalSplitIcon}
            title="Escrever artigo"
            color="#F6987D"
          />
        </div>
      </div>

      {posts.map((post) => (
        <Post />
      ))}
      <Post name="Steve Jobs" description="Teste" message="Its working" />
    </div>
  );
}

export default Feed;
