import React, { Component } from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

const parameters = {
  options: ({ match }) => ({
    variables: { offset: match.params.pageNumber * 10, first: 5 }
  })
};

const FACULTY_QUERY = gql`
  query {
    allDivisions {
      totalCount
      nodes {
        key: id
        name
        shortName
      }
    }
    allEducationForms {
      totalCount
      nodes {
        key: id
        name
        shortName
      }
    }
    allEducationLevels(condition: { active: true }) {
      totalCount
      nodes {
        key: id
        name
        shortName: pressmark
      }
    }
  }
`;

const b = graphql(FACULTY_QUERY, parameters);

// сделать, что b был как       options={[{ value: "one", label: "One" },{ value: "two", label: "Two" }]}
//и такую ерунду сделать для факультета, формы обучения, курса и группы

export default "fff";
