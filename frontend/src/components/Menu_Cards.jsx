import React from 'react'
import './componentStyles.css'
import backgroundImage from '../../public/hero-image.jpg'

const Menu_Cards = () => {
  return (
      <section className='menu_section'>
          <div className='menu_card'>
            <img className='menu_card-image' src={backgroundImage} alt='' />
            <h2 className='menu_card-title'></h2>
          </div>
      </section>
  )
}

export default Menu_Cards