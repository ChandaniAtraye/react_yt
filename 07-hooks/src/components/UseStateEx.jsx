import React, { useState } from 'react'

const UseStateEx = () => {

    const [num, setNum] = useState({user:'CA',age:24})
    const [arr, setarr] = useState([10,20,30])
    const [list, setlist] = useState({name:'Sarthak',age:24,city:'pune'})

    // mtd 1 - to update value
    const btnClicked = () =>{
        const newNum = {...num,country:'India'};  // if want to add new property
        newNum.user = 'CDA'
        setNum(newNum)
    }

    // to add value in array 
    const btnClicked2 =()=>{
        const newArr = [...arr];
        newArr.push(40);
        setarr(newArr);

        //here newArr becomes [10,20,30,40]
       setarr(newArr.map((val)=>  // if want to update value in array
        val ===20 ? 50 :val
    ))
        
    }

    // mtd 2 to update value - short cut 
    const btnClicked3 = ()=>{
        setlist(prev=>({...prev,age:29}))
    }
  return (
    <div>
        <h1>UseStateEx</h1>
        <h2>{num.user},{num.age}</h2>
        <button onClick={btnClicked}>Click me</button>
        <h2>{arr}</h2>
        <button onClick={btnClicked2}>Click me</button>
        <h2>{list.name},{list.age},{list.city}</h2>
        <button onClick={btnClicked3}>Click me 3</button>
    </div>
  )
}

export default UseStateEx