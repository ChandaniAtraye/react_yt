import React from 'react'
import Navbar from './Navbar'
import Heading from './Heading'
import MiddleSection from './MiddleSection'

const LeftSection = () => {
  return (
    <div className= ' bg-amber-50 w-170 h-full p-3 '>
        <Navbar/>
        <Heading/>
        <MiddleSection/>
    </div>
  )
}

export default LeftSection