import React, { Component } from 'react'

class Navbar extends Component {
  state = {
    isCollapsed: true
  }

  toggleExpand = () => {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top">
        <button
          className="navbar-toggler navbar-toggler-right hidden-lg-up"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul id="navbar">
            <li>
              <a href="#">
                Главная<span className="sr-only" />
              </a>
            </li>
            <li>
              <a href="#">Заглавная</a>
            </li>
            <li>
              <a href="#">Еще что-то</a>
            </li>
            <li>
              <a href="#">Выход</a>
            </li>
          </ul>
        </div>
      </nav>
      /* ('#navbar li').click(function() {
                (this).addClass('active').siblings('li').removeClass('active');
            })*/
    )
  }
}

export default Navbar
