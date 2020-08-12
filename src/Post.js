import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = (displayName, userName, verified, text, image, avtar) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Praveen Paikadan
              <span>
                <VerifiedUserIcon className="post__badge" />
              </span>
            </h3>
            <span className="post__headerSpecial">@paikadan</span>
          </div>

          <div className="post__headerDescription">
            <p> This is a dummy account for testing twitter-clone </p>
          </div>
        </div>

        <img src="https://media.giphy.com/media/6qdKZFhT0VBm0/giphy.gif" />

        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
