import React from "react";
import Branch from "./Branch";

export default ({ getTimeTable }) => (
  <div className="panel">
    <ul className="treeview">
      <a role="button">Список факультетов</a>
      <Branch key={0} id={0} isOpen={true} getTimeTable={getTimeTable} />
    </ul>
  </div>
);
