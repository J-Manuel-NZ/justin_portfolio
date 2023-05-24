import React from 'react'
import './componentStyles.css'
import WorkWithMeButton from './WorkWithMeButton'
import {Typewriter} from 'react-simple-typewriter'

const Title = () => {
  
  const handleType = (count) => {
    // access word count number
    console.log(count)
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <div className='homepage_hero fade-in-bottom'>
      <div>
        <h2 className='homepage_subtitle'>Hi! My name is</h2>
        <h1 className='homepage_title'>Justin,</h1>
        <h2 className='homepage_subtitle'>and I'm a</h2>
        {/* Replace with TypeWriter */}
        <div className='homepage_typewriter'>
          <Typewriter
            words={['Front-End Developer.', 'Musician.', 'Surfer.', 'Creative.',
             'Front-End Developer.', 'Carpenter.', 'Photographer.', 'Foodie.',
            'Front-End Developer.', 'Writer of Lists.', '...', 'Coffee Lover.', 'Front-End Developer.']}
            loop={5}
            typeSpeed={40}
            deleteSpeed={40}
            delaySpeed={1500}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </div>
      </div>
      <div className='homepage_contact fade-in-bottom-3'>
        <WorkWithMeButton />
      </div>
    </div>
  )
  }

export default Title