import React from 'react'
import Navbar from './Navbar'
import Heading from './Heading'
import MiddleSection from './MiddleSection'
import Ratings from './Ratings'
import End from './End'

const LeftSection = () => {
  return (
    <div className= 'w-180 h-full p-5 flex flex-col justify-center'>
        <Navbar/>
        <Heading/>
        <MiddleSection/>
        <Ratings/>
        <End/>
    </div>
  )
}

export default LeftSection