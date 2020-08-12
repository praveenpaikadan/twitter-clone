import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widget__inputContainer">
        <div className="widgets__input">
          <SearchIcon className="widget__searchIcon" />
          <input placeholder="Search Twitter" type="text" />
        </div>
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1293335144775004160"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="realDonaldTrump"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"http://google.com"}
          options={{ text: "#react js", via: "realdonaldtrump" }}
        />
        {/*The abouve component will lead to twitter tweet page with content*/}
      </div>
    </div>
  );
};

export default Widgets;
