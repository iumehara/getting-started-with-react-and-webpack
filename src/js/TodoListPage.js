import React from 'react'
import Todo from './Todo'

class TodoListPage extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
       todoList: [
         {id: 1, assignDate: "11/1/2016", dueDate: "11/5/2016", task: "Buy Groceries" },
         {id: 2, assignDate: "11/2/2016", dueDate: "11/7/2016", task: "Clean the bathroom" },
         {id: 3, assignDate: "11/3/2016", dueDate: "11/4/2016", task: "Get Beer" },
         {id: 4, assignDate: "11/4/2016", dueDate: "11/6/2016", task: "Fix the kitchen faucet" }
       ],
       display: false
     }
  }

  render() {
    let todos = this.state.todoList.map(todo => {
        return(
          <div key={todo.id}>
            <Todo data={todo}/>
          </div>
        )
    })

    return (
      <div>
        <h1>To Dos</h1>
        {todos}
      </div>
    )
  }
}

export default TodoListPage
