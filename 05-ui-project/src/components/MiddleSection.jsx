import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const MiddleSection = () => {
  return (
    <div className='flex g-3 p-4 font-medium text-xs justify-center items-center'>
        <div className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim nihil vero corporis natus excepturi in minus vitae inventore harum.
        </div>
        <div className=''>
            <button className='flex bg-black text-white px-6 py-1 rounded-full items-center'>More <span><ArrowUpRight /></span></button>
        </div>
    </div>
  )
}

export default MiddleSection