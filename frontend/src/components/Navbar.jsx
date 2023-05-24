import React from 'react'
import WorkWithMeButton from './WorkWithMeButton'

const Navbar = ({title}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
        </div>

        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/interests">Interests</a></li>
            <WorkWithMeButton />
        </ul>
    </div>
  )
}

export default Navbar