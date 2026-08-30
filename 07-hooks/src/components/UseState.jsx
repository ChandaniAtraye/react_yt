import React from 'react'
import { useState } from 'react'


// useState - use to change the state
const UseState = () => {
    const [num, setNum] = useState(0)

    function increaseNum(){
    setNum(num+1);
  }
   function decreaseNum(){
    setNum(num-1); 
  }
  function jump(){
    setNum(num+5)
  }

  return (
    <div className='counterex'>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump}>inc by 5</button>
    </div>
  )
}

export default UseState