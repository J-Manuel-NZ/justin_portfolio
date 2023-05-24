import React from 'react'
import './componentStyles.css'


const Menu_Cards = () => {
  const menuCards = [{timing: '1', title: 'port\nfolio.', image: "../../public/bg_portfolio.png", alt: 'code on a screen', link: '/portfolio'}, 
                     {timing: '2', title: 'bio.', image: '../../public/bg_bio.png', alt: 'Feet hanging over river', link: '/about'},
                     {timing: '3', title: 'inter\nests.', image: '../../public/bg_interests.png', alt: 'Justin playing guitar on stage', link: '/interests'}]
  return (
      <section className='menu_section'>
        {menuCards.map((card) => (
          <a className={'menu_card fade-in-bottom-delayed-' + card.timing} href={card.link}>
            <img className='menu_card-image' src={card.image} alt={card.alt} />
            <h2 className='menu_card-title'>{card.title}</h2>
          </a>
        )
        )} 
      </section>
  )
}

export default Menu_Cards