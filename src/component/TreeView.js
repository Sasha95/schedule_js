import React, { Component } from 'react'

class Treeview extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <div id="collapseDVR3" className="panel-collapse">
          <div className="tree ">
            <ul>
              <li>
                {' '}
                <span>
                  <i className="fa fa-folder-open" /> Менюшка
                </span>
                <ul>
                  <li>
                    {' '}
                    <span>
                      <i className="fa fa-minus-square" /> другая Менюшка
                    </span>
                    <ul>
                      <li>
                        {' '}
                        <span> ещё одна Менюшка </span>{' '}
                      </li>
                    </ul>
                  </li>
                  <li>
                    {' '}
                    <span>
                      <i className="fa fa-minus-square" /> другая{' '}
                    </span>
                    <ul>
                      <li>
                        {' '}
                        <span> Менюшка </span>
                      </li>
                      <li>
                        {' '}
                        <span>
                          <i className="fa fa-minus-square" /> Менюшка
                        </span>
                        <ul>
                          <li>
                            {' '}
                            <span>
                              <i className="fa fa-minus-square" /> Менюшка
                            </span>
                            <ul>
                              <li>
                                {' '}
                                <span> Менюшка</span>
                              </li>
                              <li>
                                {' '}
                                <span> Менюшка</span>
                              </li>
                            </ul>
                          </li>
                          <li>
                            {' '}
                            <span> Менюшка</span>{' '}
                          </li>
                          <li>
                            {' '}
                            <span> Менюшка</span>{' '}
                          </li>
                        </ul>
                      </li>
                      <li>
                        {' '}
                        <span> Менюшка</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                {' '}
                <span>
                  <i className="fa fa-folder-open" /> Менюшка2
                </span>
                <ul>
                  <li>
                    {' '}
                    <span> Менюшка</span>{' '}
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
