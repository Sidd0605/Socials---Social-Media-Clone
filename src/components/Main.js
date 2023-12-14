import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";
import { db, auth } from "../firebase";
import Navbar from "./Navbar";
import ImageUpload from "./ImageUpload";
import Post2 from "./Post2";
import './css/Mainc.css'

// import InstagramEmbed from "react-instagram-embed";

export default function Main(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="main_container">
      <div>
      
        <Navbar />
        <img src="./images/poster.png" alt=""/>
        {posts.map((post) => (
          <Post2
            user_name={post.username}
            caption={post.caption}
            image_url={post.imageUrl}
            className="posts1"

          />
        ))}
        <ImageUpload username={props.username} />
        
      </div>
      
      
      {/* <InstagramEmbed
        url="https://www.instagram.com/p/CbDx71TNL6L/"
        clientAccessToken="123|456"
        maxWidth={320}
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      /> */}
      <br />
    </div>
  );
}
