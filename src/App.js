import React from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app-body">
        <Sidebar />
        <Feed />
        {/* Widdgets */}
      </div>
    </div>
  );
}

export default App;
