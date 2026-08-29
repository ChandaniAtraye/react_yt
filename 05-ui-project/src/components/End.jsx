import React from 'react'
import { Star } from 'lucide-react'

const End = () => {
    return (
        // <div className='relative py-2 px-5 mt-5'>
        //     <img className='w-90 h-50 rounded-2xl' src='https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2UlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'></img>

        //     <div className="absolute inset-0 px-4 py-4 m-3 text-white flex flex-col justify-between">
        //         <h1 className='bg-white text-black px-3 rounded-full w-fit'>Vancouver,Canada</h1>
        //         <div>
        //             <button className=' text-white px-2 mb-2 border-2 rounded-full text-s'>Popular</button>
        //             <div className='flex gap-1'>
        //                 <Star className='fill-yellow-400 text-yellow-400'/> <Star /><Star /><Star /><Star />
        //             </div>
        //         </div>

        //     </div>


        // </div>
        <div className="relative overflow-hidden h-1/4 w-80 ml-4 rounded-3xl">
            <img className='h-full w-full  object-fit' src='https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2UlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'/>
            <div className="absolute top-0 left-0 h-full w-full p-3 flex flex-col justify-between" alt='photo'>
                <h1 className='bg-white w-fit rounded-full flex justify-center items-center px-2 text-1xl'>Vancouver,Canada</h1>
                <div className='flex flex-col justify-center items-start'>
                    <button className='text-white border rounded-full px-2 font-medium mb-1'>Popular</button>
                    <div>
                        <button className='flex gap-1'>
                            <Star className='fill-yellow-400 text-yellow-400'/>
                            <Star className='fill-yellow-400 text-yellow-400'/>
                            <Star className='fill-yellow-400 text-yellow-400'/><Star/><Star/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default End