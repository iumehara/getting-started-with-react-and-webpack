# HEALTH APP
## 04 TESTING REACT COMPONENTS

This branch starts off at the end of the `03_MULTIPLE_REACT_COMPONENTS` branch.

Let's write some tests. Yeah, yeah, test-first is a better way to go. It's just sometimes, it helps to write some code first to figure out how everything works together ;)

### Installing Dependencies
Let's install our dependencies.

`npm install --save-dev react-addons-test-utils mocha enzyme expect`

What did we just add?

- `react-addons-test-utils` is the built in test library for react.
- `mocha` is a popular testing framework for js.
- `enzyme` is a testing utility that allows you to "shallow" render components so that you can test how components are rendered.
- `expect` is an assertion library that allows you to use more human-readable test assertions.

Yeah, still a little confusing. The main thing to remember is that if you need to do any googling for how to write your tests, your best bet is to look up info on either `enzyme` or `react test utilities`.

### Testing Config
Next, we need to do some config.

Add an test script to `package.json`

```
{
  // same as before
  "scripts": {
    "test": "./node_modules/.bin/mocha --compilers js:babel-core/register",
    "start": "./node_modules/.bin/webpack-dev-server --content-base dist/ --port 8000"
  },
  // same as before
}
```

What's with the babel-core stuff? Turns out the test files aren't getting compiled correctly using babel, so we need to specify that it should use babel.
Additionally, we need to add a new `.babelrc` file to specify the presets we want to use.

`.babelrc`
```
{ "presets": ["react", "babel-preset-es2015"] }
```


### Writing the tests
Finally, we're ready to write tests. (Yeah, the setup was painful, I know...)

First, let's test the `Todo` component.

`TodoTest.js`
```
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

```

This should be pretty straightforward.
Now let's try the same for the list component.

`TodoListPageTest.js`

```
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

```

The second test here is not great, because we are using hard-coded sampleData values copied from the implementation.
However, we shouldn't be hard-coding value into component state anyway. In the next section, we'll make a request to fetch data, and render it.
