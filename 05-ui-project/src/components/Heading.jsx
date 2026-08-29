import React from 'react'

const Heading = () => {
  return (
    <div className='flex px-3 py-4 justify-between items-center'>
        <div className=''>
            <h1 className='text-3xl font-medium leading-9  font-["Courier_New"] '>Reserve Your <br/> Ideal Holiday</h1>
        </div>
        <div className='flex justify-center items-center'>
            <img className='w-10 h-10 mt-7 rounded-full object-cover' src='https://plus.unsplash.com/premium_photo-1661270434439-2cabce958cd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW5qb3klMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D'></img>
            <img className='w-15 h-15 m-0 rounded-full object-cover' src='https://images.unsplash.com/photo-1553009338-80e505b3f61b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZW5qb3klMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D'></img>
            <img className='w-18 h-18 mt-7 rounded-full object-cover' src='https://plus.unsplash.com/premium_photo-1658506828525-cf6535a4ee0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGVuam95JTIwcGVvcGxlfGVufDB8fDB8fHww'></img>
        </div> <br/>
    </div>
    
  )
}

export default Heading