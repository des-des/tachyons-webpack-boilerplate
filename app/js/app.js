import React from 'react'
import ReactDOM from 'react-dom'

const e = React.createElement

const Hello = () => e(
  'div',
  {},
  'hello, world'
)

ReactDOM.render(
  e(Hello),
  document.getElementById('root')
)
