import React from 'react'
import RightArrow from '../../public/right_arrow.svg'
import './componentStyles.css'

const WorkWithMeButton = () => {
  return (
    <a><div className='contact_btn'>
        <button>Let's work together!</button>
        <img src={RightArrow} />
    </div></a>
  )
}

export default WorkWithMeButton