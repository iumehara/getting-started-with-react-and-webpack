import React from 'react'

function Todo(props) {
  return (
    <div>
      <h2>{props.data.task}</h2>
      <div>
        <span>Assigned: </span>
        {props.data.assignDate}
      </div>
      <div>
        <span>DueDate: </span>
        {props.data.dueDate}
      </div>
      <br/>
    </div>
  )
}

export default Todo
