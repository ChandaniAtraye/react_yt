import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
        <div className="w-10 h-10">
            <img src='https://s.yimg.com/fz/api/res/1.2/MRaT1uKZwDUKmk5tqylyQA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/b8/36/1a/b8361a71d40b3741bf1c97188af525d7.jpg'></img>
        </div>
        <div className="font-bold flex gap-5 mr-7">
            <a href=''>Home</a>
            <a href=''>Villas</a>
            <a href=''>Manor</a>
        </div>
    </div>
  )
}

export default Navbar