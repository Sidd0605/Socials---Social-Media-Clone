import React from "react";
import "./css/Postc.css";
import Avatar from "@mui/material/Avatar";

function Post(props) {
  return (
    <div className="post_container">
      <div className="post_head">
        <Avatar className="post_avatar" alt="Sammyboi1801" src="/static/images/avatar/1.jpg" />
        <h3>{props.user_name}</h3>
      </div>

      <img
        className="post_image"
        src={props.image_url}
        alt=""
      />
      <h4 className="post_text">
        <strong>Username :</strong> {props.caption}
      </h4>
    </div>
  );
}

export default Post;
