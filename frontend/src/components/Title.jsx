import React from 'react'
import './componentStyles.css'

const Title = () => {
  return (
    <div>
      <div>
        <h2 className='homepage_subtitle'>Hi! My name is</h2>
        <h1 className='homepage_title'>Justin,</h1>
        <h2 className='homepage_subtitle'>and I'm a</h2>
        {/* Replace with TypeWriter */}
        <h2 className='homepage_title'>Front-end Developer.</h2>
      </div>
      <div className='homepage_contact'>

      </div>
    </div>
  )
}

export default Title