import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input placeholder="Whats's happening?"></input>
        </div>
        <input
          className="tweetBox__inputImage"
          placeholder="Enter image URL "
          type="text"
        />
        <Button varient="outlined" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
