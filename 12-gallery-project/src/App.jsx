import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [apidata, setApidata] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list');
    setApidata(response.data);
  }
  return (
    <div className='h-screen w-full bg-black text-white'>
      <button onClick={function(){
        setApidata()
      }} className='p-4 bg-amber-400 rounded m-2 text-2xl'>Click here</button>
    </div>
  )
}

export default App