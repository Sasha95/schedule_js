import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import 'react-select/dist/react-select.css'
import './App.css'

import Home from './component/pages/HomePage'
import AppNavbar from './component/AppNavbar'

const App = () => (
  <Container>
    <AppNavbar />
    <Route path="/" component={Home} />
  </Container>
)

export default App

// WEBPACK FOOTER //
// ./src/App.js
