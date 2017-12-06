import React, { Component } from 'react'

import { withApollo } from 'react-apollo'
import Select from 'react-select'

const doSearch = ({ division, educationLevel, recruitmentYear }) =>
  division === 0 || educationLevel === 0 || recruitmentYear === 0

const notEqual = (prevVar, nextVar) =>
  prevVar.division !== nextVar.division ||
  prevVar.educationLevel !== nextVar.educationLevel ||
  prevVar.recruitmentYear !== nextVar.recruitmentYear

class Sn extends Component {
  state = {
    options: [],
    newVar: false
  }

  componentWillReceiveProps({ variables }) {
    if (notEqual(variables, this.props.variables)) {
      this.setState({ newVar: true })
    }
  }

  setOptions = async () => {
    const newVariables = await this.loadOptions('')
    this.setState({ ...newVariables, newVar: false })
  }

  loadOptions = async input => {
    const { client, query, variables } = this.props
    const isSearch = doSearch(variables)
    if (!input && isSearch) {
      return { options: [] }
    }
    const result = await client.query({
      query,
      variables: {
        first: isSearch ? 10 : null,
        search: isSearch ? input : '',
        ...variables
      }
    })
    return {
      options: result.data.allNodes.nodes
    }
  }

  onChange = value => {
    const { onSelect, valueName } = this.props
    onSelect({ [valueName]: value })
  }

  render() {
    const { options } = this.state
    const { name, value, variables } = this.props
    const isSearch = doSearch(variables)
    console.log(isSearch)

    if (isSearch)
      return (
        <Select.Async
          name="form-field-name"
          valueKey="key"
          labelKey="name"
          placeholder={name}
          value={value}
          onChange={this.onChange}
          loadOptions={this.loadOptions}
          autoload={false}
          cache={null}
        />
      )
    return (
      <Select
        name="form-field-name"
        valueKey="key"
        labelKey="name"
        placeholder={name}
        value={value}
        onOpen={this.setOptions}
        onChange={this.onChange}
        options={!this.state.newVar ? options : []}
      />
    )
  }
}

export default withApollo(Sn)

// WEBPACK FOOTER //
// ./src/components/select/SelectionNav.js
