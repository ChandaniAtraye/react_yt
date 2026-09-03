import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

    const [list, setList] = useState([])

  // API CALLING USING FETCH METHOD

  //  const btnClicked = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //   const data1 = await response.json()

  //   console.log(data1);
  // }


  //API CALLING USING AXIOS
  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list')
    setList(response.data)
  }

  return (
    <div>
      {/* <button onClick={btnClicked}>Click here</button> */}
      <button onClick={getData}>Click here</button>
      <div>
       {list.map(function(elem,idx){
        return <h1 key={idx}>{elem.author} {idx}</h1>
       })}
      </div>

    </div>
  )
}

export default App