import React, { Component } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Treeview from './component/TreeView'
import Week from './component/Week'

export default class App extends Component {
  state = {
    groupId: undefined
  }

  getTimeTable = groupId => {
    this.setState({ groupId })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-2  ">
              <Treeview getTimeTable={this.getTimeTable} />
            </div>
            <div className="col">
              <Week groupId={this.state.groupId} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
