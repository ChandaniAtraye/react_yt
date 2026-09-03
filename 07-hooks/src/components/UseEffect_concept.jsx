import React, { useEffect, useState } from 'react'

const UseEffect_concept = () => {

    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(10)

    useEffect(function(){
        console.log('hello, use effect is running');
    },[num,num2])
  return (
    <div>
        <h1>UseEffect, n1-{num},n2-{num2} </h1>
        <button onClick={function(){
            setNum(num+10);
        }}>Click here 1</button>

        <button onClick={function(){
            setNum2(num2+10)
        }}>Click here 2</button>
    </div>
  )
}

export default UseEffect_concept