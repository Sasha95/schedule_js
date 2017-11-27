import React from "react";

export default ({ name }) => (
  <div className="dropdown show">
    <a
      class="btn btn-secondary dropdown-toggle"
      href="https://example.com"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Dropdown link
    </a>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <a class="dropdown-item" href="#">
        Action
      </a>
      <a class="dropdown-item" href="#">
        Another action
      </a>
      <a class="dropdown-item" href="#">
        Something else here
      </a>
    </div>
  </div>
);
