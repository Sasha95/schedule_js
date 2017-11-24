import React from 'react'

const Lesson = ({ time, discipline, classroom, teacher }) => (
  <tr>
    <td>{time}</td>
    <td>{discipline}</td>
    <td>{classroom}</td>
    <td>{teacher}</td>
  </tr>
)

const itemToLesson = ({ id, ...rest }) => <Lesson key={id} {...rest} />

export default ({ id, day, lessons }) => (
  <div className="col-xs-12 col-xl-6">
    <p />
    <h3>{day}</h3>
    <table className="table table-sm table-bordered">
      <thead>
        <tr className="table-success">
          <th>Время</th>
          <th>Название пары</th>
          <th>№ кабинета</th>
          <th>Преподаватель</th>
        </tr>
      </thead>
      <tbody>{lessons.map(itemToLesson)}</tbody>
    </table>
  </div>
)
