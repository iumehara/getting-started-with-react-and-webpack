import React from 'react'

function Todo(props) {
  return (
    <div>
      <h2>{props.data.task}</h2>
      <div>Assigned: {props.data.assignDate}</div>
      <div>Due: {props.data.dueDate}</div>
      <br/>
    </div>
  )
}

export default Todo
