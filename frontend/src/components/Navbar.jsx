import React from 'react'
import WorkWithMeButton from './WorkWithMeButton'
import './componentStyles.css'
import { useState } from 'react'
import CloseIcon from '../../public/close.svg'
import MenuIcon from '../../public/menu.svg'

const Navbar = ({title}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className='navbar-title'>
            <a href='/'><h1>{title}</h1></a>
        </div>

        <ul className='navbar-links hidden'>
            <li className='inactive-page'><a href="/">home</a></li>
            <li className='inactive-page'><a href="/portfolio">portfolio</a></li>
            <li className='active-page'><a href="/bio">bio</a></li>
            <li className='inactive-page'><a href="/interests">interests</a></li>
            <WorkWithMeButton />
        </ul>

        <div>
        {isMenuOpen 
        ? <img className="cursor-pointer my-9 absolute z-20 right-6" src={CloseIcon} alt='Close Icon' onClick={() => setIsMenuOpen(false)} /> 
        : <img className="cursor-pointer my-9 mx-6" src={MenuIcon} alt='Menu Icon' onClick={() => setIsMenuOpen(true)}/>}
        {isMenuOpen && (
          <ul className='navbar-menu'>
            <li className='inactive-page'><a href="/">home</a></li>
            <li className='inactive-page'><a href="/portfolio">portfolio</a></li>
            <li className='active-page'><a href="/bio">bio</a></li>
            <li className='inactive-page'><a href="/interests">interests</a></li>
            <WorkWithMeButton />
          </ul>
        )}
        </div>
        


    </div>
  )
}

export default Navbar