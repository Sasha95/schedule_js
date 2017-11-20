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
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-main"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>

              <a className="navbar-brand" href="#">
                Brand
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-main" />
          </div>
        </nav>

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">...</div>
            <div className="collapse navbar-collapse" id="navbar-main">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Ссылка 1</a>
                </li>
                <li>
                  <a href="#">Ссылка 2</a>
                </li>
                <li>
                  <a href="#">Ссылка 3</a>
                </li>
                <li>
                  <a href="#">Ссылка 4</a>
                </li>
                <li>
                  <a href="#">Ссылка 5</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">...</div>
            <div className="collapse navbar-collapse" id="navbar-main">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Ссылка 1</a>
                </li>
                <li>
                  <a href="#">Ссылка 2</a>
                </li>
                <li>
                  <a href="#">Ссылка 3</a>
                </li>
                <li>
                  <a href="#">Ссылка 4</a>
                </li>
                <li>
                  <a href="#">Ссылка 5</a>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Раздел <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Ссылка</a>
                    </li>
                    <li>
                      <a href="#">Ссылка</a>
                    </li>
                    <li role="separator" className="divider" />
                    <li>
                      <a href="#">Ссылка</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">...</div>

            <div className="collapse navbar-collapse" id="navbar-main">
              <ul className="nav navbar-nav">...</ul>

              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">Ссылка</a>
                </li>

                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Раздел <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Ссылка</a>
                    </li>
                    <li>
                      <a href="#">Ссылка</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
