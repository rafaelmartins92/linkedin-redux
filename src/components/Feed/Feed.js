import React, { useEffect, useState } from "react";
import firebase from "firebase";
import { useSelector } from "react-redux";

import "./Feed.css";

import InputOptions from "../InputOptions/InputOptions";
import Post from "../Post/Post";
import { db } from "../../firebase";
import { selectUser } from "../../features/userSlice";

import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventIcon from "@material-ui/icons/Event";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  function sendPost(e) {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  }

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Começar publicação"
            />
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

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
