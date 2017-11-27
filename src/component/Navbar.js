import React, { Component } from "react";
import DropDown from "./DropDown";

class Navbar extends Component {
  state = {
    isOpen: false
  };

  toggleDrop = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded ">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <a className="navbar-brand" role="button">
            Расписание
          </a>

          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" role="button">
                  <DropDown name="Факультет" />
                  <span className="sr-only">(current)</span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" role="button">
                  <DropDown name="Форма обучения" />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" role="button">
                  <DropDown name="Курс" />
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled" role="button">
                  <DropDown name="Группа" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
