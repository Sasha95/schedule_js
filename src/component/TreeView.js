import React, { Component } from 'react'

class Treeview extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">Treeview List</div>
          <div className="panel-body">
            <ul className="treeview">
              <li>
                <a href="#">Tree</a>
                <ul>
                  <li>
                    <a href="#">Branch</a>
                  </li>
                  <li>
                    <a href="#">Branch</a>
                    <ul>
                      <li>
                        <a href="#">Stick</a>
                      </li>
                      <li>
                        <a href="#">Stick</a>
                        <ul>
                          <li>
                            <a href="#">Twig</a>
                          </li>
                          <li>
                            <a href="#">Twig</a>
                            <ul>
                              <li>
                                <a href="#">Leaf</a>
                              </li>
                              <li>
                                <a href="#">Leaf</a>
                              </li>
                              <li>
                                <a href="#">Leaf</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Twig</a>
                          </li>
                          <li>
                            <a href="#">Twig</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Stick</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Branch</a>
                  </li>
                  <li>
                    <a href="#">Branch</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Treeview
