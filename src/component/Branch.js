import React, { Component } from 'react'
import hierarchy from '../data/hierarchy'

class Branch extends Component {
  render() {
    return (
      <li>
        <a href="#">{this.props.name}</a>

        <ul>
          {hierarchy
            .filter(el => this.props.id === el.parent)
            .map(el => <Branch key={el.id} id={el.id} name={el.name} />)}
        </ul>
      </li>
    )
  }
}
export default Branch

// https://bootsnipp.com/snippets/10pnN
