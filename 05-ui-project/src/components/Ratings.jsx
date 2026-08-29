import React from 'react'

const Ratings = () => {
  return (
    <div className='flex justify-around mt-6 mb-4'>
        <div className='flex flex-col justify-center border-r-2 pr-2'>
            <h1 className='font-bold text-2xl'>115k+</h1>
            <p className='text-xs'>Capital Raised</p>
        </div>
        <div className='flex flex-col justify-center border-r-2 pr-2'>
            <h1 className='font-bold text-2xl'>70k+</h1>
            <p className='text-xs'>Happy Customer</p>
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-2xl'>47k+</h1>
            <p className='text-xs'>Property Options</p>
        </div>
    </div>
  )
}

export default Ratings