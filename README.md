# HEALTH APP
## 03 RENDERING MULTIPLE REACT COMPNENTS

This branch starts off at the end of the `02_HTML_WITH_REACT` branch.

Let's try working with some react.

first, let's replace the `Greetings` component with a new `TodoListPage` component.

`index.js`
```
import React from 'react'
import { render } from 'react-dom'
import TodoListPage from './TodoListPage'

render(
    <TodoListPage />,
    document.getElementById('health-app')
)
```

`ToDoListPage.js`
```
import React from 'react'

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
            <div>
              <h2>{todo.task}</h2>
              <div>Assigned: {todo.assignDate}</div>
              <div>Due: {todo.dueDate}</div>
              <br/>
            </div>
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
```

wow, what's happening here?

First, the consructor function sets the props (immutable data in the component, which is fed in from its parent component), and the state (mutable data in the component). In this case, because we don't have a database, we're just going to hard code some data into the state when the component mounts.

The render function defines what will be rendered onto the page.
In this case, we are mapping through the todos that we assigned to the state above, and returning the result in a `div` under the `h1` To Dos header.

You'll notice that the `render` method is reusing the same component for every todoList item.

Let's extract it into it's own compnent.

`Todo.js`
```
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
```

By doing this, we can now use this in the map method from before.
`TodoListPage.js`
```
import React from 'react'
import Todo from './Todo'

class TodoListPage extends React.Component {
  // constructor code unchanged from before
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
```

Much cleaner!
