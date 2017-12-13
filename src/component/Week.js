import React from 'react'

import { Row } from 'reactstrap'

import { timetable } from '../data/index'

import Day from './Day'

const Week = () => <Row>{timetable.groups.days.map(Day)}</Row>

export default Week
