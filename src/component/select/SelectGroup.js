import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'

import { Form, FormGroup } from 'reactstrap'
import Select from 'react-select'

import SelectionNav from './SelectionNav'
// import './SelectGroup.css'

import gql from 'graphql-tag'

const ALL_SELECTIONS = gql`
  query {
    allDivisions: allFaculties {
      totalCount
      nodes {
        key: id
        name
        shortName
      }
    }
    allEducationLevels {
      nodes {
        id
        name
        shortName: name
      }
    }
  }
`

const props = ({ ownProps, data: { loading, error, ...rest } }) => ({
  ...ownProps,
  loading,
  error,
  ...rest
})

const SELECT_GROUPS = gql`
  query selectGroups(
    $first: Int
    $search: String
    $division: Int
    $educationForm: Int
    $educationLevel: Int
    $recruitmentYear: Int
  ) {
    EDUCATION_FORM
    allNodes: searchAcademicGroup(
      search: $search
      first: $first
      divisionId: $division
      educationFormId: $educationForm
      educationLevelId: $educationLevel
      recruitmentYear: $recruitmentYear
    ) {
      nodes {
        key: id
        name
        shortName
        educationLevelId
      }
    }
  }
`

const DIVISION = 'division'
const EDUCATION_FORM = 'educationForm'
const EDUCATION_LEVEL = 'educationLevel'
const RECRUITMENT_YEAR = 'recruitmentYear'
const GROUP = 'group'
const currentYear = 17
const recruitmentYears = [17, 16, 15, 14, 13, 12].map(el => ({
  key: el,
  name: `${currentYear - el + 1} курс`,
  shortName: el
}))

class SelectGroup extends Component {
  state = {
    [DIVISION]: undefined,
    [EDUCATION_FORM]: undefined,
    [EDUCATION_LEVEL]: undefined,
    [RECRUITMENT_YEAR]: undefined,
    [GROUP]: undefined
  }

  onSelect = item => {
    if (item[GROUP]) {
      this.setState({ ...item })
      this.props.history.push('/week')
    } else {
      this.setState({ [GROUP]: undefined, ...item })
      this.props.history.push('/')
    }
  }

  getVariables = () => ({
    [DIVISION]: this.state[DIVISION] ? this.state[DIVISION].key : 0,
    [EDUCATION_FORM]: this.state[EDUCATION_FORM]
      ? this.state[EDUCATION_FORM].key
      : 0,
    [EDUCATION_LEVEL]: this.state[EDUCATION_LEVEL]
      ? this.state[EDUCATION_LEVEL].key
      : 0,
    [RECRUITMENT_YEAR]: this.state[RECRUITMENT_YEAR]
      ? this.state[RECRUITMENT_YEAR]
      : 0
  })

  render() {
    const { loading, allDivisions, allEducationLevels } = this.props
    return (
      <Form>
        <FormGroup>
          <Select
            name="form-field-name"
            placeholder={'Выбор факультета'}
            value={this.state[DIVISION]}
            onChange={value =>
              this.setState({
                [DIVISION]: value ? value : undefined,
                [GROUP]: undefined
              })}
            options={loading ? [] : allDivisions.nodes}
            valueKey="key"
            labelKey="name"
          />
        </FormGroup>
        <FormGroup>
          <Select
            name="form-field-name"
            placeholder={'Выбор уровня'}
            value={this.state[EDUCATION_LEVEL]}
            onChange={value =>
              this.setState({
                [EDUCATION_LEVEL]: value ? value : undefined,
                [GROUP]: undefined
              })}
            options={loading ? [] : allEducationLevels.nodes}
            valueKey="key"
            labelKey="name"
          />
        </FormGroup>
        <FormGroup>
          <Select
            name="form-field-name"
            placeholder={'Выбор курса'}
            value={this.state[RECRUITMENT_YEAR]}
            onChange={value =>
              this.setState({
                [RECRUITMENT_YEAR]: value ? value.key : undefined,
                [GROUP]: undefined
              })}
            options={recruitmentYears}
            valueKey="key"
            labelKey="name"
          />
        </FormGroup>
        <FormGroup>
          <SelectionNav
            query={SELECT_GROUPS}
            variables={this.getVariables()}
            name={'Выбор группы'}
            onSelect={this.onSelect}
            valueName={GROUP}
            value={this.state[GROUP]}
          />
        </FormGroup>
      </Form>
    )
  }
}

export default withRouter(graphql(ALL_SELECTIONS, { props })(SelectGroup))

// WEBPACK FOOTER //
// ./src/components/select/SelectGroup.js
