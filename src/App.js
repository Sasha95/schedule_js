import React, { Component } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Faculty from "../src/component/select/Faculty";

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
        <Faculty />
      </div>
    );
  }
}
