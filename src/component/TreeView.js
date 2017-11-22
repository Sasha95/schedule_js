import React, { Component } from "react";
import Branch from "./Branch";
import hierarchy from "../data/hierarchy";

export default ({ getTimeTable }) => (
  <div className="container">
    <div className="panel panel-default">
      {/* <div className="panel-heading">Treeview List</div> */}
      <div className="panel-body">
        <ul className="treeview">
          <li>
            <a href="#">Список факультетов</a>
            <Branch key={0} id={0} isOpen={true} getTimeTable={getTimeTable} />
          </li>
        </ul>
      </div>
    </div>
  </div>
);
