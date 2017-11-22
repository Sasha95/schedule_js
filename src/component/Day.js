import React from "react";

const Lesson = ({ time, discipline, classroom, teacher }) => (
  <tr>
    <td>{time}</td>
    <td>{discipline}</td>
    <td>{classroom}</td>
    <td>{teacher}</td>
  </tr>
);

const itemToLesson = ({ id, ...rest }) => <Lesson key={id} {...rest} />;

export default ({ id, day, lessons }) => (
    <div>
        <p />
    <h3>{day}</h3>
    <table className="table table-bordered">
      <tr className="table-success">
        <th>Время</th>
        <th>
          Название пары
        </th>
        <th>
          № кабинета
        </th>
        <th>Преподаватель</th>
      </tr>
      {lessons.map(itemToLesson)}
    </table>
  </div>
);
