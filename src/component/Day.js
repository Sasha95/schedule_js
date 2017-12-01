import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem
} from 'reactstrap'

const Class = props => (
  <ListGroupItem key={props.number}>
    <span>{`${props.number}. `}</span>
    {props.subject}
    <span>{` / ${props.classroom}`}</span>
    <span className="text-muted">{` / ${props.teacher}`}</span>
  </ListGroupItem>
)

const Day = props => (
  <Col key={props.name} xs="12" lg="6" xl="4">
    <Card>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
      </CardBody>
      <ListGroup>{props.classes.map(Class)}</ListGroup>
    </Card>
  </Col>
)

export default Day

// WEBPACK FOOTER //
// ./src/components/Day.js
