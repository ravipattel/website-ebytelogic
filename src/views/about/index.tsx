import React from 'react'

import AboutHero from './AboutHero'
import Empower from './Empower'
import ChooseUs from './ChooseUs'
import Testimonials from './Testimonials'
import Subscribe from './Subscribe'

const About = () => {
  return (
    <div className='overflow-x-hidden'>
      <AboutHero />
      <Empower />
      <ChooseUs />
      <Testimonials />
      <Subscribe />
    </div>
  )
}

export default About
