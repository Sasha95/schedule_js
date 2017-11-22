import React, { Component } from 'react'
import Branch from './Branch'
import hierarchy from '../data/hierarchy'

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
              {' '}
              <li>
                <a href="#">Tree</a>
                <ul>
                  {hierarchy
                    .filter(el => el.type === 'faculty')
                    .map(el => (
                      <Branch key={el.id} id={el.id} name={el.name} />
                    ))}
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
