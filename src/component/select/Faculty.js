import React, { Component } from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";

const parameters = {
  options: ({ match }) => ({
    variables: { offset: match.params.pageNumber * 10, first: 5 }
  })
};

const FACULTY_QUERY = gql`
  query($offset: Int, $first: Int) {
    allPosts(offset: $offset, first: $first) {
      nodes {
        id
        personId
        person: personByPersonId {
          name
        }
        title
        body: preview
      }
    }
  }
`;

const b = graphql(FACULTY_QUERY, parameters);

// сделать, что b был как       options={[{ value: "one", label: "One" },{ value: "two", label: "Two" }]}
//и такую ерунду сделать для факультета, формы обучения, курса и группы

export default b(PostsList);
