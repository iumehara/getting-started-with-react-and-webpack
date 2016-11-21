import expect from 'expect'
import { shallow } from 'enzyme'
import React from 'react'
import Todo from '../src/js/Todo'

describe('Todo', () => {
  let data = {
    task: 'Take out the garbage',
    assignDate: '11/20/16',
    dueDate: '11/21/16'
  }

  it('displays header', () => {
    let component = shallow(<Todo data={data} />)
    expect(component.contains(<h2>Take out the garbage</h2>)).toBe(true)
  })

  it('displays assign date', () => {
    let component = shallow(<Todo data={data} />)
    expect(component.contains(<div><span>Assigned: </span>11/20/16</div>)).toBe(true)
  })

  it('displays due date', () => {
    let component = shallow(<Todo data={data} />)
    expect(component.contains(<div><span>DueDate: </span>11/21/16</div>)).toBe(true)
  })
})
