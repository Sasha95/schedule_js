import React from 'react'

import { Row } from 'reactstrap'

import { timetable } from '../data/index'

import Day from './Day'

// const Week = () => console.log(timetable.groups.days) || <div>sadfasf</div> //<Row>{timetable.groups.days.map(Day)}</Row>
const Week = () => <Row>{timetable.groups.days.map(Day)}</Row>

export default Week

// WEBPACK FOOTER //
// ./src/components/Week.js
