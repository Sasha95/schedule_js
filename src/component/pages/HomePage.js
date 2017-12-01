import React from 'react'
import { Row, Col } from 'reactstrap'
import { Route } from 'react-router-dom'

import SideBar from '../SideBar'
import Week from '../Week'

export default props => (
  <Row>
    <Col xs="12" md="4" lg="3">
      <SideBar />
    </Col>
    <Col>
      <Route path="/week" component={Week} />
    </Col>
  </Row>
)

// WEBPACK FOOTER //
// ./src/pages/HomePage.js
