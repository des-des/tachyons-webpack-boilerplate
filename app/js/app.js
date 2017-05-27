import React from 'react'
import ReactDOM from 'react-dom'

import '../css/style.css'

const e = React.createElement

const Hello = function() {
  return e(
    'div',
    {className: 'des-m'},
    'hello, world'
  )
}

ReactDOM.render(
  e(Hello),
  document.getElementById('root')
)
