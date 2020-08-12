import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    //bem CONVENTIONS.
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widget */}
    </div>
  );
}

export default App;
