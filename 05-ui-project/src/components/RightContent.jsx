import React from 'react'
import { User } from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'

const RightContent = () => {
    return (
        <div className='relative h-full w-full'>
            <img className='h-full w-full object-fit p-3 rounded-r-4xl' src='https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvbWV8ZW58MHx8MHx8fDA%3D' />
            <div className='absolute top-6 right-0  px-5 flex'>
                <button className='bg-white text-black rounded-full px-6 text-[13px] font-medium'>Contact Us</button>
                <button className='bg-white text-black rounded-full w-8 h-7 px-2  flex items-center justify-center '><User /></button>
            </div>
            <div className='absolute top-16 ml-12 flex justify-between bg-white w-45 h-20 rounded-2xl px-1 py-1'>
                <div className=' flex flex-col justify-between'>
                    <h1 className='font-medium text-[11px] px-1 py-1'>Melbourne VIC,<br />Australia</h1>
                    <button className='bg-black text-white rounded-full w-6 h-6 px-1 py-1 flex justify-center items-center '><ArrowUpRight /></button>
                </div>
                <div className='w-20'>
                    <img className='rounded-2xl h-full' src='https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2UlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D' />
                </div>
            </div>
            <div className='absolute bottom-7 p-7 m-5 flex flex-col justify-center items-center '>
                <div className='border-l-3 text-white mb-4'>
                    <p className='text-white leading-snug px-2 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere vero molestias sequi ipsa eligendi laudantium accusantium quisquam minus consequatur eaque.</p>
                </div>
                <div className='flex justify-center items-center gap-4'>
                    <div className='flex'>
                        <select className='bg-white text-black rounded-full px-5 py-2 text-center'>
                            <option >Select Type</option>
                            <option>Villa</option>
                            <option>Beach House</option>
                            <option>Mountain House</option>
                            <option>Cottage</option>
                        </select>
                        <select className='bg-white text-black rounded-full px-5 py-2 text-center'>
                            <option>Location</option>
                            <option>Pune</option>
                            <option>Mumbai</option>
                            <option>Bangalore</option>
                            <option>Goa</option>
                            <option>Manali</option>
                        </select>
                    </div>
                    <div>
                      <button className='px-6 py-2 border-2 border-white text-white rounded-full'>search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightContent