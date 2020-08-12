import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ListAltIcon from "@material-ui/icons/ListAlt";

import SidebarOption from "./SidebarOption";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* twitter icon */}
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active icon={HomeIcon} text="Home" />
      <SidebarOption icon={SearchIcon} text="Explore" />
      <SidebarOption icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption icon={MailOutlineIcon} text="Messages" />
      <SidebarOption icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption icon={ListAltIcon} text="Lists" />
      <SidebarOption icon={PermIdentityIcon} text="Profile" />
      <SidebarOption icon={MoreHorizIcon} text="More" />

      <Button varient="outlined" class="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
