import Select from "react-select";
import "react-select/dist/react-select.css";

import React from "react";

class DropDown extends React.Component {
  state = {
    selectedOption: ""
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link" role="button" style={{ width: "180px" }}>
          <Select
            name="form-field-name"
            placeholder={this.props.name}
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={[
              { value: "one", label: "One" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" },
              { value: "two", label: "Two" }
            ]}
          />
        </a>
      </li>
    );
  }
}

export default DropDown;

// export default ({ name }) => (
//   <div className="dropdown show">
//     <a
//       class="btn btn-secondary dropdown-toggle"
//       href="https://example.com"
//       id="dropdownMenuLink"
//       data-toggle="dropdown"
//       aria-haspopup="true"
//       aria-expanded="false"
//     >
//       Dropdown link
//     </a>

//     <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
//       <a class="dropdown-item" href="#">
//         Action
//       </a>
//       <a class="dropdown-item" href="#">
//         Another action
//       </a>
//       <a class="dropdown-item" href="#">
//         Something else here
//       </a>
//     </div>
//   </div>
// );
