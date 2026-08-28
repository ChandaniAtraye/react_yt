import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Section = () => {
  return (
    <div className=' h-150 w-250  bg-amber-900 flex gap-5 rounded-4xl'>
        <LeftSection/>
        <RightSection/>
    </div>
  )
}

export default Section