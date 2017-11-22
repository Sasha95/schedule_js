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
    <main className="col-sm-5 offset-sm-3 col-md-12 offset-md-0 pt-3">
    <h3>{day}</h3>
    <table className="table table-bordered">
      <tr >
        <th>Время</th>
        <th>
          Название <br /> пары
        </th>
        <th>
          № <br />кабинета
        </th>
        <th>Преподаватель</th>
      </tr>
      {lessons.map(itemToLesson)}

  </table>
  </main>
)
