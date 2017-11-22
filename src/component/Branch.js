import React, { Component } from 'react'
import hierarchy from '../data/hierarchy'

class Branch extends Component {
  state = {
    isOpen: false
  }

  handleClick = event => { this.setState({isOpen: !this.state.isOpen})}

  render() {
    return (
      <li>
        <a role='button' onClick={this.handleClick}>{this.props.name}</a>
        <ul>
        {this.state.isOpen &&
            hierarchy
            .filter(el => this.props.id === el.parent)
            .map(el => <Branch key={el.id} id={el.id} name={el.name} />)}
        </ul>
      </li>
    )
  }
}
export default Branch

// https://bootsnipp.com/snippets/10pnN
