import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Navbar from "./component/Navbar";
import Treeview from "./component/TreeView.1";

const App = () => (
  <div>
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
          <Treeview />
        </div>
        <div className="col-sm-9">
             расписание
        </div>
      </div>
    </div>
  </div>
);

export default App;
