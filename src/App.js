import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
// import Treeview from "./component/TreeView";
// import Week from "./component/Week";
import Sign from "./component/Sign";

export default class App extends Component {
  state = {
    groupId: undefined
  };

  getTimeTable = groupId => {
    this.setState({ groupId });
  };

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
