import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.js";

const Feed = () => {
  return (
    <div className="feed">
      <h2 className="feed__homeTag">Home</h2>
      <TweetBox />
    </div>
  );
};

export default Feed;
