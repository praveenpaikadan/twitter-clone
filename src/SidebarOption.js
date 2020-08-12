import React, { Component } from "react";
import "./SidebarOption.css";
import { Icon } from "@material-ui/core";

const SidebarOption = (props) => {
  return (
    <div className={`sidebarOption ${props.active && "sidebarOption--active"}`}>
      <props.icon />
      <h2>{props.text}</h2>
    </div>
  );
};

export default SidebarOption;
