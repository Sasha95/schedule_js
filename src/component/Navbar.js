import React, { Component } from "react";
import DropDown from "./DropDown";

export default class Navbar extends Component {
  render() {
    return (
      <div className="container sticky-top">
        <nav className="navbar navbar-toggleable-sm navbar-light bg-faded ">
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
          <div className="collapse navbar-collapse">
            <div>
              <ul className="navbar-nav mr-auto">
                <DropDown name="Факультет" />
                <DropDown name="Форма обучения" />
                <DropDown name="Курс" />
                <DropDown name="Группа" />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
