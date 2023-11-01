import React from 'react'
import {Link} from 'react-router-dom'

export default function Head() {
  return (
    <div>
    <h1>Single page App</h1>
    <ul>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/page2">page2</Link>
    </ul>

</div>
  )
}
