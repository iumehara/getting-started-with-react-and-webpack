import React from 'react'
import { render } from 'react-dom'
import Greeting from './Greeting'

render(
    <Greeting name={"Bob"}/>,
    document.getElementById('health-app')
)
