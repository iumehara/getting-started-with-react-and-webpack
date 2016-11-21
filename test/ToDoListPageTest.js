import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import TodoListPage from '../src/js/TodoListPage'
import Todo from '../src/js/Todo'

describe('TodoListPage', () => {
  it('displays header', () => {
    let component = shallow(<TodoListPage/>)
    expect(component.contains(<h1>To Dos</h1>)).toBe(true)
  })

  it('displays Todos', () => {
    let component = shallow(<TodoListPage/>)

    let sampleData = {id: 1, assignDate: "11/1/2016", dueDate: "11/5/2016", task: "Buy Groceries" }
    expect(component.contains(<Todo data={sampleData}/>)).toBe(true)
  })
})
